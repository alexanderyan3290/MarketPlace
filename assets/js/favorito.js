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
   TOGGLE FAVORITO
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
   SACOLA (placeholder)
===================================================== */

function adicionarSacola(nome) {
    const card = [...document.querySelectorAll(".card")]
        .find(c => c.querySelector(".titulo").innerText === nome);

    if (card) card.querySelector(".bag").click();
}

/* =====================================================
   INICIAR
===================================================== */

atualizarTudo();
