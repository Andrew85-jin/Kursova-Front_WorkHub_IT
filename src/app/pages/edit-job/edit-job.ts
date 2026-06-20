import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { JobsService } from '../../shared/services/jobs';

@Component({
  selector: 'app-edit-job',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-job.html',
  styleUrl: './edit-job.css',
})
export class EditJob implements OnInit {
  jobId!: number;

  title = '';
  salary = '';
  location = '';
  experience = '';
  description = '';

  skills = '';
  tags = '';

  status = 'active';

  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobsService: JobsService,
  ) {}

  ngOnInit() {
    this.jobId = Number(this.route.snapshot.paramMap.get('id'));

    this.loadJob();
  }

  loadJob() {
    this.isLoading = true;

    this.jobsService.getJob(this.jobId).subscribe({
      next: (job) => {
        this.title = job.title;
        this.salary = job.salary;
        this.location = job.location;
        this.experience = job.experience;
        this.description = job.description;
        this.skills = job.skills.join(', ');
        this.tags = job.tags.join(', ');
        this.status = job.status;

        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Не вдалося завантажити вакансію';
        this.isLoading = false;
      },
    });
  }

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';
    this.isLoading = true;

    this.jobsService
      .updateJob(this.jobId, {
        title: this.title,
        salary: this.salary,
        location: this.location,
        experience: this.experience,
        description: this.description,
        skills: this.skills
          .split(',')
          .map((skill) => skill.trim())
          .filter((skill) => skill),
        tags: this.tags
          .split(',')
          .map((tag) => tag.trim())
          .filter((tag) => tag),
        status: this.status,
      })
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.successMessage = 'Вакансію оновлено';

          setTimeout(() => {
            this.router.navigate(['/employer/jobs']);
          }, 800);
        },
        error: () => {
          this.isLoading = false;
          this.errorMessage = 'Не вдалося оновити вакансію';
        },
      });
  }
}
