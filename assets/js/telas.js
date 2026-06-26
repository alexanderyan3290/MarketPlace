/* =============================================================
   TELAS.JS
   ============================================================= */

/* -------------------------------------------------------------
   BARRA DE PESQUISA — ABRIR / FECHAR
   ------------------------------------------------------------- */

const searchBtn = document.querySelector(".search-btn");
const searchContainer = document.querySelector(".search-container");
const closeSearch = document.querySelector(".close-search");

if (searchBtn && searchContainer) {
    searchBtn.onclick = () => {
        searchContainer.classList.add("active");
    };
}

if (closeSearch && searchContainer) {
    closeSearch.onclick = () => {
        searchContainer.classList.remove("active");
    };
}

/* -------------------------------------------------------------
   PERFIL
------------------------------------------------------------- */

const profileBtn = document.querySelector(".perfil-menu");
const profilePanel = document.getElementById("profilePanel");
const closeProfile = document.getElementById("closeProfile");

if (profileBtn && profilePanel && closeProfile) {

    profileBtn.addEventListener("click", () => {

        // Fecha outros painéis
        document.body.classList.remove("fav-open");
        document.body.classList.remove("bag-open");

        // Abre perfil
        document.body.classList.add("profile-open");

    });

    closeProfile.addEventListener("click", () => {
        document.body.classList.remove("profile-open");
    });

}



/* -------------------------------------------------------------
   DADOS — PRODUTOS (SEÇÃO 1)
   Campo "categoriaMenu" usado pelo filtro de categorias da busca
   ------------------------------------------------------------- */

const produtos1 = [
    {
        nome: "Tênis Nike Revolution 8",
        categoria: "CORRIDA",
        categoriaMenu: "masculino",
        preco: "R$ 303,99",
        antigo: "R$ 399,99",
        img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg",
        oferta: "20% DESCONTO"
    },
    {
        nome: "Camiseta Adidas Treino Básica Masculina",
        categoria: "CORRIDA",
        categoriaMenu: "masculino",
        preco: "R$ 89,99",
        antigo: "R$ 99,99",
        img: "https://static.netshoes.com.br/produtos/camiseta-adidas-treino-basica-masculina/06/FB9-8626-006/FB9-8626-006_zoom1.jpg?ts=1776483991&ims=1088x",
        oferta: "20% DESCONTO"
    },
    {
        nome: "Camiseta Essentials de malha simples com logotipo pequeno",
        categoria: "CORRIDA",
        categoriaMenu: "roupas",
        preco: "R$ 90,24",
        antigo: "R$ 85,72",
        img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/c69137ae0fbd469e91643ab2b967931a_9366/Camiseta_Essentials_de_malha_simples_com_logotipo_pequeno_Cinza_JF1091_21_model.jpg",
        oferta: "20% DESCONTO"
    },
    {
        nome: "Camiseta Lacoste de Tênis Estampada Ultra-Dry",
        categoria: "CORRIDA",
        categoriaMenu: "masculino",
        preco: "R$ 259,13",
        antigo: "R$ 345,51",
        img: "https://static.netshoes.com.br/produtos/camiseta-lacoste-de-tenis-estampada-ultra-dry-masculina/60/S2E-04GX-060/S2E-04GX-060_zoom1.jpg?ts=1771429250&ims=1088x",
        oferta: "25% DESCONTO"
    },
    {
        nome: "Camisa Polo Lacoste Regular Fit Paris Em Piqué Stretch",
        categoria: "CORRIDA",
        categoriaMenu: "masculino",
        preco: "R$ 503,10",
        antigo: "R$ 649,00",
        img: "https://static.netshoes.com.br/produtos/camisa-polo-lacoste-regular-fit-paris-em-pique-stretch-masculina/34/D66-7497-034/D66-7497-034_zoom1.jpg?ts=1772942971&ims=1088x",
        oferta: "13% DESCONTO"
    },
    {
        nome: "Camisa Brasil Jordan II 2026/27 Torcedor Pro",
        categoria: "CORRIDA",
        categoriaMenu: "masculino",
        preco: "R$ 359,99",
        antigo: "R$ 449,99",
        img: "https://static.netshoes.com.br/produtos/camisa-brasil-jordan-ii-202627-torcedor-pro-masculina/08/MJU-002H-008/MJU-002H-008_zoom1.jpg?ts=1776276933&ims=1088x",
        oferta: "20% DESCONTO"
    },
    {
        nome: "Regata Adidas Cropped Basketball",
        categoria: "CORRIDA",
        categoriaMenu: "esporte",
        preco: "R$ 313,49",
        antigo: "R$ 449,99",
        img: "https://static.netshoes.com.br/produtos/regata-adidas-cropped-basketball-feminina/98/FBA-822T-198/FBA-822T-198_zoom1.jpg?ts=1773741351&ims=1088x",
        oferta: "26% DESCONTO"
    },
    {
        nome: "Boné Dri-FIT Nike Swoosh Unissex",
        categoria: "CASUAL",
        categoriaMenu: "esporte",
        preco: "R$ 85,49",
        antigo: "R$ 199,99",
        img: "https://static.netshoes.com.br/produtos/bone-dri-fit-nike-swoosh-unissex/06/SGL-03HY-006/SGL-03HY-006_zoom1.jpg?ts=1776398836&ims=1088x",
        oferta: "55% DESCONTO"
    },
    {
        nome: "Boné Adidas Bball 3Stripes Nl",
        categoria: "CORRIDA",
        categoriaMenu: "esporte",
        preco: "R$ 111,92",
        antigo: "R$ 139,90",
        img: "https://static.netshoes.com.br/produtos/bone-adidas-bball-3stripes-nl/30/FBA-84E3-030/FBA-84E3-030_zoom1.jpg?ts=1776428485&ims=1088x",
        oferta: "20% DESCONTO"
    },
    {
        nome: "Calça Adidas Allset 3S",
        categoria: "CORRIDA",
        categoriaMenu: "masculino",
        preco: "R$ 299,99",
        antigo: "R$ 399,99",
        img: "https://static.netshoes.com.br/produtos/calca-adidas-allset-3s-masculina/60/FBA-83AQ-060/FBA-83AQ-060_zoom1.jpg?ts=1776592187&ims=1088x",
        oferta: "14% DESCONTO"
    },
    {
        nome: "Caça Adidas Disney Mickey Mouse",
        categoria: "CORRIDA",
        categoriaMenu: "infantil",
        preco: "R$ 249,99",
        antigo: "R$ 180,49",
        img: "https://static.netshoes.com.br/produtos/caca-adidas-disney-mickey-mouse/09/FBA-84WG-309/FBA-84WG-309_zoom1.jpg?ts=1773830828&ims=1088x",
        oferta: "24% DESCONTO"
    },
    {
        nome: "Tênis Olympikus Corre 4",
        categoria: "CORRIDA",
        categoriaMenu: "masculino",
        preco: "R$ 499,99",
        antigo: "R$ 599,99",
        img: "https://static.netshoes.com.br/produtos/tenis-olympikus-corre-4/60/2I3-0603-960/2I3-0603-960_zoom1.jpg?ts=1776592025&ims=1088x",
        oferta: "16% DESCONTO"
    }
];


