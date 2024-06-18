import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isMenuActive = false;
  isDesktopSize = true;

  ngOnInit() {
    this.checkWindowSize(); 
  }

  toggleMenu(anchorId?: string) {
    this.isMenuActive = !this.isMenuActive;

    if (this.isMenuActive) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
      if (anchorId) {
        setTimeout(() => {
          const element = document.getElementById(anchorId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktopSize = event.target.innerWidth >= 750;
  }

  private checkWindowSize() {
    this.isDesktopSize = window.innerWidth >= 750;
  }
}
