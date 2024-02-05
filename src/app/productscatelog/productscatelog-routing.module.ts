import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullviewproductComponent } from './fullviewproduct/fullviewproduct.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProductsubviewComponent } from './productsubview/productsubview.component';
import { RatingComponent } from './rating/rating.component';

const routes: Routes = [
  {path:"fullviewproduct",component:FullviewproductComponent},
  {path:"landingpage",component:LandingpageComponent},
  {path:"productsubview",component:ProductsubviewComponent},
  {path:"rating",component:RatingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductscatelogRoutingModule { }
