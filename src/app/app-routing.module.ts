import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardInteractiveComponent } from './card-interactive/card-interactive.component';
import { AddCityComponent } from './cities/add-city/add-city.component';
import { ListCityComponent } from './cities/list-city/list-city.component';
import { AddTemperatureComponent } from './temperatures/add-temperature/add-temperature.component';
import { DetailTemperatureComponent } from './temperatures/detail-temperature/detail-temperature.component';
import { ListTemperaturesComponent } from './temperatures/list-temperatures/list-temperatures.component';
import { ShowWeatherComponent } from './show-weather/show-weather.component';

const routes: Routes = [
  {
    path:'weather',
    component:ShowWeatherComponent
  },
  {
    path:'map',
    component:CardInteractiveComponent
  },
  {
    path:'cities',
    children:[
      {
        component:ListCityComponent,
        path:''
      },
      {
        component:AddCityComponent,
        path:'add'
      }
    ]
  },
  {
    path:'temperatures',
    children:[
      {
        component:ListTemperaturesComponent,
        path:''
      },
      {
        component:DetailTemperatureComponent,
        path:'detail/:id'
      },
      {
        component:AddTemperatureComponent,
        path:'add'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
