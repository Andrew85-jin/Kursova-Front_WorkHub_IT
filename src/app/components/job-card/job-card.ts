import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.html',
  styleUrls: ['./job-card.css'],
  standalone: true,
  imports: [RouterLink],
})
export class JobCard {
  @Input() id!: number;
  @Input() link!: string[];
  @Input() title!: string;
  @Input() company!: string;
  @Input() salary!: string;
  @Input() location!: string;
  @Input() experience!: string;
  @Input() skills: string[] = [];
  @Input() tags: string[] = [];
}
