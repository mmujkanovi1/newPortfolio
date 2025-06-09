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
      content: 'Working with Mirza was an exceptional experience. His technical expertise and problem-solving abilities are outstanding. He consistently delivered high-quality solutions and was a valuable team member.'
    },
    {
      content: 'Mirza demonstrated excellent leadership and technical skills during our project collaboration. His ability to understand complex requirements and translate them into elegant solutions was impressive.'
    },
    {
      content: 'I had the pleasure of working with Mirza on several critical projects. His dedication to quality and attention to detail made him stand out. He\'s not just a developer, but a true problem solver.'
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