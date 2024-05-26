/*
Dado un arreglo a de números enteros, regresar un arreglo de números enteros de la misma longitud,
cuyos elementos son los cuadrados de los elementos del arreglo dado.
Entrada: [−12, 23, 14, 6]. Salida: [144, 529, 196, 36].
*/
function arrayCuadrado() {
  const arreglo = [-12, 23, 14, 6];
  let elementos = arreglo.map((i) => i ** 2);
  return elementos;
}
console.log(arrayCuadrado());

//Otra solución
function arrayCuadrado2() {
  const arreglo2 = [-12, 23, 14, 6];
  for (let i in arreglo2) {
    console.log(arreglo2[i] ** 2);
  }
}
arrayCuadrado2();
