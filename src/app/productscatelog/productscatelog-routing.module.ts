import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullviewproductComponent } from './fullviewproduct/fullviewproduct.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MenulistComponent } from './menulist/menulist.component';
import { RatingComponent } from './rating/rating.component';
import { ProductsubviewComponent } from './productsubview/productsubview.component';


const routes: Routes = [
 {path:"fullview",component:FullviewproductComponent},
 {path:"landingpage",component:LandingpageComponent},
 {path:"menulist",component:MenulistComponent},
 {path:"rating",component:RatingComponent},
 {path:"productsubview",component:ProductsubviewComponent},
 {path:"**",component:LandingpageComponent}
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductscatelogRoutingModule { }
