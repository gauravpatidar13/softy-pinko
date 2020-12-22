import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftPinkoComponent } from './soft-pinko.component';

describe('SoftPinkoComponent', () => {
  let component: SoftPinkoComponent;
  let fixture: ComponentFixture<SoftPinkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftPinkoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftPinkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
