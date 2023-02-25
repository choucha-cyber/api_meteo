import { Timestamp } from 'rxjs';
import { City } from './city';
export interface Temperature {
  id?: any; //AI type number probleme ->any
  city: City;
  value? : number; //temperature
  timestamp? : any //date


  /* Double value, Date timestamp, City city */
}