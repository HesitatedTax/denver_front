import { Component } from '@angular/core';
import { CarouselNewsComponent } from "./carousel-news/carousel-news.component";
import { BootsModelComponent } from "./boots-model/boots-model.component";

@Component({
  selector: 'app-home-page',
  imports: [CarouselNewsComponent, BootsModelComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent { }
