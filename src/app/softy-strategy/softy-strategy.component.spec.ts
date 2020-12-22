import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftyStrategyComponent } from './softy-strategy.component';

describe('SoftyStrategyComponent', () => {
  let component: SoftyStrategyComponent;
  let fixture: ComponentFixture<SoftyStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftyStrategyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftyStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
