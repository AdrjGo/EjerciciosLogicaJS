/*
Dados tres números reales a, b, x, devolver 1 si a ≤ x ≤ b; devolver 0 en otro caso. En otras palabras, se trata de programar la función característica del segmento [a, b].
Ejemplo. Entrada: −3.0, 7.5, 5.0. Salida: 1.
Ejemplo. Entrada: 7.5, −3.0, 5.0. Salida: 0.
Ejemplo. Entrada: −3.0, 7.5, −5.0. Salida: 0.
*/
function caracteristica(a, b, x) {
  if (a <= x && x <= b) {
    return 1;
  } else {
    return 0;
  }
}
console.log(caracteristica(-3.0, 7.5, 5.0));
console.log(caracteristica(-7.5, -3.0, 5.0));
console.log(caracteristica(-3.0, 7.5, -5.0));
