import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SofaDiningComponent } from './sofa-dining.component';

describe('SofaDiningComponent', () => {
  let component: SofaDiningComponent;
  let fixture: ComponentFixture<SofaDiningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SofaDiningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SofaDiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
