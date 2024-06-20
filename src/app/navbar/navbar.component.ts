import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  isMenuActive = false;
  isDesktopSize = true;
  currentLanguage: string = 'de';
  translate!: TranslateService;
  activeLink: string = '';

  constructor(translate: TranslateService) {
    this.translate = translate;
  }

  changeLanguage(lang: string) {
    this.currentLanguage = lang;
    this.translate.use(lang);
  }

  setActiveLink(link: string): void {
    this.activeLink = link;
  }

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
