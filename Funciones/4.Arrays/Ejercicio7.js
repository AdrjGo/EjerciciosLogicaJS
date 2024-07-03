/*
Dado un número natural n y dos números enteros a y b, regresar el arreglo de longitud n que contiene los primeros n elementos de la progresión aritmética con el valor inicial a y la diferencia (incremento) b.
Entrada: 5, −3, 11. Salida: [−3, 8, 19, 30, 41].
Entrada: 4, 20, −15. Salida: [20, 5, −10, −25].
Entrada: 0, 5, −3. Salida: [].
*/
function progresion(n, a, b) {
  let arreglo = [];
  if (n > 0) arreglo.push(a);
  for (let i = 1; i < n; i++) {
    let elementos = (a += b); //a = a + b
    arreglo.push(elementos);
  }
  return arreglo;
}
console.log(progresion(5, -3, 11));
console.log(progresion(4, 20, -15));
console.log(progresion(0, 5, -3));

//Otra solución WHILE
function progresion2(n, a, b) {
  let arreglo = [];
  let i = 1;
  if (n > 0) arreglo.push(a);
  while (i < n) {
    let elementos = (a += b);
    arreglo.push(elementos);
    i++;
  }
  return arreglo;
}
console.log(progresion2(5, -3, 11));
console.log(progresion2(4, 20, -15));
console.log(progresion2(0, 5, -3));

//Otra solución MAP
function progresion3(n, a, b) {
  return [...Array(n).keys()].map((i) => (i === 0 ? a : (a += b)));
}
console.log(progresion3(5, -3, 11));
console.log(progresion3(4, 20, -15));
console.log(progresion3(0, 5, -3));

//Otra solución con FILL y MAP
function progresion4(n, a, b) {
  return Array(n)
    .fill(0)
    .map((_, i) => a + i * b);
}
console.log(progresion4(5, -3, 11));
console.log(progresion4(4, 20, -15));
console.log(progresion4(0, 5, -3));

//Otra solución FROM
function progresion5(n, a, b) {
  return Array.from({ length: n }, (_, i) => a + i * b);
}
console.log(progresion5(5, -3, 11));
console.log(progresion5(4, 20, -15));
console.log(progresion5(0, 5, -3));