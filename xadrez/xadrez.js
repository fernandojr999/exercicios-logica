let tabuleiro = [[[1, ''], [2, ''], [3, ''], [4, ''], [5, ''], [6, ''], [7, ''], [8, '']],
[[9, ''], [10, ''], [11, ''], [12, ''], [13, ''], [14, ''], [15, ''], [16, '']],
[[17, ''], [18, ''], [19, ''], [20, ''], [21, ''], [22, ''], [23, ''], [24, '']],
[[25, ''], [26, ''], [27, ''], [28, ''], [29, ''], [30, ''], [31, ''], [32, '']],
[[33, ''], [34, ''], [35, ''], [36, ''], [37, ''], [38, ''], [39, ''], [40, '']],
[[41, ''], [42, ''], [43, ''], [44, ''], [45, ''], [46, ''], [47, ''], [48, '']],
[[49, ''], [50, ''], [51, ''], [52, ''], [53, ''], [54, ''], [55, ''], [56, '']],
[[57, ''], [58, ''], [59, ''], [60, ''], [61, ''], [62, ''], [63, ''], [64, '']]];

let pecasObtidasPorBranco = [];
let pecasObtidasPorPreto = [];

let pecaSelecionada;

function inicializarJogo() {
    tabuleiro[0][0][1] = 'Torre Branco 1';
    tabuleiro[0][1][1] = 'Cavalo Branco 1';
    tabuleiro[0][2][1] = 'Bispo Branco 1';
    tabuleiro[0][3][1] = 'Rainha Branco';
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

function movePeca(peca, y, x) {
    if (tabuleiro[y][x][1] != "") {
        console.log(tabuleiro[y][x][1].split(" ")[1])
        if (tabuleiro[y][x][1].split(" ")[1] === "Preto") {
            pecasObtidasPorPreto.push(tabuleiro[y][x][1])
        } else {
            pecasObtidasPorBranco.push(tabuleiro[y][x][1]);
        }
    }

    tabuleiro[y][x][1] = peca[1];
    peca[1] = "";
    
    renderState();
}

function renderState() {
    for (let i = 0; i < tabuleiro.length; i++) {
        for (let j = 0; j < tabuleiro[i].length; j++) {
            document.getElementById(tabuleiro[i][j][0]).innerHTML = tabuleiro[i][j][1];
        }
    }

    document.getElementById('plcBranco').innerHTML = `Peças obtidas pelo branco: ${pecasObtidasPorBranco}`
    document.getElementById('plcPreto').innerHTML = `Peças obtidas pelo preto: ${pecasObtidasPorPreto}`
}

function sugereMovimento(y, x) {

    if (tabuleiro[y][x][1].indexOf("Peão Branco") != -1) {
        if (tabuleiro[y + 1][x + 1][1].indexOf("Preto") != -1) {
            document.getElementById(tabuleiro[y + 1][x + 1][0]).classList.add("matar");
            document.getElementById(tabuleiro[y + 1][x][0]).classList.add("sugestao");
            document.getElementById(tabuleiro[y + 2][x][0]).classList.add("sugestao");
        }
        if (tabuleiro[y + 1][x - 1][1].indexOf("Preto") != -1) {
            document.getElementById(tabuleiro[y + 1][x - 1][0]).classList.add("matar");
            document.getElementById(tabuleiro[y + 1][x][0]).classList.add("sugestao");
            document.getElementById(tabuleiro[y + 2][x][0]).classList.add("sugestao");
        }

        if (y == 1) {
            document.getElementById(tabuleiro[y + 1][x][0]).classList.add("sugestao");
            document.getElementById(tabuleiro[y + 2][x][0]).classList.add("sugestao");
        } else {
            document.getElementById(tabuleiro[y][x][0]).classList.add("sugestao");
        }
    }

    if (tabuleiro[y][x][1].indexOf("Peão Preto") != -1) {
        if (tabuleiro[y - 1][x + 1][1].indexOf("Branco") != -1) {
            document.getElementById(tabuleiro[y - 1][x + 1][0]).classList.add("matar");
            document.getElementById(tabuleiro[y - 1][x][0]).classList.add("sugestao");
            document.getElementById(tabuleiro[y - 2][x][0]).classList.add("sugestao");
        }
        if (tabuleiro[y - 1][x - 1][1].indexOf("Branco") != -1) {
            document.getElementById(tabuleiro[y - 1][x - 1][0]).classList.add("matar");
            document.getElementById(tabuleiro[y - 1][x][0]).classList.add("sugestao");
            document.getElementById(tabuleiro[y - 2][x][0]).classList.add("sugestao");
        }

        if (y == 1) {
            document.getElementById(tabuleiro[y - 1][x][0]).classList.add("sugestao");
            document.getElementById(tabuleiro[y - 2][x][0]).classList.add("sugestao");
        } else {
            document.getElementById(tabuleiro[y][x][0]).classList.add("sugestao");
        }
    }




}

function posicaoClick(y, x) {
    if (!pecaSelecionada) {
        sugereMovimento(y, x);
        console.log({ y, x });
        pecaSelecionada = tabuleiro[y][x];
        renderState();
    } else {
        if (pecaSelecionada == tabuleiro[y][x]) {
            pecaSelecionada = undefined;
        } else {
            movePeca(pecaSelecionada, y, x);
            pecaSelecionada = undefined;
        }


        for (let i = 0; i < tabuleiro.length; i++) {
            for (let j = 0; j < tabuleiro[i].length; j++) {
                document.getElementById(tabuleiro[i][j][0]).classList.remove('matar');
                document.getElementById(tabuleiro[i][j][0]).classList.remove('sugestao');
                document.getElementById(tabuleiro[i][j][0]).classList.remove('peca-selecionada');

            }

        }
    }
}


