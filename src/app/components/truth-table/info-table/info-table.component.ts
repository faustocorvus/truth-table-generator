import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  operator: string;
  example: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {operator: '´', name: 'Negation(Not)', example: 'A´'},
  {operator: '˄', name: 'Conjunction', example: 'A ˄ B'},
  {operator: '˅', name: 'Disjunction', example: 'A ˅ B'},
  {operator: '⋂', name: 'Intersection', example: 'A ⋂ B'},
  {operator: '⋃', name: 'Union', example: 'A ⋃ B'},
  {operator: '+', name: 'Or', example: 'A + B'},
  {operator: '', name:  'And', example: 'A B'},
  {operator: '→', name: 'Conditional', example: 'A → B'},
  {operator: '↔', name: 'Biconditional', example: 'A ↔ B'},
  {operator: '-', name: 'Difference', example: 'A - B'},
  {operator: '⊕', name: 'Exclusive Or(XOR)', example: 'A ⊕ B'},
];
@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.scss']
})
export class InfoTableComponent implements OnInit {
  displayedColumns: string[] = ['operator', 'name', 'example'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
