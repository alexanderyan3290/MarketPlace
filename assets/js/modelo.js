//  VOLTAR AO TOPO
window.onbeforeunload = () => {
    window.scrollTo(0, 0);
};


//  ANIMAÇÃO AO SCROLL
window.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.2 });

    elementos.forEach(el => observer.observe(el));
});


//  PRODUTOS (SEÇÃO 1)
const produtos1 = [
    {/*card 01 */
        nome: "Tênis Nike Revolution 8",
        categoria: "CORRIDA",
        preco: "R$ 303,99",
        antigo: "R$ 399,99",
        img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg",
        oferta: "20% DESCONTO"
    },
    {/*card 02 */
        nome: "Camiseta Adidas Treino Básica Masculina",
        categoria: "CORRIDA",
        preco: "R$ 89,99",
        antigo: "R$ 99,99",
        img: "https://static.netshoes.com.br/produtos/camiseta-adidas-treino-basica-masculina/06/FB9-8626-006/FB9-8626-006_zoom1.jpg?ts=1776483991&ims=1088x",
        oferta: "20% DESCONTO"
    },
    {/*card 03 */
        nome: "Camiseta Essentials de malha simples com logotipo pequeno",
        categoria: "CORRIDA",
        preco: "R$ 90,24",
        antigo: "R$ 85,72",
        img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/c69137ae0fbd469e91643ab2b967931a_9366/Camiseta_Essentials_de_malha_simples_com_logotipo_pequeno_Cinza_JF1091_21_model.jpg",
        oferta: "20% DESCONTO"
    },
    {/*card 04 */
        nome: "Camiseta Lacoste de Tênis Estampada Ultra-Dry",
        categoria: "CORRIDA",
        preco: "R$ 259,13",
        antigo: "R$ 345,51",
        img: "https://static.netshoes.com.br/produtos/camiseta-lacoste-de-tenis-estampada-ultra-dry-masculina/60/S2E-04GX-060/S2E-04GX-060_zoom1.jpg?ts=1771429250&ims=1088x",
        oferta: "25% DESCONTO"
    },
    {/*card 05 */
        nome: "Camisa Polo Lacoste Regular Fit Paris Em Piqué Stretch",
        categoria: "CORRIDA",
        preco: "R$ 503,10",
        antigo: "R$ 649,00",
        img: "https://static.netshoes.com.br/produtos/camisa-polo-lacoste-regular-fit-paris-em-pique-stretch-masculina/34/D66-7497-034/D66-7497-034_zoom1.jpg?ts=1772942971&ims=1088x",
        oferta: "13% DESCONTO"
    },
    {/*card 06 */
        nome: "Camisa Brasil Jordan II 2026/27 Torcedor Pro",
        categoria: "CORRIDA",
        preco: "R$ 359,99",
        antigo: "R$ 449,99",
        img: "https://static.netshoes.com.br/produtos/camisa-brasil-jordan-ii-202627-torcedor-pro-masculina/08/MJU-002H-008/MJU-002H-008_zoom1.jpg?ts=1776276933&ims=1088x",
        oferta: "20% DESCONTO"
    },
    {/*card 07 */
        nome: "Regata Adidas Cropped Basketball",
        categoria: "CORRIDA",
        preco: "R$ 313,49",
        antigo: "R$ 449,99",
        img: "https://static.netshoes.com.br/produtos/regata-adidas-cropped-basketball-feminina/98/FBA-822T-198/FBA-822T-198_zoom1.jpg?ts=1773741351&ims=1088x",
        oferta: "26% DESCONTO"
    },
    {/*card 08 */
        nome: "Boné Dri-FIT Nike Swoosh Unissex",
        categoria: "CASUAL",
        preco: "R$ 85,49",
        antigo: "R$ 199,99",
        img: "https://static.netshoes.com.br/produtos/bone-dri-fit-nike-swoosh-unissex/06/SGL-03HY-006/SGL-03HY-006_zoom1.jpg?ts=1776398836&ims=1088x",
        oferta: "55% DESCONTO"
    },
    {/*card 09 */
        nome: "Boné Adidas Bball 3Stripes Nl",
        categoria: "CORRIDA",
        preco: "R$ 111,92",
        antigo: "R$ 139,90",
        img: "https://static.netshoes.com.br/produtos/bone-adidas-bball-3stripes-nl/30/FBA-84E3-030/FBA-84E3-030_zoom1.jpg?ts=1776428485&ims=1088x",
        oferta: "20% DESCONTO"
    },
    {/*card 10 */
        nome: "Calça Adidas Allset 3S",
        categoria: "CORRIDA",
        preco: "R$  299,99",
        antigo: "R$ 399,99",
        img: "https://static.netshoes.com.br/produtos/calca-adidas-allset-3s-masculina/60/FBA-83AQ-060/FBA-83AQ-060_zoom1.jpg?ts=1776592187&ims=1088x",
        oferta: "14% DESCONTO"
    },
    {/*card 11 */
        nome: "Caça Adidas Disney Mickey Mouse",
        categoria: "CORRIDA",
        preco: "R$ 249,99",
        antigo: "R$ 180,49",
        img: "https://static.netshoes.com.br/produtos/caca-adidas-disney-mickey-mouse/09/FBA-84WG-309/FBA-84WG-309_zoom1.jpg?ts=1773830828&ims=1088x",
        oferta: "24% DESCONTO"
    },
    {/*card 12 */
        nome: "Tênis Olympikus Corre 4",
        categoria: "CORRIDA",
        preco: "R$ 499,99",
        antigo: "R$ 599,99",
        img: "https://static.netshoes.com.br/produtos/tenis-olympikus-corre-4/60/2I3-0603-960/2I3-0603-960_zoom1.jpg?ts=1776592025&ims=1088x",
        oferta: "16% DESCONTO"
    }
];

