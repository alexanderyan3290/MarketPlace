/* =============================================================
   PERFIL.JS
   Usado em perfil-vendedor/index.html.
   - Preenche os cards de Meta, Avaliação e Reputação (sidebar)
     no mesmo padrão do dashboard de vendedores da home.
   - Renderiza a grade "Meus Produtos" (12 cards) no main-card.
   - Aplica o modo de visualização (Vendedor x Cliente),
     ocultando dados privados quando o visitante não é o
     vendedor logado.
   ============================================================= */

// ===================== DADOS DO VENDEDOR =====================
(function () {
    const metaAtual = 4800;
    const metaTotal = 5000;
    const pctMeta   = Math.min(100, Math.round((metaAtual / metaTotal) * 100));

    const totalAvaliacoes = 310;
    const reputacao       = 4.3;

    // Meta
    const barra = document.getElementById("vendedorProgresso");
    if (barra) {
        setTimeout(() => { barra.style.width = pctMeta + "%"; }, 300);
    }
    const metaTextoEl = document.getElementById("vendedorMetaTexto");
    if (metaTextoEl) {
        metaTextoEl.innerText = `R$ ${metaAtual.toLocaleString("pt-BR")} / R$ ${metaTotal.toLocaleString("pt-BR")}`;
    }

    // Avaliação
    const reputacaoEl = document.getElementById("vendedorReputacao");
    if (reputacaoEl) reputacaoEl.innerText = reputacao.toFixed(1);

    const avaliacoesTextoEl = document.getElementById("vendedorAvaliacoesTexto");
    if (avaliacoesTextoEl) {
        avaliacoesTextoEl.innerHTML = `Baseado em <strong>${totalAvaliacoes.toLocaleString("pt-BR")} avaliações</strong>`;
    }

    const starsEl = document.getElementById("vendedorStars");
    if (starsEl) {
        let cheias = Math.floor(reputacao);
        const resto = reputacao - cheias;
        const meia  = resto >= 0.25 && resto < 0.75;
        if (resto >= 0.75) cheias++;
        const vazias = 5 - cheias - (meia ? 1 : 0);

        let html = "";
        for (let i = 0; i < cheias; i++) html += "<i class='bx bxs-star'></i>";
        if (meia) html += "<i class='bx bxs-star-half'></i>";
        for (let i = 0; i < vazias; i++) html += "<i class='bx bx-star'></i>";
        starsEl.innerHTML = html;
    }

    // Reputação
    const satisfacao   = Math.floor((reputacao / 5) * 100);
    const recomendacao = Math.floor((reputacao / 5) * 100);

    const satisfacaoEl   = document.getElementById("vendedorSatisfacao");
    const recomendacaoEl = document.getElementById("vendedorRecomendacao");
    const comentariosEl  = document.getElementById("vendedorComentarios");

    if (satisfacaoEl)   satisfacaoEl.innerText   = satisfacao + "%";
    if (recomendacaoEl) recomendacaoEl.innerText = recomendacao;
    if (comentariosEl)  comentariosEl.innerText  = totalAvaliacoes;
})();


