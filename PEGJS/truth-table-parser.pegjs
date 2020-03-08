
{
	let expressions = [];
    let variables = {variables: [], dictionary: []};
    let expressionResult;

    function checkBeforePushExpression(expressionResult) {
    	if (!expressions.some(expression => expression.expression === expressionResult.expression)){
          	expressions.push(expressionResult);
          }
    }
}
Expression
  = head:Conbi tail:(_ ("⊕" / "-") _ Conbi)* {
      return tail.reduce(function(result, element) {
      	if (element[3].expression && element[1] === "⊕" ) {
          if (result.expression)
          expressionResult = {
          expression: result.expression+'⊕'+element[3].expression,
          eval:result.eval +'^'+ element[3].eval,
          firstPart: result.expression,
          operator: element[1],
          secondPart: element[3].expression
          };
          else
          expressionResult = {
          expression: result+'⊕'+element[3].expression,
          eval:result +'^'+ element[3].eval,
          firstPart: result,
          operator: element[1],
          secondPart: element[3].expression
          };
        }
        else if (element[1] === "⊕") {
          if (result.expression)
          expressionResult = {
          expression: result.expression+'⊕'+element[3],
          eval:result.eval +'^'+ element[3],
          firstPart: result.expression,
          operator: element[1],
          secondPart: element[3]
          };
          else
          expressionResult = {
          expression: result+'⊕'+element[3],
          eval:result +'^'+ element[3],
          firstPart: result,
          operator: element[1],
          secondPart: element[3]
          };
        }
        else if (element[3].expression && element[1] === "-" ) {
          if (result.expression)
          expressionResult = {
          expression: result.expression+'-'+element[3].expression,
          eval:'diferencia('+result.eval +','+ element[3].eval+')',
          firstPart: result.expression,
          operator: element[1],
          secondPart: element[3].expression
          };
          else
          expressionResult = {
          expression: result+'-'+element[3].expression,
          eval:'diferencia('+result +','+ element[3].eval+')',
          firstPart: result,
          operator: element[1],
          secondPart: element[3].expression
          };
        }
        else if (element[1] === "-") {
          if (result.expression)
          expressionResult = {
          expression: result.expression+'-'+element[3],
          eval:'diferencia('+result.eval +','+ element[3]+')',
          firstPart: result.expression,
          operator: element[1],
          secondPart: element[3]
          };
          else
          expressionResult = {
          expression: result+'-'+element[3],
          eval:'diferencia('+result +','+ element[3]+')',
          firstPart: result,
          operator: element[1],
          secondPart: element[3]
          };
        }
checkBeforePushExpression(expressionResult);
        return {expressions,variables,...expressionResult};
      }, head);
    }

Conbi
  = head:Or tail:(_ ("↔" / "→") _ Or)* {
      return tail.reduce(function(result, element) {
        if (element[3].expression && element[1] === "↔" ) {
            if (result.expression)
            expressionResult = {
            expression: result.expression+'↔'+element[3].expression,
            eval:'bicondicional('+result.eval +','+ element[3].eval+')',
          firstPart: result.expression,
          operator: element[1],
          secondPart: element[3].expression
          };
            else
            expressionResult = {
            expression: result+'↔'+element[3].expression,
            eval:'bicondicional('+result +','+ element[3].eval+')',
          firstPart: result,
          operator: element[1],
          secondPart: element[3].expression
            };
          }
          else if (element[1] === "↔") {
            if (result.expression)
            expressionResult = {
            expression: result.expression+'↔'+element[3],
            eval:'bicondicional('+result.eval +','+ element[3]+')',
          firstPart: result.expression,
          operator: element[1],
          secondPart: element[3]
            };
            else
            expressionResult = {
            expression: result+'↔'+element[3],
            eval:'bicondicional('+result +','+ element[3]+')',
          firstPart: result,
          operator: element[1],
          secondPart: element[3]
            };
          }
          else if (element[3].expression && element[1] === "→" ) {
            if (result.expression)
            expressionResult = {
            expression: result.expression+'→'+element[3].expression,
            eval:'condicional('+result.eval +','+ element[3].eval+')',
          firstPart: result.expression,
          operator: element[1],
          secondPart: element[3].expression
          };
            else
            expressionResult = {
            expression: result+'→'+element[3].expression,
            eval:'condicional('+result +','+ element[3].eval+')',
          firstPart: result,
          operator: element[1],
          secondPart: element[3].expression
            };
          }
          else if (element[1] === "→") {
            if (result.expression)
            expressionResult = {
            expression: result.expression+'→'+element[3],
            eval:'condicional('+result.eval +','+ element[3]+')',
          firstPart: result.expression,
          operator: element[1],
          secondPart: element[3]
            };
            else
            expressionResult = {
            expression: result+'→'+element[3],
            eval:'condicional('+result +','+ element[3]+')',
          firstPart: result,
          operator: element[1],
          secondPart: element[3]
            };
          }
checkBeforePushExpression(expressionResult);
        return {expressions,variables,...expressionResult};
      }, head);
    }

