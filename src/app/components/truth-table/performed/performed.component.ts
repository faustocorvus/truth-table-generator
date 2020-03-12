import { ChangeDetectionStrategy, Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { SolveTruthTableService } from '../solve-truth-table.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-performed',
  templateUrl: './performed.component.html',
  styleUrls: ['./performed.component.scss'],

})
export class PerformedComponent implements OnInit {


  @Input('parsedExpression') parsedExpression: any;
  @ViewChild('tableContainer') table: ElementRef;

  //items = Array.from({length: 131072}).map((_, i) => `Item #${i}`);
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
    //let variablesValue = this.parsedExpression.variables.dictionary;
    this._solveTruthTable.setParsedExpression(this.parsedExpression);
    //this._solveTruthTable.getRow(8);
    this.rows = [];
    for (let i = 0; i < Math.pow(2, this.parsedExpression.variables.variables.length > 17 ? 17 : this.parsedExpression.variables.variables.length); ++i) {
      this.rows.push(this._solveTruthTable.getRow(i.toString(2)));
    }
    setTimeout(_ => {

      console.log('TABLE: ', this.table);
      this.truthTableWidth = this.table.nativeElement.offsetWidth + 15 + 'px';
    }, 0);
  }

  setHeightTruthTableContainer() {
    let totalVariables = this.parsedExpression.variables.variables.length;
    if (totalVariables === 1) {//115
      this.truthTableHeight = '130px';
    } else if (totalVariables === 2) {//185
      this.truthTableHeight = '200px';
    } else if (totalVariables === 3) {//325
      this.truthTableHeight = '340px';
    } else if (totalVariables === 4) {//605
      this.truthTableHeight = '620px';
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
