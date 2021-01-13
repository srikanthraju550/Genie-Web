import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymFitnessComponent } from './gym-fitness.component';

describe('GymFitnessComponent', () => {
  let component: GymFitnessComponent;
  let fixture: ComponentFixture<GymFitnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymFitnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
