import { Injectable } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class DisableService {

  disable = false;
  activeLink: string = '';
  currentLanguage: string = 'de';
  translate!: TranslateService;

  constructor() { }

  clickDisable(change: boolean) {
    this.disable = change;
  }

  changeLanguage(lang: string) {
    this.currentLanguage = lang;
    this.translate.use(lang);
  }

}
