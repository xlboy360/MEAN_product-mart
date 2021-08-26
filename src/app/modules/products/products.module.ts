import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from '../../components/products/products.component';
import { ProductDataService } from 'src/app/services/product-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, ProductsRoutingModule, HttpClientModule],
  providers: [ProductDataService],
})
export class ProductsModule {}
