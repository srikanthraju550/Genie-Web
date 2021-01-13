import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCommercialVehiclesComponent } from './post-commercial-vehicles.component';

describe('PostCommercialVehiclesComponent', () => {
  let component: PostCommercialVehiclesComponent;
  let fixture: ComponentFixture<PostCommercialVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCommercialVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCommercialVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
