/*
Dado un arreglo a de números enteros, regresar un arreglo de números enteros de la misma longitud,
cuyos elementos son los cuadrados de los elementos del arreglo dado.
Entrada: [−12, 23, 14, 6]. Salida: [144, 529, 196, 36].
*/
function arrayCuadrado(arreglo) {
  const array = [];
  let elementos = arreglo.map((i) => i ** 2);
  array.push(elementos);
  return elementos;
}
console.log(arrayCuadrado([-12, 23, 14, 6]));
