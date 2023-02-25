import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CityDetailComponent } from './city-detail/city-detail.component';
import { CitiesComponent } from './cities/cities.component';

import { MessagesComponent } from './messages/messages.component';
import { ShowIpComponent } from './show-ip/show-ip.component';
import { ShowWeatherComponent } from './show-weather/show-weather.component';
import { TemperatureFormComponent } from './temperature-form/temperature-form.component';
import { ClockComponent } from './clock/clock.component';
import { CitySearchComponent } from './city-search/city-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MapBoxComponent } from './map-box/map-box.component';


@NgModule({
  declarations: [
    AppComponent,
    CityDetailComponent,
    CitiesComponent,
    MessagesComponent,
    ShowIpComponent,
    ShowWeatherComponent,
    TemperatureFormComponent,
    ClockComponent,
    CitySearchComponent,
    MapBoxComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonToggleModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
