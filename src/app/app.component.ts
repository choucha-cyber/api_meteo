import { Component } from '@angular/core';
import { ShowWeatherComponent } from './show-weather/show-weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Météo';
  weather = ShowWeatherComponent;

  constructor() { }
}
