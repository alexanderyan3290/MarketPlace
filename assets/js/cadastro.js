/* ==================================================
   ELEMENTOS CADASTRO
================================================== */

const abrirCadastro = document.getElementById("abrirCadastro");

const modalCadastro = document.getElementById("cadastroModal");

const fecharCadastro = document.getElementById("fecharCadastro");

const irCadastro = document.getElementById("irCadastro");


/* ==================================================
   ABRIR CADASTRO
================================================== */

if(abrirCadastro){

    abrirCadastro.addEventListener("click", () => {

        modalCadastro.classList.add("active");

    });

}


/* ==================================================
   FECHAR CADASTRO
================================================== */

if(fecharCadastro){

    fecharCadastro.addEventListener("click", () => {

        modalCadastro.classList.remove("active");

    });

}


/* ==================================================
   FECHAR CLICANDO FORA
================================================== */

if(modalCadastro){

    modalCadastro.addEventListener("click", (e) => {

        if(e.target === modalCadastro){

            modalCadastro.classList.remove("active");

        }

    });

}


/* ==================================================
   LOGIN -> CADASTRO
================================================== */

if(irCadastro){

    irCadastro.addEventListener("click", (e) => {

        e.preventDefault();

        /* FECHA LOGIN */

        const modalLogin = document.getElementById("loginModal");

        if(modalLogin){

            modalLogin.classList.remove("active");

        }

        /* ABRE CADASTRO */

        modalCadastro.classList.add("active");

    });

}


/* ==================================================
   TROCAR CLIENTE / VENDEDOR
================================================== */


const btnCliente = document.getElementById("btnCliente");

const btnVendedor = document.getElementById("btnVendedor");

const cpfBox = document.getElementById("cpfBox");

const slider = document.querySelector(".slider");


/* CLIENTE */

if(btnCliente){

    btnCliente.addEventListener("click", () => {

        /* BOTÕES */

        btnCliente.classList.add("ativo");

        btnVendedor.classList.remove("ativo");

        /* SLIDER */

        slider.classList.remove("vendedor");

        /* ESCONDE CPF */

        cpfBox.style.display = "none";

    });

}


/* VENDEDOR */

if(btnVendedor){

    btnVendedor.addEventListener("click", () => {

        /* BOTÕES */

        btnVendedor.classList.add("ativo");

        btnCliente.classList.remove("ativo");

        /* MOVE SLIDER */

        slider.classList.add("vendedor");

        /* MOSTRA CPF */

        cpfBox.style.display = "block";

    });

}


/* ==================================================
   MOSTRAR / OCULTAR SENHA
================================================== */

function mostrarSenha(id, elemento){

    const input = document.getElementById(id);

    const icone = elemento.querySelector("i");


    /* MOSTRAR */

    if(input.type === "password"){

        input.type = "text";

        icone.classList.remove("bx-hide");

        icone.classList.add("bx-show");

    }

    /* OCULTAR */

    else{

        input.type = "password";

        icone.classList.remove("bx-show");

        icone.classList.add("bx-hide");

    }

}


/* ==================================================
   LOCALIZAÇÃO
================================================== */


const lista = document.getElementById("lista-cidades");

/* buscar cidades */

fetch("https://servicodados.ibge.gov.br/api/v1/localidades/municipios")

.then(res => res.json())

.then(dados => {

    dados.forEach(cidade => {

        const option = document.createElement("option");

        option.value = `${cidade.nome} - ${cidade.microrregiao.mesorregiao.UF.sigla}`;

        lista.appendChild(option);

    });

});
