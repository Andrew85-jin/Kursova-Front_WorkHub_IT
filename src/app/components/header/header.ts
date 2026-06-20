import { Component, HostListener, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../shared/services/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isVisible = true;
  isHomePage = false;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    public authService: AuthService,
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.urlAfterRedirects === '/';

        if (this.isHomePage) {
          this.renderer.removeClass(document.body, 'has-fixed-header');
          this.isVisible = window.scrollY > 100;
        } else {
          this.renderer.addClass(document.body, 'has-fixed-header');
          this.isVisible = true;
        }
      }
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    if (this.isHomePage) {
      this.isVisible = window.scrollY > 100;
    }
  }

  logout() {
    this.authService.logout();

    this.router.navigate(['/']);
  }
}
