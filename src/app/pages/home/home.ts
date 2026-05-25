import { Component } from '@angular/core';
import { JobCard } from '../../components/job-card/job-card';
import { SearchBar } from '../../components/search-bar/search-bar';
import { RouterLink } from '@angular/router';
import { jobs } from '../../shared/data/jobs';

@Component({
  selector: 'app-home',
  imports: [JobCard, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  jobs = jobs;


  filterJobs = [...this.jobs];

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
