import { ChangeDetectionStrategy, Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-performed',
  templateUrl: './performed.component.html',
  styleUrls: ['./performed.component.scss']
})
export class PerformedComponent implements OnInit {
  @Input ('parsedExpression') parsedExpression: any;
  @Input ('currentComponent') currentComponent: string;

  //items = Array.from({length: 131072}).map((_, i) => `Item #${i}`);

  @ViewChild(CdkVirtualScrollViewport, {static: false})
    public viewPort: CdkVirtualScrollViewport;

  public rows = [];

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
    this.rows = [];
    for (let i = 0; i < 131072; ++i) {
      this.rows.push([i,'0','1']);
    }
  }
}