//  PRODUTOS (SEÇÃO 2)
const produtos2 = [
    {/*card 01 */
        nome: "Tênis Olympikus Corre 4",
        categoria: "CORRIDA",
        preco: "R$ 499,99",
        antigo: "R$ 599,99",
        img: "https://static.netshoes.com.br/produtos/tenis-olympikus-corre-4/33/2I3-0603-933/2I3-0603-933_zoom1.jpg?ts=1776593840&ims=1088x",
        oferta: "16% DESCONTO"
    },
    {/*card 02 */
        nome: "Tênis Fila Rt-Low",
        categoria: "CORRIDA",
        preco: "R$ 188,99",
        antigo: "R$ 299,99",
        img: "https://static.netshoes.com.br/produtos/tenis-fila-rt-low-masculino/12/SFK-07WZ-012/SFK-07WZ-012_zoom1.jpg?ts=1776592528&ims=1088x",
        oferta: "30% DESCONTO"
    },
    {/*card 03 */
        nome: "Tênis Nike Big Low",
        categoria: "CORRIDA",
        preco: "R$ 427,49",
        antigo: "R$ 699,99",
        img: "https://static.netshoes.com.br/produtos/tenis-nike-big-low-masculino/55/SGL-04QL-855/SGL-04QL-855_zoom1.jpg?ts=1774386302&ims=1088x",
        oferta: "35% DESCONTO"
    },
    {/*card 04 */
        nome: "Tênis Nike SB Force 58",
        categoria: "CORRIDA",
        preco: "R$ 398,99",
        antigo: "R$ 599,99",
        img: "https://static.netshoes.com.br/produtos/tenis-nike-sb-force-58-masculino/54/SGL-043O-154/SGL-043O-154_zoom1.jpg?ts=1776001552&ims=1088x",
        oferta: "30% DESCONTO"
    },
    {/*card 05 */
        nome: "Tênis Masculino Lacoste Sideline Pro",
        categoria: "CORRIDA",
        preco: "R$ 199,00",
        antigo: "R$ 349,00",
        img: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw8f2cfc65/45CMA0056BR_407_01.jpg?imwidth=960&impolicy=pctp&imdensity=1",
        oferta: "40% DESCONTO"
    },
    {/*card 06 */
        nome: "Tênis Masculinos Spinor",
        categoria: "CORRIDA",
        preco: "R$ 959,20",
        antigo: "R$ 1.199,00",
        img: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw12ed9cf2/51SMA0053_2P2_01.jpg?imwidth=960&impolicy=pctp&imdensity=1",
        oferta: "20% DESCONTO"
    },
    {/*card 07 */
        nome: "Cama Zee.Dog Skull Zee",
        categoria: "CORRIDA",
        preco: "R$ 463,20",
        antigo: "R$ 579,00",
        img: "https://images.petz.com.br/fotos/1632948750925.jpg",
        oferta: "20% DESCONTO"
    },
    {/*card 08 */
        nome: "Viveiro Chalesco Pássaros Pequeno",
        categoria: "CORRIDA",
        preco: "R$ 809,99",
        antigo: "R$ 1.799,99",
        img: "https://images.petz.com.br/fotos/1617109909022.jpg",
        oferta: "55% DESCONTO"
    },
    {/*card 09 */
        nome: "Brinquedo Germanhart Ultraball com Apito para Cães",
        categoria: "CORRIDA",
        preco: "R$ 51,29",
        antigo: "R$ 53,99",
        img: "https://images.petz.com.br/fotos/1715962358216.jpg",
        oferta: "5% DESCONTO"
    },
    {/*card 10 */
        nome: "Espremedor de Frutas Mondial Premium E-02",
        categoria: "CORRIDA",
        preco: "R$ 59,90",
        antigo: "R$ 79,90",
        img: "https://imgs.casasbahia.com.br/14038/1g.jpg?imwidth=500",
        oferta: "25% DESCONTO"
    },
    {/*card 11 */
        nome: "Sanduicheira Elétrica Cadence Click",
        categoria: "CORRIDA",
        preco: "R$ 99,00",
        antigo: "R$ 137,18",
        img: "https://imgs.casasbahia.com.br/55066944/1g.jpg?imwidth=500",
        oferta: "28% DESCONTO"
    },
    {/*card 12 */
        nome: "Aspirador de Pó Portátil Black+Decker",
        categoria: "CORRIDA",
        preco: "R$ 629,10",
        antigo: "R$ 699,00",
        img: "https://imgs.casasbahia.com.br/55071984/1g.jpg?imwidth=500",
        oferta: "10% DESCONTO"
    }
];


