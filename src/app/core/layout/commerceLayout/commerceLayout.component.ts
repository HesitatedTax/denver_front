import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FilterLayerComponent } from "../../../../shared/filter-layer/filter-layer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-commerce-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FilterLayerComponent],
  templateUrl: './commerceLayout.component.html',
})
export class CommerceLayoutComponent {
  //Sirve para detectar en que ruta estas
  constructor(public router: Router) {}
}
