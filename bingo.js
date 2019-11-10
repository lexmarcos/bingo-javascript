// Variáveis globais
// Guarda as cartelas de todos o jogadores
var todasCartelas = []
// Recebe a quantidade de jogadores total
var jogadores = 0
// Serve para imprimir letra por letras nos whiles de exibição
var letras = ['B', 'I', 'N', 'G', 'O'];
// Guarda o nome de todos os jogadores informados no input
var nomeJogadores = []
var stop = true
// Guarda os números já sorteados
var sortNum = []
// Inicia o contador
var seconds = 10;
// Caucula as desistencias
var countDesist = 0
// Variáveis de condição de vitoria
var ganhou = false
var verificaVitoria = false
// Informa o início do game quando "true"
var start = false
// Cria as casas de número na vertical
var casa = [[]]
// Cria as casas de número na horizontal
var casaHorizontal = [[]]
// Variáveis de verificação Vertical
var sorteados1 = []
var sorteados2 = []
var sorteados3 = []
var sorteados4 = []
var sorteados5 = []
// Variáveis de verificação horizontal
var sorteadosHorizontal1 = []
var sorteadosHorizontal2 = []
var sorteadosHorizontal3 = []
var sorteadosHorizontal4 = []
var sorteadosHorizontal5 = []

//------------------------------------------------------------------------------------------

// Altera a tela para mostrar o ganhador
function ganhouShow(id) {
    ganhou = true
    verificaVitoria = true
    document.getElementById("ganhou").style.display = 'flex'
    document.getElementById("content").style.display = 'none'
    document.getElementById("ganhou").style.opacity = '1'
    document.getElementById("nomeGanhador").innerText = `PARABÉNS, ${nomeJogadores[id]}`
    document.getElementById("textoGanhador").innerText = `VOCÊ GANHOU O BINGO!!!`

}

// Cria os inputs para o usuário informar o nome dos jogadores
function showInputsNomes(jogadores) {
    var el = document.getElementById("areaInput")
    var i = 0
    while (i < jogadores) {
        el.innerHTML += `
        <div class="input-field">
            <label htmlFor="title">Nome do jogador ${i + 1}</label>
            <input type="text" id="jogador${i + 1}"/>
        </div>
        `
        i++
    }
}




// Pega a quantidade de jogadores para informar ao
// "showInputsNomes" quantos inputs ele deve criar
function getNumJogadores() {
    var el = document.getElementById('numJogadores')
    document.getElementById("buttonNumJogadores").style.display = 'none'
    document.getElementById("areaNumJogadores").style.display = 'none'
    document.getElementById("start").style.display = 'flex'
    document.getElementById('inputStart').style.background = 'url("./assets/background-nomes.png")';
    document.getElementById('inputStart').style.backgroundRepeat = 'no-repeat';
    valor = el.value
    parseInt(valor)
    jogadores = valor
    showInputsNomes(jogadores)
    console.log(jogadores)
    if (jogadores > 9) {
      console.log(true)
      document.getElementById('inputStart').style.height = 'auto';
      document.getElementById('inputStart').style.padding = '60px 0px';
    }
}

