/* =============================================================
   PERFIL-VENDEDOR-MODO.JS
   Define o modo de visualização do perfil do vendedor:
   - Modo Vendedor: o próprio vendedor logado vê tudo
     (endereço, login & senha, cartão)
   - Modo Cliente: visitante/cliente vê apenas dados públicos
     (foto, nome, campanha, produtos, meta, avaliação, reputação)
   ============================================================= */

(function () {

    function ehDonoDoPerfil() {
        const usuario = getUsuarioLogado();
        return !!(usuario && usuario.tipo === "vendedor");
    }

    function aplicarModoVisualizacao() {
        if (ehDonoDoPerfil()) return;

        document.body.classList.add("modo-cliente");

        const idsParaRemover = [
            "secaoPrivadaVendedor",   // Endereço + Cartão (about-section)
            "cardEnderecoVendedor",   // Card "Endereço" da sidebar
            "cardLoginSenhaVendedor"  // Card "Login & Senha" da sidebar
        ];

        idsParaRemover.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.remove();
        });
    }

    document.addEventListener("DOMContentLoaded", aplicarModoVisualizacao);

})();
