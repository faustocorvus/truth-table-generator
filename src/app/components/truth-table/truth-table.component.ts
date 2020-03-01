import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-truth-table',
  templateUrl: './truth-table.component.html',
  styleUrls: ['./truth-table.component.scss']
})
export class TruthTableComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
