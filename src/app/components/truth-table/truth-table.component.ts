import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ElementRef } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { ExpressionInputService } from './expression-input.service';
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
        this.currentExample = "A + B ( A B ) ´ C ´";
        break;
      case 1:
        this.currentExample = "a ˅ b ˄ ( a → b ) ´ ↔ c ´";
        break;
      case 2:
        this.currentExample = "A ⋃ B ⋂ ( A - B ) ´ ⊕ C ´";
    }
  }
  addCharacterIntoExpressionInput(character: string) {
    switch (character) {
      case 'refresh':
        this.refreshExpressionInput();
        this.textareaFocused();
        break;
      case 'backspace':
        if (this.textarea.nativeElement.selectionStart > 0) this.removeCharacter();

        break;
      case 'solve':
        if (this.expressionInput.valid) {
          let parsed = this._parser.parseExpression(this.expressionInput.value.trim());
          this.checkParsedResult(parsed);
        }
        break;

      default:
        this.updateExpressionValue(character);
        break;
    }
  }
  textareaFocused() {
    setTimeout(_ => {
      this.textarea.nativeElement.focus();
    }, 0);
  }

  updateTextAreaSelectionStart(index) {
    setTimeout(_ => {
      this.textarea.nativeElement.selectionStart = index;
      this.textarea.nativeElement.selectionEnd = index;
    }, 0);
  }
  removeCharacter() {

    setTimeout(_ => {
      let index = this.textarea.nativeElement.selectionStart;
      if (index > 0 && index < this.textarea.nativeElement.textLength) {
        let firstPart = this.expressionInput.value.slice(0, index);
        let secondPart = this.expressionInput.value.slice(index);
        while (firstPart.length > 0 && firstPart[firstPart.length - 1] === ' ') {
          firstPart = firstPart.slice(0, -1);
          this.updateTextAreaSelectionStart(index--);
        }
        this.expressionInput.setValue(firstPart.slice(0, -1) + secondPart);
        index--;
      } else {
        this.removeLastCharacter();
      }
      this.textareaFocused();
      this.updateTextAreaSelectionStart(index);
    }, 0);

  }
  removeLastCharacter() {
    while (this.expressionInput.value.length > 0 && this.expressionInput.value[this.expressionInput.value.length - 1] === ' ') {
      this.expressionInput.setValue(this.expressionInput.value.slice(0, -1));
    }
    this.expressionInput.setValue(this.expressionInput.value.slice(0, -1));
  }

  updateExpressionValue(character: string) {

    setTimeout(_ => {
      let index = this.textarea.nativeElement.selectionStart;
      if (this.textarea.nativeElement.selectionStart < this.textarea.nativeElement.textLength) {
        let firstPart = this.expressionInput.value.slice(0, index);
        let secondPart = this.expressionInput.value.slice(index);
        if (firstPart[firstPart.length - 1] === ' ' && secondPart[0] === ' ') {
          this.expressionInput.setValue(`${firstPart}${character}${secondPart}`);
          index++;
        }
        else if (firstPart[firstPart.length - 1] === ' ' && secondPart[0] !== ' ') {
          this.expressionInput.setValue(`${firstPart}${character} ${secondPart}`);
          index++;
        }
        else if (firstPart[firstPart.length - 1] !== ' ' && secondPart[0] === ' ') {
          this.expressionInput.setValue(`${firstPart} ${character}${secondPart}`);
          index = index + 2;

        }
        else if (firstPart[firstPart.length - 1] !== ' ' && secondPart[0] !== ' ') {
          this.expressionInput.setValue(`${firstPart} ${character} ${secondPart}`);
          index = index + 2;
        }

      } else {
        this.expressionInput.setValue(
          (this.expressionInput.value === '')
            ? this.expressionInput.value + character
            : this.expressionInput.value + ' ' + character
        );
        index = index + 2;
      }
      this.textareaFocused();
      this.updateTextAreaSelectionStart(index);
    }, 0);
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
    if (parsedExpression.variables) {
      this.refreshExpressionInput();
      let childComponent = this.componentFactoryResolver.resolveComponentFactory(PerformedComponent);
      this.componentRef = this.truthTable.createComponent(childComponent, 0);
      this.componentRef.instance.parsedExpression = parsedExpression;

    }

  }

}
