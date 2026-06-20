import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AuthService, CurrentUser } from '../../shared/services/auth';
import { ResumesService, Resume } from '../../shared/services/resume';
import { ApplicationsService, Application } from '../../shared/services/applications';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  user: CurrentUser | null = null;

  resumes: Resume[] = [];
  applications: Application[] = [];

  isLoading = false;
  errorMessage = '';

  constructor(
    public authService: AuthService,
    private resumesService: ResumesService,
    private applicationsService: ApplicationsService,
  ) {}

  ngOnInit() {
    this.user = this.authService.currentUser();

    this.loadProfileData();
  }

  loadProfileData() {
    this.isLoading = true;

    this.resumesService.getMyResumes().subscribe({
      next: (resumes) => {
        this.resumes = resumes;
      },
    });

    this.applicationsService.getMyApplications().subscribe({
      next: (applications) => {
        this.applications = applications;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Не вдалося завантажити профіль';
        this.isLoading = false;
      },
    });
  }
}
