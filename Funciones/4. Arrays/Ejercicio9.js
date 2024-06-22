/*
Dado un arreglo a de números enteros, regresar un arreglo que contiene los elementos de a en el orden invertido.
Entrada: [−12, 23, 14, 6]. Salida: [6, 14, 23, −12].
*/
function reversa(arreglo) {
  array = [];
  let contrario = arreglo.reverse();
  array.push(contrario);
  return array;
}
console.log(reversa([-12, 23, 14, 6]));
