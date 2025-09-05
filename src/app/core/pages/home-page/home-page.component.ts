import { Component } from '@angular/core';
import { CarouselNewsComponent } from "./carousel-news/carousel-news.component";
import { BootsModelComponent } from "./boots-model/boots-model.component";
import { CarouselTrendsComponent } from "./carousel-trends/carousel-trends.component";

@Component({
  selector: 'app-home-page',
  imports: [CarouselNewsComponent, CarouselTrendsComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent { }
