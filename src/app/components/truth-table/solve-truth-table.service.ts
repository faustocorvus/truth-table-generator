import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolveTruthTableService {
  private expressions = [];
  private dictionary = [];
  private variables = [];
  private row = [];
  constructor() { }

  setParsedExpression(parsedExpression: any) {
    this.expressions = parsedExpression.expressions;
    this.variables = parsedExpression.variables.variables.sort();
    this.dictionary = parsedExpression.variables.dictionary;
  }

  getRow(binary: string) {
    this.row = [];

    if (binary.length < this.variables.length) binary = this.addMissingBits(binary, binary.length);
    for (let index = 0; index < this.variables.length; index++) {
        this.dictionary[this.variables[index]] = binary[index];
        this.row.push((binary[index]));
    }
    /* para evaluacion directa declare las variables como dictionary[":variable"]
    ejemplo: expression: "A⋃B⋂(A-B)´⊕A´"
      eval: "dictionary["A"]|dictionary["B"]&not((diferencia(dictionary["A"],dictionary["B"])))^not(dictionary["A"])"*/
    //this.evalExpressions(this.dictionary);
    this.evalExpressions(this.dictionary);
    return this.row;
  }

  addMissingBits(binary, binaryLength) {

    for (let index = 0; index < this.variables.length - binaryLength; index++) {
      binary = '0'+binary;
    }
    return binary;
  }

  evalExpressions(dictionary) {
    for (let index = 0; index < this.expressions.length; index++) {
      //console.log('Expression: ', this.expressions[index].expression, 'Result: ', eval(this.expressions[index].eval));
      this.row.push(eval(this.expressions[index].eval));
    }
    return this.row;
  }

}

function condicional(value1, value2) {
  if (value1 == value2) return '1';
  return (value1 > value2) ? '0' : '1';
}

function bicondicional(value1, value2) {
  return (value1 == value2) ? '1' : '0';
}

function diferencia(value1, value2) {
  if (value1 == value2) return '0';
  return (value1 > value2) ? '1' : '0';
}

function not(value) {
  return (value == '0') ? '1' : '0';
}
