import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { JobsService } from '../../shared/services/jobs';

@Component({
  selector: 'app-create-job',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-job.html',
  styleUrl: './create-job.css',
})
export class CreateJob {
  title = '';
  salary = '';
  location = '';
  experience = '';
  description = '';

  skills = '';
  tags = '';

  errorMessage = '';
  successMessage = '';

  isLoading = false;

  constructor(
    private jobsService: JobsService,
    private router: Router,
  ) {}

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';
    this.isLoading = true;

    this.jobsService
      .createJob({
        title: this.title,
        salary: this.salary,
        location: this.location,
        experience: this.experience,
        description: this.description,

        skills: this.skills
          .split(',')
          .map((skill) => skill.trim())
          .filter((skill) => skill),

        tags: this.tags
          .split(',')
          .map((tag) => tag.trim())
          .filter((tag) => tag),

        status: 'active',
      })
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.successMessage = 'Вакансію успішно створено';

          setTimeout(() => {
            this.router.navigate(['/jobs']);
          }, 1000);
        },

        error: () => {
          this.isLoading = false;
          this.errorMessage = 'Не вдалося створити вакансію';
        },
      });
  }
}
