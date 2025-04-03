import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [MatTooltipModule, CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent implements OnInit{
  products:Product[] = []
  constructor(private productService: ProductService){

  }
  ngOnInit(): void {
      this.getProducts();
  }

  getProducts():void{
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }
}
