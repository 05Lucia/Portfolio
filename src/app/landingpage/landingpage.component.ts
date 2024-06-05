import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkilsComponent } from './skils/skils.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { IntroComponent } from './intro/intro.component';


@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule, AboutMeComponent, SkilsComponent, ProjectsComponent, ContactComponent, IntroComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
