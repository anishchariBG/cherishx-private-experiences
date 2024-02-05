import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductscatelogRoutingModule } from './productscatelog-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProductsubviewComponent } from './productsubview/productsubview.component';
import { FullviewproductComponent } from './fullviewproduct/fullviewproduct.component';
import { RatingComponent } from './rating/rating.component';


@NgModule({
  declarations: [
    LandingpageComponent,
    ProductsubviewComponent,
    FullviewproductComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    ProductscatelogRoutingModule
  ]
})
export class ProductscatelogModule { }
