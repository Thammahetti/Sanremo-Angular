import { Component, input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Input} from '@angular/core';
@Component({
  selector: 'post',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './post-public.component.html',
  styleUrl: './post-public.component.css'
})
export class PostPublicComponent {
  @Input() Image= "";
}
