import { Component } from '@angular/core';
import { companies } from '../../shared/data/companies';
import { CompanyCard } from '../../components/company-card/company-card';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CompanyCard],
  templateUrl: './companies.html',
  styleUrl: './companies.css',
})
export class Companies {
  companies = companies;
}
