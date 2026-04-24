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
      title: 'Frontend Developer (React)',
      company: 'TechnoHub',
      salary: '$3000-4500',
      location: 'Київ',
      experience: '3+ роки',
    },
    {
      title: 'UI/UX Designer',
      company: 'DesignPro',
      salary: '$1500-2500',
      location: 'Одеса',
      experience: '2+ роки',
    },
    {
      title: 'Менеджер з продажу',
      company: 'MegaCommerce',
      salary: '25 000-40 000 грн',
      location: 'Львів',
      experience: '1+ рік',
    },
  ];
}
