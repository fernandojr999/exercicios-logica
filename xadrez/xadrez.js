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

function inicializarJogo(){
    tabuleiro[0][0][1] = 'Torre Branca';
    tabuleiro[0][1][1] = 'Cavalo Branco';
    renderState();
}

function movePeca(peca, x, y){
    tabuleiro[x][y][1] = peca[1];
    peca[1] = "";

    renderState();
}

function renderState(){
    for (let i = 0; i < tabuleiro.length; i++) {
        for (let j = 0; j < tabuleiro[i].length; j++) {
            document.getElementById(tabuleiro[i][j][0]).innerHTML = tabuleiro[i][j][1];
        }
    }
}



/*
<!--<div id="1">&#9814</div>
          <div id="2">&#9816</div>
          <div id="3">&#9815</div>
          <div id="4">&#9819</div>
          <div id="5">&#9812</div>
          <div id="6">&#9821</div>
          <div id="7">&#9816</div>
          <div id="8">&#9820</div> -->


*/