import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadertopRoutingModule } from './headertop-routing.module';
import { HeaderComponent } from './header/header.component';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    HeaderComponent,
    HelpcenterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HeadertopRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule ,
    MatIconModule,
    MatListModule
  ]
})
export class HeadertopModule { }
