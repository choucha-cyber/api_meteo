import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { City, ICity } from 'src/app/models/City';
import { WeatherService } from 'src/app/weather.service';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css'],
})
export class AddCityComponent implements OnInit {
  /**
   * formulaire ville
   */
  /* editForm = this.fb.group({
    city: ['', [Validators.required]],
     lat:['',[Validators.required]],
    lng:['',[Validators.required]],
    country:['',[Validators.required]],
    cityAscii:['',[Validators.required]],
    iso2:['',[Validators.required]]
  }); */

  editForm = new FormGroup({
    city: new FormControl(),
  });

  long!: number;
  latit!: number;
  isoPays!: string;
  country!: string;

  constructor(
    private fb: FormBuilder,
    private cityService: CityService,
    private weatherService: WeatherService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getWeatherCoord(cityName: string): void {
    this.weatherService.getWeatherFromCity(cityName).subscribe({
      next: (data) => {
        console.log('data:', data);
        this.long = data.coord.lon;
        this.latit = data.coord.lat;
        this.isoPays = data.sys.country;
      },
      complete: () => this.getWorldCity(),
    });
  }

  getWorldCity() {
    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
    this.country = regionNames.of(this.isoPays) as string;

    const { city } = this.editForm.value;
    let data: ICity = {};
    data.cityName = city as string;
    data.cityAscii = city as string;
    data.iso2 = this.isoPays as string;
    data.longitude = Number(this.long);
    data.latitude = Number(this.latit);
    data.country = this.country as string;

    this.cityService.save(data).subscribe({
      next: () => {
        this.router.navigate(['/cities']);
      },
      error: () => {
        console.log('Error !!!');
      },
    });
  }

  /**
   * ajouter  une nouvelle ville
   */
  save(): void {
    this.getWeatherCoord(this.editForm.value.city);
  }
}
