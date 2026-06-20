import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

import { environment } from '../../../environments/environment';

export interface CurrentUser {
  id: number;
  name?: string;
  email: string;
  role: 'candidate' | 'employer';
}

export interface AuthResponse {
  user: {
    id: number;
    name?: string;
    email: string;
    role: 'candidate' | 'employer';
  };
  accessToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  currentUser = signal<CurrentUser | null>(null);

  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string }) {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, data);
  }

  register(data: {
    name: string;
    email: string;
    password: string;
    role: 'candidate' | 'employer';
  }) {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/register`, data);
  }

  me() {
    return this.http.get<CurrentUser>(`${this.apiUrl}/auth/me`);
  }

  loadCurrentUser() {
    const token = this.getToken();

    if (!token) {
      return;
    }

    this.me().subscribe({
      next: (user) => {
        this.currentUser.set(user);
      },

      error: () => {
        this.logout();
      },
    });
  }

  saveToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  logout() {
    localStorage.removeItem('accessToken');

    this.currentUser.set(null);
  }

  isLoggedIn() {
    return !!this.currentUser();
  }

  isEmployer() {
    return this.currentUser()?.role === 'employer';
  }

  isCandidate() {
    return this.currentUser()?.role === 'candidate';
  }
}
