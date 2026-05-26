import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-resume',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-resume.html',
  styleUrl: './create-resume.css',
})
export class CreateResume {
  fullName = '';
  position = '';
  city = '';
  email = '';
  phone = '';
  experience = '';
  skills = '';
  about = '';

  onSubmit() {
    const resume = {
      fullName: this.fullName,
      position: this.position,
      city: this.city,
      email: this.email,
      phone: this.phone,
      experience: this.experience,
      skills: this.skills,
      about: this.about,
    };

    console.log('Resume:', resume);
  }
}
