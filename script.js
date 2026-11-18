
let temperatura = document.getElementById("temperatura");
let origen = document.getElementById("origen");
let destino = document.getElementById("destino");
let boton = document.getElementById("boton");
let resultado = document.getElementById("resultado");

// Validar los campos
function validar() {
    boton.disabled = temperatura.value == "" ||
                     origen.value == "" ||
                     destino.value == "";
}

temperatura.addEventListener("input", validar);
origen.addEventListener("change", validar);
destino.addEventListener("change", validar);

// Convertir temperatura
function convertir() {

    let valor = parseFloat(temperatura.value);
    let celsius;

    if (origen.value == "Celsius") {
        celsius = valor;
    } 
    else if (origen.value == "Fahrenheit") {
        celsius = (valor - 32) * 5 / 9;
    } 
    else {
        celsius = valor - 273.15;
    }

    let conversion;

    if (destino.value == "Celsius") {
        conversion = celsius;
    } 
    else if (destino.value == "Fahrenheit") {
        conversion = (celsius * 9 / 5) + 32;
    } 
    else {
        conversion = celsius + 273.15;
    }

    resultado.innerHTML = valor + " grados " + origen.value +
    " equivalen a " + conversion.toFixed(2) + " grados " + destino.value;
}
