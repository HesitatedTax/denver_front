import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SearchInputComponent } from "../../search-input/search-input.component";

interface ManuOptions{
  route: string
}

@Component({
  selector: 'app-main-menu',
  imports: [RouterLink, RouterLinkActive, SearchInputComponent],
  templateUrl: './main-menu.component.html',
})
export class MainMenuComponent { 

  menuOptions: ManuOptions[] = [
    {
      route: `/home/accessories`
    },
    {
      route: `/home/man`
    }
  ]
}