Or
  = head:And tail:(_ ("˅" / "⋃" / "+") _ And)* {
      return tail.reduce(function(result, element) {
      if (element[3].expression && element[1] === "˅" ) {
          if (result.expression)
          expressionResult = {
          expression: result.expression +'˅'+ element[3].expression,
          eval:result.eval +'|'+ element[3].eval,
          firstPart: result.expression,
          operator: element[1],
          secondPart: element[3].expression
          };
          else
          expressionResult = {
          expression: result +'˅'+ element[3].expression,
          eval:result +'|'+ element[3].eval,
          firstPart: result,
          operator: element[1],
          secondPart: element[3].expression
          };
        }
        else if (element[1] === "˅") {
          if (result.expression)
          expressionResult = {
          expression: result.expression +'˅'+ element[3],
          eval:result.eval +'|'+ element[3],
          firstPart: result.expression,
          operator: element[1],
          secondPart: element[3]
          };
          else
          expressionResult = {
          expression: result +'˅'+ element[3],
          eval:result +'|'+ element[3],
          firstPart: result,
          operator: element[1],
          secondPart: element[3]
          };
        }
        else if (element[3].expression && element[1] === "⋃" ) {
          if (result.expression)
          expressionResult = {
          expression: result.expression +'⋃'+ element[3].expression,
          eval:result.eval +'|'+ element[3].eval,
          firstPart: result.expression,
          operator: element[1],
          secondPart: element[3].expression
          };
          else
          expressionResult = {
          expression: result +'⋃'+ element[3].expression,
          eval:result +'|'+ element[3].eval,
          firstPart: result,
          operator: element[1],
          secondPart: element[3].expression
          };
        }
        else if (element[1] === "⋃") {
          if (result.expression)
          expressionResult = {
          expression: result.expression +'⋃'+ element[3],
          eval:result.eval +'|'+ element[3],
          firstPart: result.expression,
          operator: element[1],
          secondPart: element[3]
          };
          else
          expressionResult = {
          expression: result +'⋃'+ element[3],
          eval:result +'|'+ element[3],
          firstPart: result,
          operator: element[1],
          secondPart: element[3]
          };
        }
        else if (element[3].expression && element[1] === "+" ) {
          if (result.expression)
          expressionResult = {
          expression: result.expression +'+'+ element[3].expression,
          eval:result.eval +'|'+ element[3].eval,
          firstPart: result.expression,
          operator: element[1],
          secondPart: element[3].expression
          };
          else
          expressionResult = {
          expression: result +'+'+ element[3].expression,
          eval:result +'|'+ element[3].eval,
          firstPart: result,
          operator: element[1],
          secondPart: element[3].expression
          };
        }
        else if (element[1] === "+") {
          if (result.expression)
          expressionResult = {
          expression: result.expression +'+'+ element[3],
          eval:result.eval +'|'+ element[3],
          firstPart: result.expression,
          operator: element[1],
          secondPart: element[3]
          };
          else
          expressionResult = {
          expression: result +'+'+ element[3],
          eval:result +'|'+ element[3],
          firstPart: result,
          operator: element[1],
          secondPart: element[3]
          };
        }
checkBeforePushExpression(expressionResult);
        return {expressions,variables,...expressionResult};
      }, head);
    }

