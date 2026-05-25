import { Component } from '@angular/core';
import { SearchBar } from '../../components/search-bar/search-bar';
import { JobCard } from '../../components/job-card/job-card';
import { FiltersSidebar } from '../../components/filters-sidebar/filters-sidebar';
import { jobs } from '../../shared/data/jobs';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [SearchBar, JobCard, FiltersSidebar],
  templateUrl: './jobs.html',
  styleUrl: './jobs.css',
})
export class Jobs {
  jobs = jobs;

  filteredJobs = [...this.jobs];

  onSearch(query: { text: string; city: string }) {
    const text = query.text.toLowerCase();
    const city = query.city.toLowerCase();

    this.filteredJobs = this.jobs.filter(
      (job) =>
        (job.title.toLowerCase().includes(text) || job.company.toLowerCase().includes(text)) &&
        job.location.toLowerCase().includes(city),
    );
  }
  applyFilters(filters: any) {
    this.filteredJobs = this.jobs.filter((job) => {
      if (filters.search) {
        const search = filters.search.toLowerCase();
        const hasTitle = job.title.toLowerCase().includes(search);
        const hasCompany = job.company.toLowerCase().includes(search);
        if (!hasTitle && !hasCompany) return false;
      }

      if (filters.city) {
        if (!job.location.toLowerCase().includes(filters.city.toLowerCase())) {
          return false;
        }
      }


      const tags = job.tags.map((t) => t.toLowerCase());

      if (filters.fullTime && !tags.includes('full-time')) return false;
      if (filters.remote && !tags.includes('remote')) return false;
      if (filters.junior && !tags.includes('junior')) return false;
      if (filters.senior && !tags.includes('senior')) return false;

      return true;
    });
  }
}
