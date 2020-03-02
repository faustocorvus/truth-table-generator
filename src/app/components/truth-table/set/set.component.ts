import { Component, OnInit } from '@angular/core';
import { ExpressionInputService } from '../expression-input.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent implements OnInit {
  /*
   mat-ripple*/
  centered: boolean = true;
  radius: number = 45;
  color: string = 'rgba(118, 140, 70,0.5)';
  operatorColor: string = 'rgba(242, 242, 242,0.5)';
  actionColor: string = 'rgba(0,0,0,0.5)';
  constructor(
    private _expressionInput: ExpressionInputService,
  ) { }

  ngOnInit(): void {
    this._expressionInput.updateComponent('set');
  }

  setCharacter(character: string) {
    this._expressionInput.updateCharacter(character);
  }

}
