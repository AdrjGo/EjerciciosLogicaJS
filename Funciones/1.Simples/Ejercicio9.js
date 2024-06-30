/*
Dados dos números reales positivos a, b, regresar la medida del ángulo BAC en el triángulo ABC, si el ángulo ACB es recto, |BC| = a y |AC| = b Sugerencia: en el lenguaje de programación elegido encontrar la función trigonométrica inversa adecuada.
Entrada: 2.7, 5. Salida: 0.4951332634684.
*/

function triangulo(a, b) {
  angulo = Math.atan(a / b);
  return angulo;
}
console.log(triangulo(2.7, 5));
