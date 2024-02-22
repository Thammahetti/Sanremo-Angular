import { Component } from '@angular/core';
import { ContactComponent } from '../../contact/contact.component';
import { FooterComponent } from '../../footer/footer.component';
@Component({
  selector: 'pagine-infromazioni',
  standalone: true,
  imports: [ContactComponent,FooterComponent],
  templateUrl: './infromazioni-band.component.html',
  styleUrl: './infromazioni-band.component.css'
})
export class InfromazioniBandComponent {

}
