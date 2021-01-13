import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsHobbiesComponent } from './sports-hobbies.component';

describe('SportsHobbiesComponent', () => {
  let component: SportsHobbiesComponent;
  let fixture: ComponentFixture<SportsHobbiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsHobbiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
