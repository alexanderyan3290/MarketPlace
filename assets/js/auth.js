/* =============================================================
   AUTH.JS — Sessão simulada do usuário (localStorage)
   ============================================================= */

const AUTH_KEY = "usuarioLogado";

function getUsuarioLogado() {
    try {
        return JSON.parse(localStorage.getItem(AUTH_KEY));
    } catch (e) {
        return null;
    }
}

function salvarUsuarioLogado(usuario) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(usuario));
}

function logoutUsuario() {
    localStorage.removeItem(AUTH_KEY);
}

/* -------------------------------------------------------------
   CADASTRO — lista de usuários registrados (localStorage)
   ------------------------------------------------------------- */

const USERS_KEY = "usuariosCadastrados";

function getUsuariosCadastrados() {
    try {
        return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    } catch (e) {
        return [];
    }
}

function salvarNovoUsuario(usuario) {
    const usuarios = getUsuariosCadastrados();
    usuarios.push(usuario);
    localStorage.setItem(USERS_KEY, JSON.stringify(usuarios));
}

function emailJaCadastrado(email) {
    return getUsuariosCadastrados().some(u => u.email.toLowerCase() === email.toLowerCase());
}

/* -------------------------------------------------------------
   ATUALIZA O MENU CONFORME O ESTADO DE LOGIN
   ------------------------------------------------------------- */

function atualizarMenuUsuario() {
    const usuario = getUsuarioLogado();

    /* Caso 1: Home — sempre mostra o botão "Entrar" (#abrir),
       independente do usuário estar logado ou não.
       O estado de login só é refletido nas páginas de Cliente/Produto
       quando a origem da navegação for "cliente". */

    /* Caso 2: páginas com .perfil-menu já no HTML (produto.html, cliente/index.html) */
    const perfilMenu = document.querySelector(".perfil-menu");
    if (perfilMenu) {
        const span = perfilMenu.querySelector("span");
        if (span) {
            span.textContent = usuario ? `Olá, ${usuario.nome}` : "Olá, visitante";
        }

        if (!usuario) {
            perfilMenu.addEventListener("click", (e) => {
                const profilePanel = document.getElementById("profilePanel");
                if (!profilePanel) {
                    e.preventDefault();
                    const path = window.location.pathname.includes("/produto/") ||
                                 window.location.pathname.includes("/cliente/")
                        ? "../index.html"
                        : "index.html";
                    window.location.href = path;
                }
            });
        }
    }

    /* Caso 3: painel de perfil (cliente/index.html) — preenche nome/email */
    const profileUser = document.querySelector(".profile-user");
    if (profileUser && usuario) {
        const h3 = profileUser.querySelector("h3");
        const p  = profileUser.querySelector("p");
        if (h3) h3.textContent = usuario.nome;
        if (p)  p.textContent  = usuario.email || "";
    }

    /* Caso 4: logout */
    const logoutBtn = document.querySelector(".logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            logoutUsuario();
            window.location.href = "../index.html";
        });
    }

    /* Caso 5: ajusta o menu da página de produto conforme a origem da navegação */
    ajustarMenuProduto(usuario);
}

/* -------------------------------------------------------------
   AJUSTA O MENU DA PÁGINA DE PRODUTO CONFORME A ORIGEM
   (Home ou Cliente)

   - origem === "home"  -> SEMPRE menu de visitante (botão "Entrar"),
                            mesmo que exista uma sessão salva.
   - origem === "cliente" -> mantém .perfil-menu, refletindo o
                            estado real do usuário (Caso 2 acima
                            já mostra "Olá, {nome}" ou "Olá, visitante").
   ------------------------------------------------------------- */

function ajustarMenuProduto(usuario) {
    const isPaginaProduto = window.location.pathname.includes("/produto/");
    if (!isPaginaProduto) return;

    const origem = sessionStorage.getItem("origemProduto") || "cliente";

    if (origem === "home") {
        const mainNav     = document.querySelector(".main-nav");
        const headerIcons = document.querySelector(".header-icons");

        // Remove o link HOME (não existe no menu da Home original)
        if (mainNav) {
            const homeLink = mainNav.querySelector('a[href="../index.html"]');
            if (homeLink) homeLink.remove();
        }

        // Substitui .perfil-menu pelo botão "Entrar", igual à Home
        const perfilMenu = document.querySelector(".perfil-menu");
        if (perfilMenu && headerIcons) {
            const btnEntrar = document.createElement("button");
            btnEntrar.id = "abrir";
            btnEntrar.className = "btn-login";
            btnEntrar.textContent = "Entrar";
            perfilMenu.replaceWith(btnEntrar);

            btnEntrar.addEventListener("click", () => {
                abrirLoginNaPagina();
            });
        }
    }

    // Se origem === "cliente", mantém o menu padrão (.perfil-menu),
    // que já reflete "Olá, {nome}" ou "Olá, visitante" via Caso 2.
}

