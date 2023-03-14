import { Component, OnInit } from '@angular/core';
import { IIngredient, IProduct } from 'src/models';
import { ProductService } from 'src/services';

@Component({
  selector: 'l-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private productService: ProductService) {}

  isOpen = false;
  products: IProduct[] = [];

  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => {
      this.products = data;
    });
  }
}
