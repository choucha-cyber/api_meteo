import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CitiesComponent } from './cities/cities.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { TemperatureFormComponent } from './temperature-form/temperature-form.component';
import { ShowWeatherComponent } from './show-weather/show-weather.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: ShowWeatherComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'city/:id', component: CityDetailComponent },
  { path: 'temperature-form', component: TemperatureFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
