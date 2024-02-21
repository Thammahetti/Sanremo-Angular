import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ImmaginiBandComponent } from './Pagine/immagini-band/immagini-band.component';
import { CanzoniComponent } from './Pagine/canzoni/canzoni.component';
import { InfromazioniBandComponent } from './Pagine/infromazioni-band/infromazioni-band.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,CanzoniComponent,ImmaginiBandComponent,InfromazioniBandComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sanremo_pages';
}
