"use strict";

function BinarioADecimal(num) {
  //10
  var res = 0;
  var reversa = num.split("").reverse(); //01

  for (let i = 0; i < reversa.length; i++) {
    res += 2 ** i * reversa[i];
  }
  return res;
}

function DecimalABinario(num) {
  var res = "";
  while (num > 0) {
    res = (num % 2) + res;
    num = Math.floor(num / 2);
  }
  return res;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
