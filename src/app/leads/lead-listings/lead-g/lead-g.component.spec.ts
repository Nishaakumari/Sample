import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadGComponent } from './lead-g.component';

describe('LeadGComponent', () => {
  let component: LeadGComponent;
  let fixture: ComponentFixture<LeadGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
