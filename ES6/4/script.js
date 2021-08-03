

const numbers = document.getElementsByClassName('btn');
const output = document.getElementById("output");

for (let number of numbers) {
    number.addEventListener('click', function () {
        output.innerHTML += this.value
    });
}

function equal() {
    let out = output.innerHTML
    let res = eval(out)
    output.innerHTML = res
}

function clean() {
    output.innerHTML = " "
}

