/* -------------------------------------------------------------
   ANIMAÇÃO AO SCROLL (INTERSECTION OBSERVER)
   ------------------------------------------------------------- */

window.addEventListener("DOMContentLoaded", () => {

    const elementos = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.2 });

    elementos.forEach(el => observer.observe(el));

});


/* -------------------------------------------------------------
   BARRA DE PESQUISA
   ------------------------------------------------------------- */

const searchBtn = document.querySelector(".search-btn");
const searchContainer = document.querySelector(".search-container");
const closeSearch = document.querySelector(".close-search");

searchBtn.onclick = () => {
    searchContainer.classList.add("active");
};

closeSearch.onclick = () => {
    searchContainer.classList.remove("active");
};

/* -------------------------------------------------------------
   DADOS — PRODUTOS (SEÇÃO 1)
   ------------------------------------------------------------- */

const produtos1 = [
    {
        nome: "Tênis Nike Revolution 8",
        categoria: "CORRIDA",
        preco: "R$ 303,99",
        antigo: "R$ 399,99",
        img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg",
        oferta: "20% DESCONTO"
    },
    {
        nome: "Camiseta Adidas Treino Básica Masculina",
        categoria: "CORRIDA",
        preco: "R$ 89,99",
        antigo: "R$ 99,99",
        img: "https://static.netshoes.com.br/produtos/camiseta-adidas-treino-basica-masculina/06/FB9-8626-006/FB9-8626-006_zoom1.jpg?ts=1776483991&ims=1088x",
        oferta: "20% DESCONTO"
    },
    {
        nome: "Camiseta Essentials de malha simples com logotipo pequeno",
        categoria: "CORRIDA",
        preco: "R$ 90,24",
        antigo: "R$ 85,72",
        img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/c69137ae0fbd469e91643ab2b967931a_9366/Camiseta_Essentials_de_malha_simples_com_logotipo_pequeno_Cinza_JF1091_21_model.jpg",
        oferta: "20% DESCONTO"
    },
    {
        nome: "Camiseta Lacoste de Tênis Estampada Ultra-Dry",
        categoria: "CORRIDA",
        preco: "R$ 259,13",
        antigo: "R$ 345,51",
        img: "https://static.netshoes.com.br/produtos/camiseta-lacoste-de-tenis-estampada-ultra-dry-masculina/60/S2E-04GX-060/S2E-04GX-060_zoom1.jpg?ts=1771429250&ims=1088x",
        oferta: "25% DESCONTO"
    },
    {
        nome: "Camisa Polo Lacoste Regular Fit Paris Em Piqué Stretch",
        categoria: "CORRIDA",
        preco: "R$ 503,10",
        antigo: "R$ 649,00",
        img: "https://static.netshoes.com.br/produtos/camisa-polo-lacoste-regular-fit-paris-em-pique-stretch-masculina/34/D66-7497-034/D66-7497-034_zoom1.jpg?ts=1772942971&ims=1088x",
        oferta: "13% DESCONTO"
    },
    {
        nome: "Camisa Brasil Jordan II 2026/27 Torcedor Pro",
        categoria: "CORRIDA",
        preco: "R$ 359,99",
        antigo: "R$ 449,99",
        img: "https://static.netshoes.com.br/produtos/camisa-brasil-jordan-ii-202627-torcedor-pro-masculina/08/MJU-002H-008/MJU-002H-008_zoom1.jpg?ts=1776276933&ims=1088x",
        oferta: "20% DESCONTO"
    },
    {
        nome: "Regata Adidas Cropped Basketball",
        categoria: "CORRIDA",
        preco: "R$ 313,49",
        antigo: "R$ 449,99",
        img: "https://static.netshoes.com.br/produtos/regata-adidas-cropped-basketball-feminina/98/FBA-822T-198/FBA-822T-198_zoom1.jpg?ts=1773741351&ims=1088x",
        oferta: "26% DESCONTO"
    },
    {
        nome: "Boné Dri-FIT Nike Swoosh Unissex",
        categoria: "CASUAL",
        preco: "R$ 85,49",
        antigo: "R$ 199,99",
        img: "https://static.netshoes.com.br/produtos/bone-dri-fit-nike-swoosh-unissex/06/SGL-03HY-006/SGL-03HY-006_zoom1.jpg?ts=1776398836&ims=1088x",
        oferta: "55% DESCONTO"
    },
    {
        nome: "Boné Adidas Bball 3Stripes Nl",
        categoria: "CORRIDA",
        preco: "R$ 111,92",
        antigo: "R$ 139,90",
        img: "https://static.netshoes.com.br/produtos/bone-adidas-bball-3stripes-nl/30/FBA-84E3-030/FBA-84E3-030_zoom1.jpg?ts=1776428485&ims=1088x",
        oferta: "20% DESCONTO"
    },
    {
        nome: "Calça Adidas Allset 3S",
        categoria: "CORRIDA",
        preco: "R$ 299,99",
        antigo: "R$ 399,99",
        img: "https://static.netshoes.com.br/produtos/calca-adidas-allset-3s-masculina/60/FBA-83AQ-060/FBA-83AQ-060_zoom1.jpg?ts=1776592187&ims=1088x",
        oferta: "14% DESCONTO"
    },
    {
        nome: "Caça Adidas Disney Mickey Mouse",
        categoria: "CORRIDA",
        preco: "R$ 249,99",
        antigo: "R$ 180,49",
        img: "https://static.netshoes.com.br/produtos/caca-adidas-disney-mickey-mouse/09/FBA-84WG-309/FBA-84WG-309_zoom1.jpg?ts=1773830828&ims=1088x",
        oferta: "24% DESCONTO"
    },
    {
        nome: "Tênis Olympikus Corre 4",
        categoria: "CORRIDA",
        preco: "R$ 499,99",
        antigo: "R$ 599,99",
        img: "https://static.netshoes.com.br/produtos/tenis-olympikus-corre-4/60/2I3-0603-960/2I3-0603-960_zoom1.jpg?ts=1776592025&ims=1088x",
        oferta: "16% DESCONTO"
    },
    {
        nome: "Tênis Olympikus Corre 4",
        categoria: "CORRIDA",
        preco: "R$ 499,99",
        antigo: "R$ 599,99",
        img: "https://static.netshoes.com.br/produtos/tenis-olympikus-corre-4/33/2I3-0603-933/2I3-0603-933_zoom1.jpg?ts=1776593840&ims=1088x",
        oferta: "16% DESCONTO"
    },
    {
        nome: "Tênis Fila Rt-Low",
        categoria: "CORRIDA",
        preco: "R$ 188,99",
        antigo: "R$ 299,99",
        img: "https://static.netshoes.com.br/produtos/tenis-fila-rt-low-masculino/12/SFK-07WZ-012/SFK-07WZ-012_zoom1.jpg?ts=1776592528&ims=1088x",
        oferta: "30% DESCONTO"
    },
    {
        nome: "Tênis Nike Big Low",
        categoria: "CORRIDA",
        preco: "R$ 427,49",
        antigo: "R$ 699,99",
        img: "https://static.netshoes.com.br/produtos/tenis-nike-big-low-masculino/55/SGL-04QL-855/SGL-04QL-855_zoom1.jpg?ts=1774386302&ims=1088x",
        oferta: "35% DESCONTO"
    },
    {
        nome: "Tênis Nike SB Force 58",
        categoria: "CORRIDA",
        preco: "R$ 398,99",
        antigo: "R$ 599,99",
        img: "https://static.netshoes.com.br/produtos/tenis-nike-sb-force-58-masculino/54/SGL-043O-154/SGL-043O-154_zoom1.jpg?ts=1776001552&ims=1088x",
        oferta: "30% DESCONTO"
    },
    {
        nome: "Tênis Masculino Lacoste Sideline Pro",
        categoria: "CORRIDA",
        preco: "R$ 199,00",
        antigo: "R$ 349,00",
        img: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw8f2cfc65/45CMA0056BR_407_01.jpg?imwidth=960&impolicy=pctp&imdensity=1",
        oferta: "40% DESCONTO"
    },
    {
        nome: "Tênis Masculinos Spinor",
        categoria: "CORRIDA",
        preco: "R$ 959,20",
        antigo: "R$ 1.199,00",
        img: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw12ed9cf2/51SMA0053_2P2_01.jpg?imwidth=960&impolicy=pctp&imdensity=1",
        oferta: "20% DESCONTO"
    },
    {
        nome: "Cama Zee.Dog Skull Zee",
        categoria: "CORRIDA",
        preco: "R$ 463,20",
        antigo: "R$ 579,00",
        img: "https://images.petz.com.br/fotos/1632948750925.jpg",
        oferta: "20% DESCONTO"
    },
    {
        nome: "Viveiro Chalesco Pássaros Pequeno",
        categoria: "CORRIDA",
        preco: "R$ 809,99",
        antigo: "R$ 1.799,99",
        img: "https://images.petz.com.br/fotos/1617109909022.jpg",
        oferta: "55% DESCONTO"
    },
    {
        nome: "Brinquedo Germanhart Ultraball com Apito para Cães",
        categoria: "CORRIDA",
        preco: "R$ 51,29",
        antigo: "R$ 53,99",
        img: "https://images.petz.com.br/fotos/1715962358216.jpg",
        oferta: "5% DESCONTO"
    },
    {
        nome: "Espremedor de Frutas Mondial Premium E-02",
        categoria: "CORRIDA",
        preco: "R$ 59,90",
        antigo: "R$ 79,90",
        img: "https://imgs.casasbahia.com.br/14038/1g.jpg?imwidth=500",
        oferta: "25% DESCONTO"
    },
    {
        nome: "Sanduicheira Elétrica Cadence Click",
        categoria: "CORRIDA",
        preco: "R$ 99,00",
        antigo: "R$ 137,18",
        img: "https://imgs.casasbahia.com.br/55066944/1g.jpg?imwidth=500",
        oferta: "28% DESCONTO"
    },
    {
        nome: "Aspirador de Pó Portátil Black+Decker",
        categoria: "CORRIDA",
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

    lista.forEach(prod => {

        const ativo = favoritos.find(p => p.nome === prod.nome) ? "ativo" : "";

        html += `
<div class="card">

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
   INICIALIZAÇÃO — RENDER + SINCRONIZAÇÃO
   ------------------------------------------------------------- */

renderProdutos(
    embaralhar(produtos1),
    "produtos-container01"
);

setTimeout(sincronizarCards, 50);
