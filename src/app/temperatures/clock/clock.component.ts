import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
/**
 * composant clock
 */
export class ClockComponent implements OnInit {
  // permet de recuperer le temps que la temperation a ete relevee
@Input() time!:any;
  constructor() { }

  ngOnInit(): void {
    this.clock();

  }

  clock():void{
    var dialLines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('clock')[0];

for (var i = 1; i < 60; i++) {
  clockEl.innerHTML += "<div class='diallines'></div>";
 ( dialLines[i] as any).style.transform = "rotate(" + 6 * i + "deg)";
}


  var weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
     let d = new Date(this.time);
     let  h = d.getHours();
     let m = d.getMinutes();
     let  s = d.getSeconds();
     let  date = d.getDate();
     let month:any = d.getMonth() + 1;
     let  year = d.getFullYear();
           
     let hDeg = h * 30 + m * (360/720);
     let    mDeg = m * 6 + s * (360/3600);
     let  sDeg = s * 6;
      
     let   hEl:any = document.querySelector('.hour-hand');
     let  mEl:any = document.querySelector('.minute-hand');
     let  sEl:any = document.querySelector('.second-hand');
     let  dateEl:any = document.querySelector('.date');
     let  dayEl:any = document.querySelector('.day');
  
      var day = weekday[d.getDay()];
      console.log(day);
      
  
  if( Number(month) < 9) {
    month = "0" + month;
  }
  
  hEl!.style.transform = "rotate("+hDeg+"deg)";
  mEl.style.transform = "rotate("+mDeg+"deg)";
  sEl.style.transform = "rotate("+sDeg+"deg)";
  dateEl.innerHTML = date+"/"+month+"/"+year;
  dayEl.innerHTML = day;



}
}