/* -------------------------------------------------------------
   INJETA OS MODAIS DE LOGIN E CADASTRO NA PÁGINA ATUAL
   (usado na página de produto quando o usuário clica em "Entrar")
   Replica o mesmo comportamento de login.js da Home
   ------------------------------------------------------------- */

function abrirLoginNaPagina() {
    let modalLogin = document.getElementById("loginModal");

    if (!modalLogin) {

        const html = `
<!-- MODAL LOGIN -->
<div class="login-modal" id="loginModal">
    <div class="login-card">
        <span class="fechar" id="fecharLogin"><i class='bx bx-x'></i></span>
        <h2>Bem-vindo</h2>
        <p>Entre na sua conta</p>
        <form id="loginForm">
            <div class="login-box">
                <i class='bx bx-envelope'></i>
                <input type="email" placeholder="Seu e-mail" required>
            </div>
            <div class="login-box">
                <i class='bx bx-lock-alt'></i>
                <input type="password" id="senha" placeholder="Sua senha" required>
            </div>
            <button type="submit" class="btn-entrar">Entrar</button>
            <span class="criar-conta">Não possui conta? <a href="#" id="irCadastro">Criar agora</a></span>
        </form>
    </div>
</div>

<!-- MODAL CADASTRO -->
<div class="cadastro-modal" id="cadastroModal">
    <div class="cadastro-card">
        <span class="fechar" id="fecharCadastro"><i class='bx bx-x'></i></span>
        <h2>Criar Conta</h2>
        <p>Preencha seus dados para criar uma conta.</p>
        <form id="cadastroForm">
            <div class="cadastro-box">
                <label>Nome Completo <span>*</span></label>
                <input type="text" placeholder="Seu nome completo" required>
            </div>
            <div class="cadastro-box">
                <label>E-mail <span>*</span></label>
                <input type="email" placeholder="seu@email.com" required>
            </div>
            <div class="cadastro-box cpf-box" id="cpfBox">
                <label>CPF <span>*</span></label>
                <input type="text" placeholder="CPF" required>
            </div>
            <div class="cadastro-box">
                <label>Localização <span>*</span></label>
                <input type="text" id="localizacao" list="lista-cidades" placeholder="Cidade, Estado" required>
                <datalist id="lista-cidades"></datalist>
            </div>
            <div class="cadastro-box">
                <label>Senha <span>*</span></label>
                <input type="password" id="senhaCadastro" placeholder="Mínimo 6 caracteres" required>
                <span class="mostrar-senha" onclick="mostrarSenha('senhaCadastro', this)">
                    <i class='bx bx-hide'></i>
                </span>
            </div>
            <div class="cadastro-box">
                <label>Confirma Senha <span>*</span></label>
                <input type="password" id="confirmarSenha" placeholder="Confirme a senha" required>
            </div>
            <div class="tipo-conta">
                <div class="slider"></div>
                <button type="button" class="ativo" id="btnCliente">Cliente</button>
                <button type="button" id="btnVendedor">Vendedor</button>
            </div>
            <div class="termos">
                <p>Ao criar sua conta, afirmo que concordo com a
                    <a href="#">Política de Privacidade</a> e os
                    <a href="#">Termos de Uso</a>.
                </p>
                <div class="check-termos">
                    <input type="checkbox" required>
                    <label>Li e aceito os termos de uso</label>
                </div>
            </div>
            <button type="submit" class="btn-criar">Criar Conta</button>
            <span class="criar-conta">Já possuo conta? <a href="#" id="irLogin">Entrar</a></span>
        </form>
    </div>
</div>`;

        document.body.insertAdjacentHTML("beforeend", html);
        modalLogin = document.getElementById("loginModal");

        const modalCadastro  = document.getElementById("cadastroModal");
        const fecharLogin    = document.getElementById("fecharLogin");
        const fecharCadastro = document.getElementById("fecharCadastro");
        const irCadastro     = document.getElementById("irCadastro");
        const irLogin        = document.getElementById("irLogin");
        const btnCliente     = document.getElementById("btnCliente");
        const btnVendedor    = document.getElementById("btnVendedor");
        const slider         = modalCadastro.querySelector(".tipo-conta .slider");
        const cpfBox         = document.getElementById("cpfBox");

        /* -------------------------------------------------
           FECHAR LOGIN
           ------------------------------------------------- */
        fecharLogin.addEventListener("click", () => {
            modalLogin.classList.remove("active");
        });

        modalLogin.addEventListener("click", (e) => {
            if (e.target === modalLogin) modalLogin.classList.remove("active");
        });

        /* -------------------------------------------------
           FECHAR CADASTRO
           ------------------------------------------------- */
        fecharCadastro.addEventListener("click", () => {
            modalCadastro.classList.remove("active");
        });

        modalCadastro.addEventListener("click", (e) => {
            if (e.target === modalCadastro) modalCadastro.classList.remove("active");
        });

        /* -------------------------------------------------
           LOGIN <-> CADASTRO
           ------------------------------------------------- */
        irCadastro.addEventListener("click", (e) => {
            e.preventDefault();
            modalLogin.classList.remove("active");
            modalCadastro.classList.add("active");
        });

        irLogin.addEventListener("click", (e) => {
            e.preventDefault();
            modalCadastro.classList.remove("active");
            modalLogin.classList.add("active");
        });

        /* -------------------------------------------------
           TOGGLE TIPO DE CONTA (CLIENTE / VENDEDOR)
           ------------------------------------------------- */
        btnCliente.addEventListener("click", () => {
            btnCliente.classList.add("ativo");
            btnVendedor.classList.remove("ativo");
            slider.classList.remove("vendedor");
            cpfBox.style.display = "none";
        });

        btnVendedor.addEventListener("click", () => {
            btnVendedor.classList.add("ativo");
            btnCliente.classList.remove("ativo");
            slider.classList.add("vendedor");
            cpfBox.style.display = "block";
        });

        /* -------------------------------------------------
           LOCALIZAÇÃO — busca cidades (IBGE)
           ------------------------------------------------- */
        const listaCidades = document.getElementById("lista-cidades");
        if (listaCidades) {
            fetch("https://servicodados.ibge.gov.br/api/v1/localidades/municipios")
                .then(res => res.json())
                .then(dados => {
                    dados.forEach(cidade => {
                        const option = document.createElement("option");
                        option.value = `${cidade.nome} - ${cidade.microrregiao.mesorregiao.UF.sigla}`;
                        listaCidades.appendChild(option);
                    });
                })
                .catch(() => {});
        }

        /* -------------------------------------------------
           SUBMIT DO LOGIN
           ------------------------------------------------- */
        const form = document.getElementById("loginForm");
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = form.querySelector('input[type="email"]').value;
            const senha = document.getElementById("senha").value;

            if (senha === "cliente123") {
                salvarUsuarioLogado({
                    nome: email.split("@")[0] || "Cliente",
                    email: email,
                    tipo: "cliente"
                });
                window.location.href = "../cliente/index.html";
            }
            else if (senha === "vendedor123") {
                salvarUsuarioLogado({
                    nome: email.split("@")[0] || "Vendedor",
                    email: email,
                    tipo: "vendedor"
                });
                window.location.href = "../vendedor/index.html";
            }
            else {
                alert("Senha inválida!!");
            }
        });

        /* -------------------------------------------------
           SUBMIT DO CADASTRO
           ------------------------------------------------- */
        const formCadastro = document.getElementById("cadastroForm");
        formCadastro.addEventListener("submit", function (event) {
            event.preventDefault();

            const inputs = formCadastro.querySelectorAll("input[type='text'], input[type='email']");

            const nome  = inputs[0].value.trim();
            const email = inputs[1].value.trim();
            const cpf   = inputs[2] ? inputs[2].value.trim() : "";
            const local = document.getElementById("localizacao").value.trim();

            const senha     = document.getElementById("senhaCadastro").value;
            const confirmar = document.getElementById("confirmarSenha").value;

            const tipoConta = btnVendedor.classList.contains("ativo") ? "vendedor" : "cliente";

            if (senha.length < 6) {
                alert("A senha deve ter no mínimo 6 caracteres.");
                return;
            }

            if (senha !== confirmar) {
                alert("As senhas não coincidem.");
                return;
            }

            if (emailJaCadastrado(email)) {
                alert("Este e-mail já está cadastrado. Faça login.");
                return;
            }

            salvarNovoUsuario({
                nome,
                email,
                cpf,
                localizacao: local,
                senha,
                tipo: tipoConta
            });

            salvarUsuarioLogado({
                nome: nome.split(" ")[0] || nome,
                email,
                tipo: tipoConta
            });

            modalCadastro.classList.remove("active");

            if (tipoConta === "vendedor") {
                window.location.href = "../vendedor/index.html";
            } else {
                window.location.href = "../cliente/index.html";
            }
        });
    }

    modalLogin.classList.add("active");
}

document.addEventListener("DOMContentLoaded", atualizarMenuUsuario);
