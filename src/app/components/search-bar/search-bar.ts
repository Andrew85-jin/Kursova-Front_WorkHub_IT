import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  @Output() searchChange = new EventEmitter<{
    text: string;
    city: string;
  }>();

  searchValue: string = '';
  cityValue: string = '';

  onSearch() {
    this.searchChange.emit({
      text: this.searchValue,
      city: this.cityValue,
    });
  }
}
