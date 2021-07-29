import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService
  ) {}

  title = 'Ürün Listesi';
  public filterText = '';
  
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 2500,
      categoryId: 1,
      description: 'Asus ZenBook',
      imageUrl:
        'https://as1.ftcdn.net/v2/jpg/02/66/33/90/1000_F_266339089_4gB5GxUs0OKsPmWJeIu0bW92WdF0abhV.jpg',
    },
    {
      id: 2,
      name: 'Maus',
      price: 25,
      categoryId: 2,
      description: 'A4 Tech',
      imageUrl:
        'https://as1.ftcdn.net/v2/jpg/02/66/33/90/1000_F_266339089_4gB5GxUs0OKsPmWJeIu0bW92WdF0abhV.jpg',
    },
  ];
 
  ngOnInit() {
  //  this.productService.getProduct().subscribe(data=>{
  //    this.products = data
  //  });
  }

  addToCart(product: any) {
    this.alertifyService.error(product.name + ' added');
   
  }


}
