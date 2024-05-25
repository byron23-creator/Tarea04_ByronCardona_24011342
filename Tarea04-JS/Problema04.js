// Solicitude de Usuario
var usuario = prompt("Ingrese su usuario:");

if (usuario === 'Admin') {
    // Si el usuario es Admin
    var contraseña = prompt("Ingrese su contraseña:");
    
    if (contraseña === 'Jedi') {
        alert("¡Que la fuerza te acompañe!");
    } else if (contraseña === '' || contraseña === null) {
        alert("Cancelado");
    } else {
        alert("Contraseña incorrecta");
    }
} else if (usuario === '' || usuario === null) {
    // Si el usuario deja el campo vacío o presiona 'Esc'
    alert("Cancelado");
} else {
    // Si el usuario ingresa cualquier otra cadena
    alert("No te conozco");
}
