import { ICity } from "./City"

export interface ITemparture{
    
    id?:number,
    value?:number,
    timestamp?:Date,
    city?:ICity
}

export class Temperature implements ITemparture{
    constructor(
        public id?:number,
        public value?:number,
        public city?:ICity
    ){}
}