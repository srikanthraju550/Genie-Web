import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulltimejobsComponent } from './fulltimejobs.component';

describe('FulltimejobsComponent', () => {
  let component: FulltimejobsComponent;
  let fixture: ComponentFixture<FulltimejobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulltimejobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulltimejobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
