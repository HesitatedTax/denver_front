import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarouselComponent } from "./carousel/carousel.component";
import { CarouselNewsComponent } from "./carousel-news/carousel-news.component";

@Component({
  selector: 'app-home-page',
  imports: [CarouselNewsComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }
