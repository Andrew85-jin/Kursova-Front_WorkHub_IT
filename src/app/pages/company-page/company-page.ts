import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JobCard } from '../../components/job-card/job-card';
import { CompaniesService, Company } from '../../shared/services/companies';
import { Job } from '../../shared/services/jobs';

@Component({
  selector: 'app-company-page',
  standalone: true,
  imports: [JobCard],
  templateUrl: './company-page.html',
  styleUrl: './company-page.css',
})
export class CompanyPage implements OnInit {
  company?: Company;
  companyJobs: Job[] = [];

  isLoading = false;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private companiesService: CompaniesService,
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.isLoading = true;

    this.companiesService.getCompany(id).subscribe({
      next: (company) => {
        this.company = company;
        this.companyJobs = company.jobs ?? [];
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Компанію не знайдено';
        this.isLoading = false;
      },
    });
  }
}
