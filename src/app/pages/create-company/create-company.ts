import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CompaniesService } from '../../shared/services/companies';

@Component({
  selector: 'app-create-company',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-company.html',
  styleUrl: './create-company.css',
})
export class CreateCompany {
  name = '';
  location = '';
  employees = 1;
  description = '';
  website = '';

  errorMessage = '';
  successMessage = '';
  isLoading = false;

  constructor(
    private companiesService: CompaniesService,
    private router: Router,
  ) {}

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';
    this.isLoading = true;

    this.companiesService
      .createCompany({
        name: this.name,
        location: this.location,
        employees: this.employees,
        description: this.description,
        logo: this.name.slice(0, 2).toUpperCase(),
        website: this.website,
      })
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.successMessage = 'Компанію успішно створено';

          setTimeout(() => {
            this.router.navigate(['/employer']);
          }, 800);
        },
        error: () => {
          this.isLoading = false;
          this.errorMessage = 'Не вдалося створити компанію';
        },
      });
  }
}
