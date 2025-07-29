import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  private hasAnimated = new Set<Element>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initCounters();
    }
  }

  private initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter: Element) => {
      if (this.hasAnimated.has(counter)) return;
      this.hasAnimated.add(counter);
      
      const target = parseInt(counter.getAttribute('data-count') || '0', 10);
      let current = 0;
      const duration = 1000; // 1 second total duration
      const steps = 20; // Fewer steps for faster counting
      const stepDuration = duration / steps;
      
      const updateCounter = (step: number) => {
        if (step > steps) {
          counter.textContent = target.toString();
          counter.classList.remove('counting');
          return;
        }
        
        // Linear progression instead of easing
        current = Math.floor((step / steps) * target);
        
        counter.textContent = current.toString();
        counter.classList.add('counting');
        
        setTimeout(() => updateCounter(step + 1), stepDuration);
      };
      
      // Start the animation immediately
      counter.textContent = '0';
      updateCounter(1);
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
