import { Component } from '@angular/core';
import { TableComponent } from '../../table/table.component';
import { FooterComponent } from '../../footer/footer.component';
@Component({
  selector: 'pagine-canzoni',
  standalone: true,
  imports: [TableComponent, FooterComponent],
  templateUrl: './canzoni.component.html',
  styleUrl: './canzoni.component.css'
})
export class CanzoniComponent {

}
