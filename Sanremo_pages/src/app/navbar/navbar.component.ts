import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'navbar',
  standalone: true,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,MatMenuModule, RouterOutlet],
})
export class NavbarComponent {
  constructor(private router: Router) {}

  navigateImmagini() {
    this.router.navigate(['Immagini']);
  }
  navigateCanzoni(){
    this.router.navigate(['Canzoni']);
  }
  navigateInformazioni(){
    this.router.navigate(['Informazione']);
  }
}
