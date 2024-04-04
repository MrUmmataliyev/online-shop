import { Component } from '@angular/core';
import { CaruselComponent } from '../carusel/carusel.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CaruselComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