// Verifica a existencia de números já sorteados na vertical
function verificaNumVertical(num, id) {
    for (var x = 0; x < 5; x++) {
        for (var z = 0; z < 5; z++) {
            // Pega todos os números da tabela
            el = document.getElementById((letras[x] + (z + 1) + id))
            if (el.textContent === num.toString()) {
                // Verifica se a cor do background é branca
                // Se for significa que o usuário não marcou a pedra já chamada
                // Então pinta de vermelho pra mostrar que passou uma pedra
                if (el.style.background === '') {
                    el.style.background = 'red'
                    el.style.color = '#FFF'
                // Caso o usuário já tenha marcado o número, apenas pinta o mesmo de verde
                } else {
                    el.style.background = '#48cf92'
                    el.style.color = '#FFF'
                }
                // Se o número for entre 1 e 15 ele adiciona ao sorteados1
                // esse por sua vez é um array, quando esse array atinge 5 elementos
                // O jogador ganha, assim como no bingo.
                // Isso serve para todos os IF's a seguir.
                if (num >= 1 && num <= 15) {
                    if (!sorteados1[id].includes(num)) {
                        sorteados1[id].push(num)
                    }
                    casa[id][0] = sorteados1[id]
                    if (casa[id][0].length === 5) {
                        ganhouShow(id)
                    }
                }
                if (num >= 16 && num <= 30) {
                    if (!sorteados2[id].includes(num)) {
                        sorteados2[id].push(num)
                    }
                    casa[id][1] = sorteados2[id]
                    if (casa[id][1].length === 5) {
                        ganhouShow(id)
                    }
                }
                if (num >= 31 && num <= 45) {
                    if (!sorteados3[id].includes(num)) {
                        sorteados3[id].push(num)
                    }
                    casa[id][2] = sorteados3[id]
                    if (casa[id][2].length === 4) {
                        ganhouShow(id)
                    }
                }
                if (num >= 46 && num <= 60) {
                    if (!sorteados4[id].includes(num)) {
                        sorteados4[id].push(num)
                    }
                    casa[id][3] = sorteados4[id]
                    if (casa[id][3].length === 5) {
                        ganhouShow(id)
                    }
                }
                if (num >= 61 && num <= 75) {
                    if (!sorteados5[id].includes(num)) {
                        sorteados5[id].push(num)
                    }
                    casa[id][4] = sorteados5[id]
                    if (casa[id][4].length === 5) {
                        ganhouShow(id)
                    }
                }

            };

        };
        // Exibe um informativo caso ele não tenha batido
        if (!verificaVitoria) {
            el = document.getElementById('redAlert' + id)
            el.innerText = "Calma lá irmão, você ainda não bateu!"
            document.getElementById('redAlert' + id).style.display = "inline"
            setTimeout(function() {
                document.getElementById('redAlert' + id).style.display = "none"
            }, 5000);
        } else {
            el = document.getElementById('redAlert' + id)
            el.innerText = "Você bateu !!!!"
        }
    };
}