/* -------------------------------------------------------------
   DADOS — PRODUTOS (SEÇÃO 2)
   Campo "categoriaMenu" usado pelo filtro de categorias da busca
   ------------------------------------------------------------- */

const produtos2 = [
    {
        nome: "Tênis Olympikus Corre 4",
        categoria: "CORRIDA",
        categoriaMenu: "masculino",
        preco: "R$ 499,99",
        antigo: "R$ 599,99",
        img: "https://static.netshoes.com.br/produtos/tenis-olympikus-corre-4/33/2I3-0603-933/2I3-0603-933_zoom1.jpg?ts=1776593840&ims=1088x",
        oferta: "16% DESCONTO"
    },
    {
        nome: "Tênis Fila Rt-Low",
        categoria: "CORRIDA",
        categoriaMenu: "masculino",
        preco: "R$ 188,99",
        antigo: "R$ 299,99",
        img: "https://static.netshoes.com.br/produtos/tenis-fila-rt-low-masculino/12/SFK-07WZ-012/SFK-07WZ-012_zoom1.jpg?ts=1776592528&ims=1088x",
        oferta: "30% DESCONTO"
    },
    {
        nome: "Tênis Nike Big Low",
        categoria: "CORRIDA",
        categoriaMenu: "masculino",
        preco: "R$ 427,49",
        antigo: "R$ 699,99",
        img: "https://static.netshoes.com.br/produtos/tenis-nike-big-low-masculino/55/SGL-04QL-855/SGL-04QL-855_zoom1.jpg?ts=1774386302&ims=1088x",
        oferta: "35% DESCONTO"
    },
    {
        nome: "Tênis Nike SB Force 58",
        categoria: "CORRIDA",
        categoriaMenu: "masculino",
        preco: "R$ 398,99",
        antigo: "R$ 599,99",
        img: "https://static.netshoes.com.br/produtos/tenis-nike-sb-force-58-masculino/54/SGL-043O-154/SGL-043O-154_zoom1.jpg?ts=1776001552&ims=1088x",
        oferta: "30% DESCONTO"
    },
    {
        nome: "Tênis Masculino Lacoste Sideline Pro",
        categoria: "CORRIDA",
        categoriaMenu: "masculino",
        preco: "R$ 199,00",
        antigo: "R$ 349,00",
        img: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw8f2cfc65/45CMA0056BR_407_01.jpg?imwidth=960&impolicy=pctp&imdensity=1",
        oferta: "40% DESCONTO"
    },
    {
        nome: "Tênis Masculinos Spinor",
        categoria: "CORRIDA",
        categoriaMenu: "masculino",
        preco: "R$ 959,20",
        antigo: "R$ 1.199,00",
        img: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw12ed9cf2/51SMA0053_2P2_01.jpg?imwidth=960&impolicy=pctp&imdensity=1",
        oferta: "20% DESCONTO"
    },
    {
        nome: "Cama Zee.Dog Skull Zee",
        categoria: "CORRIDA",
        categoriaMenu: "petshop",
        preco: "R$ 463,20",
        antigo: "R$ 579,00",
        img: "https://images.petz.com.br/fotos/1632948750925.jpg",
        oferta: "20% DESCONTO"
    },
    {
        nome: "Viveiro Chalesco Pássaros Pequeno",
        categoria: "CORRIDA",
        categoriaMenu: "petshop",
        preco: "R$ 809,99",
        antigo: "R$ 1.799,99",
        img: "https://images.petz.com.br/fotos/1617109909022.jpg",
        oferta: "55% DESCONTO"
    },
    {
        nome: "Brinquedo Germanhart Ultraball com Apito para Cães",
        categoria: "CORRIDA",
        categoriaMenu: "petshop",
        preco: "R$ 51,29",
        antigo: "R$ 53,99",
        img: "https://images.petz.com.br/fotos/1715962358216.jpg",
        oferta: "5% DESCONTO"
    },
    {
        nome: "Espremedor de Frutas Mondial Premium E-02",
        categoria: "CORRIDA",
        categoriaMenu: "eletrodomesticos",
        preco: "R$ 59,90",
        antigo: "R$ 79,90",
        img: "https://imgs.casasbahia.com.br/14038/1g.jpg?imwidth=500",
        oferta: "25% DESCONTO"
    },
    {
        nome: "Sanduicheira Elétrica Cadence Click",
        categoria: "CORRIDA",
        categoriaMenu: "eletrodomesticos",
        preco: "R$ 99,00",
        antigo: "R$ 137,18",
        img: "https://imgs.casasbahia.com.br/55066944/1g.jpg?imwidth=500",
        oferta: "28% DESCONTO"
    },
    {
        nome: "Aspirador de Pó Portátil Black+Decker",
        categoria: "CORRIDA",
        categoriaMenu: "eletrodomesticos",
        preco: "R$ 629,10",
        antigo: "R$ 699,00",
        img: "https://imgs.casasbahia.com.br/55071984/1g.jpg?imwidth=500",
        oferta: "10% DESCONTO"
    }
];


