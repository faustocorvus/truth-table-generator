console.log(1&1&1|1&not((1|1)));
let d = {"a": 1, "b": 2};
let variable = 'a';
function not(value) {
  return value ? 0 : 1;
}
function read() {
  return d[variable];
}
console.log('leer: ',read());
