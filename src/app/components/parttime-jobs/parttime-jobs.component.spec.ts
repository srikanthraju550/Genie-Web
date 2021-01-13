import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParttimeJobsComponent } from './parttime-jobs.component';

describe('ParttimeJobsComponent', () => {
  let component: ParttimeJobsComponent;
  let fixture: ComponentFixture<ParttimeJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParttimeJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParttimeJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
