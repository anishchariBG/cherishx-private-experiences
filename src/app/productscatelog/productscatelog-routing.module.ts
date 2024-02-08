import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullviewproductComponent } from './fullviewproduct/fullviewproduct.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProductsubviewComponent } from './productsubview/productsubview.component';
import { RatingComponent } from './rating/rating.component';
import { MenulistComponent } from './menulist/menulist.component';

const routes: Routes = [
  {path:"",component:LandingpageComponent},
  {path:"fullviewproduct",component:FullviewproductComponent},
  {path:"menulist",component:MenulistComponent},
  {path:"productsubview",component:ProductsubviewComponent},
  {path:"rating",component:RatingComponent},
  {path:"**",component:LandingpageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductscatelogRoutingModule { }
