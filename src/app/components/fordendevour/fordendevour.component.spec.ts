import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FordendevourComponent } from './fordendevour.component';

describe('FordendevourComponent', () => {
  let component: FordendevourComponent;
  let fixture: ComponentFixture<FordendevourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FordendevourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FordendevourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
