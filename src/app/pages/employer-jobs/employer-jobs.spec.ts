import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerJobs } from './employer-jobs';

describe('EmployerJobs', () => {
  let component: EmployerJobs;
  let fixture: ComponentFixture<EmployerJobs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerJobs],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployerJobs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
