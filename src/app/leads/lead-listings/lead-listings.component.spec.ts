import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadListingsComponent } from './lead-listings.component';

describe('LeadListingsComponent', () => {
  let component: LeadListingsComponent;
  let fixture: ComponentFixture<LeadListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadListingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
