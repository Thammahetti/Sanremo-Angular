import { Component } from '@angular/core';

import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Guida Spericolata', weight: 2023},
  {position: 2, name: 'Diavolo', weight: 2022},
  {position: 3, name: 'Girasole', weight: 2021},
  {position: 4, name: 'Moto Blu', weight: 2023},
  {position: 5, name: 'Mezzanotte', weight: 2023},
  {position: 6, name: 'Memoria', weight: 2023},
  {position: 7, name: 'Cambiare non posso', weight: 2023},
  {position: 8, name: 'Cosa sai di me?', weight: 2023},
  {position: 9, name: 'Luci', weight: 2020},
  {position: 10, name: 'Mai Sonno', weight: 2021},
];

@Component({
  selector: 'tables',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
}
