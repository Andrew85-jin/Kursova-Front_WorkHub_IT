import { Component } from '@angular/core';

@Component({
  selector: 'app-employer-applications',
  standalone: true,
  imports: [],
  templateUrl: './employer-applications.html',
  styleUrl: './employer-applications.css',
})
export class EmployerApplications {
  applications = [
    {
      id: 1,
      candidateName: 'Андрій Візітіу',
      position: 'Frontend Developer',
      email: 'andrii@example.com',
      experience: '1+ рік',
      status: 'Новий',
    },
    {
      id: 2,
      candidateName: 'Марія Коваль',
      position: 'UI/UX Designer',
      email: 'maria@example.com',
      experience: '2+ роки',
      status: 'Переглянуто',
    },
    {
      id: 3,
      candidateName: 'Олег Петренко',
      position: 'Backend Developer',
      email: 'oleg@example.com',
      experience: '3+ роки',
      status: 'Запрошено',
    },
  ];
}
