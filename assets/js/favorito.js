/* =====================================================
   FAVORITOS - SISTEMA COMPLETO
===================================================== */

/* ELEMENTOS */
const favBtn = document.getElementById("favBtn");
const closeFav = document.getElementById("closeFav");
const favItems = document.getElementById("favItems");
const favCount = document.getElementById("favCount");

/* STORAGE */
let favoritos = JSON.parse(localStorage.getItem("favoritosProdutos")) || [];

/* =====================================================
   ABRIR / FECHAR PAINEL
===================================================== */

favBtn.onclick = () => {
    document.body.classList.toggle("fav-open");
};

closeFav.onclick = () => {
    document.body.classList.remove("fav-open");
};

/* =====================================================
   SALVAR STORAGE
===================================================== */

function salvar() {
    localStorage.setItem("favoritosProdutos", JSON.stringify(favoritos));
}

/* =====================================================
   TOGGLE FAVORITO (CLIQUE NO CORAÇÃO DOS CARDS)
===================================================== */

document.addEventListener("click", (e) => {

    const heart = e.target.closest(".heart");
    if (!heart) return;

    const card = heart.closest(".card");
    const nome = card.querySelector(".titulo").innerText;
    const preco = card.querySelector(".preco-atual").innerText;
    const img = card.querySelector(".img-produto img").src;

    const existe = favoritos.find(p => p.nome === nome);

    if (existe) {
        favoritos = favoritos.filter(p => p.nome !== nome);
    } else {
        favoritos.push({ nome, preco, img });
    }

    salvar();
    atualizarTudo();
});

/* =====================================================
   ATUALIZAR TUDO
===================================================== */

function atualizarTudo() {
    atualizarPainel();
    atualizarContador();
    sincronizarCards();
}

/* =====================================================
   CONTADOR
===================================================== */

function atualizarContador() {

    favCount.innerText = favoritos.length;

    favCount.style.display =
        favoritos.length > 0 ? "flex" : "none";
}

/* =====================================================
   PAINEL FAVORITOS
===================================================== */

function atualizarPainel() {

    if (favoritos.length === 0) {
        favItems.innerHTML = `
            <div class="empty-fav">
                <p>Nenhum favorito adicionado</p>
            </div>
        `;
        return;
    }

    favItems.innerHTML = favoritos.map((item, index) => `
        <div class="fav-item">

            <img src="${item.img}">

            <div class="fav-info">
                <h4>${item.nome}</h4>
                <div class="fav-price">${item.preco}</div>

                <button class="fav-bag-btn"
                    onclick="adicionarSacola('${item.nome}')">
                    <i class='bx bx-shopping-bag'></i>
                    Sacola
                </button>
            </div>

            <button class="remove-fav"
                onclick="removerFavorito(${index})">
                <i class='bx bx-trash'></i>
            </button>

        </div>
    `).join("");
}

/* =====================================================
   REMOVER FAVORITO (PAINEL)
===================================================== */

function removerFavorito(index) {

    const removido = favoritos[index];

    favoritos.splice(index, 1);

    salvar();
    atualizarTudo();

    /* volta coração do card */
    document.querySelectorAll(".card").forEach(card => {

        const nome = card.querySelector(".titulo").innerText;
        const heart = card.querySelector(".heart");

        if (nome === removido.nome) {
            heart.classList.remove("ativo");
        }
    });

    /* volta coração da página de produto, se for o produto atual */
    const btnWish = document.querySelector(".btn-wish");
    if (btnWish) {
        const raw = sessionStorage.getItem("produtoSelecionado");
        if (raw) {
            try {
                const prodAtual = JSON.parse(raw);
                if (prodAtual.nome === removido.nome) {
                    btnWish.dataset.favAtivo = "0";
                    btnWish.innerHTML = "<i class='bx bx-heart'></i>";
                    btnWish.style.color = "";
                }
            } catch (e) {}
        }
    }

    /* volta coração dos cards relacionados, se aplicável */
    document.querySelectorAll(".rc-heart").forEach(rc => {
        const card = rc.closest(".related-card");
        if (!card) return;
        const nomeEl = card.querySelector(".rc-nome");
        if (nomeEl && nomeEl.innerText === removido.nome) {
            rc.classList.remove("ativo");
        }
    });
}

/* =====================================================
   SINCRONIZAR CARDS
===================================================== */

function sincronizarCards() {

    document.querySelectorAll(".card").forEach(card => {

        const nome = card.querySelector(".titulo").innerText;
        const heart = card.querySelector(".heart");

        const existe = favoritos.find(p => p.nome === nome);

        if (existe) {
            heart.classList.add("ativo");
        } else {
            heart.classList.remove("ativo");
        }
    });
}

/* =====================================================
   SACOLA — BOTÃO "SACOLA" NO PAINEL DE FAVORITOS
===================================================== */

function adicionarSacola(nome) {

    const item = favoritos.find(f => f.nome === nome);
    if (!item) return;

    /* Fluxo antigo (página de listagem com .card) */
    const card = [...document.querySelectorAll(".card")]
        .find(c => c.querySelector(".titulo").innerText === nome);

    if (card) {
        card.querySelector(".bag").click();
        return;
    }

    /* Fluxo novo (página de produto ou qualquer página sem .card) */
    document.dispatchEvent(new CustomEvent("adicionarNaSacola", {
        detail: { nome: item.nome, preco: item.preco, img: item.img }
    }));
}

/* =====================================================
   INTEGRAÇÃO COM A PÁGINA DE PRODUTO
   (botão .btn-wish na tela de produto.html)
===================================================== */

document.addEventListener("toggleFavorito", (e) => {

    const { nome, preco, img } = e.detail;

    const existe = favoritos.find(p => p.nome === nome);

    if (existe) {
        favoritos = favoritos.filter(p => p.nome !== nome);
    } else {
        favoritos.push({ nome, preco, img });
    }

    salvar();
    atualizarTudo();
});

/* =====================================================
   INICIAR
===================================================== */

atualizarTudo();
