document.addEventListener('DOMContentLoaded', () => {
    const passos = document.querySelectorAll('.passo'); // Seleciona todos os passos
    let passoAtivo = 0; // Índice do passo atual

    function mostrarPasso(passoIndex) {
        passos.forEach((passo, index) => {
            passo.classList.toggle('ativo', index === passoIndex);
        });
    }

    document.querySelectorAll('.btn-proximo').forEach(button => {
        button.addEventListener('click', () => {
            const proximoPasso = parseInt(button.getAttribute('data-proximo'), 10);
            if (proximoPasso >= 0 && proximoPasso < passos.length) {
                passoAtivo = proximoPasso; // Atualiza o índice do passo ativo
                mostrarPasso(passoAtivo); // Mostra o passo correspondente
            }
        });
    });

    // Inicializa mostrando o primeiro passo
    mostrarPasso(passoAtivo);
});
