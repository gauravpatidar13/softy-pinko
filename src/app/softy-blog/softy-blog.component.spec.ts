import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftyBlogComponent } from './softy-blog.component';

describe('SoftyBlogComponent', () => {
  let component: SoftyBlogComponent;
  let fixture: ComponentFixture<SoftyBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftyBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftyBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
