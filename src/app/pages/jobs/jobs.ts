import { Component, OnInit } from '@angular/core';

import { SearchBar } from '../../components/search-bar/search-bar';
import { JobCard } from '../../components/job-card/job-card';
import { FiltersSidebar, JobFilters } from '../../components/filters-sidebar/filters-sidebar';
import { JobsService, Job } from '../../shared/services/jobs';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [SearchBar, JobCard, FiltersSidebar],
  templateUrl: './jobs.html',
  styleUrl: './jobs.css',
})
export class Jobs implements OnInit {
  jobs: Job[] = [];
  filteredJobs: Job[] = [];

  isLoading = false;
  errorMessage = '';

  constructor(private jobsService: JobsService) {}

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.isLoading = true;

    this.jobsService.getJobs().subscribe({
      next: (jobs) => {
        this.jobs = jobs;
        this.filteredJobs = jobs;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Не вдалося завантажити вакансії';
        this.isLoading = false;
      },
    });
  }

  onSearch(query: { text: string; city: string }) {
    const text = query.text.toLowerCase();
    const city = query.city.toLowerCase();

    this.filteredJobs = this.jobs.filter(
      (job) =>
        (job.title.toLowerCase().includes(text) || job.company.toLowerCase().includes(text)) &&
        job.location.toLowerCase().includes(city),
    );
  }

  applyFilters(filters: JobFilters) {
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

      const tags = job.tags.map((tag) => tag.toLowerCase());
      const skills = job.skills.map((skill) => skill.toLowerCase());

      if (filters.fullTime && !tags.includes('full-time')) return false;
      if (filters.remote && !tags.includes('remote')) return false;

      if (filters.junior && !tags.includes('junior')) return false;
      if (filters.middle && !tags.includes('middle')) return false;
      if (filters.senior && !tags.includes('senior')) return false;

      if (filters.angular && !skills.includes('angular')) return false;
      if (filters.react && !skills.includes('react')) return false;
      if (filters.node && !skills.includes('node.js')) return false;
      if (filters.nestjs && !skills.includes('nestjs')) return false;
      if (filters.java && !skills.includes('java')) return false;
      if (filters.python && !skills.includes('python')) return false;
      if (filters.docker && !skills.includes('docker')) return false;

      return true;
    });
  }
}