// Verifica a existencia de números já sorteados na horizontal
function verificaNumHorizontal(num, id) {
    for (var x = 0; x < 5; x++) {
        for (var z = 0; z < 5; z++) {
            el = document.getElementById((letras[x] + (z + 1) + id))
            if (el.textContent === num.toString()) {
                // Se o número for o mesmo que tiver no B1 e no B5 ele adiciona ao sorteadosHorizontal1
                // esse por sua vez é um array, quando esse array atinge 5 elementos
                // O jogador ganha, assim como no bingo.
                // Isso serve para todos os IF's a seguir.
                if (num.toString() === document.getElementById(('B1' + id)).textContent ||
                    num.toString() === document.getElementById(('B2' + id)).textContent ||
                    num.toString() === document.getElementById(('B3' + id)).textContent ||
                    num.toString() === document.getElementById(('B4' + id)).textContent ||
                    num.toString() === document.getElementById(('B5' + id)).textContent) {
                    if (!sorteadosHorizontal1[id].includes(num)) {
                        sorteadosHorizontal1[id].push(num)
                    }
                    casaHorizontal[id][0] = sorteadosHorizontal1[id]
                    if (casaHorizontal[id][0].length === 5) {
                        ganhouShow(id)
                    }
                }
                if (num.toString() === document.getElementById(('I1' + id)).textContent ||
                    num.toString() === document.getElementById(('I2' + id)).textContent ||
                    num.toString() === document.getElementById(('I3' + id)).textContent ||
                    num.toString() === document.getElementById(('I4' + id)).textContent ||
                    num.toString() === document.getElementById(('I5' + id)).textContent) {
                    if (!sorteadosHorizontal2[id].includes(num)) {
                        sorteadosHorizontal2[id].push(num)
                    }
                    casaHorizontal[id][1] = sorteadosHorizontal2[id]
                    if (casaHorizontal[id][1].length === 5) {
                        ganhouShow(id)
                    }
                }
                if (num.toString() === document.getElementById(('N1' + id)).textContent ||
                    num.toString() === document.getElementById(('N2' + id)).textContent ||
                    num.toString() === document.getElementById(('N3' + id)).textContent ||
                    num.toString() === document.getElementById(('N4' + id)).textContent ||
                    num.toString() === document.getElementById(('N5' + id)).textContent) {
                    if (!sorteadosHorizontal3[id].includes(num)) {
                        sorteadosHorizontal3[id].push(num)
                    }
                    casaHorizontal[id][2] = sorteadosHorizontal3[id]
                    if (casaHorizontal[id][2].length === 4) {
                        ganhouShow(id)
                    }
                }
                if (num.toString() === document.getElementById(('G1' + id)).textContent ||
                    num.toString() === document.getElementById(('G2' + id)).textContent ||
                    num.toString() === document.getElementById(('G3' + id)).textContent ||
                    num.toString() === document.getElementById(('G4' + id)).textContent ||
                    num.toString() === document.getElementById(('G5' + id)).textContent) {
                    if (!sorteadosHorizontal4[id].includes(num)) {
                        sorteadosHorizontal4[id].push(num)
                    }
                    casaHorizontal[id][3] = sorteadosHorizontal4[id]
                    if (casaHorizontal[id][3].length === 5) {
                        ganhouShow(id)
                    }
                }
                if (num.toString() === document.getElementById(('O1' + id)).textContent ||
                    num.toString() === document.getElementById(('O2' + id)).textContent ||
                    num.toString() === document.getElementById(('O3' + id)).textContent ||
                    num.toString() === document.getElementById(('O4' + id)).textContent ||
                    num.toString() === document.getElementById(('O5' + id)).textContent) {
                    if (!sorteadosHorizontal5[id].includes(num)) {
                        sorteadosHorizontal5[id].push(num)
                    }
                    casaHorizontal[id][4] = sorteadosHorizontal5[id]
                    if (casaHorizontal[id][4].length === 5) {
                        ganhouShow(id)
                    }
                }
                // Exibe um informativo caso ele não tenha batido
                if (!verificaVitoria) {
                    el = document.getElementById('redAlert' + id)
                    el.innerText = "Calma lá irmão, você ainda não bateu!"
                    document.getElementById('redAlert' + id).style.display = "inline"
                    setTimeout(function() {
                        document.getElementById('redAlert' + id).style.display = "none"
                    }, 5000);
                } else {
                    el = document.getElementById('redAlert' + id)
                    el.innerText = "Você bateu !!!!"
                }
            };

        };
    };
}

// Une as duas funções de verificação em uma só, passando os ids das tabelas
function verificaNum(id) {
    // Cria arrays para cada tabela
    // Os ids represetam os ids dos jogadores
    casa[id] = []
    casaHorizontal[id] = []
    sorteados1[id] = []
    sorteados2[id] = []
    sorteados3[id] = []
    sorteados4[id] = []
    sorteados5[id] = []
    sorteadosHorizontal1[id] = []
    sorteadosHorizontal2[id] = []
    sorteadosHorizontal3[id] = []
    sorteadosHorizontal4[id] = []
    sorteadosHorizontal5[id] = []
    final = sortNum.length
    // Ler os números já sorteados e envia para as funções de verificação
    for (var i = 0; i < final; i++) {
        verificaNumVertical(sortNum[i], id)
        verificaNumHorizontal(sortNum[i], id)
    }
}

// Temporizador
function getSegundos() {
    var el = document.getElementById("segundos")
    function incrementSeconds() {
        seconds -= 1;
        el.innerHTML = `Próximo número em: ${seconds}`
    }
    // Variável pra caso seja necessário debugar
    var cancel = setInterval(incrementSeconds, 1000);
}

// Função para mudar a cor do número em que o usuário clica
function clickSquare(id) {
    id.toString()
    // Pega o número que o usuário clicou
    el = document.getElementById(id)
    // Se estiver azul (já foi clicado), pinta ele de branco novamente
    if (el.style.background === 'rgb(85, 205, 230)') {
        el.style.background = "#FFF"
        el.style.color = "#253858"
    }
    // Se estiver branco, pinta ele de azul
    else {
        el.style.background = '#55cde6'
        el.style.color = '#FFF'
    }
    ganhou = true
};

