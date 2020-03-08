import { Injectable } from '@angular/core';
import { parse } from '../../../assets/js/truth-table-parser.js';

@Injectable({
  providedIn: 'root'
})
export class ParserService {

  constructor() { }

  parseExpression(expression: string, component: string) {
    if (component === 'booleanAlgebra') {
      expression = this.addProductOperator(expression.replace(/ /g, ""));
    }

    try {
      return parse(expression);
    } catch (error) {
      console.log(error);
      return {error: error};
    }
  }

  /* add product(*) operator to a boolean algebra expression*/
  addProductOperator(booleanExpression: string) {
    let booleanTransformed = '';
    for (let index = 0; index < booleanExpression.length; index++) {
      if (booleanExpression[index + 1] && /\)/.test(booleanExpression[index]) && /\(/.test(booleanExpression[index + 1])) {
        booleanTransformed = `${booleanTransformed}${booleanExpression[index]}*`;
      }else if (booleanExpression[index + 1] && /[a-zA-Z]/.test(booleanExpression[index]) && /[a-zA-Z]/.test(booleanExpression[index + 1])) {
        booleanTransformed = `${booleanTransformed}${booleanExpression[index]}*`;
      }else if (booleanExpression[index + 1] && /\)/.test(booleanExpression[index]) && /[a-zA-Z]/.test(booleanExpression[index + 1])) {
        booleanTransformed = `${booleanTransformed}${booleanExpression[index]}*`;
      }else if (booleanExpression[index + 1] && /[a-zA-Z]/.test(booleanExpression[index]) && /\(/.test(booleanExpression[index + 1])) {
        booleanTransformed = `${booleanTransformed}${booleanExpression[index]}*`;
      }else if (booleanExpression[index + 1] && /\´/.test(booleanExpression[index]) && /[a-zA-Z]/.test(booleanExpression[index + 1])) {
        booleanTransformed = `${booleanTransformed}${booleanExpression[index]}*`;
      }else if (booleanExpression[index + 1] && /\´/.test(booleanExpression[index]) && /\(/.test(booleanExpression[index + 1])) {
        booleanTransformed = `${booleanTransformed}${booleanExpression[index]}*`;
      }else {
        booleanTransformed = `${booleanTransformed}${booleanExpression[index]}`;
      }
    }
    return booleanTransformed;
  }
}
