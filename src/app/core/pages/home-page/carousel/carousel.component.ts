import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
  private currentSlide = 1;
  private totalSlides = 4;
  private intervalId: any;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 3000);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  private nextSlide() {
    if (!this.isBrowser) return;

    this.currentSlide = this.currentSlide < this.totalSlides ? this.currentSlide + 1 : 1;

    // DaisyUI funciona con anchors, basta con cambiar el hash
    window.location.hash = `slide${this.currentSlide}`;
  }
}
