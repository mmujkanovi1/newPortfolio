import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  private hasAnimated = new Set<Element>();

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initCounters();
  }

  private initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter: Element) => {
      if (this.hasAnimated.has(counter)) return;
      this.hasAnimated.add(counter);
      
      const target = parseInt(counter.getAttribute('data-count') || '0', 10);
      let current = 0;
      const duration = 2000; // 2 seconds
      const steps = 60; // Smooth animation with 60 steps
      const stepDuration = duration / steps;
      
      // Easing function for smooth animation
      const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);
      
      const updateCounter = (step: number) => {
        if (step > steps) {
          counter.textContent = target.toString();
          counter.classList.remove('counting');
          return;
        }
        
        const progress = step / steps;
        const easedProgress = easeOutQuart(progress);
        current = Math.floor(easedProgress * target);
        
        counter.textContent = current.toString();
        counter.classList.add('counting');
        
        setTimeout(() => updateCounter(step + 1), stepDuration);
      };
      
      // Start the animation
      counter.textContent = '0';
      setTimeout(() => updateCounter(1), 100);
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
      rootMargin: '-50px'
    });

    counters.forEach(counter => {
      counter.textContent = '0';
      observer.observe(counter);
    });
  }
} 