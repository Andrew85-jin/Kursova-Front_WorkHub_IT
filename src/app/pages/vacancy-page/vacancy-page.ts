import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { jobs } from '../../shared/data/jobs';

@Component({
  selector: 'app-vacancy-page',
  standalone: true,
  imports: [],
  templateUrl: './vacancy-page.html',
  styleUrl: './vacancy-page.css',
})
export class VacancyPage {
  route = inject(ActivatedRoute);

  vacancyId = Number(this.route.snapshot.paramMap.get('id'));

  jobs = jobs;

  job = this.jobs.find((job) => job.id === this.vacancyId);
}
