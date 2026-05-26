import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
  companyName = '';

  email = '';
  password = '';
  confirmPassword = '';

  errorMessage = '';

  setMode(mode: 'candidate' | 'employer') {
    this.mode = mode;
  }

  onRegister() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Паролі не співпадають';

      return;
    }

    this.errorMessage = '';

    console.log('register:', {
      role: this.mode,
      name: this.name,
      companyName: this.companyName,
      email: this.email,
      password: this.password,
    });
  }
}
