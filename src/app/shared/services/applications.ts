import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

export interface Application {
  id: number;
  message: string;
  status: 'new' | 'reviewed' | 'accepted' | 'rejected';
  createdAt: string;

  candidate?: {
    id: number;
    name: string;
    email: string;
    role: 'candidate' | 'employer';
  };

  job?: {
    id: number;
    title: string;
    company: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ApplicationsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createApplication(data: { jobId: number; message: string }) {
    return this.http.post<Application>(`${this.apiUrl}/applications`, data);
  }

  updateApplicationStatus(id: number, status: 'accepted' | 'rejected') {
    return this.http.patch<Application>(`${this.apiUrl}/applications/${id}/status`, {
      status,
    });
  }

  getMyApplications() {
    return this.http.get<Application[]>(`${this.apiUrl}/applications/my`);
  }

  getApplicationsByJob(jobId: number) {
    return this.http.get<Application[]>(`${this.apiUrl}/applications/job/${jobId}`);
  }
  getApplication(id: number) {
    return this.http.get<Application>(`${this.apiUrl}/applications/${id}`);
  }
}
