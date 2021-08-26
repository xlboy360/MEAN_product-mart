import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Observable<any> | undefined;

  constructor(private productDataService: ProductDataService) { }

  ngOnInit(): void {
    this.products = this.productDataService.getAllProducts();
  }

}
