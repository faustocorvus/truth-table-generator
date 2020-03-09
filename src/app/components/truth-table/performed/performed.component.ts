import { ChangeDetectionStrategy, Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { SolveTruthTableService } from '../solve-truth-table.service';

@Component({
  selector: 'app-performed',
  templateUrl: './performed.component.html',
  styleUrls: ['./performed.component.scss']
})
export class PerformedComponent implements OnInit {
  @Input('parsedExpression') parsedExpression: any;
  @Input('currentComponent') currentComponent: string;

  //items = Array.from({length: 131072}).map((_, i) => `Item #${i}`);
  truthTableHeight = '0px';

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
    console.log('ParsedExpression: ', this.parsedExpression);
    console.log('currectComponent: ', this.currentComponent);
    this.setHeightTruthTableContainer();
    //let variablesValue = this.parsedExpression.variables.dictionary;
    this._solveTruthTable.setParsedExpression(this.parsedExpression);
    //this._solveTruthTable.getRow(8);
    this.rows = [];
    for (let i = 0; i < Math.pow(2, this.parsedExpression.variables.variables.length); ++i) {
      this.rows.push(this._solveTruthTable.getRow(i.toString(2)));
    }
  }

  setHeightTruthTableContainer() {
    let totalVariables = this.parsedExpression.variables.variables.length;
    if (totalVariables === 1) {
      this.truthTableHeight = '115px';
    } else if (totalVariables === 2) {
      this.truthTableHeight = '185px';
    } else if (totalVariables === 3) {
      this.truthTableHeight = '325px';
    } else if (totalVariables === 4) {
      this.truthTableHeight = '605px';
    } else {
      this.truthTableHeight = '325px';
    }
  }
}