// Função para gerar uma lista com 5 números inteiros aleatórios
// dentro de um intervalo especificado
function geraLista(min, max) {
    var lista = [];
    var contador = 0;
    var numero = 0;
    while (contador < 5) {
        // Sorteia números randomicos
        numero = Math.floor((Math.random() * (max - min) + min));
        if (!lista.includes(numero)) {
            lista.push(numero);
            contador += 1;
        };
    };
    // Organiza os números em ordem crescente
    lista.sort(function (a, b) {
        return a - b;
    });
    // Evita que contenha algum número no icone da sorte que fica no meio da tablea
    if (min === 31 && max === 45) {
        lista[2] = null
    }
    return lista;
}
function closeTable(id){
  countDesist += 1
  console.log("close"+id)
  document.getElementById("table"+id).style.display = 'none';
  if(jogadores == countDesist){
    document.getElementById("content").innerHTML = `<button class="btn-normal restart" onclick="restart()" id="restartt">novo jogo</button>`
  }
}
// Função que cria as tabelas no html
function exibeTabelas(jogadores) {
    var contador = 0;
    while (contador < jogadores) {
        document.getElementById("content").innerHTML += `
        <div id="table${contador}">
          <center>
          <button class="btn-normal red" id="close${contador}" onclick="closeTable(${contador})">X</button>
          <span class="redAlert" id="redAlert${contador}"></span>
          <p>${nomeJogadores[contador]}</p>
          <div class="card">
          <table class="customTable" id="table">
            <thead>
              <tr>
                <th>B</th>
                <th>I</th>
                <th>N</th>
                <th>G</th>
                <th>O</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="B1${contador}" onclick="clickSquare('B1${contador}')"></td>
                <td id="B2${contador}" onclick="clickSquare('B2${contador}')"></td>
                <td id="B3${contador}" onclick="clickSquare('B3${contador}')"></td>
                <td id="B4${contador}" onclick="clickSquare('B4${contador}')"></td>
                <td id="B5${contador}" onclick="clickSquare('B5${contador}')"></td>
              </tr>
              <tr>
                <td id="I1${contador}" onclick="clickSquare('I1${contador}')"></td>
                <td id="I2${contador}" onclick="clickSquare('I2${contador}')"></td>
                <td id="I3${contador}" onclick="clickSquare('I3${contador}')"></td>
                <td id="I4${contador}" onclick="clickSquare('I4${contador}')"></td>
                <td id="I5${contador}" onclick="clickSquare('I5${contador}')"></td>
              </tr>
              <tr>
                <td id="N1${contador}" onclick="clickSquare('N1${contador}')"></td>
                <td id="N2${contador}" onclick="clickSquare('N2${contador}')"></td>
                <td id="N3${contador}" onclick="clickSquare('N3${contador}')"></td>
                <td id="N4${contador}" onclick="clickSquare('N4${contador}')"></td>
                <td id="N5${contador}" onclick="clickSquare('N5${contador}')"></td>
              </tr>
              <tr>
                <td id="G1${contador}" onclick="clickSquare('G1${contador}')"></td>
                <td id="G2${contador}" onclick="clickSquare('G2${contador}')"></td>
                <td id="G3${contador}" onclick="clickSquare('G3${contador}')"></td>
                <td id="G4${contador}" onclick="clickSquare('G4${contador}')"></td>
                <td id="G5${contador}" onclick="clickSquare('G5${contador}')"></td>
              </tr>
              <tr>
                <td id="O1${contador}" onclick="clickSquare('O1${contador}')"></td>
                <td id="O2${contador}" onclick="clickSquare('O2${contador}')"></td>
                <td id="O3${contador}" onclick="clickSquare('O3${contador}')"></td>
                <td id="O4${contador}" onclick="clickSquare('O4${contador}')"></td>
                <td id="O5${contador}" onclick="clickSquare('O5${contador}')"></td>
              </tr>
            </tbody>
          </table>
         </div>
         <button class="btn-normal" onclick="verificaNum(${contador})">BINGO!</button>
          </center>
        </div>`;
        // cartela sem valores
        var cartBingo = [];
        // Gerando e adicionando os numeros da letra B na lista cartBingo
        cartBingo.push(geraLista(1, 15));
        // Gerando e adicionando os numeros da letra I na lista cartBingo
        cartBingo.push(geraLista(16, 30));
        // Gerando e adicionando os numeros da letra N na lista cartBingo
        cartBingo.push(geraLista(31, 45));
        // Gerando e adicionando os numeros da letra G na lista cartBingo
        cartBingo.push(geraLista(46, 60));
        // Gerando e adicionando os numeros da letra O na lista cartBingo
        cartBingo.push(geraLista(61, 75));
        todasCartelas.push(cartBingo)
        // Adiciona os valores ao html
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 5; j++) {
                document.getElementById((letras[i] + (j + 1) + contador)).innerHTML = cartBingo[j][i];
                if (i === 3 && j === 3) {
                    // Adiciona o simbolo da sorte no meio da tabela como nos bingos
                    document.getElementById('N3' + contador).innerHTML = '🍀';
                }
            };
        };
        contador += 1;
    };
};

