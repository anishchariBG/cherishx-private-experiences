import { NgModule } from '@angular/core';


import { HeadertopRoutingModule } from './headertop-routing.module';
import { HeaderComponent } from './header/header.component';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    HelpcenterComponent,
    NavbarComponent
  ],
  imports: [
    HeadertopRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule ,
    MatIconModule,
    CardModule,
    MatListModule,
    ButtonModule,
    CommonModule
  ]
})
export class HeadertopModule { }