/* -------------------------------------------------------------
   FAVORITOS — LEITURA DO LOCALSTORAGE
   ------------------------------------------------------------- */

function getFavoritos() {
    return JSON.parse(localStorage.getItem("favoritosProdutos")) || [];
}


/* -------------------------------------------------------------
   RENDERIZAÇÃO DOS CARDS DE PRODUTO
   ------------------------------------------------------------- */

function renderProdutos(lista, containerId) {

    const container = document.getElementById(containerId);
    if (!container) return;

    const favoritos = getFavoritos();
    let html = "";

    lista.forEach((prod, index) => {

        const ativo = favoritos.find(p => p.nome === prod.nome) ? "ativo" : "";

        html += `
<div class="card" data-produto-idx="${index}" data-produto-lista="${containerId}" style="cursor:pointer;">

    <div class="img-produto">
        <img src="${prod.img}">
    </div>

    <div class="info">

        <h3 class="titulo">${prod.nome}</h3>
        <p class="categoria">${prod.categoria}</p>

        <div class="price">
            <span class="preco-atual">${prod.preco}</span>
            <span class="preco-antigo">${prod.antigo}</span>
        </div>

        <p class="promo">${prod.oferta}</p>

        <div class="actions">

            <span class="bag"
                data-nome="${prod.nome}"
                data-preco="${prod.preco}"
                data-img="${prod.img}">
                <i class='bx bx-shopping-bag vazio'></i>
                <i class='bx bxs-shopping-bag cheio'></i>
            </span>

            <span class="heart ${ativo}">
                <i class='bx bx-heart vazio'></i>
                <i class='bx bxs-heart cheio'></i>
            </span>

        </div>

    </div>

</div>
`;
    });

    container.innerHTML = html;

}


