import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftyWorkComponent } from './softy-work.component';

describe('SoftyWorkComponent', () => {
  let component: SoftyWorkComponent;
  let fixture: ComponentFixture<SoftyWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftyWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftyWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
