import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DisableService } from '../disable.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

disableServis = inject(DisableService);

  isMenuActive = false;
  isDesktopSize = true;
  translate!: TranslateService;
  

  constructor(translate: TranslateService) {
    this.translate = translate;
  }

  changeLanguage(lang: string) {
    this.disableServis.currentLanguage = lang;
    this.translate.use(lang);
  }

  setActiveLink(link: string): void {
    this.disableServis.activeLink = link;
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

  undisable(change:boolean) {
    this.disableServis.clickDisable (change);
  }
}
