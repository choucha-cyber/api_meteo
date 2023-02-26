import { HttpParams } from "@angular/common/http";


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

 