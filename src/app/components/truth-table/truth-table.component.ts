import { Component, OnInit, Output, EventEmitter, ViewChild, NgZone } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { ExpressionInputService } from './expression-input.service';

@Component({
  selector: 'app-truth-table',
  templateUrl: './truth-table.component.html',
  styleUrls: ['./truth-table.component.scss']
})
export class TruthTableComponent implements OnInit {
  /*
  form control of expression input */
  expressionInput: FormControl;
  constructor(
    private formBuilder: FormBuilder,
    private _expressionInput: ExpressionInputService,
  ) {
    this.expressionInput = this.formBuilder.control('', [Validators.required, Validators.pattern('^[a-nA-N\↔\→\˄\´\)\(\˅\⊕\-\⋂\⋃\+]+$')]);
  }

  ngOnInit(): void {
    this._expressionInput.character.subscribe(
      (character: string) => {
        this.addCharacterIntoExpressionInput(character);
      }
    );
    this._expressionInput.component.subscribe(
      (component: string) => {
        this.refreshExpressionInput();
      }
    );
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
            console.log('resolver: ', this.expressionInput.value);
          }
          break;

      default:
        this.expressionInput.setValue(this.expressionInput.value + character);
        break;
    }
  }
  refreshExpressionInput() {
    this.expressionInput.setValue('');
  }
}
