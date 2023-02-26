import { Component, OnInit } from '@angular/core';
import { ICity } from 'src/app/models/City';
import { Pagination } from 'src/app/utils/constant';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css']
})
export class ListCityComponent implements OnInit {
  page=1;
  cities: ICity[]=[];
  req:Pagination={
    size:20,
    page:0,
    cityName:"yao"
  }

  data: any;

  constructor(private cityService:CityService) { }

  ngOnInit(): void {
    this.query(this.req);
  }

  /**
   * rcuperer les villes en fonction des paramettre
   * @param req 
   */
  query(req?:Pagination):void{
    this.cityService.query(req).subscribe(
      {
        next:(res:any)=>{
          this.data=res;
          this.cities=res.content as ICity[];
          
          console.log(res);
          
        }
      }
    )
  }
/**
 * fonction appeler lorqu'on click sur la pagination
 * @param ev 
 */
  pageChanged(ev:any):void{
    console.log(ev);
    this.page=ev;
    this.req!.page=this.page-1;
    this.query(this.req);
    
  }

}
