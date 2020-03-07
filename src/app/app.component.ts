import { Component } from '@angular/core';
import {parse} from '../assets/js/truth-table-parser.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'truth-tables';

  prueba() {
    try {
      let result = parse('B⊕(C-(C⋂F)´´)');
      console.log('result', result);
    } catch (error) {
      console.log('error', error.message);
    }
  }
}