// Sorteia os números de 1 a 75
function sortearPedras() {
    var i = 0
    var count = 0
    var n = 0
    getSegundos()
    // While até 600 pois pode haver a probabilidade de dar algum erro,
    // Como existe o break nos 75, não atrapalha em nada os 600
    while (i < 600) {
        // Se todos os números sorteados totalizar 75 casas (assim como no bingo)
        // O while para.
        if (sortNum.length === 75) {
            break
        }
        setTimeout(() => {
            // Gera um número randomico de 1 a 75
            n = Math.floor((Math.random() * (76 - 1) + 1));
            // Caso exista o número dentro do array "sorteNum", é gerado um novo número
            if(sortNum.includes(n)){
                n = Math.floor((Math.random() * (76 - 1) + 1));
                if(sortNum.includes(n)){
                    n = Math.floor((Math.random() * (76 - 1) + 1));
                }
            }
            // Apenas adiciona o número ao array "sorteNum" se ele não existir dentro do mesmo
            if (!sortNum.includes(n)) {
                document.getElementById("displayNum").innerHTML = `NÚMERO SORTEADO: ${n}`
                sortNum.push(n);
                document.getElementById("displaySortNum").innerHTML += `${sortNum[count]} | `
                count++
                seconds = 10
            }
            //um novo número é gerado a cada 10 segundos
        }, (10000 * i))
        i++
    };
}

// Começa o jogo
function startGame() {
    // Pega os nomes que foram informados no input
    for (var i = 0; i < jogadores; i++) {
        value = document.getElementById('jogador' + (i + 1)).value
        nomeJogadores.push(value)
    }
    // atribui a jogados o valor de pessoas adicionadas
    jogadores = nomeJogadores.length
    start = true
    // Chama função de sortear as pedras
    sortearPedras()
    // Imprime a quantidade de tabelas que for necessária, passando a quantidade por "jogadores"
    exibeTabelas(jogadores)
    document.getElementById("inputStart").style.display = "none"
    document.getElementById("areaInput").style.display = "none"
    document.getElementById("start").style.display = "none"
    document.getElementById("jogo").style.display = 'block'
}

// Recomeça o jogo
function restart(){
    window.location.href = "index.html"
}

document.getElementById("numJogadores").addEventListener("keyup", function() {
    var nInput = document.getElementById('numJogadores').value;
    if (nInput > "9") {
      document.getElementsByClassName('inputStart').style.height = 'auto';
      document.getElementsByClassName('inputStart').style.padding = '60px 0px';
    }
    if (nInput != "") {
        document.getElementById('buttonNumJogadores').removeAttribute("disabled");
    } else {
        document.getElementById('buttonNumJogadores').setAttribute("disabled", null);
    }
});
