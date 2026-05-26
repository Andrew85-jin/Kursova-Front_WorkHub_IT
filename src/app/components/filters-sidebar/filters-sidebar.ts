import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface JobFilters {
  search: string;
  city: string;

  fullTime: boolean;
  remote: boolean;

  junior: boolean;
  middle: boolean;
  senior: boolean;

  angular: boolean;
  react: boolean;
  node: boolean;
  nestjs: boolean;
  java: boolean;
  python: boolean;
  docker: boolean;
}

@Component({
  selector: 'app-filters-sidebar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filters-sidebar.html',
  styleUrl: './filters-sidebar.css',
})
export class FiltersSidebar {
  @Output()
  filtersChange = new EventEmitter<JobFilters>();

  search = '';
  city = '';

  fullTime = false;
  remote = false;

  junior = false;
  middle = false;
  senior = false;

  angular = false;
  react = false;
  node = false;
  nestjs = false;
  java = false;
  python = false;
  docker = false;

  isCollapsed = false;

  applyFilters() {
    this.filtersChange.emit({
      search: this.search.trim(),
      city: this.city.trim(),

      fullTime: this.fullTime,
      remote: this.remote,

      junior: this.junior,
      middle: this.middle,
      senior: this.senior,

      angular: this.angular,
      react: this.react,
      node: this.node,
      nestjs: this.nestjs,
      java: this.java,
      python: this.python,
      docker: this.docker,
    });
  }

  resetFilters() {
    this.search = '';
    this.city = '';

    this.fullTime = false;
    this.remote = false;

    this.junior = false;
    this.middle = false;
    this.senior = false;

    this.angular = false;
    this.react = false;
    this.node = false;
    this.nestjs = false;
    this.java = false;
    this.python = false;
    this.docker = false;

    this.applyFilters();
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
