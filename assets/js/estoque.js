// =============================================================
// GERENCIAMENTO DE ESTOQUE — ESTOQUE.JS
// =============================================================

document.querySelectorAll('.qty-control').forEach((control) => {
    const minusBtn = control.querySelector('.qty-btn:first-child');
    const plusBtn  = control.querySelector('.qty-btn:last-child');
    const valueEl  = control.querySelector('.qty-value');

    minusBtn.addEventListener('click', () => {
        let val = parseInt(valueEl.textContent, 10);
        if (val > 0) val--;
        valueEl.textContent = val;
        valueEl.classList.toggle('qty-value-zero', val === 0);
        atualizarStatusEstoque(control, val);
    });

    plusBtn.addEventListener('click', () => {
        let val = parseInt(valueEl.textContent, 10);
        val++;
        valueEl.textContent = val;
        valueEl.classList.toggle('qty-value-zero', val === 0);
        atualizarStatusEstoque(control, val);
    });
});

// Atualiza o badge de status da linha ao zerar/desezerar o estoque
function atualizarStatusEstoque(control, val) {
    const row       = control.closest('tr');
    const statusEl  = row ? row.querySelector('.status') : null;
    if (!statusEl) return;

    if (val === 0) {
        statusEl.textContent = 'Esgotado';
        statusEl.className   = 'status status-esgotado';
    } else if (statusEl.classList.contains('status-esgotado')) {
        statusEl.textContent = 'Ativo';
        statusEl.className   = 'status status-ativo';
    }
}
