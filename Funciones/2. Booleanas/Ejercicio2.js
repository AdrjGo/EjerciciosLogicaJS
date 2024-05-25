/*
Determinar si el número entero dado es estrictamente menor que 7.
Ejemplo. Entrada: 5. Salida: True.
Ejemplo. Entrada: 7. Salida: False.
Ejemplo. Entrada: 82. Salida: False.
Ejemplo. Entrada: −31. Salida: True.
*/
function siete(num) {
  if(num < 7){
      return true
  }else{
      return false
  }
}
console.log(siete(5));
console.log(siete(7));
console.log(siete(82));
console.log(siete(-31));
