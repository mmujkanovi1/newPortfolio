import { Component } from '@angular/core';

interface Testimonial {
  content: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: false,
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      content: 'I am happy with Mirya and his work done. He is motivated and tries to solve occuring problems.'
    },
    {
      content: 'He presents himself professionally, with a respectfull friendly attitude, making him a great team player.'
    },
    {
      content: 'Hi is nice to talk him about anything'
    },
    {
      content: 'Asks for help when needed'
    },
    {
      content: 'Dilligent, immediately solves issues'
    },
    {
      content: 'Strong technical understanding and proacting attitude'
    }
  ];

  currentIndex = 0;

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  previousTestimonial() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  setTestimonial(index: number) {
    this.currentIndex = index;
  }
} 