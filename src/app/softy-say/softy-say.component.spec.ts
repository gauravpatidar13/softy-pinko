import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftySayComponent } from './softy-say.component';

describe('SoftySayComponent', () => {
  let component: SoftySayComponent;
  let fixture: ComponentFixture<SoftySayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftySayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftySayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
