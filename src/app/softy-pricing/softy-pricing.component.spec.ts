import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftyPricingComponent } from './softy-pricing.component';

describe('SoftyPricingComponent', () => {
  let component: SoftyPricingComponent;
  let fixture: ComponentFixture<SoftyPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftyPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftyPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
