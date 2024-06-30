/*
Dado un número natural n y un número ENTERO v, regresar el arreglo de longitud n tal que todas sus entradas son iguales a v. 
En otras palabras, construir un arreglo constante de longitud dada y con el valor dado.
Entrada: 6, −14. Salida: [−14, −14, −14, −14, −14, −14].
*/
function longitud(n, v) {
  arreglo = [];
  for (let i = 0; i < n; i++) {
    arreglo.push(parseInt(v));
  }
  return arreglo;
}
console.log(longitud(6, -14));
console.log(longitud(10, 5));

//Otra solución con FILL
function longitud2(n2, v2) {
  return Array(n2).fill(parseInt(v2));
}
console.log(longitud2(6, -14));
console.log(longitud2(10, 5));

//Otra solución con FROM
function longitud3(n3, v3) {
  return Array.from({ length: n3 }, () => parseInt(v3));
}
console.log(longitud3(6, -14));
console.log(longitud3(10, 5));

//Otra solución con WHILE
function longitud4(n4, v4) {
  let arreglo4 = [];
  let i = 0;
  while (i <= n4) {
    arreglo4.push(parseInt(v4));
    i++;
  }
  return arreglo4;
}
console.log(longitud4(6, -14));
console.log(longitud4(10, 5));

//Otra solución CONSTRUCTORES
function longitud5(n5, v5) {
  let arreglo5 = new Array(n5);
  arreglo5.fill(parseInt(v5));
  return arreglo5;
}
console.log(longitud5(6, -14));
console.log(longitud5(10, 5));
