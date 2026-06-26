/* ==================================================
   ELEMENTOS LOGIN
================================================== */

const abrirLogin = document.getElementById("abrir");
const modalLogin = document.getElementById("loginModal");
const fecharLogin = document.getElementById("fecharLogin");


/* ==================================================
   ABRIR LOGIN
================================================== */

if (abrirLogin) {
    abrirLogin.addEventListener("click", () => {
        modalLogin.classList.add("active");
    });
}


/* ==================================================
   FECHAR LOGIN
================================================== */

if (fecharLogin) {
    fecharLogin.addEventListener("click", () => {
        modalLogin.classList.remove("active");
    });
}


/* ==================================================
   FECHAR CLICANDO FORA
================================================== */

if (modalLogin) {
    modalLogin.addEventListener("click", (e) => {
        if (e.target === modalLogin) {
            modalLogin.classList.remove("active");
        }
    });
}


/* ==================================================
   MOSTRAR / OCULTAR SENHA
================================================== */

function mostrarSenha(id) {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}


/* ==================================================
   IR PARA CADASTRO (LOGIN -> CADASTRO)
================================================== */

const irCadastro = document.getElementById("irCadastro");

if (irCadastro) {
    irCadastro.addEventListener("click", (e) => {
        e.preventDefault();
        modalLogin.classList.remove("active");
        const modalCadastro = document.getElementById("cadastroModal");
        if (modalCadastro) modalCadastro.classList.add("active");
    });
}


/* ==================================================
   CADASTRO -> LOGIN
================================================== */

const irLogin = document.getElementById("irLogin");

if (irLogin) {
    irLogin.addEventListener("click", (e) => {
        e.preventDefault();
        const modalCadastro = document.getElementById("cadastroModal");
        if (modalCadastro) modalCadastro.classList.remove("active");
        modalLogin.classList.add("active");
    });
}


/* ==================================================
   FECHAR CADASTRO
================================================== */

const fecharCadastro = document.getElementById("fecharCadastro");

if (fecharCadastro) {
    fecharCadastro.addEventListener("click", () => {
        const modalCadastro = document.getElementById("cadastroModal");
        if (modalCadastro) modalCadastro.classList.remove("active");
    });
}


/* ==================================================
   FECHAR CADASTRO CLICANDO FORA
================================================== */

const modalCadastro = document.getElementById("cadastroModal");

if (modalCadastro) {
    modalCadastro.addEventListener("click", (e) => {
        if (e.target === modalCadastro) {
            modalCadastro.classList.remove("active");
        }
    });
}


/* ==================================================
   TOGGLE TIPO DE CONTA (CLIENTE / VENDEDOR)
================================================== */

const btnCliente  = document.getElementById("btnCliente");
const btnVendedor = document.getElementById("btnVendedor");
const slider      = document.querySelector(".tipo-conta .slider");
const cpfBox      = document.getElementById("cpfBox");

if (btnCliente && btnVendedor && slider) {
    btnCliente.addEventListener("click", () => {
        btnCliente.classList.add("ativo");
        btnVendedor.classList.remove("ativo");
        slider.classList.remove("vendedor");
        if (cpfBox) cpfBox.style.display = "none";
    });

    btnVendedor.addEventListener("click", () => {
        btnVendedor.classList.add("ativo");
        btnCliente.classList.remove("ativo");
        slider.classList.add("vendedor");
        if (cpfBox) cpfBox.style.display = "block";
    });
}


/* ==================================================
   SUBMIT DO LOGIN — VALIDA SENHA E SALVA SESSÃO
================================================== */

const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.querySelector('#loginForm input[type="email"]').value;
    const senha = document.getElementById("senha").value;

    if (senha === "cliente123") {
        salvarUsuarioLogado({
            nome: email.split("@")[0] || "Cliente",
            email: email,
            tipo: "cliente"
        });
        // index.html está na raiz → cliente/ é uma pasta filha
        window.location.href = "./cliente/index.html";

    } else if (senha === "vendedor123") {
        salvarUsuarioLogado({
            nome: email.split("@")[0] || "Vendedor",
            email: email,
            tipo: "vendedor"
        });
        // index.html está na raiz → vendedor/ é uma pasta filha
        window.location.href = "./vendedor/index.htm";

    } else {
        alert("Senha inválida! Use 'cliente123' ou 'vendedor123'.");
    }
});


/* ==================================================
   SUBMIT DO CADASTRO — CRIA USUÁRIO E LOGA AUTOMATICAMENTE
================================================== */

if (formCadastro) {
    formCadastro.addEventListener("submit", function (event) {
        event.preventDefault();

        const inputs = formCadastro.querySelectorAll("input[type='text'], input[type='email']");
        const nome   = inputs[0].value.trim();
        const email  = inputs[1].value.trim();
        const cpf    = inputs[2] ? inputs[2].value.trim() : "";
        const local  = document.getElementById("localizacao").value.trim();

        const senha     = document.getElementById("senhaCadastro").value;
        const confirmar = document.getElementById("confirmarSenha").value;

        const tipoConta = btnVendedor && btnVendedor.classList.contains("ativo")
            ? "vendedor"
            : "cliente";

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

        salvarNovoUsuario({ nome, email, cpf, localizacao: local, senha, tipo: tipoConta });

        salvarUsuarioLogado({
            nome: nome.split(" ")[0] || nome,
            email,
            tipo: tipoConta
        });

        if (modalCadastro) modalCadastro.classList.remove("active");

        // Mesmo raciocínio: index.html na raiz, pastas são filhas
        if (tipoConta === "vendedor") {
            window.location.href = "./vendedor/index.htm";
        } else {
            window.location.href = "./cliente/index.html";
        }
    });
}
