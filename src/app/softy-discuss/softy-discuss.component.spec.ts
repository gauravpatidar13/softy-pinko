import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftyDiscussComponent } from './softy-discuss.component';

describe('SoftyDiscussComponent', () => {
  let component: SoftyDiscussComponent;
  let fixture: ComponentFixture<SoftyDiscussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftyDiscussComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftyDiscussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
