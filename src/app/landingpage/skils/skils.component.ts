import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skils',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './skils.component.html',
  styleUrl: './skils.component.scss'
})
export class SkilsComponent {

}
