/*
Dados un número natural n y un número entero x, regresar el arreglo de longitud n cuyos elementos son los cuadrados de los enteros consecutivos, a partir de x.
Entrada: 7, −4. Salida: [16, 9, 4, 1, 0, 1, 4].
Entrada: 8, 6. Salida: [ 36, 49, 64, 81, 100, 121, 144, 169 ].
*/ 
function longitudConsecutivos(n, x) {
  arreglo = [];
  for (let i = 0; i < n; i++, x++) {
    let cuadrado = x ** 2;
    arreglo.push(cuadrado);
  }
  return arreglo;
}
console.log(longitudConsecutivos(7, -4));
console.log(longitudConsecutivos(8, 6));

//Otra solución WHILE
function longitudConsecutivos2(n, x) {
  let arreglo = [];
  let i = 0;
  while (i < n) {
    let cuadrado = x ** 2;
    arreglo.push(cuadrado);
    i++;
    x++;
  }
  return arreglo;
}
console.log(longitudConsecutivos2(7, -4));
console.log(longitudConsecutivos2(8, 6));

//Otra solución MAP
function longitudConsecutivos3(n, x) {
  return [...Array(n).keys()].map((i) => (x + i) ** 2);
}
console.log(longitudConsecutivos3(7, -4));
console.log(longitudConsecutivos3(8, 6));

//Otra solución FILL Y MAP
function longitudConsecutivos4(n, x) {
  return Array(n)
    .fill(0)
    .map((_, i) => (x + i) ** 2);
}
console.log(longitudConsecutivos4(7, -4));
console.log(longitudConsecutivos4(8, 6));

//Otra solucióm FROM
function longitudConsecutivos5(n, x) {
  return Array.from({ length: n }, (_, i) => (x + i) ** 2);
}
console.log(longitudConsecutivos5(7, -4));
console.log(longitudConsecutivos5(8, 6));