// ===================== MEUS PRODUTOS (12 cards) =====================
(function () {
    const grid = document.getElementById("produtosVendedorGrid");
    if (!grid) return;

    const meusProdutos = [
        {
            nome: "Tênis Nike Revolution 8",
            categoria: "MASCULINO",
            preco: "R$ 303,99",
            antigo: "R$ 399,99",
            img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg",
            oferta: "20% DESCONTO"
        },
        {
            nome: "Camiseta Adidas Treino Básica Masculina",
            categoria: "MASCULINO",
            preco: "R$ 89,99",
            antigo: "R$ 99,99",
            img: "https://static.netshoes.com.br/produtos/camiseta-adidas-treino-basica-masculina/06/FB9-8626-006/FB9-8626-006_zoom1.jpg?ts=1776483991&ims=1088x",
            oferta: "20% DESCONTO"
        },
        {
            nome: "Camiseta Essentials de malha simples com logotipo pequeno",
            categoria: "ROUPAS",
            preco: "R$ 90,24",
            antigo: "R$ 85,72",
            img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/c69137ae0fbd469e91643ab2b967931a_9366/Camiseta_Essentials_de_malha_simples_com_logotipo_pequeno_Cinza_JF1091_21_model.jpg",
            oferta: "20% DESCONTO"
        },
        {
            nome: "Camiseta Lacoste de Tênis Estampada Ultra-Dry",
            categoria: "MASCULINO",
            preco: "R$ 259,13",
            antigo: "R$ 345,51",
            img: "https://static.netshoes.com.br/produtos/camiseta-lacoste-de-tenis-estampada-ultra-dry-masculina/60/S2E-04GX-060/S2E-04GX-060_zoom1.jpg?ts=1771429250&ims=1088x",
            oferta: "25% DESCONTO"
        },
        {
            nome: "Camisa Polo Lacoste Regular Fit Paris Em Piqué Stretch",
            categoria: "MASCULINO",
            preco: "R$ 503,10",
            antigo: "R$ 649,00",
            img: "https://static.netshoes.com.br/produtos/camisa-polo-lacoste-regular-fit-paris-em-pique-stretch-masculina/34/D66-7497-034/D66-7497-034_zoom1.jpg?ts=1772942971&ims=1088x",
            oferta: "13% DESCONTO"
        },
        {
            nome: "Camisa Brasil Jordan II 2026/27 Torcedor Pro",
            categoria: "MASCULINO",
            preco: "R$ 359,99",
            antigo: "R$ 449,99",
            img: "https://static.netshoes.com.br/produtos/camisa-brasil-jordan-ii-202627-torcedor-pro-masculina/08/MJU-002H-008/MJU-002H-008_zoom1.jpg?ts=1776276933&ims=1088x",
            oferta: "20% DESCONTO"
        },
        {
            nome: "Regata Adidas Cropped Basketball",
            categoria: "ESPORTE",
            preco: "R$ 313,49",
            antigo: "R$ 449,99",
            img: "https://static.netshoes.com.br/produtos/regata-adidas-cropped-basketball-feminina/98/FBA-822T-198/FBA-822T-198_zoom1.jpg?ts=1773741351&ims=1088x",
            oferta: "26% DESCONTO"
        },
        {
            nome: "Boné Dri-FIT Nike Swoosh Unissex",
            categoria: "ESPORTE",
            preco: "R$ 85,49",
            antigo: "R$ 199,99",
            img: "https://static.netshoes.com.br/produtos/bone-dri-fit-nike-swoosh-unissex/06/SGL-03HY-006/SGL-03HY-006_zoom1.jpg?ts=1776398836&ims=1088x",
            oferta: "55% DESCONTO"
        },
        {
            nome: "Boné Adidas Bball 3Stripes Nl",
            categoria: "ESPORTE",
            preco: "R$ 111,92",
            antigo: "R$ 139,90",
            img: "https://static.netshoes.com.br/produtos/bone-adidas-bball-3stripes-nl/30/FBA-84E3-030/FBA-84E3-030_zoom1.jpg?ts=1776428485&ims=1088x",
            oferta: "20% DESCONTO"
        },
        {
            nome: "Calça Adidas Allset 3S",
            categoria: "MASCULINO",
            preco: "R$ 299,99",
            antigo: "R$ 399,99",
            img: "https://static.netshoes.com.br/produtos/calca-adidas-allset-3s-masculina/60/FBA-83AQ-060/FBA-83AQ-060_zoom1.jpg?ts=1776592187&ims=1088x",
            oferta: "14% DESCONTO"
        },
        {
            nome: "Tênis Olympikus Corre 4",
            categoria: "MASCULINO",
            preco: "R$ 499,99",
            antigo: "R$ 599,99",
            img: "https://static.netshoes.com.br/produtos/tenis-olympikus-corre-4/60/2I3-0603-960/2I3-0603-960_zoom1.jpg?ts=1776592025&ims=1088x",
            oferta: "16% DESCONTO"
        },
        {
            nome: "Tênis Fila Rt-Low",
            categoria: "MASCULINO",
            preco: "R$ 188,99",
            antigo: "R$ 299,99",
            img: "https://static.netshoes.com.br/produtos/tenis-fila-rt-low-masculino/12/SFK-07WZ-012/SFK-07WZ-012_zoom1.jpg?ts=1776592528&ims=1088x",
            oferta: "30% DESCONTO"
        }
    ];

    let html = "";

    meusProdutos.forEach((prod) => {
        html += `
<div class="card">
    <div class="img-produto">
        <img src="${prod.img}" loading="lazy" alt="${prod.nome}">
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
</div>`;
    });

    grid.innerHTML = html;
})();
