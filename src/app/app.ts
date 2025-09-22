import { Component, signal } from '@angular/core';
import { MainMenuComponent } from "./core/components/top-menu/main-menu/main-menu.component";
import { FooterComponent } from "../shared/footer/footer.component"
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [MainMenuComponent, RouterOutlet, FooterComponent]
})
export class App {
  protected readonly title = signal('denver_frot');
}
