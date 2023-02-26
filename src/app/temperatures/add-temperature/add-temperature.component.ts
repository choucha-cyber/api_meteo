import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CityService } from 'src/app/cities/services/city.service';
import { City, ICity } from 'src/app/models/City';
import { IMarker } from 'src/app/models/Markers';
import { Temperature } from 'src/app/models/Temperature';
import { Pagination } from 'src/app/utils/constant';
import { TemperatureService } from '../services/temperature.service';

@Component({
  selector: 'app-add-temperature',
  templateUrl: './add-temperature.component.html',
  styleUrls: ['./add-temperature.component.css']
})
/**
 * Page pour ajouter une temperature
 */
export class AddTemperatureComponent implements OnInit {
  type = "ville";
  cities: ICity[] = [];
  isLoading = false;
  /**
   * formulaire pour recuperer la temperation par GPS
   */
  editFormGps = this.fb.group({
    lat: ['', [Validators.required]],
    lng: ['', [Validators.required]],

  });
  /**
   * formulaire pour recuperer la temperation manuellement
   */
  editFormManuel = this.fb.group({
    lat: ['', [Validators.required]],
    lng: ['', [Validators.required]],
    value: ['', [Validators.required]],


  });

  /**
   * formulaire pour recuperer la temperation par ville
   */
  editFormVille = this.fb.group({
    city: ['', [Validators.required]],
  })
  option = "ville";


  constructor(private router: Router, private fb: FormBuilder, private temperatureService: TemperatureService, private cityService: CityService) { }

  ngOnInit(): void {
    //   this.queryCities();


  }

  getValue(e: any): void {
    this.option = e.target.value;
    if (this.option === "gps") {
      this.getCoordonnee();
    }
  }







  getCoordonnee(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude);
        this.editFormGps.get("lng")?.setValue(String(position.coords.longitude));
        this.editFormGps.get("lat")?.setValue(String(position.coords.latitude));

      });
    }


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





  /**
   * recuperer un pays bar iso 
   * @param iso 
   * @returns 
   */
  getCountry(iso: string): string {
    if (iso) {
      const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
      return regionNamesInEnglish.of(iso) as string;
    }
    return '';

  }


  /**
   * autocomplete city
   * @param ev 
   */

  onChangeCity(ev: any): void {
    this.queryCities(ev);

  }
  /**
   * Save temperature
   */
  save(): void {
    let t = new Temperature();
    let ville = new City();

    if (this.option === "manuel") {
      const { value, lng, lat } = this.editFormManuel.getRawValue();

      this.temperatureService.getweatherByGPS(Number(lng), Number(lat)).subscribe(
        {
          next: (res: any) => {
            ville.cityName = String(res.name)
            ville.country = String(this.getCountry(res.sys.country))
            ville.latitude = Number(lat)
            ville.longitude = Number(lng)
            ville.cityAscii = String(res.name)
            ville.iso2 = String(res.sys.country)
            t.city = ville;
            t.value = Number(value);



            this.temperatureService.save(t).subscribe({
              next: () => {
                this.temperatureService.save(t).subscribe({
                  next: () => {
                    this.addMarker({ latitude: Number(lat), longitude: Number(lng), img: res.weather[0].icon, message: res.weather[0].main + ' ' + `(${res.weather[0].description})` })
                  },
                  error: (error: any) => {
                    console.log(error);

                  }
                });
              },
              error: (error: any) => {
                console.log(error);

              }
            });
          }
        }
      )




    }

    if (this.option === "gps") {
      const { lng, lat } = this.editFormGps.getRawValue();

      this.temperatureService.getweatherByGPS(Number(lng), Number(lat)).subscribe(
        {
          next: (res: any) => {
            ville.cityName = String(res.name)
            ville.country = String(this.getCountry(res.sys.country))
            ville.latitude = Number(lat)
            ville.longitude = Number(lng)
            ville.cityAscii = String(res.sys.country)
            t.city = ville;
            t.value = Number(res.main.temp);

            this.temperatureService.save(t).subscribe({
              next: () => {

                this.temperatureService.save(t).subscribe({
                  next: () => {
                    this.addMarker({ latitude: Number(lat), longitude: Number(lng), img: res.weather[0].icon, message: res.weather[0].main + ' ' + `(${res.weather[0].description})` })
                  },
                  error: (error: any) => {
                    console.log(error);

                  }
                });
              },
              error: (error: any) => {
                console.log(error);

              }
            });

          }
        }
      )

    }

    if (this.option === "ville") {
      this.temperatureService.getweatherByCity(String((this.editFormVille.value.city as ICity)?.cityName)).subscribe(
        {
          next: (res: any) => {
            t.city = (this.editFormVille.value.city as ICity);
            t.value = Number(res.main.temp);
            console.log(res);

            this.temperatureService.save(t).subscribe({
              next: () => {
                this.addMarker({ latitude: Number(t.city?.latitude), longitude: t.city?.longitude, img: res.weather[0].icon, message: res.weather[0].main + ' ' + `(${res.weather[0].description})` })
              },
              error: (error: any) => {
                console.log(error);

              }
            });
          }
        }
      )

    }


  }


  addMarker(marker: IMarker): void {
    this.temperatureService.saveMarker(marker).subscribe({
      next: () => {
        this.router.navigate(['/temperatures']);
      }
    })
  }



}
