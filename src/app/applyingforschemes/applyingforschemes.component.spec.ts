import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyingforschemesComponent } from './applyingforschemes.component';

describe('ApplyingforschemesComponent', () => {
  let component: ApplyingforschemesComponent;
  let fixture: ComponentFixture<ApplyingforschemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyingforschemesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyingforschemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
