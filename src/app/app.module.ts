import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCityComponent } from './cities/list-city/list-city.component';
import { AddCityComponent } from './cities/add-city/add-city.component';
import { ListTemperaturesComponent } from './temperatures/list-temperatures/list-temperatures.component';
import { DetailTemperatureComponent } from './temperatures/detail-temperature/detail-temperature.component';
import { CardInteractiveComponent } from './card-interactive/card-interactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddTemperatureComponent } from './temperatures/add-temperature/add-temperature.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { ClockComponent } from './temperatures/clock/clock.component';
import { ShowWeatherComponent } from './show-weather/show-weather.component';
@NgModule({
  declarations: [
    AppComponent,
    ListCityComponent,
    AddCityComponent,
    ListTemperaturesComponent,
    DetailTemperatureComponent,
    CardInteractiveComponent,
    HeaderComponent,
    AddTemperatureComponent,
    ClockComponent,
    ShowWeatherComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    AutocompleteLibModule
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
