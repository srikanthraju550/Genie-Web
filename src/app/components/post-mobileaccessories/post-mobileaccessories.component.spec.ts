import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMobileaccessoriesComponent } from './post-mobileaccessories.component';

describe('PostMobileaccessoriesComponent', () => {
  let component: PostMobileaccessoriesComponent;
  let fixture: ComponentFixture<PostMobileaccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostMobileaccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMobileaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
