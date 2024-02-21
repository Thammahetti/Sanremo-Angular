import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ImmaginiBandComponent } from './Pagine/immagini-band/immagini-band.component';
import { CanzoniComponent } from './Pagine/canzoni/canzoni.component';
import { InfromazioniBandComponent } from './Pagine/infromazioni-band/infromazioni-band.component';
import { HomeComponent } from './Pagine/home/home.component';

@NgModule({
  declarations: [
    ImmaginiBandComponent,
    InfromazioniBandComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NavbarComponent,
    ImmaginiBandComponent,
    CanzoniComponent,
    InfromazioniBandComponent,
    HomeComponent
  ]
})
export class AppModule { }
