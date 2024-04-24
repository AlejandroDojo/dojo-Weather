// Muestra un alerta
function muestraAlerta() {
    alert("You clicked somewhere");
}
// Elimina el contenedor de un elemento
function deleteCookie(element) {
    element.offsetParent.remove();
}
// Selecciona el select de temperatura
let temperatura = document.querySelector(".temperature");
// Cuando cambia el valor de temperatura
temperatura.addEventListener("change", () => {
    let allTemp = document.querySelectorAll(".calc");
    let calc;
    if (temperatura.value === "F") {
        allTemp.forEach(i => {
            calc = Number(i.textContent);
            i.textContent = toFarenthein(calc);
        })
    } else (
        allTemp.forEach(i => {
            calc = Number(i.textContent);
            i.textContent = toCelcius(calc);
        })
    )
}
)
function toFarenthein(celsius) {
    return (celsius * 9/5) + 32;
}
function toCelcius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5/9);
}
