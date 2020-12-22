import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftyTalkComponent } from './softy-talk.component';

describe('SoftyTalkComponent', () => {
  let component: SoftyTalkComponent;
  let fixture: ComponentFixture<SoftyTalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftyTalkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftyTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
