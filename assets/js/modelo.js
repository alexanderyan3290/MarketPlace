// =========================
// 🔄 VOLTAR TOPO
// =========================
window.onbeforeunload = () => {
    window.scrollTo(0, 0);
};

// =========================
// ✨ ANIMAÇÃO AO SCROLL
// =========================
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

// =========================
// 🛒 PRODUTOS (SEÇÃO 1)
// =========================
const produtos1 = [
            {/*card 01 */
                nome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            },
            {/*card 02 */
                nome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            },
            {/*card 03 */
                nome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            },
            {/*card 04 */
                nome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            },
            {/*card 05 */
                nome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            },
            {/*card 06 */
                nome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            },
            {/*card 07 */
                nome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            },
            {/*card 08 */
                nome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            },
            {/*card 09 */
                nnome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            },
            {/*card 10 */
                nome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            },
            {/*card 11 */
                nome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            },
            {/*card 12 */
                nome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            }
        ];


        const produtos2 = [
            {/*card 01 */
                nome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            },
            {/*card 02 */
                nome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            },
            {/*card 03 */
                nome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            },
            {/*card 04 */
                nome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            },
            {/*card 05 */
                nome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            },
            {/*card 06 */
                nome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            },
            {/*card 07 */
                nome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            },
            {/*card 08 */
                nome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            },
            {/*card 09 */
                nnome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            },
            {/*card 10 */
                nome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            },
            {/*card 11 */
                nome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            },
            {/*card 12 */
                nome: "Tênis Nike Revolution 8",
                preco: "R$ 303,99",
                antigo: "R$ 399,99",
                img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg"
            }
        ];

// =========================
// 🔥 FUNÇÃO DE RENDER
// =========================
function renderProdutos(lista, containerId) {
    const container = document.getElementById(containerId);

    if (!container) return;

    let html = "";

    lista.forEach(prod => {
        html += `
            <div class="card">
                <span class="heart"><i class='bx bx-heart'></i></span>
                <div class="img-produto">
                    <img src="${prod.img}">
                </div>
                <h3>${prod.nome}</h3>
                <p class="categoria">Corrida</p>
                <div class="price">
                    <span class="preco-atual">${prod.preco}</span>
                    <span class="preco-antigo">${prod.antigo}</span>
                </div>
                <p class="promo">Oferta</p>
            </div>
        `;
    });

    container.innerHTML = html;
}

// =========================
// 🚀 RENDERIZA
// =========================
renderProdutos(produtos1, "produtos-container01");
renderProdutos(produtos2, "produtos-container02");

// =========================
// ⭐ ESTRELAS
// =========================
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

// =========================
// 📊 METAS
// =========================
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

// =========================
// SLIDER VENDEDORES
// =========================
const track = document.querySelector(".track");
const totalGrupos = document.querySelectorAll(".grupo").length;

let grupoIndex = 0;

setInterval(() => {
    grupoIndex = (grupoIndex + 1) % totalGrupos;
    track.style.transform = `translateX(-${grupoIndex * 100}%)`;
}, 4000);