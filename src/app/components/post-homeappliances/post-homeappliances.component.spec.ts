import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHomeappliancesComponent } from './post-homeappliances.component';

describe('PostHomeappliancesComponent', () => {
  let component: PostHomeappliancesComponent;
  let fixture: ComponentFixture<PostHomeappliancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostHomeappliancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostHomeappliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
