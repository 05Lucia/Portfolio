import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject } from '@angular/core';
import { ProjectdataService } from './projectdata.service';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  projectData = inject(ProjectdataService);

  ngAfterViewInit(): void {
    AOS.init({});
  }

}
