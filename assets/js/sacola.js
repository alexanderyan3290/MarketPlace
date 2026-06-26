/* ======================================================
   ADICIONAR NA SACOLA
====================================================== */

function adicionarSacolaFavorito(index){

    const produto = favoritos[index];

    /* VERIFICA */

    const existe =
        carrinho.find(item => item.nome === produto.nome && item.tamanho === null && item.cor === null);

    if(existe){

        document.body.classList.add("bag-open");

        return;
    }

    /* PREÇO */

    const precoNumero = Number(
        produto.preco
        .replace("R$", "")
        .replace(/\./g, "")
        .replace(",", ".")
        .trim()
    );

    /* ADICIONA */

    carrinho.push({

        nome: produto.nome,

        preco: precoNumero,

        precoTexto: produto.preco,

        antigo: produto.antigo || null,

        oferta: produto.oferta || null,

        img: produto.img,

        tamanho: null,

        cor: null,

        quantidade: 1

    });

    /* SACOLA PRETA NO CARD */

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const titulo =
            card.querySelector(".titulo").innerText;

        if(titulo === produto.nome){

            card
            .querySelector(".bag")
            .classList.add("ativo");

        }

    });

    atualizarSacola();

    document.body.classList.add("bag-open");

}



/* ===================== PAINEL DA SACOLA ===================== */

const bagBtn = document.getElementById("bagBtn");

const closeBag = document.getElementById("closeBag");

const bagItems = document.getElementById("bagItems");

const totalPrice = document.getElementById("totalPrice");

/* ARRAY */

let carrinho = [];


/* ===================== MENU SACOLA ===================== */

if(bagBtn){

    bagBtn.addEventListener("click", function(e){

        /* impede conflito */

        if(e.target.closest(".card")) return;

        document.body.classList.toggle("bag-open");

    });

}


/* ===================== FECHAR ===================== */

if(closeBag){

    closeBag.addEventListener("click", () => {

        document.body.classList.remove("bag-open");

    });

}


/* ===================== CLICK SACOLA CARD ===================== */

document.addEventListener("click", function(e){

    /* SOMENTE SACOLA DOS CARDS */

    const bag = e.target.closest(".card .bag");

    if(!bag) return;

    e.preventDefault();

    e.stopPropagation();

    const card = bag.closest(".card");

    const nome =
        card.querySelector(".titulo").innerText;

    const precoTexto =
        card.querySelector(".preco-atual").innerText;

    const preco = Number(

        precoTexto
        .replace("R$", "")
        .replace(/\./g, "")
        .replace(",", ".")
        .trim()

    );

    const img =
        card.querySelector("img").src;

    const precoAntigoEl = card.querySelector(".preco-antigo");
    const antigo = precoAntigoEl ? precoAntigoEl.innerText : null;

    const promoEl = card.querySelector(".promo");
    const oferta = promoEl ? promoEl.innerText : null;

    /* EXISTE */

    const produtoExistente =
        carrinho.find(item => item.nome === nome && item.tamanho === null && item.cor === null);

    /* REMOVE */

    if(produtoExistente){

        carrinho =
            carrinho.filter(item => !(item.nome === nome && item.tamanho === null && item.cor === null));

        bag.classList.remove("ativo");

    }

    /* ADICIONA */

    else{

        carrinho.push({

            nome,
            preco,
            precoTexto,
            antigo,
            oferta,
            img,
            tamanho: null,
            cor: null,
            quantidade: 1

        });

        /* ATIVA NA HORA */

        requestAnimationFrame(() => {

            bag.classList.add("ativo");

        });

    }

    atualizarSacola();

    document.body.classList.add("bag-open");

});


/* ===================== ATUALIZAR ===================== */