/* -------------------------------------------------------------
   FAVORITOS — SINCRONIZAR ÍCONES DE CORAÇÃO
   ------------------------------------------------------------- */

function sincronizarCards() {

    const favoritos = getFavoritos();

    document.querySelectorAll(".card").forEach(card => {

        const tituloEl = card.querySelector(".titulo");
        const heart = card.querySelector(".heart");
        if (!tituloEl || !heart) return;

        const nome = tituloEl.innerText;
        const existe = favoritos.find(p => p.nome === nome);

        if (existe) {
            heart.classList.add("ativo");
        } else {
            heart.classList.remove("ativo");
        }

    });

}

// Chamado externamente pelo favorite.js
function atualizarModelo() {
    sincronizarCards();
}


/* -------------------------------------------------------------
   EMBARALHAR PRODUTOS
   ------------------------------------------------------------- */

function embaralhar(array) {

    const novoArray = [...array];

    for (let i = novoArray.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [novoArray[i], novoArray[j]] = [novoArray[j], novoArray[i]];
    }

    return novoArray;
}


/* -------------------------------------------------------------
   MAPA GLOBAL — PRODUTOS EMBARALHADOS (para navegação por idx)
   ------------------------------------------------------------- */

let _lista01 = [];
let _lista02 = [];


/* -------------------------------------------------------------
   INICIALIZAÇÃO — RENDER + SINCRONIZAÇÃO
   ------------------------------------------------------------- */

_lista01 = embaralhar(produtos1);
_lista02 = embaralhar(produtos2);

renderProdutos(_lista01, "produtos-container01");
renderProdutos(_lista02, "produtos-container02");

setTimeout(sincronizarCards, 50);


/* -------------------------------------------------------------
   NAVEGAÇÃO AO CLICAR NO CARD
   Salva o produto e a origem (home/cliente) no sessionStorage
   e redireciona para a pasta produto/ (que está na raiz do site,
   um nível acima de /cliente/)
   ------------------------------------------------------------- */

document.addEventListener("click", (e) => {

    if (e.target.closest(".bag") || e.target.closest(".heart")) return;

    const card = e.target.closest(".card[data-produto-lista]");
    if (!card) return;

    e.preventDefault();
    e.stopPropagation();

    const lista = card.dataset.produtoLista;
    const idx   = parseInt(card.dataset.produtoIdx, 10);

    const produtoClicado = lista === "produtos-container01"
        ? _lista01[idx]
        : _lista02[idx];

    if (!produtoClicado) return;

    sessionStorage.setItem("produtoSelecionado", JSON.stringify(produtoClicado));

    // Em cliente/index.html não existe #abrir, então origem = "cliente"
    const origem = document.getElementById("abrir") ? "home" : "cliente";
    sessionStorage.setItem("origemProduto", origem);

    // cliente/index.html está em /cliente/, produto/ está na raiz -> sobe um nível
    window.location.href = "../produto/";
});


/* -------------------------------------------------------------
   CARRINHO — TOGGLE DO ÍCONE DE SACOLA
   ------------------------------------------------------------- */

document.addEventListener("click", (e) => {

    const bag = e.target.closest(".bag");
    if (!bag) return;

    e.preventDefault();
    e.stopPropagation();

    bag.classList.toggle("ativo");
});


/* -------------------------------------------------------------
   ANIMAÇÃO AO SCROLL (INTERSECTION OBSERVER)
   ------------------------------------------------------------- */

window.addEventListener("DOMContentLoaded", () => {

    const elementos = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: "0px 0px -50px 0px" });

    elementos.forEach(el => observer.observe(el));

});

/* -------------------------------------------------------------
   BANNERS (CARROSSEL AUTOMÁTICO)
   ------------------------------------------------------------- */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function trocarSlide() {

    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");

    if (slides[currentSlide].classList.contains("slide2")) {
        animarMeta();
    }

}

if (slides.length) {
    setInterval(trocarSlide, 4000);
}


const metaTotal = 50000;
const valorArrecadado = 32500;

const porcentagem = (valorArrecadado / metaTotal) * 100;

const metaValor = document.getElementById("metaValor");
const progressoMeta = document.getElementById("progressoMeta");
const statusMeta = document.getElementById("statusMeta");

