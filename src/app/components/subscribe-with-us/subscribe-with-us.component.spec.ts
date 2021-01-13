import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeWithUsComponent } from './subscribe-with-us.component';

describe('SubscribeWithUsComponent', () => {
  let component: SubscribeWithUsComponent;
  let fixture: ComponentFixture<SubscribeWithUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeWithUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
