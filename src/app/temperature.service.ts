import { Injectable } from '@angular/core';
import { City } from './city';
import { Temperature } from './temperature';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TemperatureService {

  private temperaturesUrl = 'http://localhost:8080/api/temperatures';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET temperatures from the server */
  getTemperatures(): Observable<Temperature[]> {
    this.log('fetched temperatures');
    return this.http.get<Temperature[]>(this.temperaturesUrl).pipe(
      tap((_) => this.log('fetched temperatures')),
      catchError(this.handleError<Temperature[]>('getTemperatures', []))
    );
  }

  /** GET temperature by id. Will 404 if id not found */
  getTemperature(id: number): Observable<Temperature> {
    const url = `${this.temperaturesUrl}/${id}`;
    return this.http.get<Temperature>(url).pipe(
      tap((_) => this.log(`fetched temperature id=${id}`)),
      catchError(this.handleError<Temperature>(`getTemperature id=${id}`))
    );
  }

  /** POST: add a new temperature to the server */
  addTemperature(temperature: Temperature): Observable<Temperature> {
    return this.http.post<Temperature>(this.temperaturesUrl, temperature, this.httpOptions).pipe(
      tap((newTemperature: Temperature) => this.log(`added temperature w/ id=${newTemperature.id}`)),
      catchError(this.handleError<Temperature>('addTemperature'))
    );
  }

  /** PUT: update the temperature on the server */
  updateTemperature(temperature: Temperature): Observable<any> {
    return this.http.put(this.temperaturesUrl, temperature, this.httpOptions).pipe(
      tap((_) => this.log(`updated  temperature id=${temperature.id}`)),
      catchError(this.handleError<any>('updateTemperature'))
    );
  }

  /** DELETE: delete the temperature from the server */
  deleteTemperature(id: number): Observable<Temperature> {
    const url = `${this.temperaturesUrl}/${id}`;

    return this.http.delete<Temperature>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted temperature id=${id}`)),
      catchError(this.handleError<Temperature>('deleteTemperature'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CityService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TemperatureService: ${message}`);
  }


}