//  FUNÇÃO DE RENDER
function renderProdutos(lista, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // pega favoritos salvos
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    let html = "";

    lista.forEach(prod => {

        // verifica se esse produto está favoritado
        const ativo = favoritos.includes(prod.nome) ? "ativo" : "";

        html += `
            <div class="card">

    <span class="heart ${ativo}">
        <i class='bx bx-heart vazio'></i>
        <i class='bx bxs-heart cheio'></i>
    </span>

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
    </div>

</div>
        `;
    });

    container.innerHTML = html;
}

document.addEventListener("click", function(e) {
    const heart = e.target.closest(".heart");
    if (!heart) return;

    e.preventDefault();
    e.stopPropagation();

    const icon = heart.querySelector("i");

    const card = heart.closest(".card");
    const nome = card.querySelector("h3").textContent.trim();

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    const ativo = heart.classList.contains("ativo");

    if (ativo) {
        heart.classList.remove("ativo");
        icon.classList.replace("bxs-heart", "bx-heart");
        favoritos = favoritos.filter(item => item !== nome);
    } else {
        heart.classList.add("ativo");
        icon.classList.replace("bx-heart", "bxs-heart");
        if (!favoritos.includes(nome)) {
            favoritos.push(nome);
        }
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
});

// RENDERIZA
renderProdutos(produtos1, "produtos-container01");
renderProdutos(produtos2, "produtos-container02");


//  ESTRELAS
const notas = [4.3, 3.8, 5, 2.5, 1, 4.3];

const estrelasContainers = document.querySelectorAll(".stars");
const notasTexto = document.querySelectorAll(".nota");

notas.forEach((nota, i) => {
    let container = estrelasContainers[i];
    let texto = notasTexto[i];

    if (!container) return;

    container.innerHTML = "";

    let cheias = Math.floor(nota);
    let resto = nota - cheias;

    let meia = resto >= 0.25 && resto < 0.75;
    let cheiaExtra = resto >= 0.75;

    if (cheiaExtra) cheias++;

    let vazias = 5 - cheias - (meia ? 1 : 0);

    for (let j = 0; j < cheias; j++) {
        container.innerHTML += "<i class='bx bxs-star'></i>";
    }

    if (meia) {
        container.innerHTML += "<i class='bx bxs-star-half'></i>";
    }

    for (let j = 0; j < vazias; j++) {
        container.innerHTML += "<i class='bx bx-star'></i>";
    }

    if (texto) {
        texto.innerText = nota.toFixed(1);
    }
});


//  METAS
const metas = [
    { atual: 2000, meta: 5000 },
    { atual: 3500, meta: 5000 },
    { atual: 4800, meta: 5000 },
    { atual: 1000, meta: 5000 },
    { atual: 500, meta: 5000 },
    { atual: 4800, meta: 5000 }
];

const barras = document.querySelectorAll(".progresso");
const textosMeta = document.querySelectorAll(".meta-text");

metas.forEach((item, i) => {
    if (!barras[i]) return;

    const porcentagem = (item.atual / item.meta) * 100;

    setTimeout(() => {
        barras[i].style.width = porcentagem + "%";
    }, 300);

    textosMeta[i].innerText = `R$ ${item.atual} / R$ ${item.meta}`;
});


// SLIDER VENDEDORES
const track = document.querySelector(".track");
const totalGrupos = document.querySelectorAll(".grupo").length;

let grupoIndex = 0;

setInterval(() => {
    grupoIndex = (grupoIndex + 1) % totalGrupos;
    track.style.transform = `translateX(-${grupoIndex * 100}%)`;
}, 4000);
