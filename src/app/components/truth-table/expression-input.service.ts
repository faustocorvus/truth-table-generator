import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpressionInputService {
  /*
  expression character change from component keyboard*/
  private characterChange = new BehaviorSubject<string>('');
  character = this.characterChange.asObservable();


  constructor() { }

  updateCharacter(character: string) {
    this.characterChange.next(character);
  }

}
