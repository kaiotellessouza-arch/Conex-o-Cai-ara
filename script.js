// Aguarda o HTML carregar completamente antes de rodar o código (evita conflitos)
document.addEventListener("DOMContentLoaded", function () {
    
    const campoBusca = document.getElementById('campo-busca');
    const botoesContato = document.querySelectorAll('.btn-contato');

    // 1. SISTEMA DE FILTRO DE BUSCA
    if (campoBusca) {
        campoBusca.addEventListener('input', function () {
            const termoBusca = campoBusca.value.toLowerCase();
            const cards = document.querySelectorAll('.produto-card');

            cards.forEach(card => {
                const titulo = card.querySelector('h3').textContent.toLowerCase();
                const descricao = card.querySelector('p').textContent.toLowerCase();

                // Verifica se o termo digitado está no título ou na descrição
                if (titulo.includes(termoBusca) || descricao.includes(termoBusca)) {
                    card.style.display = "flex"; // Mostra o card
                } else {
                    card.style.display = "none"; // Esconde o card
                }
            });
        });
    }

    // 2. SISTEMA DE CLICK DOS BOTÕES
    botoesContato.forEach(botao => {
        botao.addEventListener('click', function () {
            // Pega o nome do produto que está no mesmo card do botão clicado
            const cardPai = botao.closest('.produto-info');
            const nomeProduto = cardPai.querySelector('h3').textContent;
            
            // Exibe um aviso interativo na tela
            alert(`Legal! Você demonstrou interesse em: ${nomeProduto}.\nEsse é o foco da nossa Conexão Caiçara!`);
        });
    });

});
