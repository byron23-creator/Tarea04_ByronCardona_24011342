function encontrarMinMax(numeros) {
    if (numeros.length === 0) {
        return { min: null, max: null };
    }
    var min = numeros[0];
    var max = numeros[0];

    for (var i = 1; i < numeros.length; i++) {
        if (numeros[i] < min) {
            min = numeros[i];
        }
        if (numeros[i] > max) {
            max = numeros[i];
        }
    }
    return { min: min, max: max };
}

// Solicitar al usuario cuántos números quiere ingresar al array
var cantidad = parseInt(prompt("¿Cuántos números desea ingresar en el array?"));

// Inicializar el array
var numeros = [];

// Solicitar al usuario que ingrese los números
for (var i = 0; i < cantidad; i++) {
    var numero = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
    numeros.push(numero);
}

// Encontrar el número más pequeño y el más grande
var resultado = encontrarMinMax(numeros);

// Mostrar el resultado con alert()
if (cantidad > 0) {
    alert("El número más pequeño es: " + resultado.min + "\nEl número más grande es: " + resultado.max);
} else {
    alert("No se ingresaron números.");
}
