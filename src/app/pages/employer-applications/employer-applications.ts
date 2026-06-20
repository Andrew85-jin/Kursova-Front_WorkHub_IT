import { Component, OnInit } from '@angular/core';

import { CompaniesService, Company } from '../../shared/services/companies';

import { ApplicationsService, Application } from '../../shared/services/applications';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employer-applications',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employer-applications.html',
  styleUrl: './employer-applications.css',
})
export class EmployerApplications implements OnInit {
  company?: Company;
  applications: Application[] = [];

  isLoading = false;
  errorMessage = '';

  constructor(
    private companiesService: CompaniesService,
    private applicationsService: ApplicationsService,
  ) {}

  ngOnInit() {
    this.loadApplications();
  }

  loadApplications() {
    this.isLoading = true;

    this.companiesService.getMyCompany().subscribe({
      next: (company) => {
        this.company = company;

        const jobs = company.jobs ?? [];

        if (jobs.length === 0) {
          this.isLoading = false;
          return;
        }

        jobs.forEach((job) => {
          this.applicationsService.getApplicationsByJob(job.id).subscribe({
            next: (applications) => {
              this.applications = [...this.applications, ...applications];

              this.isLoading = false;
            },
            error: () => {
              this.errorMessage = 'Не вдалося завантажити відгуки';
              this.isLoading = false;
            },
          });
        });
      },
      error: () => {
        this.errorMessage = 'Не вдалося завантажити компанію';
        this.isLoading = false;
      },
    });
  }
}
