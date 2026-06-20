import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Application, ApplicationsService } from '../../shared/services/applications';

import { Resume, ResumesService } from '../../shared/services/resume';

@Component({
  selector: 'app-employer-application-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employer-application-details.html',
  styleUrl: './employer-application-details.css',
})
export class EmployerApplicationDetails implements OnInit {
  application?: Application;
  resumes: Resume[] = [];
  statusMessage = '';
  isLoading = false;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private applicationsService: ApplicationsService,
    private resumesService: ResumesService,
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.isLoading = true;

    this.applicationsService.getApplication(id).subscribe({
      next: (application) => {
        this.application = application;

        const candidateId = application.candidate?.id;

        if (!candidateId) {
          this.isLoading = false;
          return;
        }

        this.resumesService.getResumesByUserId(candidateId).subscribe({
          next: (resumes) => {
            this.resumes = resumes;
            this.isLoading = false;
          },
          error: () => {
            this.errorMessage = 'Не вдалося завантажити резюме кандидата';
            this.isLoading = false;
          },
        });
      },
      error: () => {
        this.errorMessage = 'Не вдалося завантажити відгук';
        this.isLoading = false;
      },
    });
  }
  acceptApplication() {
    if (!this.application) return;

    this.applicationsService.updateApplicationStatus(this.application.id, 'accepted').subscribe({
      next: (application) => {
        this.application = application;

        this.statusMessage = 'Кандидата прийнято';
      },
    });
  }

  rejectApplication() {
    if (!this.application) return;

    this.applicationsService.updateApplicationStatus(this.application.id, 'rejected').subscribe({
      next: (application) => {
        this.application = application;

        this.statusMessage = 'Кандидата відхилено';
      },
    });
  }
}
