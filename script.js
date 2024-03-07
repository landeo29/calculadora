const display = document.querySelector("#caja_de_texto");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear") {
            display.innerText = "";
        } else if (item.id == "backspace") {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != "" && item.id == "igual") {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == "" && item.id == "igual") {
            display.innerText = "Null";
            setTimeout(() => (display.innerText = ""), 2000);
        } else {
            display.innerText += item.id;
        }
    };
});
const themeTogglebtn = document.querySelector(".theme-toggler")
const calculadora = document.querySelector(".calculator")

let oscuro = true;
themeTogglebtn.onclick = () => {
    calculadora.classList.toggle("dark")
    themeTogglebtn.classList.toggle("active")
    oscuro != oscuro
}
