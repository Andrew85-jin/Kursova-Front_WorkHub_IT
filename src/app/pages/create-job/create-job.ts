import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-job',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-job.html',
  styleUrl: './create-job.css',
})
export class CreateJob {
  title = '';
  company = '';
  salary = '';
  location = '';
  experience = '';
  description = '';

  skills = '';
  tags = '';

  onSubmit() {
    const job = {
      title: this.title,
      company: this.company,
      salary: this.salary,
      location: this.location,
      experience: this.experience,
      description: this.description,

      skills: this.skills.split(',').map((skill) => skill.trim()),

      tags: this.tags.split(',').map((tag) => tag.trim()),
    };

    console.log(job);
  }
}
