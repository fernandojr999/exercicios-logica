function caixaeletronicorefatorado_executar(){
    let number = prompt("Informe o valor desejado para o saque:");

    if(!ehNumeroValido(number)){
        alert("O valor informado não é válido!")
        return;
    }

    let msg = "";
    let res = calculaQtdNotas(number);
    for (let i = 0; i < res.length; i++) {
        if(res[i][1] > 0){
            msg = msg + res[i][1]+" notas de "+res[i][0]+"\n";
        }
    }

    alert(msg);
}

function calculaQtdNotas(valorOriginal){
    let arrNotas = [[200, 0], [100, 0], [50, 0], [20, 0], [10, 0], [5, 0], [2, 0]];
    let controle = "";
    let valor = valorOriginal;

    for (let i = 0; i < arrNotas.length; i++) {
        if(arrNotas[i][0] == 2){
            if(valor == 1){
                controle = "E1";
            }
            if(valor == 3){
                controle = "E3";
            }
        }

        arrNotas[i][1] = parseInt(valor / arrNotas[i][0]);
        valor = valor - (arrNotas[i][1] * arrNotas[i][0]);
    }

    let res = arrNotas;
    if(controle == "E1"){
        res = calculaQtdNotas(valorOriginal - 2);
        res[6][1] = res[6][1] + 1;
    }

    if(controle == "E3"){
        res = calculaQtdNotas(valorOriginal - 4);
        res[6][1] = res[6][1] + 2;
    }

    return res;
}

function ehNumeroValido(number){
    if(isNaN(number)){
        return false;
    }

    if(number == 1){
        return false;
    }

    if (number == 3){
        return false;
    }

    if(number < 0){
        return false;
    }
    
    return true;
}