const apagaT = document.querySelector('.numeric action');
const tot = document.getElementById('total');
const maxNumVisor = 10
let conta = []
function addNum (n){
    tot.removeAttribute('hidden')
    conta.push(n)
    tot.innerHTML += n

    if (maxNumVisor <= conta.length) {
        return alert("Limite de 10 caracteres do visor foi atingido")
    } 


    let sla = conta.map(function (total, item) {
        
    });
    console.log(conta);
}

function apagaTudo () {
    tot.innerHTML = "";
}
