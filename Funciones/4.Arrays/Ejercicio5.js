/*
Dado un número natural n, regresar el arreglo de longitud n cuyos elementos son los factoriales de los primeros números naturales.
Sugerencia: utilizar la fórmula recursiva para la función factorial.
Entrada: 5. Salida: [1, 1, 2, 6, 24].
*/
function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

function factoriales(n) {
  let arreglo = [];
  for (let i = 0; i < n; i++) {
    arreglo.push(factorial(i));
  }
  return arreglo;
}

console.log(factoriales(5));

