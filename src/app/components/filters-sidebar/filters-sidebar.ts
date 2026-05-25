import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters-sidebar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filters-sidebar.html',
  styleUrl: './filters-sidebar.css',
})
export class FiltersSidebar {
  @Output()
  filtersChange = new EventEmitter();

  search = '';
  city = '';
  fullTime = false;
  remote = false;
  junior = false;
  senior = false;
  isCollapsed = false;

  applyFilters() {
    this.filtersChange.emit({
      search: this.search,
      city: this.city,
      fullTime: this.fullTime,
      remote: this.remote,
      junior: this.junior,
      senior: this.senior,
    });
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
