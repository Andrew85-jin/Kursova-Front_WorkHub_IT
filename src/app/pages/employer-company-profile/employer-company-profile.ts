import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employer-company-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employer-company-profile.html',
  styleUrl: './employer-company-profile.css',
})
export class EmployerCompanyProfile {
  companyName = 'TechnoHub';
  logo = 'TH';
  location = 'Київ';
  employees = 120;
  website = 'https://technohub.com';
  description = 'IT компанія яка займається веб-розробкою.';

  onSave() {
    console.log({
      companyName: this.companyName,
      logo: this.logo,
      location: this.location,
      employees: this.employees,
      website: this.website,
      description: this.description,
    });
  }
}
