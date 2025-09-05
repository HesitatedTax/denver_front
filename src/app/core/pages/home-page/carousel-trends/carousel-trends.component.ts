import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { NgStyle } from '@angular/common';   // 👈 Importa NgStyle

@Component({
  selector: 'carousel-trends',
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './carousel-trends.component.html',
  standalone: true,

})
export class CarouselTrendsComponent { 
   products: any[] = [
    {
      name: 'Laptop',
      price: 1200,
      image: 'bamboo-watch.jpg',
      inventoryStatus: 'INSTOCK'
    },
    {
      name: 'Headphones',
      price: 350,
      image: 'black-watch.jpg',
      inventoryStatus: 'LOWSTOCK'
    },
    {
      name: 'Smartphone',
      price: 800,
      image: 'blue-band.jpg',
      inventoryStatus: 'OUTOFSTOCK'
    },
    {
      name: 'Camera',
      price: 600,
      image: 'game-controller.jpg',
      inventoryStatus: 'INSTOCK'
    }
  ];

  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }
}
