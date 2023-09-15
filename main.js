var form = document.getElementById('form');

form.addEventListener("submit", function (e) {
    e.preventDefault();
    verificar();
})

function verificar(){
    var tnum = document.getElementById('tnum')
    var numA = Number(tnum.value)
    var tnum2 = document.getElementById('tnum2')
    var numB = Number(tnum2.value)
    var resp  = document.getElementById('resultado')

    if (numA > numB){
        resp.innerHTML = `O valor é Inválido`
    } else{
        resp.innerHTML = 'O valor é Válido'
    }
}