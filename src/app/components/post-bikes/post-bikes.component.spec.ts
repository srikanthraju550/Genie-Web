import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBikesComponent } from './post-bikes.component';

describe('PostBikesComponent', () => {
  let component: PostBikesComponent;
  let fixture: ComponentFixture<PostBikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostBikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
