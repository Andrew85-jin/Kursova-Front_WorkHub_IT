import { Component, OnInit } from '@angular/core';
import { CompanyCard } from '../../components/company-card/company-card';
import { CompaniesService, Company } from '../../shared/services/companies';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CompanyCard],
  templateUrl: './companies.html',
  styleUrl: './companies.css',
})
export class Companies implements OnInit {
  companies: Company[] = [];

  constructor(private companiesService: CompaniesService) {}

  ngOnInit() {
    this.companiesService.getCompanies().subscribe({
      next: (companies) => {
        this.companies = companies;
      },
    });
  }
}
