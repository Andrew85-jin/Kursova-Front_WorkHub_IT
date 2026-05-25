import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { companies } from '../../shared/data/companies';
import { jobs } from '../../shared/data/jobs';

import { JobCard } from '../../components/job-card/job-card';

@Component({
  selector: 'app-company-page',
  standalone: true,
  imports: [JobCard],
  templateUrl: './company-page.html',
  styleUrl: './company-page.css',
})
export class CompanyPage {
  route = inject(ActivatedRoute);

  companyId = Number(this.route.snapshot.paramMap.get('id'));

  company = companies.find((c) => c.id === this.companyId);

  companyJobs = jobs.filter((job) => job.company === this.company?.name);
}
