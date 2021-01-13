import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedsWordrobesComponent } from './beds-wordrobes.component';

describe('BedsWordrobesComponent', () => {
  let component: BedsWordrobesComponent;
  let fixture: ComponentFixture<BedsWordrobesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedsWordrobesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedsWordrobesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
