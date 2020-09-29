// const apagaT = document.querySelector('.numeric sinal');
const tot = document.getElementById('total');
const acc = document.getElementById('acc');
const maxNumVisor = 11
let numeros = []
function addNum (n){
    tot.innerHTML += n
    if (tot.length >= maxNumVisor || acc.length >= maxNumVisor) {
        return alert("Limite de 10 caracteres do visor foi atingido")
    } else {
        tot.removeAttribute('hidden')
    }
    console.log(tot.value)
    console.log(numeros)
}

function calc(sinal) { 
    let currentNumber = tot

    // if (currentNumber.length === 0) { return }

    numeros.push(Number(tot.innerHTML))

    acc.removeAttribute("hidden")
    acc.innerHTML += `${tot.innerHTML} ${sinal}`
    tot.innerHTML = ""

    numeros.push(sinal)
}
function addVirgula () {
    if (!tot.innerHTML.includes(".")) {
        tot.innerHTML += "."
    }
}
function result() {
    currentAccum = acc.innerHTML
    currentNumber = tot.innerHTML

    if (currentAccum[currentAccum.length - 1] === "=" && currentNumber.length > 0) {
        tot.innerHTML = ProcessAction(Number(currentNumber), Number(currentNumber), saveAction).toString().substring(0, maxNumVisor)
    }

    if (numeros.length === 0) { return }

    numeros.push(Number(tot.innerHTML))
    tot.innerHTML += ` ${tot.innerHTML} =`
    ProccessAction()
}
function ProccessAction() {
    let sinal = null
    let current = null

    let total = 0;

    if (isNaN(numeros[numeros.length - 1])) {
        numeros.pop()
    }

    numeros.forEach(n => {
        if (!isNaN(n)) {
            if (current == null) {
                current = n
            } else {
                total += ProcessSinal(current, n, sinal)
                current = null
            }
        } else {
            sinal = n
            savesinal = n
        }
    })

    if (current != null) {
        total = ProcessSinal(total, current, sinal)
    }

    tot.innerHTML = total.toString().substring(0, maxNumVisor)
    numeros = []
}

function ProcessSinal(num1, num2, sinal) {
    switch (sinal) {
        case '+': return num1 + num2
        case '-': return num1 - num2
        case 'x': return num1 * num2
        case '/': return num1 / num2
        case '%': return porcent()
    }
}


function apagaTudo () {
    tot.innerHTML = ""
    acc.innerHTML = ""
    numeros = []
}

function limpaUltNum () {tot.innerHTML = ""}


function porcent () {
    if (tot.innerHTML != "") {
        tot.innerHTML = Number((tot).innerHTML) / 100
    }
}