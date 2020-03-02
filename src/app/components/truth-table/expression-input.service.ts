import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpressionInputService {
  /*
  expression character change from components, boolean--algebra, set and mathematical-logic */
  private characterChange = new BehaviorSubject<string>('');
  character = this.characterChange.asObservable();

  /*
  component changed then refresh expression input */
  private componentChange = new BehaviorSubject<string>('');
  component = this.componentChange.asObservable();

  constructor() { }

  updateCharacter(character: string) {
    this.characterChange.next(character);
  }

  updateComponent(component: string) {
    this.componentChange.next(component);
  }
}
