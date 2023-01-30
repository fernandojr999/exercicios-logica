let tabuleiro =[[[1,  ''], [2 , ''], [3 , ''], [4 , ''], [5 , ''], [6 , ''], [7 , ''], [8 , '']],
                [[9,  ''], [10, ''], [11, ''], [12, ''], [13, ''], [14, ''], [15, ''], [16, '']],
                [[17, ''], [18, ''], [19, ''], [20, ''], [21, ''], [22, ''], [23, ''], [24, '']],
                [[25, ''], [26, ''], [27, ''], [28, ''], [29, ''], [30, ''], [31, ''], [32, '']],
                [[33, ''], [34, ''], [35, ''], [36, ''], [37, ''], [38, ''], [39, ''], [40, '']],
                [[41, ''], [42, ''], [43, ''], [44, ''], [45, ''], [46, ''], [47, ''], [48, '']],
                [[49, ''], [50, ''], [51, ''], [52, ''], [53, ''], [54, ''], [55, ''], [56, '']],
                [[57, ''], [58, ''], [59, ''], [60, ''], [61, ''], [62, ''], [63, ''], [64, '']]];

let pecasObtidasPorBranco = [];
let pecasObtidasPorPreto = [];


let pecaSelecionada;

function inicializarJogo(){
    tabuleiro[0][0][1] = 'Torre Branca 1';
    tabuleiro[0][1][1] = 'Cavalo Branco 1';
    tabuleiro[0][2][1] = 'Bispo Branco 1';
    tabuleiro[0][3][1] = 'Rainha Branca';
    tabuleiro[0][4][1] = 'Rei Branco';
    tabuleiro[0][5][1] = 'Bispo Branco 2';
    tabuleiro[0][6][1] = 'Cavalo Branco 2';
    tabuleiro[0][7][1] = 'Torre Branco 2';

    tabuleiro[1][0][1] = 'Peão Branco 1';
    tabuleiro[1][1][1] = 'Peão Branco 2';
    tabuleiro[1][2][1] = 'Peão Branco 3';
    tabuleiro[1][3][1] = 'Peão Branco 4';
    tabuleiro[1][4][1] = 'Peão Branco 5';
    tabuleiro[1][5][1] = 'Peão Branco 6';
    tabuleiro[1][6][1] = 'Peão Branco 7';
    tabuleiro[1][7][1] = 'Peão Branco 8';

    tabuleiro[7][0][1] = 'Torre Preto 1';
    tabuleiro[7][1][1] = 'Cavalo Preto 1';
    tabuleiro[7][2][1] = 'Bispo Preto 1';
    tabuleiro[7][3][1] = 'Rainha Preto';
    tabuleiro[7][4][1] = 'Rei Preto';
    tabuleiro[7][5][1] = 'Bispo Preto 2';
    tabuleiro[7][6][1] = 'Cavalo Preto 2';
    tabuleiro[7][7][1] = 'Torre Preto 2';

    tabuleiro[6][0][1] = 'Peão Preto 1';
    tabuleiro[6][1][1] = 'Peão Preto 2';
    tabuleiro[6][2][1] = 'Peão Preto 3';
    tabuleiro[6][3][1] = 'Peão Preto 4';
    tabuleiro[6][4][1] = 'Peão Preto 5';
    tabuleiro[6][5][1] = 'Peão Preto 6';
    tabuleiro[6][6][1] = 'Peão Preto 7';
    tabuleiro[6][7][1] = 'Peão Preto 8';
    renderState();
}

function movePeca(peca, x, y){
    
    if(tabuleiro[x][y][1] != ""){
        pecasObtidasPorBranco.push(tabuleiro[x][y][1]);
    }
    
    tabuleiro[x][y][1] = peca[1];
    peca[1] = "";


    renderState();
}

function renderState(){
    for (let i = 0; i < tabuleiro.length; i++) {
        for (let j = 0; j < tabuleiro[i].length; j++) {
            document.getElementById(tabuleiro[i][j][0]).innerHTML = tabuleiro[i][j][1];

            if(pecaSelecionada){
                if(pecaSelecionada[1] == tabuleiro[i][j][1]){
                    document.getElementById(tabuleiro[i][j][0]).classList.add("peca-selecionada");
                }else{
                    document.getElementById(tabuleiro[i][j][0]).classList.remove("peca-selecionada");
                }
            }
        }
    }

    document.getElementById('plcBranco').innerHTML = `Peças obtidas pelo branco: ${pecasObtidasPorBranco}`
    document.getElementById('plcPreto').innerHTML = `Peças obtidas pelo preto: ${pecasObtidasPorPreto}`
}

function posicaoClick(x,y){
    if(!pecaSelecionada){
        console.log({x,y});
        pecaSelecionada = tabuleiro[x][y];
        renderState();
    } else {
        movePeca(pecaSelecionada, x, y);
        pecaSelecionada = undefined;
    }
}