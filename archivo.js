const pantalla = document.querySelector(".screen");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton =>{
    boton.addEventListener("click", () =>{
        const valorBoton = boton.textContent; // Capturamos el texto del botón pulsado
        
        // Añadimos el valor del botón a la pantalla
        pantalla.textContent += valorBoton;
    });
});


pantalla.style.cssText = "font-family: sora; font-size: 40px; color: #000;";


let primerNumero;
let operador;



botones.forEach(boton => {
    boton.addEventListener("click", () => {
        if (esUnOperador(boton.textContent)) { // Aquí decides si es un operador
            primerNumero = parseFloat(pantalla.textContent); // Guarda el número de la pantalla
            operador = boton.textContent; // Guarda el operador pulsado
            pantalla.textContent = ""; // Limpia la pantalla para el segundo número
        }
    });
});

function esUnOperador(valor) {
    return valor === "+" || valor === "-" || valor === "x" || valor === "/";
}

const botonIgual = document.querySelector(".igual");

let segundoNumero;

botonIgual.addEventListener("click", () =>{
    segundoNumero = parseFloat(pantalla.textContent);
    switch(operador){
        case "+":
        pantalla.textContent = primerNumero + segundoNumero;
        break;
        case "-":
         pantalla.textContent = primerNumero - segundoNumero;  
         break;  
         case "x":
            pantalla.textContent = primerNumero * segundoNumero;  
            break;  
            case "/":
                if (segundoNumero === 0) {
                    pantalla.textContent = "Error: División por 0";
                } else {
                    pantalla.textContent = primerNumero / segundoNumero;
                }
                break;
    }

})


let botonLimpiar = document.querySelector("#clear-entry");

botonLimpiar.addEventListener("click", () =>{
primerNumero = null;
segundoNumero = null;
operador = null;
pantalla.textContent = "";
})

let borrarNumero = document.querySelector("#undo");

borrarNumero.addEventListener("click", () =>{
    console.log("click")
    if (pantalla.textContent.length > 0) {
        pantalla.textContent = pantalla.textContent.slice(0, -1); // Elimina el último carácter
    }
})
