const calculator = document.querySelector(".calculator");
const btns = document.querySelector(".btns");

let display = document.getElementById("disp");
let calc = document.getElementById("calc");

btns.addEventListener("click", e => {
    if (e.target.matches(`button`)) {

        const key = e.target;
        const action = key.dataset.action;
        const dispNum = display.textContent;

        let answer = calc.textContent;
        let keyContent = key.value;

        if (!action) {
            keyContent = parseInt(key.value);
            display.innerHTML += keyContent;
        } else if (action === "decimal") {
            keyContent = key.textContent;
            display.innerHTML += keyContent;
        } else if (action === "divide" || action === "add" || action === "multiply" || action === "substract") {
            display.innerHTML += keyContent;
        } else if (action === "equals") {
            calc.innerHTML = eval(display.innerHTML);
        } else if (action === "clear") {
            display.innerHTML = '';
            calc.innerHTML = '';
        } else {
            let str = display.innerHTML;
            let del = str.substr(0, str.length - 1);

            display.innerHTML = del;
            calc.innerHTML = '';
        }
    }
});


