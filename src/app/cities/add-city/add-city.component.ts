import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { City, ICity } from 'src/app/models/City';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  /**
   * formulaire ville
   */
  editForm=this.fb.group({
    city:['',[Validators.required]],
    lat:['',[Validators.required]],
    lng:['',[Validators.required]],
    country:['',[Validators.required]],
    cityAscii:['',[Validators.required]],
    iso2:['',[Validators.required]]
  })
  constructor(private fb:FormBuilder,private cityService:CityService,private router:Router) { }

  ngOnInit(): void {
  }


  /**
   * ajouter  une nouvelle ville 
   */
  save():void{


    const {city,cityAscii,iso2,lat,lng,country}=this.editForm.value;
    let data:ICity={};
    data.cityName=city as string;
    data.cityAscii=cityAscii as string;
    data.iso2=iso2 as string;
    data.longitude=Number(lng);
    data.latitude=Number(lat);
    data.country=country as string;

    this.cityService.save(data).subscribe(
      {
        next:()=>{
            this.router.navigate(['/cities'])
        },
        error:()=>{
          console.log("Error !!!");
          
        }
      }
    )


  }
}