And
  = head:Not tail:(_ ("˄" / "⋂" / "*") _ Not)* {
      return tail.reduce(function(result, element) {
      if (element[3].expression && element[1] === "˄" ) {
          if (result.expression)
          expressionResult = {
          expression: result.expression +'˄'+ element[3].expression,
          eval:result.eval +'&'+ element[3].eval,
          firstPart: result.expression,
          operator: element[1],
          secondPart: element[3].expression
          };
          else
          expressionResult = {
          expression: result +'˄'+ element[3].expression,
          eval:result +'&'+ element[3].eval,
          firstPart: result,
          operator: element[1],
          secondPart: element[3].expression
          };
        }
        else if (element[1] === "˄") {
          if (result.expression)
          expressionResult = {
          expression: result.expression +'˄'+ element[3],
          eval:result.eval +'&'+ element[3],
          firstPart: result.expression,
          operator: element[1],
          secondPart: element[3]
          };
          else
          expressionResult = {
          expression: result +'˄'+ element[3],
          eval:result +'&'+ element[3],
          firstPart: result,
          operator: element[1],
          secondPart: element[3]
          };
        }
        else if (element[3].expression && element[1] === "⋂" ) {
          if (result.expression)
          expressionResult = {
          expression: result.expression +'⋂'+ element[3].expression,
          eval:result.eval +'&'+ element[3].eval,
          firstPart: result.expression,
          operator: element[1],
          secondPart: element[3].expression
          };
          else
          expressionResult = {
          expression: result +'⋂'+ element[3].expression,
          eval:result +'&'+ element[3].eval,
          firstPart: result,
          operator: element[1],
          secondPart: element[3].expression
          };
        }
        else if (element[1] === "⋂") {
          if (result.expression)
          expressionResult = {
          expression: result.expression +'⋂'+ element[3],
          eval:result.eval +'&'+ element[3],
          firstPart: result.expression,
          operator: element[1],
          secondPart: element[3]
          };
          else
          expressionResult = {
          expression: result +'⋂'+ element[3],
          eval:result +'&'+ element[3],
          firstPart: result,
          operator: element[1],
          secondPart: element[3]
          };
        }
        else if (element[3].expression && element[1] === "*" ) {
          if (result.expression)
          expressionResult = {
          expression: result.expression + element[3].expression,
          eval:result.eval +'&'+ element[3].eval,
          firstPart: result.expression,
          operator: "",
          secondPart: element[3].expression
          };
          else
          expressionResult = {
          expression: result + element[3].expression,
          eval:result +'&'+ element[3].eval,
          firstPart: result,
          operator: "",
          secondPart: element[3].expression
          };
        }
        else if (element[1] === "*") {
          if (result.expression)
          expressionResult = {
          expression: result.expression + element[3],
          eval:result.eval +'&'+ element[3],
          firstPart: result.expression,
          operator: "",
          secondPart: element[3]
          };
          else
          expressionResult = {
          expression: result + element[3],
          eval:result +'&'+ element[3],
          firstPart: result,
          operator: "",
          secondPart: element[3]
          };
        }
checkBeforePushExpression(expressionResult);
        return {expressions,variables,...expressionResult};
      }, head);
    }

Not
  = head:Factor tail:(_ ("´") _)* {
      return tail.reduce(function(result, element) {
      if (element[1] === "´") {
          if (result.expression)
          expressionResult = {
          expression: result.expression +'´',
          eval:'not('+result.eval +')',
          firstPart: result.expression,
          operator: element[1],
          secondPart: ''
          };
          else
          expressionResult = {
          expression: result +'´',
          eval:'not('+result +')',
          firstPart: result,
          operator: element[1],
          secondPart: ''
          };
        }
        checkBeforePushExpression(expressionResult);
        return {expressions,variables,...expressionResult};
      }, head);
    }
Factor
  = "(" _ expr:Expression _ ")" {
  if (expr.expression)
  	return {expression: '('+expr.expression+')', eval: '('+expr.eval+')'};
  else
  	return {expression: '('+expr+')', eval: '('+expr+')'};
  }
  / Char

Char "char"
  = _ [a-zA-Z] {
    if (!variables.variables.includes(text())){
    variables.variables.push(text());
    variables.dictionary[text()] = 0;
    }
    return text();
  }

_ "whitespace"
  = [ \t\n\r]*
