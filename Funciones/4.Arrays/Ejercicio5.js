/*
Dado un número natural n, regresar el arreglo de longitud n cuyos elementos son los factoriales de los primeros números naturales.
Entrada: 5. Salida: [1, 1, 2, 6, 24].
*/
function factoriales(n) {
  let arreglo = [];
  let factorial = 1;
  for (let i = 0; i < n; i++) {
    if (i > 0) factorial = factorial * i;
    arreglo.push(factorial);
  }
  return arreglo;
}
console.log(factoriales(5));
console.log(factoriales(7));


//Otra solución WHILE
function factoriales2(n) {
  let arreglo = [];
  let i = 0;
  let factorial = 1;
  while (i < n) {
    if (i > 0) factorial = factorial * i;
    arreglo.push(factorial);
    i++;
  }
  return arreglo;
}
console.log(factoriales2(5));
console.log(factoriales2(7));


//Ota solución MAP
function factoriales3(n) {
  let factorial = 1;
  return [...Array(n).keys()].map((i) => {
    if (i > 0) factorial = factorial * i;
    return factorial;
  });
}
console.log(factoriales3(5));
console.log(factoriales3(7));


//Otra solución con FILL y MAP
function factoriales4(n) {
  let factorial = 1;
  return Array(n)
    .fill(0)
    .map((_, i) => {
      if (i > 0) factorial = factorial * i;
      return factorial;
    });
}
console.log(factoriales4(5));
console.log(factoriales4(7));


//Otra solución FROM
function factoriales5(n) {
  let factorial = 1;
  return Array.from({ length: n }, (_, i) => {
    if (i > 0) factorial = factorial * i;
    return factorial;
  });
}
console.log(factoriales5(5));
console.log(factoriales5(7));
