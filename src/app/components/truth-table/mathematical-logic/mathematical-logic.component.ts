import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ExpressionInputService } from '../expression-input.service';

@Component({
  selector: 'app-mathematical-logic',
  templateUrl: './mathematical-logic.component.html',
  styleUrls: ['./mathematical-logic.component.scss']
})
export class MathematicalLogicComponent implements OnInit {
  /*
   mat-ripple*/
  centered: boolean = true;
  radius: number = 45;
  color: string = 'rgba(166, 129, 146,0.5)';
  operatorColor: string = 'rgba(242, 242, 242,0.5)';
  actionColor: string = 'rgba(0,0,0,0.5)';

  constructor(
    private _expressionInput: ExpressionInputService,
  ) { }

  ngOnInit(): void {
    this._expressionInput.updateComponent('mathematicalLogic');
  }

  setCharacter(character: string) {
    this._expressionInput.updateCharacter(character);
  }



}
