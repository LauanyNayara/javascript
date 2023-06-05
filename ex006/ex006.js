var input1 = document.getElementById("numero")
var input2 = document.getElementById("numero2")
var resultado = document.getElementById("resultado")
function Calcular() {
   var v1 = Number(input1.value);
   var v2 = Number(input2.value);

   var Soma = v1 + v2;
   var Sub = v1 - v2;
   var Mult = v1 * v2;
   var Div = v1 / v2;
   var Resto = v1 % v2;
   var Exp = v1 ** v2;

   resultado.innerHTML = `
   ${v1} + ${v2} = ${Soma} <br>
   ${v1} - ${v2} = ${Sub} <br>
   ${v1} * ${v2} = ${Mult} <br>
   ${v1} / ${v2} = ${Div} <br>
   ${v1} % ${v2} = ${Resto} <br>
   ${v1} ** ${v2} = ${Exp}  <br>`
}