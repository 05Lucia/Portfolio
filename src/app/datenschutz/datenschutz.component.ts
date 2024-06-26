import { Location } from '@angular/common';
import { Component, OnInit, inject, } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DisableService } from '../disable.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-datenschutz',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './datenschutz.component.html',
  styleUrl: './datenschutz.component.scss'
})
export class DatenschutzComponent {

  ngAfterViewInit() {
    window.scroll(0, 0)
  }

  constructor () {}


}
