import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ElementRef } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExpressionInputService } from './expression-input.service';
import { InfoTableComponent } from './info-table/info-table.component';
import { ParserService } from './parser.service';
import { PerformedComponent } from './performed/performed.component';

@Component({
  selector: 'app-truth-table',
  templateUrl: './truth-table.component.html',
  styleUrls: ['./truth-table.component.scss'],
})
export class TruthTableComponent implements OnInit {

  @ViewChild('autosize') textarea: ElementRef;
  /*
  form control of expression input */
  expressionInput: FormControl;
  radioButtons: FormGroup;

  @ViewChild('truthTable', { read: ViewContainerRef }) truthTable: ViewContainerRef;
  componentRef: ComponentRef<any>;

  currentExample = '';
  selectionStart: number = 0;
  selectionEnd: number = 0;
  constructor(
    private formBuilder: FormBuilder,
    private _expressionInput: ExpressionInputService,
    private _parser: ParserService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private _dialog: MatDialog,
    private _snackbar: MatSnackBar
  ) {
    this.expressionInput = this.formBuilder.control('', [Validators.pattern('^[\na-zA-ZñÑ↔→˄´)(˅⊕⋂⋃+ -]+$')]);
    this.radioButtons = this.formBuilder.group({
      format: "1",
      order: "asc",
    });

  }

  ngOnInit(): void {
    this._expressionInput.character.subscribe(
      (character: string) => {
        if (character !== null && character !== '') {
          this.addCharacterIntoExpressionInput(character);
        }
      }
    );
    this.getCurrentComponentExample();

  }

  getCurrentComponentExample() {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        this.currentExample = "A+B(AB)´C´";
        break;
      case 1:
        this.currentExample = "a˅b˄(a→b)´↔c´";
        break;
      case 2:
        this.currentExample = "A⋃B⋂(A-B)´⊕C´";
    }
  }
  addCharacterIntoExpressionInput(character: string) {
    switch (character) {
      case 'refresh':
        this.refreshExpressionInput();
        break;
      case 'backspace':
        if (this.selectionStart > 0) this.removeCharacter();
        break;
      case 'solve':
        if (this.expressionInput.valid) {
          const expression = this.expression.replace(/[\r\n]/gm, ''); // remove all line breaks from string
          const parsed = this._parser.parseExpression(expression.trim());
          this.checkParsedResult(parsed);
        }
        break;
      default:
        this.updateExpressionValue(character);
        break;
    }
  }

  setCurrentTextAreaSelection() {
    this.selectionStart = this.textarea?.nativeElement.selectionStart;
    this.selectionEnd = this.textarea?.nativeElement.selectionEnd;
  }
  removeCharacter() {
    this.selectionStart = this.selectionStart - 1; // Se resta uno para eliminar el carácter
    const expressionSlicedStart = this.expression.slice(0, this.selectionStart);
    const expressionSlicedEnd = this.expression.slice(this.selectionEnd);
    this.expressionInput.setValue(`${expressionSlicedStart}${expressionSlicedEnd}`);
    this.selectionStart = this.selectionEnd = this.selectionStart;
  }

  get expression(): string {
    return this.expressionInput.value;
  }

  updateExpressionValue(character: string) {
    const textLength: number = this.expression.length;
    if (textLength === 0) {
      this.expressionInput.setValue(`${character}`);
      this.selectionStart = this.selectionEnd = 1;
    } else if (this.selectionStart === textLength) {
      this.expressionInput.setValue(`${this.expression}${character}`);
      this.selectionStart = this.selectionEnd = this.expression.length;
    } else {
      const expressionSlicedStart = this.expression.slice(0, this.selectionStart);
      const expressionSlicedEnd = this.expression.slice(this.selectionEnd);
      this.expressionInput.setValue(`${expressionSlicedStart}${character}${expressionSlicedEnd}`);
      this.selectionStart = this.selectionEnd = this.selectionStart + 1;
    }
  }

  checkParsedResult(parsedExpression: any) {
    if (parsedExpression.error) {
      this._snackbar.open('Please enter a valid expression', 'Done', { duration: 10 * 1000 });
      this.expressionInput.setErrors({ syntaxError: true });
    } else {

      this.addTruthTable(parsedExpression);
    }
  }

  refreshExpressionInput() {
    this.expressionInput.setValue('');
    this.selectionStart = this.selectionEnd = 0;
  }

  addTruthTable(parsedExpression: any) {
    if (parsedExpression.variables) {
      this.refreshExpressionInput();
      let childComponent = this.componentFactoryResolver.resolveComponentFactory(PerformedComponent);
      this.componentRef = this.truthTable.createComponent(childComponent, 0);
      this.componentRef.instance.parsedExpression = parsedExpression;
      this.componentRef.instance.radioButtons = this.radioButtons.value;

    }

  }
  openDialog() {
    this._dialog.open(InfoTableComponent, {
    });
  }
}
