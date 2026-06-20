import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { JobsService, Job } from '../../shared/services/jobs';
import { ApplicationsService } from '../../shared/services/applications';
import { AuthService } from '../../shared/services/auth';

@Component({
  selector: 'app-vacancy-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vacancy-page.html',
  styleUrl: './vacancy-page.css',
})
export class VacancyPage implements OnInit {
  job?: Job;

  isLoading = false;
  isApplying = false;

  errorMessage = '';
  applyMessage = '';

  constructor(
    private route: ActivatedRoute,
    private jobsService: JobsService,
    private applicationsService: ApplicationsService,
    public authService: AuthService,
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.isLoading = true;

    this.jobsService.getJob(id).subscribe({
      next: (job) => {
        this.job = job;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Вакансію не знайдено';
        this.isLoading = false;
      },
    });
  }

  applyToJob() {
    if (!this.job) return;

    this.applyMessage = '';
    this.isApplying = true;

    this.applicationsService
      .createApplication({
        jobId: this.job.id,
        message: 'Мене зацікавила ця вакансія. Готовий обговорити деталі.',
      })
      .subscribe({
        next: () => {
          this.isApplying = false;
          this.applyMessage = 'Відгук успішно відправлено';
        },
        error: () => {
          this.isApplying = false;
          this.applyMessage = 'Не вдалося відправити відгук. Увійдіть як кандидат.';
        },
      });
  }
}
