import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerApplicationDetails } from './employer-application-details';

describe('EmployerApplicationDetails', () => {
  let component: EmployerApplicationDetails;
  let fixture: ComponentFixture<EmployerApplicationDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerApplicationDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployerApplicationDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
