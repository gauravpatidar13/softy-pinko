import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftyBusinessComponent } from './softy-business.component';

describe('SoftyBusinessComponent', () => {
  let component: SoftyBusinessComponent;
  let fixture: ComponentFixture<SoftyBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftyBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftyBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
