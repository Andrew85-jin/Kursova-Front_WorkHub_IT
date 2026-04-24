import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.html',
  styleUrls: ['./job-card.css'],
  standalone: true,
})
export class JobCard {
  @Input() title: string = '';
  @Input() company: string = '';
  @Input() salary: string = '';
  @Input() location: string = '';
  @Input() experience: string = '';
}
