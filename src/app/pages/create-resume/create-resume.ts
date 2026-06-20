import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ResumesService } from '../../shared/services/resume';

@Component({
  selector: 'app-create-resume',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-resume.html',
  styleUrl: './create-resume.css',
})
export class CreateResume {
  fullName = '';
  position = '';
  city = '';
  email = '';
  phone = '';
  experience = '';
  skills = '';
  about = '';

  isLoading = false;

  errorMessage = '';
  successMessage = '';

  constructor(
    private resumesService: ResumesService,
    private router: Router,
  ) {}

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';

    this.isLoading = true;

    this.resumesService
      .createResume({
        fullName: this.fullName,
        position: this.position,
        city: this.city,
        email: this.email,
        phone: this.phone,
        experience: this.experience,

        skills: this.skills
          .split(',')
          .map((skill) => skill.trim())
          .filter((skill) => skill),

        about: this.about,
      })
      .subscribe({
        next: () => {
          this.isLoading = false;

          this.successMessage = 'Резюме успішно створено';

          setTimeout(() => {
            this.router.navigate(['/profile']);
          }, 1000);
        },

        error: () => {
          this.isLoading = false;

          this.errorMessage = 'Не вдалося створити резюме';
        },
      });
  }
}
