import { Component, OnInit } from '@angular/core';
import { JobCard } from '../../components/job-card/job-card';
import { SearchBar } from '../../components/search-bar/search-bar';
import { RouterLink } from '@angular/router';
import { JobsService, Job } from '../../shared/services/jobs';

@Component({
  selector: 'app-home',
  imports: [JobCard, SearchBar, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  jobs: Job[] = [];
  filterJobs: Job[] = [];

  constructor(private jobsService: JobsService) {}

  ngOnInit() {
    this.jobsService.getJobs().subscribe({
      next: (jobs) => {
        this.jobs = jobs;
        this.filterJobs = jobs;
      },
    });
  }

  onSearch(query: { text: string; city: string }) {
    const text = query.text.toLowerCase();
    const city = query.city.toLowerCase();

    this.filterJobs = this.jobs.filter(
      (job) =>
        (job.title.toLowerCase().includes(text) || job.company.toLowerCase().includes(text)) &&
        job.location.toLowerCase().includes(city),
    );
  }
}
