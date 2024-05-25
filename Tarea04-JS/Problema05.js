function calcularMontoTotal(precio1, precio2, precio3, impuesto) {
    // Suma de precios
    var subtotal = precio1 + precio2 + precio3;
    // Calculo de impuesto
    var montoImpuesto = subtotal * (impuesto / 100);
    // calculo del total 
    var total = subtotal + montoImpuesto;
    return total;
}

// Informacion de cada plato 
var precio1 = parseFloat(prompt("Ingrese el precio del primer plato:"));
var precio2 = parseFloat(prompt("Ingrese el precio del segundo plato:"));
var precio3 = parseFloat(prompt("Ingrese el precio del tercer plato:"));

// Ingreso del porcentaje de impuesto
var impuesto = parseFloat(prompt("Ingrese el porcentaje de impuesto:"));

// Declaracion de Variable para alculo total de la factura
var montoTotal = calcularMontoTotal(precio1, precio2, precio3, impuesto);

// Muestra del total
alert("El monto total de la factura es: $" + montoTotal.toFixed(2));
