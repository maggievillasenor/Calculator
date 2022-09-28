//console.log("Calculadora");


//++++++++++++++ Funciones  ++++++++++++++

//let op = operacion
function calcula(op) {
    //++++++++++++++ Declaración de Bloque  ++++++++++++++
    let valor1 = Number(document.getElementById("valor1").value);
    let valor2 = Number(document.getElementById("valor2").value);
    let operacion;

    switch (op) {
        case "+":
            operacion = (a, b) => a + b;
            break;
        case "-":
            operacion = (a, b) => a - b;
            break;
        case "*":
            operacion = (a, b) => a * b;
            break;
        case "/":
            operacion = (a, b) => a / b;
            break;
    }
    /* Envía el valor de resultado al ID que le corresponde en index.html */
    document.getElementById("resultado").innerHTML = operacion(valor1, valor2);
}