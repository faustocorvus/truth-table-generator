import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { SolveTruthTableService } from '../solve-truth-table.service';

@Component({
  selector: 'app-performed',
  templateUrl: './performed.component.html',
  styleUrls: ['./performed.component.scss'],

})
export class PerformedComponent implements OnInit {


  @Input('parsedExpression') parsedExpression: any;
  @Input('radioButtons') radioButtons: {format: string, order: string};
  @ViewChild('tableContainer') table: ElementRef;

  truthTableHeight = '0px';
  truthTableWidth = '0px';
  backgroundColor = '#BF996B';

  @ViewChild(CdkVirtualScrollViewport, { static: false })
  public viewPort: CdkVirtualScrollViewport;

  public rows = [];

  constructor(
    private _solveTruthTable: SolveTruthTableService,
  ) { }

  public get inverseOfTranslation(): string {
    if (!this.viewPort || !this.viewPort["_renderedContentOffset"]) {
      return "-0px";
    }
    let offset = this.viewPort["_renderedContentOffset"];
    return `-${offset}px`;
  }

  ngOnInit(): void {
    this.setHeightTruthTableContainer();
    this._solveTruthTable.setParsedExpression(this.parsedExpression);
    this.rows = [];

    if (this.radioButtons.order === 'asc') {
      this.ascOrder();
    } else {
      this.descOrder();
    }
    setTimeout(_ => {
      this.truthTableWidth = this.table.nativeElement.offsetWidth + 15 + 'px';
    }, 0);
  }
  descOrder() {
    for (let i = Math.pow(2, this.parsedExpression.variables.variables.length > 17 ? 17 : this.parsedExpression.variables.variables.length) - 1; i >= 0 ; --i) {
      this.rows.push(this._solveTruthTable.getRow(i.toString(2)));
    }
  }
  ascOrder() {
    for (let i = 0; i < Math.pow(2, this.parsedExpression.variables.variables.length > 17 ? 17 : this.parsedExpression.variables.variables.length); ++i) {
      this.rows.push(this._solveTruthTable.getRow(i.toString(2)));
    }
  }

  setHeightTruthTableContainer() {
    let totalVariables = this.parsedExpression.variables.variables.length;
    if (totalVariables === 1) {
      this.truthTableHeight = '130px';
    } else if (totalVariables === 2) {
      this.truthTableHeight = '200px';
    } else if (totalVariables === 3) {
      this.truthTableHeight = '340px';
    } else if (totalVariables === 4) {
      this.truthTableHeight = '620px';
    } else if (totalVariables === 5) {
      this.truthTableHeight = '1180px';
    } else {
      this.truthTableHeight = '620px';
    }
  }

  getOutputs() {
    return (this.parsedExpression.variables.variables.length <= 17)
      ? Math.pow(2, this.parsedExpression.variables.variables.length)
      : '131072 of ' + Math.pow(2, this.parsedExpression.variables.variables.length);
  }
}
