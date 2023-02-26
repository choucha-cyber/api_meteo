export interface IMarker{
    id?:number;
    latitute?:number;
    img?:string
    longitude?:number
}

export class Marker implements IMarker{
    constructor(
        public id?:number,
        public latitute?:number,
        public img?:string,
        public longitude?:number

        ){}
}