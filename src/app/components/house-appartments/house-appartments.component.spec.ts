import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseAppartmentsComponent } from './house-appartments.component';

describe('HouseAppartmentsComponent', () => {
  let component: HouseAppartmentsComponent;
  let fixture: ComponentFixture<HouseAppartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseAppartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseAppartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
