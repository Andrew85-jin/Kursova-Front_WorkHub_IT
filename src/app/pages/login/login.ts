import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

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

  setMode(mode: 'candidate' | 'employer') {
    this.mode = mode;
  }

  onLogin() {
    console.log('login:', {
      role: this.mode,
      email: this.email,
      password: this.password,
    });
  }
}
