import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
 {path:"header",component:HeaderComponent},
 {path:"help",component:HelpcenterComponent},
 {path:"navbar",component:NavbarComponent}
  
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HeadertopRoutingModule { }
