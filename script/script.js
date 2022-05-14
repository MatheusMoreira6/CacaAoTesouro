$(function () {
    var celulas = document.getElementsByClassName("celulas");
    var celulasOuro = new Array(celulas.length);

    var quantidadeClick;
    var verificadorClick = new Array(celulas.length);
    var campoClick = document.getElementById("contagem");

    function preencherOuro(opcaoSelect) {
        //Resetar os campos.
        quantidadeClick = 0;
        campoClick.innerHTML = quantidadeClick;

        for (var i = 0; i < celulas.length; i++) {
            celulas[i].innerHTML = " ";
        }

        for (var i = 0; i < celulasOuro.length; i++) {
            celulasOuro[i] = 0;
        }

        for (var i = 0; i < verificadorClick.length; i++) {
            verificadorClick[i] = 0;
        }

        //Quantidade de ouro no tabuleiro.
        var celulasSorteadas;
        if (opcaoSelect == 1) {
            celulasSorteadas = new Array(100);
        } else if (opcaoSelect == 2) {
            celulasSorteadas = new Array(50);
        } else if (opcaoSelect == 3) {
            celulasSorteadas = new Array(25);
        }

        //Seleciona quais campos irão ter o ouro.
        for (var i = 0; i < celulasSorteadas.length; i++) {
            var numeroAleatorio = Math.trunc(Math.random() * (200 - 0) + 0);

            while (celulasSorteadas.includes(numeroAleatorio)) {
                numeroAleatorio = Math.trunc(Math.random() * (200 - 0) + 0);
            }

            celulasSorteadas[i] = numeroAleatorio;
        }

        //Preencher os campos com "ouro".
        for (var i = 0; i < celulasSorteadas.length; i++) {
            celulasOuro[celulasSorteadas[i]] = 1;
        }

        //Ativar os eventos.
        for (var i = 0; i < celulas.length; i++) {
            $(celulas[i]).on("click", function (evento) {
                $(this).off("click");

                if (celulasOuro[evento.target.id] == 1) {
                    this.innerHTML = '<img src="./imagens/bauTesouro.png" width="40px" alt="Ouro"></img>';
                } else {
                    this.innerHTML = '<img src="./imagens/xErro.png" width="25px" alt="Vazio"></img>';
                }

                if (verificadorClick[evento.target.id] == 0) {
                    quantidadeClick++;
                    campoClick.innerHTML = quantidadeClick;
                }

                verificadorClick[evento.target.id] = 1;
            });
        }
    }

    //Pegar a dificuldade selecionada.
    $("#selectDificuldade").on("change", function () {
        var index = document.getElementById("selectDificuldade").options.selectedIndex;

        preencherOuro(index);
    });
});

