import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { jobs } from '../../shared/data/jobs';

@Component({
  selector: 'app-employer-jobs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employer-jobs.html',
  styleUrl: './employer-jobs.css',
})
export class EmployerJobs {
  companyName = 'TechnoHub';

  employerJobs = jobs
    .filter((job) => job.company === this.companyName)
    .map((job, index) => ({
      ...job,
      status: index % 2 === 0 ? 'Активна' : 'Чернетка',
      applications: index + 3,
    }));
}
