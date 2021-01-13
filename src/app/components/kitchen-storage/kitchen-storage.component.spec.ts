import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenStorageComponent } from './kitchen-storage.component';

describe('KitchenStorageComponent', () => {
  let component: KitchenStorageComponent;
  let fixture: ComponentFixture<KitchenStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
