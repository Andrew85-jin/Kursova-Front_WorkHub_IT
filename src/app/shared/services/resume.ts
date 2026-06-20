import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

export interface Resume {
  id: number;
  fullName: string;
  position: string;
  city: string;
  email: string;
  phone: string;
  experience: string;
  skills: string[];
  about: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root',
})
export class ResumesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMyResumes() {
    return this.http.get<Resume[]>(`${this.apiUrl}/resumes/my`);
  }

  getResumesByUserId(userId: number) {
    return this.http.get<Resume[]>(`${this.apiUrl}/resumes/user/${userId}`);
  }

  createResume(data: {
    fullName: string;
    position: string;
    city: string;
    email: string;
    phone: string;
    experience: string;
    skills: string[];
    about: string;
  }) {
    return this.http.post<Resume>(`${this.apiUrl}/resumes`, data);
  }
}
