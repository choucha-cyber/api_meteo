import { Component, OnInit } from '@angular/core';
import { Map } from 'mapbox-gl';
import { CustomFeatureCollection, CustomGeoJson } from '../models/map';

import { FeatureCollection } from 'geojson';
import { TemperatureService } from '../temperatures/services/temperature.service';
import { Temperature } from '../models/Temperature';
import { Router } from '@angular/router';
import { City, ICity } from '../models/City';
import { IMarker } from '../models/Markers';
import { environment } from 'src/environments/environment';
import { Pagination } from '../utils/constant';
import { CityService } from '../cities/services/city.service';
@Component({
  selector: 'app-card-interactive',
  templateUrl: './card-interactive.component.html',
  styleUrls: ['./card-interactive.component.css']
})
export class CardInteractiveComponent implements OnInit {
  cities: ICity[] = [];
  isLoading = false;
  map!: Map; // la carte
  style: string = 'mapbox://styles/mapbox/light-v11'; // style de la carte
  lat: number = 46.2276; // latitude à l'initialisation
  lng: number = 2.2137; // longitude à l'initialisation


  iconId: string = '10d'; // icône représentant la météo
  sourceId: string = 'weather'; // nom par défaut de la source de données
  layerId: string = 'weather-layer'; // nom par défaut du layer

  source: any; // source pour créer un marqueur (image)
  markers: CustomGeoJson[] = []; // liste des marqueurs



  // état initial du bouton
  toggleButtonState: string = 'weather';


  constructor(private cityService: CityService, private temparetureService: TemperatureService, private router: Router) { }

  ngOnInit() {

    // zoom sur la localisation de l'utilisateur
    this.initializeMap();






  }



