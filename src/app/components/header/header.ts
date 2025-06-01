import { Component, EventEmitter, Output, OnInit, OnDestroy, PLATFORM_ID, Inject, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sectionChange = new EventEmitter<string>();
  
  isMobileMenuOpen = false;
  activeSection = 'home';
  private observer: any = null;
  private isBrowser: boolean;
  private isScrolling = false;
  private scrollTimeout: any = null;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private ngZone: NgZone
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.setupIntersectionObserver();
      this.setupScrollListener();
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.isBrowser) {
      window.removeEventListener('scroll', this.handleScroll);
    }
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }

  private setupScrollListener() {
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.handleScroll.bind(this), { passive: true });
    });
  }

  private handleScroll = () => {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    this.isScrolling = true;

    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
      this.checkVisibleSection();
    }, 50);
  };

  private checkVisibleSection() {
    const sections = ['home', 'about', 'projects', 'education'];
    let maxVisibility = 0;
    let mostVisibleSection = this.activeSection;

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how much of the section is visible
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const visibility = visibleHeight / element.offsetHeight;

        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          mostVisibleSection = sectionId;
        }
      }
    });

    if (mostVisibleSection !== this.activeSection) {
      this.ngZone.run(() => {
        this.setActiveSection(mostVisibleSection);
      });
    }
  }

  private setupIntersectionObserver() {
    if (!this.isBrowser || !window.IntersectionObserver) {
      return;
    }

    const options = {
      root: null,
      rootMargin: '-20% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    this.observer = new window.IntersectionObserver((entries) => {
      if (!this.isScrolling) {
        let maxRatio = 0;
        let mostVisibleSection: string | null = null;

        entries.forEach(entry => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });

        if (mostVisibleSection && maxRatio > 0.25) {
          this.ngZone.run(() => {
            this.setActiveSection(mostVisibleSection as string);
          });
        }
      }
    }, options);

    setTimeout(() => {
      ['home', 'about', 'projects', 'education'].forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element && this.observer) {
          this.observer.observe(element);
        }
      });
    }, 0);
  }

  onNavClick(sectionId: string) {
    this.setActiveSection(sectionId);
    this.sectionChange.emit(sectionId);
  }

  setActiveSection(sectionId: string) {
    this.activeSection = sectionId;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }
}
