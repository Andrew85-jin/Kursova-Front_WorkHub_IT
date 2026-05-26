import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  user = {
    name: 'Андрій Візітіу',
    email: 'andrii@example.com',
    role: 'Кандидат',
    city: 'Черкаси',
    position: 'Frontend Developer',
  };

  savedJobs = 3;
  applications = 2;
}
