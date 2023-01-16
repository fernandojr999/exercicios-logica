function caixaeletronicorefatorado_executar(){
    let number = prompt("Informe o valor desejado para o saque:");

    if(!ehNumeroValido(number)){
        alert("O valor informado não é válido!")
        return;
    }


    
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

    return true;
}