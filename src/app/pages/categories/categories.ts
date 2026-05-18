import { Component } from '@angular/core';
import { CategoryCard } from '../../components/category-card/category-card';
import { categories } from '../../shared/data/category';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CategoryCard],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {
  categories = categories
}
