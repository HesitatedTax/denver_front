import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Carousel } from 'flowbite';
import type { CarouselInterface, CarouselOptions } from 'flowbite';

@Component({
  selector: 'carousel-news',
  templateUrl: './carousel-news.component.html',
})
export class CarouselNewsComponent implements AfterViewInit {
  @ViewChild('carouselContainer', { static: false }) carouselContainer!: ElementRef<HTMLElement>;

  carousel!: CarouselInterface;

  ngAfterViewInit() {
    const carouselElement = this.carouselContainer.nativeElement;

    const items = Array.from(
      carouselElement.querySelectorAll<HTMLElement>('[data-carousel-item]')
    ).map((el, index) => ({ position: index, el }));

    const indicators = Array.from(
      carouselElement.querySelectorAll<HTMLElement>('[data-carousel-slide-to]')
    ).map((el, index) => ({ position: index, el }));

    const options: CarouselOptions = {
      defaultPosition: 0,
      interval: 3000,
      indicators: {
        items,
        activeClasses: 'bg-white dark:bg-gray-800',
        inactiveClasses:
          'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
      },
    };

    this.carousel = new Carousel(carouselElement, items, options);
    this.carousel.cycle();

    const prevButton = carouselElement.querySelector<HTMLElement>('[data-carousel-prev]');
    const nextButton = carouselElement.querySelector<HTMLElement>('[data-carousel-next]');

    prevButton?.addEventListener('click', () => this.carousel.prev());
    nextButton?.addEventListener('click', () => this.carousel.next());
  }
}
