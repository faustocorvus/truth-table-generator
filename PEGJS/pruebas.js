console.log(1&1&1|1&not((1|1)));

function not(value) {
  return value ? 0 : 1;
}
