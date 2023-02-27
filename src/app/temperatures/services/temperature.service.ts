import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IMarker } from 'src/app/models/Markers';
import { ITemparture } from 'src/app/models/Temperature';
import { createRequestOption, Pagination } from 'src/app/utils/constant';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {
  url1=environment.url;
  URL=environment.url+"temperatures";
URL_MAR=environment.url+"markers";
  
  constructor(private http:HttpClient) { }

  query(req?:Pagination):Observable<ITemparture[]>{
    let options=createRequestOption(req)
    return this.http.get<ITemparture[]>(`${this.URL}`,{
      params: options,
    });
  }

  queryByName(req?:Pagination):Observable<ITemparture[]>{
    let options=createRequestOption(req)
    return this.http.get<ITemparture[]>(`${this.url1}temperatures_by_city_name`,{
      params: options,
    });
  }

  save(temperature:ITemparture):Observable<ITemparture>{
    return this.http.post<ITemparture>(`${this.URL}`,temperature);
  }

  show(id:number):Observable<ITemparture>{
    return this.http.get<ITemparture>(`${this.URL}/${id}`,);
  }

  getweatherByGPS(lng:number,lat:number):Observable<any>{

    return this.http.get<any>(`${environment.weather}?lat=${lat}&lon=${lng}&appid=${environment.key}&lang=fr&units=metric`);
  }

  getweatherByCity(city:string):Observable<any>{

    return this.http.get<any>(`${environment.weather}?q=${city}&appid=${environment.key}&lang=fr&units=metric`);
  }


  saveMarker(marker:IMarker):Observable<ITemparture>{
    return this.http.post<ITemparture>(`${this.URL_MAR}`,marker);
  }

  queryMarker():Observable<IMarker[]>{
    return this.http.get<IMarker[]>(`${this.URL_MAR}`);
  }

  deleteMarker(id:number):Observable<void>{
    return this.http.delete<void>(`${this.URL_MAR}/${id}`);
  }

  delete(id: number): Observable<void> {
    //return this.http.delete<void>(${this.URL}/${id});
    return this.http.delete<void>(`${this.URL}/${id}`);
   
  }
}
