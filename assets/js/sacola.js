/* ======================================================
   ADICIONAR NA SACOLA
====================================================== */

function adicionarSacolaFavorito(index){

    const produto = favoritos[index];

    /* VERIFICA */

    const existe =
        carrinho.find(item => item.nome === produto.nome);

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

        img: produto.img,

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

    /* EXISTE */

    const produtoExistente =
        carrinho.find(item => item.nome === nome);

    /* REMOVE */

    if(produtoExistente){

        carrinho =
            carrinho.filter(item => item.nome !== nome);

        bag.classList.remove("ativo");

    }

    /* ADICIONA */

    else{

        carrinho.push({

            nome,
            preco,
            precoTexto,
            img,
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

        total +=
            produto.preco *
            produto.quantidade;

        bagItems.innerHTML += `

        <div class="bag-item">

            <img src="${produto.img}">

            <div class="bag-info">

                <h4>${produto.nome}</h4>

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

    carrinho.splice(index, 1);

    /* VOLTA ÍCONE */

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

    atualizarSacola();

}
