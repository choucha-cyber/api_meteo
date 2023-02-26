import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import { ITemparture } from 'src/app/models/Temperature';
import { Pagination } from 'src/app/utils/constant';
import { TemperatureService } from '../services/temperature.service';

@Component({
  selector: 'app-list-temperatures',
  templateUrl: './list-temperatures.component.html',
  styleUrls: ['./list-temperatures.component.css'],
})
export class ListTemperaturesComponent implements OnInit {
  temperatures: ITemparture[] = [];
  data: any;

  page = 1;
  req: Pagination = {
    size: 100,
    page: 0,
  };
  editForm = this.fb.group({
    search: [''],
  });

  constructor(
    private temperatureService: TemperatureService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.query(this.req);

    // recherche une temperation en fonction du nom de la ville
    this.editForm
      .get('search')!
      .valueChanges.pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        tap((search) => {
          this.req.cityName = String(search);
          this.query(this.req);
        })
      )
      .subscribe();
  }

  /**
   * récuperer les temperations en fonction des paramettre
   * @param req
   */
  query(req?: Pagination): void {
    this.temperatureService.queryByName(req).subscribe({
      next: (data: any) => {
        this.temperatures = data.content as ITemparture[];
        this.data = data;
      },
      error: () => {
        console.error('Baq request !!!');
      },
    });
  }

  /**
   * fonction appeler lorqu'on click sur la pagination
   * @param ev
   */

  pageChanged(ev: any): void {
    console.log(ev);
    this.page = ev;
    this.req!.page = this.page - 1;
    this.query();
  }
}
