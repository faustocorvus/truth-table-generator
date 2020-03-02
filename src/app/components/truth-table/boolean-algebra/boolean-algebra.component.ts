import { Component, OnInit } from '@angular/core';
import { ExpressionInputService } from '../expression-input.service';

@Component({
  selector: 'app-boolean-algebra',
  templateUrl: './boolean-algebra.component.html',
  styleUrls: ['./boolean-algebra.component.scss']
})
export class BooleanAlgebraComponent implements OnInit {
  /*
   mat-ripple*/
  centered: boolean = true;
  radius: number = 45;
  color: string = 'rgba(191, 153, 107,0.5)';
  operatorColor: string = 'rgba(242, 242, 242,0.5)';
  actionColor: string = 'rgba(0,0,0,0.5)';

  constructor(
    private _expressionInput: ExpressionInputService,
  ) { }

  ngOnInit(): void {
    this._expressionInput.updateComponent('booleanAlgebra');
  }

  setCharacter(character: string) {
    this._expressionInput.updateCharacter(character);
  }

}
