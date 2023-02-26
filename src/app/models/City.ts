export interface ICity{
    id?:number,
    cityName?:string,
    latitude?:number,
    longitude?:number,
    country?:string,
    cityAscii?:string,
    iso2?:string
}
export class City implements ICity{
    constructor(
     public   id?:number,
     public  cityName?:string,
     public latitude?:number,
     public longitude?:number,
     public country?:string,
     public cityAscii?:string,
     public iso2?:string 
    ){}
}