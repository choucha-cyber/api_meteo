import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICity } from 'src/app/models/City';
import { createRequestOption, Pagination } from 'src/app/utils/constant';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {
   URL=environment.url;
  constructor(private http:HttpClient) { }

  query(req?:Pagination):Observable<ICity[]>{
    let options=createRequestOption(req)
    return this.http.get<ICity[]>(`${this.URL}cities_by_page`,{
      params:options
    });
  }

  queryByName(req?:Pagination):Observable<ICity[]>{
    let options=createRequestOption(req)
    return this.http.get<ICity[]>(`${this.URL}cities_by_name`,{
      params:options
    });
  }

  save(city:ICity):Observable<ICity>{
    return this.http.post<ICity>(`${this.URL}cities`,city);
  }
}
