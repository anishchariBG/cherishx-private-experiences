import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductscatelogRoutingModule } from './productscatelog-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProductsubviewComponent } from './productsubview/productsubview.component';
import { FullviewproductComponent } from './fullviewproduct/fullviewproduct.component';
import { RatingComponent } from './rating/rating.component';
import { MenulistComponent } from './menulist/menulist.component';

import { CarouselModule } from 'primeng/carousel'; 
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


@NgModule({
  declarations: [
    LandingpageComponent,
    ProductsubviewComponent,
    FullviewproductComponent,
    RatingComponent,
    MenulistComponent
  ],
  imports: [
    ProductscatelogRoutingModule, CarouselModule,
    BrowserModule,
    CommonModule
  ],
  exports: [
    MenulistComponent
  ] 
})
export class ProductscatelogModule { }
