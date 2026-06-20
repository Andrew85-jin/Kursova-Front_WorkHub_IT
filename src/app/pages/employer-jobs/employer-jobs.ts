import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CompaniesService, Company } from '../../shared/services/companies';
import { JobsService } from '../../shared/services/jobs';
import { Job } from '../../shared/services/jobs';

@Component({
  selector: 'app-employer-jobs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employer-jobs.html',
  styleUrl: './employer-jobs.css',
})
export class EmployerJobs implements OnInit {
  company?: Company;

  employerJobs: Array<
    Job & {
      statusLabel: string;
      applications: number;
    }
  > = [];

  isLoading = false;
  errorMessage = '';

  constructor(
    private companiesService: CompaniesService,
    private jobsService: JobsService,
  ) {}

  ngOnInit() {
    this.loadCompanyJobs();
  }

  loadCompanyJobs() {
    this.isLoading = true;

    this.companiesService.getMyCompany().subscribe({
      next: (company) => {
        this.company = company;

        this.employerJobs = (company.jobs ?? []).map((job, index) => ({
          ...job,

          statusLabel: job.status === 'active' ? 'Активна' : 'Чернетка',

          applications: index + 3,
        }));

        this.isLoading = false;
      },

      error: () => {
        this.errorMessage = 'Не вдалося завантажити вакансії';

        this.isLoading = false;
      },
    });
  }
  deleteJob(id: number) {
    const isConfirmed = confirm('Ви точно хочете видалити цю вакансію?');

    if (!isConfirmed) {
      return;
    }

    this.jobsService.deleteJob(id).subscribe({
      next: () => {
        this.employerJobs = this.employerJobs.filter((job) => job.id !== id);
      },

      error: () => {
        this.errorMessage = 'Не вдалося видалити вакансію';
      },
    });
  }
}
