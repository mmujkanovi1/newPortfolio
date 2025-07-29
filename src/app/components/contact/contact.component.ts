import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {
      const serviceID = 'service_dn62x3h';
      const templateID = 'template_vsxq6pp';
      const userID = 'Fty6c-ENJZXPuJMO0';

      emailjs.send(serviceID, templateID, this.contactForm.value, userID)
        .then(() => {
          alert('Email sent successfully!');
          this.contactForm.reset();
          this.submitted = false;
        }, (err) => {
          console.error('Failed to send email:', err);
          alert('Failed to send email. Please try again later.');
        });
    }
  }
}