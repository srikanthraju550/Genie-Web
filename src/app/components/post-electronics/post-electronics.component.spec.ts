import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostElectronicsComponent } from './post-electronics.component';

describe('PostElectronicsComponent', () => {
  let component: PostElectronicsComponent;
  let fixture: ComponentFixture<PostElectronicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostElectronicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
