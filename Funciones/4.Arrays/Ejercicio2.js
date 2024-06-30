/*
Dado un número natural n, regresar el arreglo de longitud n cuyos elementos son los cuadrados de los primeros números naturales.
Entrada: 5. Salida: [0, 1, 4, 9, 16].
Entrada: 20. Salida: [  0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361].
*/
function longitudCuadrados(n) {
  arreglo = [];
  for (let i = 0; i < n; i++) {
    let cuadrados = i ** 2;
    arreglo.push(cuadrados);
  }
  return arreglo;
}
console.log(longitudCuadrados(5));
console.log(longitudCuadrados(20));


//Otra solución WHILE
function longitudCuadrados4(n) {
  let arreglo = [];
  let i = 0;
  while (i < n) {
    let cuadrado = i ** 2;
    arreglo.push(cuadrado);
    i++;
  }
  return arreglo;
}
console.log(longitudCuadrados4(5));
console.log(longitudCuadrados4(20));


//Otra solución FROM
function longitudCuadrados2(n) {
  return Array.from({ length: n }, (x, i) => i ** 2);
}
console.log(longitudCuadrados2(5));
console.log(longitudCuadrados2(20));


//Otra solución MAP
function longitudCuadrados3(n) {
  return [...Array(n).keys()].map((i) => i ** 2);
}
console.log(longitudCuadrados3(5));
console.log(longitudCuadrados3(20));

