import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-company-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './company-card.html',
  styleUrl: './company-card.css',
})
export class CompanyCard {
  @Input() id!: number;
  @Input() name!: string;
  @Input() location!: string;
  @Input() employees!: number;
  @Input() description!: string;
  @Input() logo!: string;
}
