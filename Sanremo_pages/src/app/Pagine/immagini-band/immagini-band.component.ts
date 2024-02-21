import { Component } from '@angular/core';
import { PostPublicComponent } from '../../post-public/post-public.component';
import { FooterComponent } from '../../footer/footer.component';
@Component({
  selector: 'pagine-immagini',
  standalone: true,
  imports: [PostPublicComponent,FooterComponent],
  templateUrl: './immagini-band.component.html',
  styleUrl: './immagini-band.component.css'
})
export class ImmaginiBandComponent {
  ImageLink="https://media.gqitalia.it/photos/61686592bd7f6a332877796f/3:2/w_5126,h_3417,c_limit/bnkr44.jpg";
  ImageLink1= "https://www.greenme.it/wp-content/uploads/2024/02/bnkr44-membri-nomi-eta-sanremo-2024-governo-punk.jpg"
  ImageLink2 = "https://primoascolto.it/wp-content/uploads/2021/10/bnkr44.jpg"
} 
