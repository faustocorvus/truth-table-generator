console.log(1&1&1|1&not((1|1)));
let d = {"a": 1, "b": 2, "Ñ": 5};
let variable = 'Ñ';
function not(value) {
  return value ? 0 : 1;
}
function read() {
  return d[variable];
}
console.log('leer: ',read());
