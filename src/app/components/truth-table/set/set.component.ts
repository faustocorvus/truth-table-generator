import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ExpressionInputService } from '../expression-input.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent implements OnInit, AfterViewInit {
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

  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this._expressionInput.updateComponent('set');
  }

  setCharacter(character: string) {
    this._expressionInput.updateCharacter(character);
  }

}
