// Ingresando un Numero 
var numero = prompt("Por favor, ingrese un número:");

// Haciendo la conversion de numero a un dato valido 
numero = Number(numero);

// Verificamos si el dato ingresado es un numero para trabajar comprobar las funciones
if (!isNaN(numero)) {
  if (numero === 0) {
    alert(0);
  } else if (numero > 0) {
    alert(1);
  } else {
    alert(-1);
  }
} else {
  alert("Por favor, ingrese un valor numérico válido.");
}
