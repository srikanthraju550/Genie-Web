import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparepartsComponent } from './spareparts.component';

describe('SparepartsComponent', () => {
  let component: SparepartsComponent;
  let fixture: ComponentFixture<SparepartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparepartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparepartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
