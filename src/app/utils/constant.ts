import { HttpParams } from "@angular/common/http";
import { MapboxOptions } from "mapbox-gl";
import { environment } from "src/environments/environment";

export  const colors = [
    'blue',
    'gray',
    'green',
    'orange',
    'pink',
    'purple',
    'red',
    'yellow',
  ];




  export const style: string = 'mapbox://styles/mapbox/light-v11';

  export const LONGITUDE:number=46.2276;
  export const LATITUDE:number=2.2137;

  export const layer={
    id: "'weather-layer",
    type: 'symbol',
    source: "weather", // référence à la source de données
    layout: {
      'icon-image': '{image}',
      'text-field': '{message}',
      'text-size': 12,
      'text-offset': [0, 2.5],
      'icon-offset': [-1, -2.5],
    },
    paint: {
      'text-color': '#f16624',
      'text-halo-color': '#fff',
      'text-halo-width': 2,
    },
  }

  export const createRequestOption = (req?: any): HttpParams => {
    let options: HttpParams = new HttpParams();
  
    if (req) {
      Object.keys(req).forEach((key) => {
        if (key !== 'sort') {
          options = options.set(key, req[key]);
        }
      });
    }
  
    return options;
  };

  export class Pagination {
    page?: number;
    total?: number;
    size?:number;
    filter?: string;
    cityName?:string;
    totalElements?:number
  }

  export const initMap:MapboxOptions={
    accessToken: environment.accessToken,
    container: 'map', // référence à la div dans le document HTML
    style: style,
    zoom: 13,
    center: [LONGITUDE, LATITUDE],
  }