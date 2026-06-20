import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

export interface Job {
  id: number;

  title: string;

  company: string;

  companyId: number;

  salary: string;

  location: string;

  experience: string;

  description: string;

  skills: string[];

  tags: string[];

  status: string;

  createdAt: string;
}

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getJobs() {
    return this.http.get<Job[]>(`${this.apiUrl}/jobs`);
  }

  getJob(id: number) {
    return this.http.get<Job>(`${this.apiUrl}/jobs/${id}`);
  }

  createJob(data: {
    title: string;

    salary: string;

    location: string;

    experience: string;

    description: string;

    skills: string[];

    tags: string[];

    status: string;
  }) {
    return this.http.post<Job>(`${this.apiUrl}/jobs`, data);
  }

  updateJob(
    id: number,
    data: {
      title: string;
      salary: string;
      location: string;
      experience: string;
      description: string;
      skills: string[];
      tags: string[];
      status: string;
    },
  ) {
    return this.http.patch<Job>(`${this.apiUrl}/jobs/${id}`, data);
  }

  deleteJob(id: number) {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/jobs/${id}`);
  }
}
