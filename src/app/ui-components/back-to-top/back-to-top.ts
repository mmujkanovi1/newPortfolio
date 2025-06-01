import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: false,
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.scss'
})
export class BackToTopComponent implements OnInit {
  isVisible = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show button when page is scrolled more than 300px
    this.isVisible = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
} 