import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { ExpressionInputService } from './expression-input.service';
import { ParserService } from './parser.service';
import { PerformedComponent } from './performed/performed.component';
import { startWith, tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-truth-table',
  templateUrl: './truth-table.component.html',
  styleUrls: ['./truth-table.component.scss']
})
export class TruthTableComponent implements OnInit {
  /*
  form control of expression input */
  expressionInput: FormControl;
  /* current component: boolean algebra, set or mathematical logic */
  currentComponent;

  @ViewChild('truthTable', { read: ViewContainerRef }) truthTable: ViewContainerRef;
  componentRef: ComponentRef<any>;

  constructor(
    private formBuilder: FormBuilder,
    private _expressionInput: ExpressionInputService,
    private _parser: ParserService,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    this.expressionInput = this.formBuilder.control('', [Validators.pattern('^[\na-zA-Z↔→˄´)(˅⊕⋂⋃+ -]+$')]);

  }

  ngOnInit(): void {
    this._expressionInput.character.subscribe(
      (character: string) => {
        this.addCharacterIntoExpressionInput(character);
      }
    );
    this._expressionInput.component.pipe(delay(0)).subscribe(
      (component: string) => {
        console.log('currentComponent: ', component)
        this.currentComponent = component;
        this.refreshExpressionInput();
      }
    );
  }

  getCurrentComponentExample() {
    let currentExample = '';
    switch (this.currentComponent) {
      case 'booleanAlgebra':
        currentExample = "A + B ( A B ) ´ A ´";
        break;
      case 'mathematicalLogic':
        currentExample = "a ˅ b ˄ ( a → b ) ´ ↔ a ´";
        break;
      case 'set':
        currentExample = "A ⋃ B ⋂ ( A - B ) ´ ⊕ A ´";
    }
    return currentExample;
  }
  addCharacterIntoExpressionInput(character: string) {
    console.log(this.expressionInput);
    switch (character) {
      case 'refresh':
        this.expressionInput.setValue('');
        break;
      case 'backspace':
        this.expressionInput.setValue(this.expressionInput.value.slice(0, -1));
        break;
      case 'solve':
        if (this.expressionInput.valid) {
          let parsed = this._parser.parseExpression(this.expressionInput.value.trim(), this.currentComponent);
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
    let childComponent = this.componentFactoryResolver.resolveComponentFactory(PerformedComponent);
    this.componentRef = this.truthTable.createComponent(childComponent, 0);
    this.componentRef.instance.parsedExpression = parsedExpression;
    this.componentRef.instance.currentComponent = this.currentComponent;
  }

}
