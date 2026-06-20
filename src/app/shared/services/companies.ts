import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { Job } from './jobs';

export interface Company {
  id: number;
  name: string;
  location: string;
  employees: number;
  description: string;
  logo: string;
  website?: string;
  jobs?: Job[];
}

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createCompany(data: {
    name: string;
    location: string;
    employees: number;
    description: string;
    logo: string;
    website?: string;
  }) {
    return this.http.post<Company>(`${this.apiUrl}/companies`, data);
  }

  getCompanies() {
    return this.http.get<Company[]>(`${this.apiUrl}/companies`);
  }

  getCompany(id: number) {
    return this.http.get<Company>(`${this.apiUrl}/companies/${id}`);
  }

  getMyCompany() {
    return this.http.get<Company>(`${this.apiUrl}/companies/my`);
  }

  updateMyCompany(data: Partial<Company>) {
    return this.http.patch<Company>(`${this.apiUrl}/companies/my`, data);
  }
}
