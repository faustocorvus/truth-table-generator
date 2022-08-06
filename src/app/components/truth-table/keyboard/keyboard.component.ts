import { Component, HostListener, OnInit } from '@angular/core';
import { ExpressionInputService } from '../expression-input.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  /*
     mat-ripple*/
  centered: boolean = true;
  color: string = 'rgba(191, 153, 107,0.5)';
  operatorColor: string = 'rgba(242, 242, 242,0.5)';
  actionColor: string = 'rgba(0,0,0,0.3)';
  getScreenWidth: any;
  uppercase = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  lowercase = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  alphabet = this.uppercase;
  constructor(
    private _expressionInput: ExpressionInputService,
  ) { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    console.log('SCREEN WIDTH: ', this.getScreenWidth);
  }
  setCharacter(character: string) {
    this._expressionInput.updateCharacter(character);
  }

  capslock(character: string) {
    this.alphabet = character === 'a' ? this.uppercase : this.lowercase;
  }

}
