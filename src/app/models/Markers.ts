export interface IMarker{
    id?:number;
    latitude?:number;
    img?:string
    longitude?:number,
    message?:string,
    name?: string
}

export class Marker implements IMarker{
    constructor(
        public id?:number,
        public latitute?:number,
        public img?:string,
        public longitude?:number,
        public message?:string,
        public name?: string

        ){}
}