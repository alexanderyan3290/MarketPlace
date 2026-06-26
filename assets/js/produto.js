/* =============================================================
   PRODUTO.JS
   Preenche dinamicamente TODOS os dados da página de produto
   com base no item salvo no sessionStorage ao clicar no card.
   Inclui: seta de retorno + seção de Produtos Relacionados +
   aba Vendedor.
   ============================================================= */

(function () {

    /* ----------------------------------------------------------
       CATÁLOGO COMPLETO — mesmo banco de dados do modelo.js,
       centralizado aqui para gerar os produtos relacionados.
       ---------------------------------------------------------- */

    const CATALOGO = [
        // ── Seção 1 ──
        {
            nome: "Tênis Nike Revolution 8",
            categoria: "USADO",
            preco: "R$ 303,99",
            antigo: "R$ 399,99",
            img: "https://imgnike-a.akamaihd.net/360x360/058868ID.jpg",
            oferta: "20% DESCONTO"
        },
        {
            nome: "Camiseta Adidas Treino Básica Masculina",
            categoria: "USADO",
            preco: "R$ 89,99",
            antigo: "R$ 99,99",
            img: "https://static.netshoes.com.br/produtos/camiseta-adidas-treino-basica-masculina/06/FB9-8626-006/FB9-8626-006_zoom1.jpg?ts=1776483991&ims=1088x",
            oferta: "20% DESCONTO"
        },
        {
            nome: "Camiseta Essentials de malha simples com logotipo pequeno",
            categoria: "USADO",
            preco: "R$ 90,24",
            antigo: "R$ 85,72",
            img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/c69137ae0fbd469e91643ab2b967931a_9366/Camiseta_Essentials_de_malha_simples_com_logotipo_pequeno_Cinza_JF1091_21_model.jpg",
            oferta: "20% DESCONTO"
        },
        {
            nome: "Camiseta Lacoste de Tênis Estampada Ultra-Dry",
            categoria: "USADO",
            preco: "R$ 259,13",
            antigo: "R$ 345,51",
            img: "https://static.netshoes.com.br/produtos/camiseta-lacoste-de-tenis-estampada-ultra-dry-masculina/60/S2E-04GX-060/S2E-04GX-060_zoom1.jpg?ts=1771429250&ims=1088x",
            oferta: "25% DESCONTO"
        },
        {
            nome: "Camisa Polo Lacoste Regular Fit Paris Em Piqué Stretch",
            categoria: "USADO",
            preco: "R$ 503,10",
            antigo: "R$ 649,00",
            img: "https://static.netshoes.com.br/produtos/camisa-polo-lacoste-regular-fit-paris-em-pique-stretch-masculina/34/D66-7497-034/D66-7497-034_zoom1.jpg?ts=1772942971&ims=1088x",
            oferta: "13% DESCONTO"
        },
        {
            nome: "Camisa Brasil Jordan II 2026/27 Torcedor Pro",
            categoria: "USADO",
            preco: "R$ 359,99",
            antigo: "R$ 449,99",
            img: "https://static.netshoes.com.br/produtos/camisa-brasil-jordan-ii-202627-torcedor-pro-masculina/08/MJU-002H-008/MJU-002H-008_zoom1.jpg?ts=1776276933&ims=1088x",
            oferta: "20% DESCONTO"
        },
        {
            nome: "Regata Adidas Cropped Basketball",
            categoria: "USADO",
            preco: "R$ 313,49",
            antigo: "R$ 449,99",
            img: "https://static.netshoes.com.br/produtos/regata-adidas-cropped-basketball-feminina/98/FBA-822T-198/FBA-822T-198_zoom1.jpg?ts=1773741351&ims=1088x",
            oferta: "26% DESCONTO"
        },
        {
            nome: "Boné Dri-FIT Nike Swoosh Unissex",
            categoria: "USADO",
            preco: "R$ 85,49",
            antigo: "R$ 199,99",
            img: "https://static.netshoes.com.br/produtos/bone-dri-fit-nike-swoosh-unissex/06/SGL-03HY-006/SGL-03HY-006_zoom1.jpg?ts=1776398836&ims=1088x",
            oferta: "55% DESCONTO"
        },
        {
            nome: "Boné Adidas Bball 3Stripes Nl",
            categoria: "USADO",
            preco: "R$ 111,92",
            antigo: "R$ 139,90",
            img: "https://static.netshoes.com.br/produtos/bone-adidas-bball-3stripes-nl/30/FBA-84E3-030/FBA-84E3-030_zoom1.jpg?ts=1776428485&ims=1088x",
            oferta: "20% DESCONTO"
        },
        {
            nome: "Calça Adidas Allset 3S",
            categoria: "USADO",
            preco: "R$ 299,99",
            antigo: "R$ 399,99",
            img: "https://static.netshoes.com.br/produtos/calca-adidas-allset-3s-masculina/60/FBA-83AQ-060/FBA-83AQ-060_zoom1.jpg?ts=1776592187&ims=1088x",
            oferta: "14% DESCONTO"
        },
        {
            nome: "Caça Adidas Disney Mickey Mouse",
            categoria: "USADO",
            preco: "R$ 249,99",
            antigo: "R$ 180,49",
            img: "https://static.netshoes.com.br/produtos/caca-adidas-disney-mickey-mouse/09/FBA-84WG-309/FBA-84WG-309_zoom1.jpg?ts=1773830828&ims=1088x",
            oferta: "24% DESCONTO"
        },
        {
            nome: "Tênis Olympikus Corre 4",
            categoria: "USADO",
            preco: "R$ 499,99",
            antigo: "R$ 599,99",
            img: "https://static.netshoes.com.br/produtos/tenis-olympikus-corre-4/60/2I3-0603-960/2I3-0603-960_zoom1.jpg?ts=1776592025&ims=1088x",
            oferta: "16% DESCONTO"
        },
        // ── Seção 2 ──
        {
            nome: "Tênis Olympikus Corre 4",
            categoria: "USADO",
            preco: "R$ 499,99",
            antigo: "R$ 599,99",
            img: "https://static.netshoes.com.br/produtos/tenis-olympikus-corre-4/33/2I3-0603-933/2I3-0603-933_zoom1.jpg?ts=1776593840&ims=1088x",
            oferta: "16% DESCONTO"
        },
        {
            nome: "Tênis Fila Rt-Low",
            categoria: "USADO",
            preco: "R$ 188,99",
            antigo: "R$ 299,99",
            img: "https://static.netshoes.com.br/produtos/tenis-fila-rt-low-masculino/12/SFK-07WZ-012/SFK-07WZ-012_zoom1.jpg?ts=1776592528&ims=1088x",
            oferta: "30% DESCONTO"
        },
        {
            nome: "Tênis Nike Big Low",
            categoria: "USADO",
            preco: "R$ 427,49",
            antigo: "R$ 699,99",
            img: "https://static.netshoes.com.br/produtos/tenis-nike-big-low-masculino/55/SGL-04QL-855/SGL-04QL-855_zoom1.jpg?ts=1774386302&ims=1088x",
            oferta: "35% DESCONTO"
        },
        {
            nome: "Tênis Nike SB Force 58",
            categoria: "USADO",
            preco: "R$ 398,99",
            antigo: "R$ 599,99",
            img: "https://static.netshoes.com.br/produtos/tenis-nike-sb-force-58-masculino/54/SGL-043O-154/SGL-043O-154_zoom1.jpg?ts=1776001552&ims=1088x",
            oferta: "30% DESCONTO"
        },
        {
            nome: "Tênis Masculino Lacoste Sideline Pro",
            categoria: "USADO",
            preco: "R$ 199,00",
            antigo: "R$ 349,00",
            img: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw8f2cfc65/45CMA0056BR_407_01.jpg?imwidth=960&impolicy=pctp&imdensity=1",
            oferta: "40% DESCONTO"
        },
        {
            nome: "Tênis Masculinos Spinor",
            categoria: "USADO",
            preco: "R$ 959,20",
            antigo: "R$ 1.199,00",
            img: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw12ed9cf2/51SMA0053_2P2_01.jpg?imwidth=960&impolicy=pctp&imdensity=1",
            oferta: "20% DESCONTO"
        },
        {
            nome: "Cama Zee.Dog Skull Zee",
            categoria: "USADO",
            preco: "R$ 463,20",
            antigo: "R$ 579,00",
            img: "https://images.petz.com.br/fotos/1632948750925.jpg",
            oferta: "20% DESCONTO"
        },
        {
            nome: "Viveiro Chalesco Pássaros Pequeno",
            categoria: "USADO",
            preco: "R$ 809,99",
            antigo: "R$ 1.799,99",
            img: "https://images.petz.com.br/fotos/1617109909022.jpg",
            oferta: "55% DESCONTO"
        },
        {
            nome: "Brinquedo Germanhart Ultraball com Apito para Cães",
            categoria: "USADO",
            preco: "R$ 51,29",
            antigo: "R$ 53,99",
            img: "https://images.petz.com.br/fotos/1715962358216.jpg",
            oferta: "5% DESCONTO"
        },
        {
            nome: "Espremedor de Frutas Mondial Premium E-02",
            categoria: "USADO",
            preco: "R$ 59,90",
            antigo: "R$ 79,90",
            img: "https://imgs.casasbahia.com.br/14038/1g.jpg?imwidth=500",
            oferta: "25% DESCONTO"
        },
        {
            nome: "Sanduicheira Elétrica Cadence Click",
            categoria: "USADO",
            preco: "R$ 99,00",
            antigo: "R$ 137,18",
            img: "https://imgs.casasbahia.com.br/55066944/1g.jpg?imwidth=500",
            oferta: "28% DESCONTO"
        },
        {
            nome: "Aspirador de Pó Portátil Black+Decker",
            categoria: "USADO",
            preco: "R$ 629,10",
            antigo: "R$ 699,00",
            img: "https://imgs.casasbahia.com.br/55071984/1g.jpg?imwidth=500",
            oferta: "10% DESCONTO"
        }
    ];

    /* ----------------------------------------------------------
       1. LÊ O PRODUTO DO SESSIONSTORAGE
       ---------------------------------------------------------- */

    const raw = sessionStorage.getItem("produtoSelecionado");
    if (!raw) return;

    let prod;
    try { prod = JSON.parse(raw); } catch (e) { return; }

    /* ----------------------------------------------------------
       2. DADOS DERIVADOS DO PRODUTO
       ---------------------------------------------------------- */

    const nome      = prod.nome   || "";
    const nomeLower = nome.toLowerCase();
    const preco     = prod.preco  || "";
    const antigo    = prod.antigo || "";
    const oferta    = prod.oferta || "";
    const categoria = prod.categoria || "";
    const img       = prod.img    || "";

    const numPreco  = parseFloat(preco.replace(/[^\d,]/g, "").replace(",", "."))  || 0;
    const numAntigo = parseFloat(antigo.replace(/[^\d,]/g, "").replace(",", ".")) || 0;
    const pctDesc   = numAntigo > 0 ? Math.round((1 - numPreco / numAntigo) * 100) : 0;

    const tipo = detectarTipo(nomeLower);

    const tamanhosPorTipo = {
        tenis:     ["34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44"],
        roupa:     ["PP", "P", "M", "G", "GG", "XGG"],
        bone:      ["Único"],
        calca:     ["36", "38", "40", "42", "44", "46", "48"],
        acessorio: ["Único"],
        pet:       ["P", "M", "G"],
        eletro:    ["Único"],
        default:   ["P", "M", "G", "GG"]
    };

    const tamanhos  = tamanhosPorTipo[tipo] || tamanhosPorTipo.default;
    const avaliacao = gerarAvaliacao(nome);
    const estoque   = gerarEstoque(nome);

    /* ----------------------------------------------------------
       3. GALERIA DE IMAGENS
       ---------------------------------------------------------- */

    const galeria = gerarGaleria(img);

    window.__prodGaleria = galeria;
    window.__prodIdx     = 0;

    window.changeImg = function (dir) {
        window.__prodIdx = (window.__prodIdx + dir + galeria.length) % galeria.length;
        _aplicarGaleria(window.__prodIdx);
    };
    window.setImg = function (idx) {
        window.__prodIdx = idx;
        _aplicarGaleria(idx);
    };

    function _aplicarGaleria(idx) {
        const mainImg = document.getElementById("mainImg");
        if (mainImg) { mainImg.src = galeria[idx]; mainImg.alt = nome; }
        document.querySelectorAll(".thumb").forEach((t, i) => {
            t.classList.toggle("active", i === idx);
        });
    }

    /* ----------------------------------------------------------
       4. APLICA TUDO NO DOM
       ---------------------------------------------------------- */

    function aplicar() {

        document.title = nome + " — MetaMarket";

        const mainImg = document.getElementById("mainImg");
        if (mainImg) { mainImg.src = galeria[0]; mainImg.alt = nome; }

        const thumbEls = document.querySelectorAll(".thumb");
        thumbEls.forEach((thumb, i) => {
            const tImg = thumb.querySelector("img");
            if (tImg) { tImg.src = galeria[i] || galeria[0]; tImg.alt = nome; }
            thumb.classList.toggle("active", i === 0);
            thumb.setAttribute("onclick", `setImg(${i})`);
        });

        _set(".product-name", nome);
        _set(".category-label", categoria || tipo.toUpperCase());
        _set(".badge-stock", oferta || (pctDesc > 0 ? `${pctDesc}% DESCONTO` : ""));
        _set(".price-now", preco);
        _set(".price-old", antigo);
        _set(".product-desc", gerarDescricao(nomeLower, tipo));
        _set(".meta-row span", gerarSKU(nome));

        const sizeOptions = document.querySelector(".size-options");
        if (sizeOptions) {
            sizeOptions.innerHTML = tamanhos.map((t, i) =>
                `<button class="size-btn${i === 0 ? " active" : ""}" onclick="selectSize(this)">${t}</button>`
            ).join("");
        }

        const stockEl = document.querySelector(".badge-stock");
        if (stockEl && estoque <= 5) {
            stockEl.insertAdjacentHTML("afterend",
                `<span class="badge-estoque">Restam ${estoque} unidades!</span>`);
        }

        _set(".avaliacao-nota", avaliacao.toFixed(1));
        preencherEstrelas(avaliacao);
        preencherTabela(tipo, tamanhos);
        _set("#tab-desc p", gerarDescricaoLonga(nomeLower, tipo, nome));
        _set("#tab-review .review-text", gerarComentario(avaliacao));
        ajustarCompartilhar(nome, preco);
        configurarBtnCart(prod);
        configurarBtnWish(prod);

        // ── ABA VENDEDOR ──
        renderVendedor(nome, avaliacao);

        // ── PRODUTOS RELACIONADOS ──
        renderRelacionados(tipo, nome);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", aplicar);
    } else {
        aplicar();
    }

    /* ==========================================================
       ABA VENDEDOR
       ========================================================== */

    function renderVendedor(nomeProduto, notaAvaliacao) {
        let h = 0;
        for (let i = 0; i < nomeProduto.length; i++) h = (h * 13 + nomeProduto.charCodeAt(i)) & 0xffffffff;
        const seed = Math.abs(h);

        // Meta
        const metaTotal = 10000;
        const metaAtual = 1500 + (seed % 8500);
        const pctMeta   = Math.min(100, Math.round((metaAtual / metaTotal) * 100));

        // Reputação
        const satisfacao   = 80 + (seed % 19);   // 80% a 98%
        const recomendacao = 75 + (seed % 24);   // 75% a 98%
        const comentarios  = 30 + (seed % 200);  // 30 a 229

        // Campanha
        const campanhasNomes = [
            "Crescer Juntos 2026",
            "Impulso Sustentável",
            "Conecta Vendedor",
            "Meta Coletiva Brasil",
            "Apoio ao Pequeno Negócio"
        ];
        const campanhaNome = campanhasNomes[seed % campanhasNomes.length];
        const apoiadores   = 50 + (seed % 950);

        const statusCampanha = pctMeta >= 100 ? "Meta concluída" : "Em andamento";

        /* ---------- CARD DE META ---------- */
        _set(".v-meta-text",
            `R$ ${metaAtual.toLocaleString("pt-BR")} de R$ ${metaTotal.toLocaleString("pt-BR")} arrecadados (${pctMeta}%)`);

        const barra = document.querySelector(".v-progresso");
        if (barra) {
            setTimeout(() => { barra.style.width = pctMeta + "%"; }, 200);
        }

        /* ---------- CARD DE AVALIAÇÃO ---------- */
        _set(".v-nota-grande", notaAvaliacao.toFixed(1));

        const starsEl = document.querySelector(".v-stars");
        if (starsEl) {
            const cheias = Math.floor(notaAvaliacao);
            const meia   = (notaAvaliacao - cheias) >= 0.5;
            const vazias = 5 - cheias - (meia ? 1 : 0);
            let html = "";
            for (let i = 0; i < cheias; i++) html += "<i class='bx bxs-star'></i>";
            if (meia) html += "<i class='bx bxs-star-half'></i>";
            for (let i = 0; i < vazias; i++) html += "<i class='bx bx-star'></i>";
            starsEl.innerHTML = html;
        }

        _set(".v-texto-avaliacoes", `${comentarios} avaliações de clientes`);

        /* ---------- CARD DE REPUTAÇÃO ---------- */
        _set(".v-satisfacao-num", satisfacao + "%");
        _set(".v-recomendacao-num", recomendacao + "%");
        _set(".v-comentario-num", comentarios);

        /* ---------- CARD DE CAMPANHA ---------- */
        _set(".v-campanha-nome", campanhaNome);
        _set(".v-campanha-status", statusCampanha);
        _set(".v-campanha-prazo", "31/12/2026");
        _set(".v-campanha-apoiadores", apoiadores.toLocaleString("pt-BR"));
    }

    /* ==========================================================
       PRODUTOS RELACIONADOS
       ========================================================== */

    function obterRelacionados(tipoAtual, nomeAtual) {
        // 1ª tentativa: mesmo tipo
        let candidatos = CATALOGO.filter(p =>
            p.nome !== nomeAtual && detectarTipo(p.nome.toLowerCase()) === tipoAtual
        );

        // Se não houver suficientes, completa com produtos de outros tipos
        if (candidatos.length < 4) {
            const extras = CATALOGO.filter(p =>
                p.nome !== nomeAtual && detectarTipo(p.nome.toLowerCase()) !== tipoAtual
            );
            candidatos = [...candidatos, ...embaralharArray(extras)];
        }

        return embaralharArray(candidatos).slice(0, 8);
    }

    function renderRelacionados(tipoAtual, nomeAtual) {
        const grid = document.getElementById("related-grid");
        if (!grid) return;

        const lista = obterRelacionados(tipoAtual, nomeAtual);
        if (!lista.length) {
            grid.closest(".related-section").style.display = "none";
            return;
        }

        const favs = JSON.parse(localStorage.getItem("favoritosProdutos")) || [];

        grid.innerHTML = lista.map((p) => {
            const isFav = favs.some(f => f.nome === p.nome);
            const prodJson = JSON.stringify(p).replace(/'/g, "\\'");
            return `
<div class="related-card" onclick="abrirRelacionado('${encodeURIComponent(JSON.stringify(p))}')">
    <div class="rc-badge">${p.oferta}</div>
    <div class="rc-actions">
        <span class="rc-heart${isFav ? " ativo" : ""}"
              onclick="toggleFavRelacionado(event, this, '${encodeURIComponent(JSON.stringify(p))}')">
            <i class='bx bxs-heart cheio'></i>
            <i class='bx bx-heart vazio'></i>
        </span>
    </div>
    <div class="rc-img">
        <img src="${p.img}" alt="${p.nome}" loading="lazy">
    </div>
    <div class="rc-info">
        <div class="rc-categoria">${p.categoria}</div>
        <div class="rc-nome">${p.nome}</div>
        <div class="rc-preco">
            <span class="rc-preco-atual">${p.preco}</span>
            <span class="rc-preco-antigo">${p.antigo}</span>
        </div>
    </div>
</div>`;
        }).join("");
    }

    window.abrirRelacionado = function (prodEncoded) {
        try {
            const prodObj = JSON.parse(decodeURIComponent(prodEncoded));
            sessionStorage.setItem("produtoSelecionado", JSON.stringify(prodObj));
            window.scrollTo({ top: 0, behavior: "instant" });
            window.location.reload();
        } catch (e) {
            console.error("Erro ao abrir produto relacionado:", e);
        }
    };

    window.toggleFavRelacionado = function (event, btn, prodEncoded) {
        event.stopPropagation();
        try {
            const prodObj = JSON.parse(decodeURIComponent(prodEncoded));
            document.dispatchEvent(new CustomEvent("toggleFavorito", {
                detail: { nome: prodObj.nome, preco: prodObj.preco, img: prodObj.img }
            }));
            btn.classList.toggle("ativo");
        } catch (e) {}
    };

    /* ==========================================================
       FUNÇÕES AUXILIARES
       ========================================================== */

    function _set(selector, valor) {
        const el = document.querySelector(selector);
        if (el && valor !== undefined && valor !== null) el.textContent = valor;
    }

    function detectarTipo(n) {
        if (n.includes("tênis") || n.includes("tenis") || n.includes("chinelo") || n.includes("sandália")) return "tenis";
        if (n.includes("camiseta") || n.includes("camisa") || n.includes("regata") || n.includes("polo") || n.includes("moletom") || n.includes("casaco") || n.includes("jaqueta") || n.includes("blusa")) return "roupa";
        if (n.includes("boné") || n.includes("bone") || n.includes("chapéu") || n.includes("chapeu")) return "bone";
        if (n.includes("calça") || n.includes("calca") || n.includes("short") || n.includes("bermuda") || n.includes("caça") || n.includes("caca")) return "calca";
        if (n.includes("cama") || n.includes("viveiro") || n.includes("brinquedo") || n.includes("pet") || n.includes("cão") || n.includes("gato") || n.includes("pássaro")) return "pet";
        if (n.includes("espremedor") || n.includes("sanduicheira") || n.includes("aspirador") || n.includes("elétrico") || n.includes("eletrico")) return "eletro";
        if (n.includes("bolsa") || n.includes("mochila") || n.includes("carteira") || n.includes("cinto") || n.includes("relógio")) return "acessorio";
        return "default";
    }

    function embaralharArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function gerarGaleria(imgUrl) {
        const imgs = [imgUrl];
        if (imgUrl.includes("_zoom1")) {
            imgs.push(imgUrl.replace("_zoom1", "_zoom2"));
            imgs.push(imgUrl.replace("_zoom1", "_zoom3"));
            imgs.push(imgUrl.replace("_zoom1", "_zoom4"));
        } else if (imgUrl.match(/IDA\d/)) {
            imgs.push(imgUrl.replace(/IDA\d/, "IDA3"));
            imgs.push(imgUrl.replace(/IDA\d/, "IDA6"));
            imgs.push(imgUrl.replace(/IDA\d/, "IDA7"));
        } else {
            imgs.push(imgUrl, imgUrl, imgUrl);
        }
        while (imgs.length < 4) imgs.push(imgs[0]);
        return imgs.slice(0, 4);
    }

    function gerarAvaliacao(nome) {
        let h = 0;
        for (let i = 0; i < nome.length; i++) h = (h * 31 + nome.charCodeAt(i)) & 0xffffffff;
        return 3.5 + (Math.abs(h) % 16) / 10;
    }

    function gerarEstoque(nome) {
        let h = 0;
        for (let i = 0; i < nome.length; i++) h = (h * 17 + nome.charCodeAt(i)) & 0xffffffff;
        return (Math.abs(h) % 50) + 1;
    }

    function gerarSKU(nome) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let h = 0;
        for (let i = 0; i < nome.length; i++) h = (h * 31 + nome.charCodeAt(i)) & 0xffffffff;
        let sku = "", seed = Math.abs(h);
        for (let i = 0; i < 10; i++) {
            sku += chars[seed % chars.length];
            seed = Math.floor(seed / chars.length) || (seed * 7 + i + 1);
        }
        return sku.slice(0, 4) + "-" + sku.slice(4, 8) + "-" + sku.slice(8, 10);
    }

    function preencherEstrelas(nota) {
        const el = document.querySelector(".stars-avaliacao");
        if (!el) return;
        const cheias = Math.floor(nota);
        const meia   = (nota - cheias) >= 0.5;
        const vazias = 5 - cheias - (meia ? 1 : 0);
        let html = "";
        for (let i = 0; i < cheias; i++) html += "<i class='bx bxs-star'></i>";
        if (meia)                         html += "<i class='bx bxs-star-half'></i>";
        for (let i = 0; i < vazias; i++)  html += "<i class='bx bx-star'></i>";
        el.innerHTML = html;
    }

    function preencherTabela(tipo, tamanhos) {
        const tbody = document.querySelector(".attr-table tbody");
        if (!tbody) return;
        const atributosPorTipo = {
            tenis: [
                ["Numeração disponível", tamanhos.join(", ")],
                ["Material externo",     "Sintético / Têxtil"],
                ["Solado",               "Borracha de alta resistência"],
                ["Fecho",                "Cadarço"],
                ["Indicação",            "Uso esportivo e casual"],
                ["Garantia",             "90 dias contra defeito de fabricação"]
            ],
            roupa: [
                ["Tamanhos disponíveis", tamanhos.join(", ")],
                ["Composição",           "100% Poliéster / Algodão"],
                ["Tipo de lavagem",      "Lavar à mão ou máquina fria"],
                ["Modelagem",            "Regular / Slim"],
                ["Indicação",            "Uso esportivo e casual"],
                ["Garantia",             "90 dias contra defeito de fabricação"]
            ],
            bone: [
                ["Tamanho",              "Único — ajustável"],
                ["Material",             "Algodão / Poliéster"],
                ["Fechamento",           "Snapback ou Velcro"],
                ["Proteção solar",       "Aba curva 7 cm"],
                ["Indicação",            "Uso casual e esportivo"],
                ["Garantia",             "90 dias contra defeito de fabricação"]
            ],
            calca: [
                ["Numeração disponível", tamanhos.join(", ")],
                ["Composição",           "Poliéster / Elastano"],
                ["Modelagem",            "Slim / Regular"],
                ["Comprimento",          "Longo"],
                ["Indicação",            "Treino e uso diário"],
                ["Garantia",             "90 dias contra defeito de fabricação"]
            ],
            pet: [
                ["Tamanhos disponíveis", "P, M, G"],
                ["Material",             "Pelúcia / Nylon / Metal"],
                ["Indicação",            "Cães e gatos de todos os portes"],
                ["Lavagem",              "Lavável à mão"],
                ["Certificação",         "Produto não tóxico e seguro"],
                ["Garantia",             "30 dias contra defeito de fabricação"]
            ],
            eletro: [
                ["Voltagem",             "Bivolt (110V / 220V)"],
                ["Potência",             "Consulte a embalagem"],
                ["Dimensões",            "Consulte a embalagem"],
                ["Cor",                  "Preto / Branco"],
                ["Garantia",             "12 meses pelo fabricante"],
                ["Certificação",         "INMETRO"]
            ],
            default: [
                ["Tamanhos disponíveis", tamanhos.join(", ")],
                ["Material",             "Alta qualidade"],
                ["Indicação",            "Uso diário"],
                ["Entrega",              "Todo o Brasil"],
                ["Devolução",            "30 dias sem custo"],
                ["Garantia",             "90 dias contra defeito de fabricação"]
            ]
        };
        const linhas = atributosPorTipo[tipo] || atributosPorTipo.default;
        tbody.innerHTML = linhas.map(([attr, val]) =>
            `<tr><td>${attr}</td><td>${val}</td></tr>`
        ).join("");
    }

    function gerarDescricao(n, tipo) {
        const map = {
            tenis:     "Tênis de alta performance com tecnologia de amortecimento avançada. Cabedal respirável e solado antiderrapante para máximo conforto e estabilidade em qualquer superfície.",
            roupa:     "Peça desenvolvida com tecido de alta tecnologia que garante leveza, conforto e liberdade de movimentos. Ideal para treinos intensos ou uso casual no dia a dia.",
            bone:      "Acessório versátil com design moderno e material respirável. Ajuste regulável para diferentes tamanhos de cabeça, perfeito para o uso esportivo e casual.",
            calca:     "Calça com corte ergonômico e tecido de alta performance. Elastano na composição garante mobilidade total, ideal para treinos e para o dia a dia.",
            pet:       "Produto desenvolvido especialmente para o bem-estar e conforto do seu pet. Material seguro, atóxico e de fácil higienização.",
            eletro:    "Eletrodoméstico de qualidade comprovada com design compacto e funcional. Facilita o dia a dia com praticidade e eficiência energética.",
            acessorio: "Acessório de alta qualidade com acabamento refinado. Combina estilo e durabilidade para complementar qualquer visual.",
            default:   "Produto selecionado com cuidado pelos nossos vendedores. Qualidade garantida e entrega para todo o Brasil. Cada compra ajuda um vendedor a alcançar sua meta."
        };
        return map[tipo] || map.default;
    }

    function gerarDescricaoLonga(n, tipo, nomeCompleto) {
        const map = {
            tenis:
                `O ${nomeCompleto} foi desenvolvido para oferecer o melhor em performance e estilo. Seu cabedal é confeccionado em material respirável de alta tecnologia, garantindo ventilação constante durante atividades físicas intensas. O solado de borracha proporciona aderência superior em diferentes tipos de superfície, enquanto o sistema de amortecimento protege as articulações a cada passada. O design moderno e as cores vibrantes fazem deste tênis uma escolha perfeita tanto para a academia quanto para o uso casual.`,
            roupa:
                `A ${nomeCompleto} foi criada pensando em quem busca conforto sem abrir mão do estilo. O tecido de alta tecnologia é leve, respirável e seca rapidamente, sendo ideal para treinos de alta intensidade. A modelagem foi desenvolvida para garantir liberdade de movimentos em qualquer situação. Disponível em múltiplos tamanhos para o melhor caimento.`,
            bone:
                `O ${nomeCompleto} é o acessório perfeito para quem quer agregar estilo ao look do dia a dia. Estruturado e de copa alta, o tecido frontal é feito de algodão fresco que mantém a cabeça arejada. A aba curva protege os olhos do sol e o fecho ajustável garante um fit personalizado para diferentes tamanhos de cabeça.`,
            default:
                `O ${nomeCompleto} é um produto cuidadosamente selecionado pelos nossos vendedores parceiros. Produzido com materiais de alta qualidade, ele foi pensado para atender às suas necessidades do dia a dia com durabilidade e estilo. Compre com confiança: entrega rápida, devolução facilitada e cada compra ajuda um vendedor a alcançar sua meta.`
        };
        return map[tipo] || map.default;
    }

    function gerarComentario(avaliacao) {
        const comentarios = [
            `"Produto excelente! Superou minhas expectativas em qualidade e acabamento. Chegou rápido e bem embalado." — Carlos M. ${"★".repeat(Math.round(avaliacao))}`,
            `"Muito satisfeita com a compra! O produto é exatamente como descrito. Ótimo custo-benefício, recomendo!" — Ana Paula S. ${"★".repeat(Math.round(avaliacao))}`,
            `"Comprei e não me arrependi. Qualidade incrível pelo preço. Já é a segunda vez que compro nesta loja." — Ricardo T. ${"★".repeat(Math.round(avaliacao))}`,
            `"Chegou antes do prazo e o produto é perfeito. Muito bom mesmo, valeu cada centavo!" — Fernanda L. ${"★".repeat(Math.round(avaliacao))}`,
        ];
        return comentarios[Math.floor(avaliacao * 10) % comentarios.length];
    }

    function ajustarCompartilhar(nome, preco) {
        const shareWp = document.querySelector(".share-icon.wp");
        if (!shareWp) return;
        shareWp.addEventListener("click", () => {
            const msg = encodeURIComponent(`Olha esse produto no MetaMarket: ${nome} por ${preco} 👉 ${window.location.href}`);
            window.open(`https://wa.me/?text=${msg}`, "_blank");
        });
    }

    function configurarBtnCart(prod) {
        const btn = document.querySelector(".btn-cart");
        if (!btn) return;
        btn.dataset.nome  = prod.nome;
        btn.dataset.preco = prod.preco;
        btn.dataset.img   = prod.img;
        btn.addEventListener("click", () => {

            const sizeBtn = document.querySelector(".size-btn.active");
            const tamanho = sizeBtn ? sizeBtn.textContent.trim() : null;

            const colorBtn = document.querySelector(".color-btn.active");
            const cor = colorBtn ? (colorBtn.dataset.cor || colorBtn.textContent.trim()) : null;

            const qtyEl = document.getElementById("qtyNum");
            const quantidade = qtyEl ? parseInt(qtyEl.textContent, 10) || 1 : 1;

            document.dispatchEvent(new CustomEvent("adicionarNaSacola", {
                detail: {
                    nome: prod.nome,
                    preco: prod.preco,
                    antigo: prod.antigo,
                    oferta: prod.oferta,
                    img: prod.img,
                    tamanho,
                    cor,
                    quantidade
                }
            }));
            const orig = btn.textContent;
            btn.textContent = "✓ Adicionado!";
            btn.style.background = "#2d5a27";
            setTimeout(() => {
                btn.textContent = orig;
                btn.style.background = "";
            }, 2000);
        });
    }

    function configurarBtnWish(prod) {
        const btn = document.querySelector(".btn-wish");
        if (!btn) return;
        const favs   = JSON.parse(localStorage.getItem("favoritosProdutos")) || [];
        const jaFav  = favs.some(p => p.nome === prod.nome);
        btn.innerHTML = jaFav ? "<i class='bx bxs-heart'></i>" : "<i class='bx bx-heart'></i>";
        btn.style.color = jaFav ? "#c0392b" : "";
        btn.dataset.favAtivo = jaFav ? "1" : "0";
        btn.addEventListener("click", () => {
            document.dispatchEvent(new CustomEvent("toggleFavorito", {
                detail: { nome: prod.nome, preco: prod.preco, img: prod.img }
            }));
            const isFav = btn.dataset.favAtivo === "1";
            btn.dataset.favAtivo = isFav ? "0" : "1";
            btn.innerHTML = isFav ? "<i class='bx bx-heart'></i>" : "<i class='bx bxs-heart'></i>";
            btn.style.color = isFav ? "" : "#c0392b";
        });
    }

})();

/* =============================================
   SETA DE RETORNO — lógica de navegação
   ============================================= */
function voltarPagina(event) {
    event.preventDefault();
    if (document.referrer && document.referrer !== window.location.href) {
        window.history.back();
    } else {
        window.location.href = "../index.html";
    }
}

/* =============================================
   BREADCRUMB DINÂMICO (existente)
   ============================================= */
(function () {
    const raw = sessionStorage.getItem("produtoSelecionado");
    if (!raw) return;
    try {
        const p = JSON.parse(raw);
        const bcNome = document.querySelector(".bc-nome");
        const bcCat = document.querySelector(".bc-categoria");
        if (bcNome) bcNome.textContent = p.nome;
        if (bcCat) bcCat.textContent = p.categoria || "Produto";
    } catch (e) { }
})();
