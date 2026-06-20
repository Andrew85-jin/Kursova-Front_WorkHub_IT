import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../shared/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  mode: 'candidate' | 'employer' = 'candidate';

  email = '';
  password = '';

  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  setMode(mode: 'candidate' | 'employer') {
    this.mode = mode;
  }

  onLogin() {
    this.errorMessage = '';

    this.authService
      .login({
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: (response) => {
          this.authService.saveToken(response.accessToken);
          this.authService.currentUser.set(response.user);

          if (response.user.role === 'employer') {
            this.router.navigate(['/employer']);
          } else {
            this.router.navigate(['/profile']);
          }
        },
        error: () => {
          this.errorMessage = 'Невірний email або пароль';
        },
      });
  }
}
