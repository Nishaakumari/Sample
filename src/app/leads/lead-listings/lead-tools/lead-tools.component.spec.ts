import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadToolsComponent } from './lead-tools.component';

describe('LeadToolsComponent', () => {
  let component: LeadToolsComponent;
  let fixture: ComponentFixture<LeadToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
