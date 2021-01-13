import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaniaTrucksComponent } from './scania-trucks.component';

describe('ScaniaTrucksComponent', () => {
  let component: ScaniaTrucksComponent;
  let fixture: ComponentFixture<ScaniaTrucksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaniaTrucksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaniaTrucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
