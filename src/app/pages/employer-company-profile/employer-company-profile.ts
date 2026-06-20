import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CompaniesService, Company } from '../../shared/services/companies';

@Component({
  selector: 'app-employer-company-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employer-company-profile.html',
  styleUrl: './employer-company-profile.css',
})
export class EmployerCompanyProfile implements OnInit {
  company?: Company;

  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(private companiesService: CompaniesService) {}

  ngOnInit() {
    this.loadCompany();
  }

  loadCompany() {
    this.isLoading = true;

    this.companiesService.getMyCompany().subscribe({
      next: (company) => {
        this.company = company;
        this.isLoading = false;
      },

      error: () => {
        this.errorMessage = 'Не вдалося завантажити компанію';

        this.isLoading = false;
      },
    });
  }

  onSave() {
    if (!this.company) return;

    this.errorMessage = '';
    this.successMessage = '';

    this.companiesService
      .updateMyCompany({
        name: this.company.name,
        logo: this.company.logo,
        location: this.company.location,
        employees: this.company.employees,
        website: this.company.website,
        description: this.company.description,
      })
      .subscribe({
        next: (company) => {
          this.company = company;
          this.successMessage = 'Компанію успішно оновлено';
        },
        error: () => {
          this.errorMessage = 'Не вдалося оновити компанію';
        },
      });
  }
}
