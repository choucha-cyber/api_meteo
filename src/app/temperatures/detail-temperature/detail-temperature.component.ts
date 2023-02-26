import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITemparture } from 'src/app/models/Temperature';
import { TemperatureService } from '../services/temperature.service';

@Component({
  selector: 'app-detail-temperature',
  templateUrl: './detail-temperature.component.html',
  styleUrls: ['./detail-temperature.component.css']
})
export class DetailTemperatureComponent implements OnInit {
  temperature!: ITemparture;

  constructor(private temperatureService:TemperatureService,private activadRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.temperatureService.show(this.activadRoute.snapshot.params['id']).subscribe(
      {
        next:(res:ITemparture)=>{
          console.log(res);
          this.temperature=res;
          
        }
      }
    )
  }


}
