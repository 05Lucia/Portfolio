import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DisableService } from '../../disable.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  disableServis = inject(DisableService);

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  }

  mailTest = false;
  messageSend = false;

  post = {
    endPoint: 'https://alice-buchholz.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log(response);
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => this.showSuccess(),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  showSuccess() {
    this.messageSend = true;
    setTimeout(() => {
      this.messageSend = false;
    }, 3000);
  }

  disable(change:boolean) {
    this.disableServis.clickDisable (change);
    this.disableServis.currentLanguage === 'de';
    this.disableServis.changeLanguage ('de');
  }

  setActiveLink(link: string): void {
    this.disableServis.activeLink = link;
  }

}
