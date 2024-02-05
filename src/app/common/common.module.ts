import { NgModule } from '@angular/core';

import { CommonRoutingModule } from './common-routing.module';
import { HeaderComponent } from './header/header.component';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HelpcenterComponent,
    NavbarComponent
  ],
  imports: [
    CommonRoutingModule
  ]
})
export class CommonModule { }
