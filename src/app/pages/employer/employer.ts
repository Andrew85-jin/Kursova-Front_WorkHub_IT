import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';

import { AuthService } from '../../shared/services/auth';

@Component({
  selector: 'app-employer',
  imports: [RouterLink],
  templateUrl: './employer.html',
  styleUrl: './employer.css',
})
export class Employer {
  constructor(public authService: AuthService) { }
}
