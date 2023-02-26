import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTemperatureComponent } from './detail-temperature.component';

describe('DetailTemperatureComponent', () => {
  let component: DetailTemperatureComponent;
  let fixture: ComponentFixture<DetailTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTemperatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
