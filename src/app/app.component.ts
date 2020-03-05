import { Component } from '@angular/core';
import {parse} from '../assets/js/truth-table-parser.js';
//var parser = require('../assets/js/parser.js');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'truth-tables';

  prueba() {
    try {
      let result = parse('p→(q´˄r˅p´)´');
      console.log('result', result);
    } catch (error) {
      console.log('error', error.message);
    }
    //console.log("prueba", parse('2+2/2^2').message ? 'mal' : 'bien');
  }
}
