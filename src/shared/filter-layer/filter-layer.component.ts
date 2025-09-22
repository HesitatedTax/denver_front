import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 aquí está NgIf y NgFor
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-layer',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './filter-layer.component.html',
})
export class FilterLayerComponent { 
  filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'black', label: 'Black', checked: false },
        { value: 'blue', label: 'Blue', checked: false },
      ],
      open: true,
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: 's', label: 'Small', checked: false },
        { value: 'm', label: 'Medium', checked: true },
        { value: 'l', label: 'Large', checked: false },
      ],
      open: false,
    },
  ];

  toggle(filter: any) {
    filter.open = !filter.open;
  }
}