  private initializeMap(): void {
    // Demande de localisation de l'utilisateur
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        // La fonction flyTo permet de se rendre à une destination
        // avec un effet de dézoom suivi d'un zoom
        this.map.flyTo({
          center: [this.lng, this.lat],
        });
      });
    }
    // création de la carte
    this.buildMap();
  }


  buildMap() {
    // instance d'une carte
    this.map = new Map({
      // stocké dans le fichier environments/environment.development.ts
      accessToken: environment.accessToken,
      container: 'map', // référence à la div dans le document HTML
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat],
    });

    // attente du chargement de la carte avant
    // d'effectuer quoi que ce soit
    this.map.on('load', () => {
      this.createSource();
      this.createLayer();
      // pour chaque clic sur la carte
      this.map.on('click', (event) => {
        // récupération des coordonées du clic
        const coordinates: [number, number] = [
          event.lngLat.lng,
          event.lngLat.lat,
        ];
        // création d'un nouveau marqueur

        this.getTemparature(coordinates);

        // ajout du marqueur en base de données

      });

      // on recupere les marqueurs enregistrés dans la BD et on affiche sur la map

      this.temparetureService.queryMarker().subscribe({
        next: (res: IMarker[]) => {
         /* res.map(e => {
            this.markers.push(new CustomGeoJson([e.longitude!, e.latitude!], {
              message: e.message,
              image: e.img,
              id: e.id
            }))
  
          }) */
          
          this.setMarkersApi(this.markers);

        }


      })
    });
  }


  createLayer() {
    // ajout d'une couche permettant d'afficher le marqueur (l'image) sur la carte
    console.log('Creating layer', this.layerId);
    this.map.addLayer({
      id: this.layerId,
      type: 'symbol',
      source: this.sourceId, // référence à la source de données
      layout: {
        'icon-image': '{image}',
        'text-field': '{message}',
        'text-size': 12,
        'text-offset': [0, 2.5],
        'icon-offset': [-1, -2.5],
      },
      paint: {
        'text-color': '#f16624',
        'text-halo-color': '#fff',
        'text-halo-width': 2,
      },
    });
  }

  createSource() {
    // création des données nécessaires au placement de l'image
    const feature = new CustomFeatureCollection([]);

    // création d'une source permettant par la suite le placement de l'image
    this.map.addSource(this.sourceId, {
      type: 'geojson',
      data: feature as FeatureCollection,
    });

    this.source = this.map.getSource(this.sourceId);

  }


  // recuperer la temperature apres le click sur la map

  getTemparature(coordinates: any): void {
    this.temparetureService.getweatherByGPS(coordinates[0], coordinates[1]).subscribe({
      next: (res: any) => {
        console.log(res);
        this.iconId = res.weather[0].icon;
        this.loadImage();
        this.saveTemperature(res);
        this.markers.push(new CustomGeoJson(coordinates, {message : res.name, image:res.weather[0].icon}));
        

      },
      error: () => {
        console.error("Error !!!");

      }
    })
  };

  // ajouter la temperature de la bd apres le click sur la map
  saveTemperature(res: any): void {

    let t = new Temperature();
    let ville = new City();
    ville.cityName = String(res.name)
    ville.country = String(this.getCountry(res.sys.country))
    ville.latitude = Number(res.coord.lat)
    ville.longitude = Number(res.coord.lon)
    ville.cityAscii = String(res.name)
    ville.iso2 = String(res.sys.country)
    t.city = ville;
    t.value = Number(res.main.temp);

    this.temparetureService.save(t).subscribe({
      next: () => {
        console.log("temperature save");
        this.temparetureService.save(t).subscribe({
          next: () => {
            this.addMarker({
              latitude: Number(res.coord.lat),
              longitude: Number(res.coord.lon),
              img: res.weather[0].icon,
              message: res.weather[0].main + ' ' + `(${res.weather[0].description})`,
              name: ville.cityName,
            
            })
           console.log("ville que je veux " + ville.cityName);
          /*<button class="btn btn-sm btn-dark" (click)="flyTo(marker)">voir</button> */
          
         /* let voir: any = document.querySelector('#listings > button.btn.btn-sm.btn-dark') as HTMLInputElement;
          if (voir !== null) {
            voir.innerText = ville.cityName; 
        } */
          
          
          },
          /*error: (error: any) => {
            console.log(error);

          }*/
        });
      },
      error: (error: any) => {
        console.log(error);

      }
    });
  }


  // set les marqueurs venant de la BS
  setMarkersApi(markers: CustomGeoJson[]): void {

    const features = new CustomFeatureCollection(markers);
    this.source.setData(features);
    this.markers.map(m => {

      this.loadImageApi(m.id, m.properties.image);
    })

  }

  // Ajout les images venant de la BD
  loadImageApi(_id: number, icon: string) {
    //   let url = `assets/weather-icons/${res.weather[0].icon}.png`;
    //let url = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    let url = `https:weather-icons.cleverapps.io/weather/icons/${this.iconId}.png`;

    // Vérification si l'image est déjà chargée ou non
    if (this.map.hasImage(icon)) return;


    // téléchargement de l'image
    this.map.loadImage(

      url,
      (error, image) => {
        if (error) throw error;

        this.map.addImage(icon, image!);
      }
    );


  }


  setMarkers(): void {
    // Mise à jour des données
    const features = new CustomFeatureCollection(this.markers);
    this.source.setData(features);


  }

  loadImage() {
    //   let url = `assets/weather-icons/${res.weather[0].icon}.png`;
    let url = `http://openweathermap.org/img/wn/${this.iconId}@2x.png`;

    // Vérification si l'image est déjà chargée ou non
    if (this.map.hasImage(this.iconId)) return;


    // téléchargement de l'image
    this.map.loadImage(

      url,
      (error, image) => {
        if (error) throw error;

        this.map.addImage(this.iconId, image!);
      }
    );


  }

  // requerer le pays
  getCountry(iso: string): string {
    if (iso) {
      const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
      return regionNamesInEnglish.of(iso) as string;
    }
    return '';

  }


  // ajouter un marker dans la bd
  addMarker(marker: IMarker): void {
    this.temparetureService.saveMarker(marker).subscribe({
      next: (res: IMarker) => {

        const newMarker = new CustomGeoJson([res.longitude!, res.latitude!], {
          message: res.message,
          image: res.img,
          id: res.id,
          name: res.name
        });
        //this.markers.push(newMarker);
        // Ajout du marqueur sur la carte
        this.setMarkers();
        this.loadImageApi(res.id!, res.img!)
      }
    })
  }


  // déplacement vers un marqueur
  /* /* <button class="btn btn-sm btn-dark" (click)="flyTo(marker)">voir</button>  */ 
  flyTo(data: CustomGeoJson) {
    this.map.flyTo({
      center: data.geometry.coordinates,
    });
  }


  // supprimer le marqueur
  deleteMarker(marker: CustomGeoJson): void {
    console.log(marker);

    this.temparetureService.deleteMarker(marker.properties.id).subscribe({
      next: () => {
        this.markers = this.markers.filter(m => m.properties.id !== marker.properties.id);
        this.setMarkersApi(this.markers);
      },
      error: () => {
        console.log("Error");

      }
    })
  }


  onChangeCity(ev: any): void {
    this.queryCities(ev);

  }


  /**
 * pour recuperer la liste des ville 
 * @param name 
 */
  queryCities(name: string): void {
    let req: Pagination = {
      size: 20,
      cityName: name,
      page: 0
    }
    this.isLoading = true;
    this.cityService.queryByName(req).subscribe({
      next: (data: any) => {
        this.isLoading = false;
        this.cities = data.content as ICity[];
        console.log(this.cities);

      },
      error: () => {
        this.isLoading = false;
      }
    })
  }


  // permet de recuperer la ville selectionner et afficher sur la map
  onSelected(ville:ICity):void{
    this.map.flyTo({
      center: [ville.longitude!, ville.latitude!],
    });
  }
}
