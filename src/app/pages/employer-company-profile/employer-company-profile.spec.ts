import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerCompanyProfile } from './employer-company-profile';

describe('EmployerCompanyProfile', () => {
  let component: EmployerCompanyProfile;
  let fixture: ComponentFixture<EmployerCompanyProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerCompanyProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployerCompanyProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