let metaAnimada = false;

function animarMeta() {

    if (metaAnimada) return;

    metaAnimada = true;

    let contador = 0;

    const animacao = setInterval(() => {

        contador += valorArrecadado / 100;

        if (contador >= valorArrecadado) {
            contador = valorArrecadado;
            clearInterval(animacao);
        }

        metaValor.textContent =
            `R$ ${Math.floor(contador).toLocaleString('pt-BR')}`;

    }, 15);

    statusMeta.textContent =
        `${porcentagem.toFixed(0)}% da meta alcançada`;

    setTimeout(() => {
        progressoMeta.style.width = `${porcentagem}%`;
    }, 300);
}


/* -------------------------------------------------------------
   TELA DE BUSCA — MENU DE CATEGORIAS + CARDS COMPACTOS
   ------------------------------------------------------------- */

(function () {
    const productsSpace = document.querySelector(".products-space");
    const catItems      = document.querySelectorAll(".cat-item");
    const searchBox     = document.querySelector(".search-box");

    if (!productsSpace) return;

    // Junta todos os produtos das duas listas em uma só
    const todosProdutos = [...produtos1, ...produtos2];

    let _listaBusca = [];

    function renderBusca(lista) {
        _listaBusca = lista;

        if (!lista.length) {
            productsSpace.classList.add("vazio");
            productsSpace.innerHTML = `<p class="sem-resultados">Nenhum produto encontrado.</p>`;
            return;
        }

        productsSpace.classList.remove("vazio");

        let html = "";

        lista.forEach((prod, index) => {
            html += `
<div class="card-mini" data-busca-idx="${index}">
    <div class="img-mini">
        <img src="${prod.img}" loading="lazy" alt="${prod.nome}">
    </div>
    <p class="nome-mini">${prod.nome}</p>
</div>`;
        });

        productsSpace.innerHTML = html;
    }

    function filtrarPorCategoria(categoria) {
        if (categoria === "todos") return todosProdutos;
        return todosProdutos.filter(p =>
            (p.categoriaMenu || "").toLowerCase() === categoria
        );
    }

    function filtrarPorTexto(texto) {
        const termo = texto.trim().toLowerCase();
        if (!termo) return todosProdutos;
        return todosProdutos.filter(p => p.nome.toLowerCase().includes(termo));
    }

    function resetarCategoriaAtiva() {
        catItems.forEach(c => c.classList.remove("active"));
        document.querySelector('.cat-item[data-categoria="todos"]')?.classList.add("active");
    }

    // Render inicial — mostra todos os produtos
    renderBusca(todosProdutos);

    // Clique nas categorias do menu lateral
    catItems.forEach(item => {
        item.addEventListener("click", () => {
            catItems.forEach(c => c.classList.remove("active"));
            item.classList.add("active");

            if (searchBox) searchBox.value = "";

            const categoria = item.dataset.categoria;
            renderBusca(filtrarPorCategoria(categoria));
        });
    });

    // Busca por texto digitado
    if (searchBox) {
        searchBox.addEventListener("input", (e) => {
            const valor = e.target.value;

            if (valor.trim() === "") {
                resetarCategoriaAtiva();
                renderBusca(todosProdutos);
                return;
            }

            resetarCategoriaAtiva();
            renderBusca(filtrarPorTexto(valor));
        });
    }

    // Clique no card → vai para a tela de produto
    productsSpace.addEventListener("click", (e) => {
        const card = e.target.closest(".card-mini[data-busca-idx]");
        if (!card) return;

        const idx = parseInt(card.dataset.buscaIdx, 10);
        const produtoClicado = _listaBusca[idx];
        if (!produtoClicado) return;

        sessionStorage.setItem("produtoSelecionado", JSON.stringify(produtoClicado));

        const origem = document.getElementById("abrir") ? "home" : "cliente";
        sessionStorage.setItem("origemProduto", origem);

        // cliente/index.html está em /cliente/, produto/ está na raiz -> sobe um nível
        window.location.href = "../produto/";
    });
})();


/* -------------------------------------------------------------
   BOTÃO "CONHECER O VENDEDOR" — BANNER BIBLIOTECA
   Garante a navegação para perfil-vendedor/ mesmo que outros
   listeners globais chamem stopPropagation/preventDefault.
   ------------------------------------------------------------- */

document.addEventListener("click", (e) => {
    const btnVerPerfil = e.target.closest(".btn-ver-perfil");
    if (!btnVerPerfil) return;

    e.preventDefault();
    e.stopPropagation();

    window.location.href = btnVerPerfil.getAttribute("href");
});
