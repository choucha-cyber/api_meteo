import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {

}

/* const dialLines = document.getElementsByClassName('diallines');
const clockEl = document.getElementsByClassName('clock')[0] as HTMLElement;

for (let i = 1; i < 60; i++) {
  clockEl.innerHTML += "<div class='diallines'></div>";
  (dialLines[i] as HTMLElement).style.transform = `rotate(${6 * i}deg)`;
}

function clock() {
  const weekday: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const d: Date = new Date();
  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();
  const date = d.getDate();
  let month = d.getMonth() + 1;
  const year = d.getFullYear();

  const hDeg = h * 30 + m * (360 / 720);
  const mDeg = m * 6 + s * (360 / 3600);
  const sDeg = s * 6;

  const hEl = document.querySelector('.hour-hand') as HTMLElement;
  const mEl = document.querySelector('.minute-hand') as HTMLElement;
  const sEl = document.querySelector('.second-hand') as HTMLElement;
  const dateEl = document.querySelector('.date') as HTMLElement;
  const dayEl = document.querySelector('.day') as HTMLElement;

  const day = weekday[d.getDay()];

  if (month < 9) {
    month = "0" + month;
  }

  hEl.style.transform = `rotate(${hDeg}deg)`;
  mEl.style.transform = `rotate(${mDeg}deg)`;
  sEl.style.transform = `rotate(${sDeg}deg)`;
  dateEl.innerHTML = `${date}/${month}/${year}`;
  dayEl.innerHTML = day;
}

setInterval(clock, 100);

*/


