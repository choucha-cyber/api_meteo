import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { City } from '../city';
import { CityService } from '../city.service';
import { Coord } from '../coord';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent {
  city!: City;
  longit!: number;
  latit!: number;
  isoPays!: string;
  nomVille!: string;

  cityForm = new FormGroup({
    newCity: new FormControl(),
    country: new FormControl(),
  });

  cities: City[] = [];
  //public city: City;
  public coord!: Coord;

  constructor(
    private cityService: CityService,
    private weatherService: WeatherService,
    private route: ActivatedRoute,
    private router: Router
  ) {} //this.city = new City();

  ngOnInit(): void {
    //this.getCities();
    this.cityService
      .getCities()
      .subscribe((cities) => (this.cities = cities.slice(0, 5)));
  }

  getCities(): void {
    this.cityService.getCities().subscribe({
      next: (citiesFromObservable) => {
        this.cities = citiesFromObservable.slice(0, 15);
        console.log('Retrieved cities data :', citiesFromObservable);
      },
      error: (error) => console.error(error),
      complete: () => console.log('Completed!'),
    });
  }

  add(cityName: string): void {
    cityName = cityName.trim();
    if (!cityName) {
      return;
    }
    this.cityService.addCity({ cityName } as City).subscribe((city) => {
      this.cities.push(city);
    });
  }

   delete(city: City): void {
    this.cities = this.cities.filter((c) => c !== city);
    this.cityService.deleteCity(city.id).subscribe();
  } 

  getWeatherCoord(cityName: string): void {
    this.weatherService.getWeatherFromCity(cityName).subscribe({
      next: (data) => {
        console.log('data:', data);
        this.longit = data.coord.lon;
        this.latit = data.coord.lat;
        this.isoPays = data.sys.country;
      },
      complete: () => this.getWorldCity(),
    });
  }

  getWorldCity() {
    const worldCity: City = {
      cityName: this.cityForm.value.newCity,
      cityAscii: this.cityForm.value.newCity,
      country: this.cityForm.value.country,
      latitude: this.latit,
      longitude: this.longit,
      iso2: this.isoPays,

      /* latitude: this.longit,
      longitude: this.latit,
      iso2: this.isoPays, */
    };
    console.log(this.latit);

    this.cityService.addCity(worldCity).subscribe((city) => {
      this.cities.push(city);
    });
  }

  onSubmit() {
    this.getWeatherCoord(this.cityForm.value.newCity);
    console.log('2----', this.longit);
  }
}