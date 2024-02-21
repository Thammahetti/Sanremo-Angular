import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ImmaginiBandComponent } from './Pagine/immagini-band/immagini-band.component';
import { InfromazioniBandComponent } from './Pagine/infromazioni-band/infromazioni-band.component';
import { CanzoniComponent } from './Pagine/canzoni/canzoni.component';
import { HomeComponent } from './Pagine/home/home.component';
export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'Immagini', component: ImmaginiBandComponent},
    {path: 'Canzoni', component: CanzoniComponent },
    {path: 'Informazione', component: InfromazioniBandComponent }
];
