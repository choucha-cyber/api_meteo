import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../city';
import { Temperature } from '../temperature';
import { TemperatureService } from '../temperature.service';
import { WeatherService } from '../weather.service';



@Component({
  selector: 'app-temperature-form',
  templateUrl: './temperature-form.component.html',
  styleUrls: ['./temperature-form.component.css'],
  //providers: [DatePipe]
})
export class TemperatureFormComponent {
  city!: City;
  timestamp!: Date;
  value!: number;//temperature
  
  temperatureForm = new FormGroup({
    cityName: new FormControl(),
    time: new FormControl(),
    //value: new FormControl() //-->temperature
  })

  temperatures: Temperature[] = [];


  constructor(private temperatureService: TemperatureService, private weatherService: WeatherService, private route: ActivatedRoute, private router: Router ) { }


  ngOnInit(): void {
    this.getTemperatures();
    //affichage
    this.temperatureService.getTemperatures().subscribe((temperatures) =>(this.temperatures = temperatures.slice(0,15))) ;
    
  }

  getTemperatures(): void {
    this.temperatureService.getTemperatures().subscribe({
      next: (temperatureFromObservable) => {
        this.temperatures = temperatureFromObservable.slice(0,15);
        console.log('Retrieved temperatures data :', temperatureFromObservable);
      },
      error: (error) => console.error(error),
      complete: () => console.log('Completed!'),
    });
  }

  getWeatherTemp(cityName: string): void {
    this.weatherService.getWeatherFromCity(cityName).subscribe({
      next: (data) => {
        console.log('data:', data);
        this.timestamp = data.dt;
        this.value = data.main.temp;
       
      },
      complete: () => this.getTemp(),
    });
  }

  getTemp() {
    const temp: Temperature = {
      city: this.temperatureForm.value.cityName,
      timestamp: this.timestamp,
      value: this.value     
    };

    this.temperatureService.addTemperature(temp).subscribe((temperature) => {
      this.temperatures.push(temperature);
    });
  }


  onSubmit() {
    this.getWeatherTemp(this.temperatureForm.value.cityName);
  }

  delete(temperature: Temperature): void {
    this.temperatures = this.temperatures.filter((t) => t !== temperature);
    this.temperatureService.deleteTemperature(temperature.id).subscribe();

  }

}