import { Component, HostListener, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isVisible: boolean = true;
  isHomePage: boolean = false;

  constructor(
    private router: Router,
    private renderer: Renderer2,
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.urlAfterRedirects === '/';

        if (this.isHomePage) {
          this.renderer.removeClass(document.body, 'has-fixed-header');
        } else {
          this.renderer.addClass(document.body, 'has-fixed-header');
        }

        if (!this.isHomePage) {
          this.isVisible = true;
        } else {
          this.isVisible = window.scrollY > 100;
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
}
