function caixaeletronico_executar(){
    let number = prompt("Informe o valor do saque: "); 


    let t = retornaArr(number);

    if(t[7] == "b"){
        t = retornaArr(number - 2);
        t[6] = t[6]+1;
    }

    if(t[7] == "a"){
        t = retornaArr(number - 4);
        t[6] = t[6]+2;
    }

    alert(t[0]+' Notas de 200 \n' 
          +t[1]+' Notas de 100 \n'
          +t[2]+' Notas de 50 \n'
          +t[3]+' Notas de 20 \n'
          +t[4]+' Notas de 10 \n'
          +t[5]+' Notas de 5 \n'
          +t[6]+' Notas de 2 \n');
}


function retornaArr(valor){
    let resto = valor;

    let qtd200 = 0;
    let qtd100 = 0;
    let qtd50  = 0;
    let qtd20  = 0;
    let qtd10  = 0;
    let qtd5   = 0;
    let qtd2   = 0;

    qtd200 = parseInt(resto / 200);
    resto = resto - (qtd200 * 200);

    qtd100 = parseInt(resto / 100);
    resto = resto - (qtd100 * 100);

    qtd50 = parseInt(resto / 50);
    resto = resto - (qtd50 * 50);

    qtd20 = parseInt(resto / 20);
    resto = resto - (qtd20 * 20);

    qtd10 = parseInt(resto / 10);
    resto = resto - (qtd10 * 10);

    qtd5 = parseInt(resto / 5);
    resto = resto - (qtd5 * 5);

    let controle = "";
    if(resto == 3){
        controle = "a";
    }
    qtd2 = parseInt(resto / 2);
    resto = resto - (qtd2 * 2);

    let arr = [];
    arr.push(qtd200);
    arr.push(qtd100);
    arr.push(qtd50);
    arr.push(qtd20);
    arr.push(qtd10);
    arr.push(qtd5);
    arr.push(qtd2);

    if(resto == 1){
        if(controle == "a"){
            arr.push("a");
        } else {
            arr.push("b")
        }
    }

    return arr;
}
