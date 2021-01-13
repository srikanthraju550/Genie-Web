import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMobilesComponent } from './post-mobiles.component';

describe('PostMobilesComponent', () => {
  let component: PostMobilesComponent;
  let fixture: ComponentFixture<PostMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
