import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenCookwareComponent } from './kitchen-cookware.component';

describe('KitchenCookwareComponent', () => {
  let component: KitchenCookwareComponent;
  let fixture: ComponentFixture<KitchenCookwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenCookwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenCookwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
