import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../../shared/services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  mode: 'candidate' | 'employer' = 'candidate';

  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  setMode(mode: 'candidate' | 'employer') {
    this.mode = mode;
  }

  onRegister() {
    this.errorMessage = '';

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Паролі не співпадають';
      return;
    }

    this.authService
      .register({
        name: this.name,
        email: this.email,
        password: this.password,
        role: this.mode,
      })
      .subscribe({
        next: (response) => {
          this.authService.saveToken(response.accessToken);
          this.authService.currentUser.set(response.user);

          if (response.user.role === 'employer') {
            this.router.navigate(['/create-company']);
          } else {
            this.router.navigate(['/profile']);
          }
        },
        error: () => {
          this.errorMessage = 'Не вдалося зареєструватися';
        },
      });
  }
}
