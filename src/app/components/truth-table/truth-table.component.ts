import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, NgZone } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { ExpressionInputService } from './expression-input.service';
import { ParserService } from './parser.service';
import { PerformedComponent } from './performed/performed.component';
import { startWith, tap, delay, take } from 'rxjs/operators';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { SolveTruthTableService } from './solve-truth-table.service';

@Component({
  selector: 'app-truth-table',
  templateUrl: './truth-table.component.html',
  styleUrls: ['./truth-table.component.scss']
})
export class TruthTableComponent implements OnInit {
  /* autosize */
  private _ngZone: NgZone;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  /*
  form control of expression input */
  expressionInput: FormControl;

  @ViewChild('truthTable', { read: ViewContainerRef }) truthTable: ViewContainerRef;
  componentRef: ComponentRef<any>;

  currentExample = '';

  constructor(
    private formBuilder: FormBuilder,
    private _expressionInput: ExpressionInputService,
    private _parser: ParserService,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    this.expressionInput = this.formBuilder.control('', [Validators.pattern('^[\na-zA-ZñÑ↔→˄´)(˅⊕⋂⋃+ -]+$')]);

  }

  ngOnInit(): void {
    this._expressionInput.character.subscribe(
      (character: string) => {
        this.addCharacterIntoExpressionInput(character);
      }
    );
    this.getCurrentComponentExample();
  }

  getCurrentComponentExample() {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        this.currentExample = "A + B ( A B ) ´ A ´";
        break;
      case 1:
        this.currentExample = "a ˅ b ˄ ( a → b ) ´ ↔ a ´";
        break;
      case 2:
        this.currentExample = "A ⋃ B ⋂ ( A - B ) ´ ⊕ A ´";
    }
  }
  addCharacterIntoExpressionInput(character: string) {
    console.log(this.expressionInput);
    switch (character) {
      case 'refresh':
        this.refreshExpressionInput();
        break;
      case 'backspace':
        this.expressionInput.setValue(this.expressionInput.value.slice(0, -1));
        break;
      case 'solve':
        if (this.expressionInput.valid) {
          let parsed = this._parser.parseExpression(this.expressionInput.value.trim());
          this.checkParsedResult(parsed);
        }
        break;

      default:
        this.expressionInput.setValue(
          (this.expressionInput.value === '')
            ? this.expressionInput.value + character
            : this.expressionInput.value + ' ' + character
        );
        break;
    }
  }

  checkParsedResult(parsedExpression: any) {
    if (parsedExpression.error) {
      this.expressionInput.setErrors({ syntaxError: true });
    } else {

      this.addTruthTable(parsedExpression);
    }
  }

  refreshExpressionInput() {
    this.expressionInput.setValue('');
  }

  addTruthTable(parsedExpression: any) {
    //this.truthTable.clear();
    if (parsedExpression.variables) {
      this.refreshExpressionInput();
      let childComponent = this.componentFactoryResolver.resolveComponentFactory(PerformedComponent);
      this.componentRef = this.truthTable.createComponent(childComponent, 0);
      this.componentRef.instance.parsedExpression = parsedExpression;
    }

  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

}