function atualizarSacola(){

    if(carrinho.length === 0){

        bagItems.innerHTML = `

            <div class="empty-bag">

                <i class='bx bx-shopping-bag'></i>

                <p>Nenhum produto adicionado</p>

            </div>

        `;

        totalPrice.innerText = "R$ 0,00";

        return;

    }

    let total = 0;

    bagItems.innerHTML = "";

    carrinho.forEach((produto, index) => {

        const subtotal = produto.preco * produto.quantidade;

        total += subtotal;

        const subtotalTexto = "R$ " + subtotal.toFixed(2).replace(".", ",");

        bagItems.innerHTML += `

        <div class="bag-item">

            <img src="${produto.img}">

            <div class="bag-info">

                <h4>${produto.nome}</h4>

                <div class="bag-variacoes">
                    ${produto.tamanho ? `<span class="bag-tamanho">Tamanho: <strong>${produto.tamanho}</strong></span>` : ""}
                    ${produto.cor ? `<span class="bag-cor">Cor: <strong>${produto.cor}</strong></span>` : ""}
                </div>

                <div class="bag-price">

                    ${produto.precoTexto}

                </div>

                <div class="quantity">

                    <button onclick="diminuirQtd(${index})">
                        -
                    </button>

                    <span>

                        ${produto.quantidade}

                    </span>

                    <button onclick="aumentarQtd(${index})">
                        +
                    </button>

                </div>

                <div class="bag-subtotal">
                    Total: <strong>${subtotalTexto}</strong>
                </div>

                <button
                    class="remove-item"
                    onclick="removerItem(${index})"
                >
                    Remover
                </button>

            </div>

        </div>

        `;

    });

    totalPrice.innerText =

        "R$ " +

        total
        .toFixed(2)
        .replace(".", ",");

}


/* ===================== AUMENTAR ===================== */

function aumentarQtd(index){

    carrinho[index].quantidade++;

    atualizarSacola();

}


/* ===================== DIMINUIR ===================== */

function diminuirQtd(index){

    if(carrinho[index].quantidade > 1){

        carrinho[index].quantidade--;

    }

    else{

        removerItem(index);

    }

    atualizarSacola();

}


/* ===================== REMOVER ===================== */

function removerItem(index){

    const nomeProduto =
        carrinho[index].nome;

    const tamanhoProduto =
        carrinho[index].tamanho;

    const corProduto =
        carrinho[index].cor;

    carrinho.splice(index, 1);

    /* VOLTA ÍCONE NOS CARDS (apenas para itens sem tamanho/cor) */

    if (tamanhoProduto === null && corProduto === null) {
        document.querySelectorAll(".card").forEach(card => {

            const titulo =
                card.querySelector(".titulo").innerText;

            if(titulo === nomeProduto){

                card
                .querySelector(".bag")
                .classList
                .remove("ativo");

            }

        });
    }

    /* VOLTA ESTILO DO BOTÃO NA PÁGINA DE PRODUTO, se for o produto atual */

    const btnCart = document.querySelector(".btn-cart");
    if (btnCart) {
        const raw = sessionStorage.getItem("produtoSelecionado");
        if (raw) {
            try {
                const prodAtual = JSON.parse(raw);
                if (prodAtual.nome === nomeProduto) {
                    btnCart.textContent = "Adicionar ao carrinho";
                    btnCart.style.background = "";
                }
            } catch (e) {}
        }
    }

    atualizarSacola();

}


/* =====================================================
   INTEGRAÇÃO COM A PÁGINA DE PRODUTO
   (botão .btn-cart na tela de produto.html)
===================================================== */

document.addEventListener("adicionarNaSacola", (e) => {

    const { nome, preco, antigo, oferta, img, tamanho, cor, quantidade } = e.detail;

    const precoNumero = Number(
        String(preco)
            .replace("R$", "")
            .replace(/\./g, "")
            .replace(",", ".")
            .trim()
    );

    const qtdSelecionada = quantidade && quantidade > 0 ? quantidade : 1;

    const tamanhoFinal = tamanho || null;
    const corFinal     = cor || null;

    /* Produtos são considerados "iguais" se nome, tamanho E cor coincidirem */
    const existente = carrinho.find(item =>
        item.nome === nome && item.tamanho === tamanhoFinal && item.cor === corFinal
    );

    if (existente) {
        existente.quantidade += qtdSelecionada;
    } else {
        carrinho.push({
            nome,
            preco: precoNumero,
            precoTexto: preco,
            antigo: antigo || null,
            oferta: oferta || null,
            img,
            tamanho: tamanhoFinal,
            cor: corFinal,
            quantidade: qtdSelecionada
        });
    }

    atualizarSacola();
    document.body.classList.add("bag-open");
});
