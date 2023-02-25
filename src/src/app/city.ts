export interface City {
  id?: any; //type number pose probleme alors ->any
  cityName: string;
  cityAscii: string;
  latitude: number;
  longitude: number;
  country: string;
  iso2: string;
}