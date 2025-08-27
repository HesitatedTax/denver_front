import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarouselComponent } from "./carousel/carousel.component";

@Component({
  selector: 'app-home-page',
  imports: [CarouselComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }
