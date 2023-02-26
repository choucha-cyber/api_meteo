import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInteractiveComponent } from './card-interactive.component';

describe('CardInteractiveComponent', () => {
  let component: CardInteractiveComponent;
  let fixture: ComponentFixture<CardInteractiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardInteractiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardInteractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
