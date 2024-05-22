/*
Escribir una función de dos argumentos reales a, b que calcule y regrese la raíz cuadrada de la suma de sus cuadrados, es decir, la longitud de la hipotenusa del triángulo rectángulo cuyos catetos tienen longitudes a, b. 
Sugerencia: en el lenguaje de programación elegido encontrar la función que calcula la raíz cuadrada.
Ejemplo. Entrada: 11, 27.5. Salida: 29.6184064392398.
*/

function raizCuadrada(a, b) {
  let cuadrados = a ** 2 + b ** 2;
  return Math.sqrt(cuadrados);
}
console.log(raizCuadrada(11, 27.5));
