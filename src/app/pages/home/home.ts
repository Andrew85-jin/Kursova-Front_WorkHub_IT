import { Component } from '@angular/core';
import { JobCard } from '../../components/job-card/job-card';
import { CategoryCard } from '../../components/category-card/category-card';
import { SearchBar } from '../../components/search-bar/search-bar';

@Component({
  selector: 'app-home',
  imports: [JobCard, SearchBar, CategoryCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  jobs = [
    {
      title: 'Frontend Developer',
      company: 'TechnoHub',
      salary: '$3000',
      location: 'Київ',
      experience: '3+ роки',
    },
    {
      title: 'UI/UX Designer',
      company: 'DesignPro',
      salary: '$1500',
      location: 'Одеса',
      experience: '2+ роки',
    },
    {
      title: 'Менеджер',
      company: 'MegaCommerce',
      salary: '30000 грн',
      location: 'Львів',
      experience: '1+ рік',
    },
  ];

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
