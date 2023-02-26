import { Component, OnInit } from '@angular/core';
import { Map } from 'mapbox-gl';
import { CustomFeatureCollection, CustomGeoJson } from '../models/map';
import { colors, initMap, LATITUDE, layer, LONGITUDE, style } from '../utils/constant';
import { FeatureCollection } from 'geojson';
import { TemperatureService } from '../temperatures/services/temperature.service';
import { Temperature } from '../models/Temperature';
import { Router } from '@angular/router';
import { City } from '../models/City';
import { IMarker } from '../models/Markers';
@Component({
  selector: 'app-card-interactive',
  templateUrl: './card-interactive.component.html',
  styleUrls: ['./card-interactive.component.css']
})
export class CardInteractiveComponent implements OnInit {
  map!: Map; // la carte
  style=style;
  message: string = 'Bonjour'; // message à afficher sous le marqueur

  iconId: string = '10d'; // icône représentant la météo
  sourceId: string = 'weather'; // nom par défaut de la source de données
  layerId: string = 'weather-layer'; // nom par défaut du layer

  source: any; // source pour créer un marqueur (image)
  markers: CustomGeoJson[] = []; // liste des marqueurs


 
  // état initial du bouton
  toggleButtonState: string = 'weather';
  // couleurs de marqueur disponibles
  colors=colors
  lat=LATITUDE;
  lng=LONGITUDE;


  constructor(private temparetureService:TemperatureService,private router:Router) {}

  ngOnInit() {

    // zoom sur la localisation de l'utilisateur
    this.initializeMap();
  ;
  
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
    initMap.center=[this.lng, this.lat];
    // instance d'une carte
    this.map = new Map(initMap);

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
        this.getTemparature(coordinates);
    
      });
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

  getTemparature(coordinates:any):void{
    this.temparetureService.getweatherByGPS(coordinates[0],coordinates[1]).subscribe({
      next:(res:any)=>{
        const newMarker = new CustomGeoJson(coordinates, {
          message:res.weather[0].main ,
          image: res.weather[0].icon,
        });
        this.saveTemperature(res);
        this.markers.push(newMarker)
        this.setMarkers();
        this.loadImage(res); 

      
      },
      error:()=>{
        console.error("Error !!!");
        
      }
    })
  };

  // ajouter la temperature de la bd apres le click sur la map
  saveTemperature(res:any):void{

    let t=new Temperature();
    let ville=new City();
    ville.cityName=String(res.name)
    ville.country=String(this.getCountry(res.sys.country))
    ville.latitude=Number(res.coord.lat)
    ville.longitude=Number(res.coord.lon)
    ville.cityAscii=String(res.name)
    ville.iso2=String(res.sys.country)
    t.city=ville;
      t.value=Number(res.main.temp) ;

      this.temparetureService.save(t).subscribe({
        next:()=>{
          console.log("temperature save");
          this.temparetureService.save(t).subscribe({
            next:()=>{
            this.addMarker({latitute:Number(res.coord.lat),longitude:Number(res.coord.lon),img:res.weather[0].icon})
            },
            error:(error:any)=>{
              console.log(error);
              
            }
          });
        },
        error:(error:any)=>{
          console.log(error);
          
        }
      });
  }


  setMarkers(): void {
    // Mise à jour des données
    const features = new CustomFeatureCollection(this.markers);
    this.source.setData(features);
  }

 
  loadImage(res:any) {
    this.map.on('styleimagemissing', (e) => {
      console.log(e);
      let url = `assets/weather-icons/${res.weather[0].icon}.png`;
    //let url=`http://openweathermap.org/img/wn/${icon}@2x.png`;
   
       // Vérification si l'image est déjà chargée ou non
       if (this.map.hasImage(res.coord.lon+res.coord.lat)) return;
   
       
       // téléchargement de l'image
       this.map.loadImage(
     
         url,
         (error, image) => {
           if (error) throw error;
        
           this.map.addImage(res.coord.lon+res.coord.lat, image!);
         }
       );
      });
       
 

  }

  // requerer le pays
  getCountry(iso:string):string{
    if(iso){
      const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
      return regionNamesInEnglish.of(iso) as string;
    }
    return '';
  
  }

  
// ajouter un marker dans la bd
  addMarker(marker:IMarker):void{
    this.temparetureService.saveMarker(marker).subscribe({
      next:(res:any)=>{
      
      }
    })
  }


}
