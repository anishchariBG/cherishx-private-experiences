import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadertopRoutingModule } from './headertop-routing.module';
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
    CommonModule,
    HeadertopRoutingModule
  ]
})
export class HeadertopModule { }