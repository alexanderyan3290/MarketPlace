/* ==================================================
   ELEMENTOS LOGIN
================================================== */

const abrirLogin = document.getElementById("abrir");

const modalLogin = document.getElementById("loginModal");

const fecharLogin = document.getElementById("fecharLogin");


/* ==================================================
   ABRIR LOGIN
================================================== */

if(abrirLogin){

    abrirLogin.addEventListener("click", () => {

        modalLogin.classList.add("active");

    });

}


/* ==================================================
   FECHAR LOGIN
================================================== */

if(fecharLogin){

    fecharLogin.addEventListener("click", () => {

        modalLogin.classList.remove("active");

    });

}


/* ==================================================
   FECHAR CLICANDO FORA
================================================== */

if(modalLogin){

    modalLogin.addEventListener("click", (e) => {

        if(e.target === modalLogin){

            modalLogin.classList.remove("active");

        }

    });

}


/* ==================================================
   MOSTRAR / OCULTAR SENHA
================================================== */

function mostrarSenha(id){

    const input = document.getElementById(id);

    if(input.type === "password"){

        input.type = "text";

    }else{

        input.type = "password";

    }

}

/* ==================================================
   CADASTRO -> LOGIN
================================================== */

if(irLogin){

    irLogin.addEventListener("click", (e) => {

        e.preventDefault();

        /* FECHA LOGIN */

        const modalCadastro = document.getElementById("cadastroModal");

        if(modalCadastro){

            modalCadastro.classList.remove("active");

        }

        /* ABRE CADASTRO */

        modalLogin.classList.add("active");

    });

}

// senha

const form = document.getElementById("loginForm")
form.addEventListener("submit", function (event) {

    event.preventDefault();

    const senha = document.getElementById("senha").value;

    // login cliente
    if (senha === "cliente123") {
        window.location.href = "./cliente/index.html"
    }

    else if (senha === "vendedor123") {

        window.location.href = "./vendedor/index.html"
    }

    else {
        alert("Senha inválida!!")
    }
});
