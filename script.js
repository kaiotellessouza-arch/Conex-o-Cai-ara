// Banco de dados simulado com produtos e produtores reais/característicos de Pontal do Paraná
const produtosSustentaveis = [
    {
        nome: "Palmito Pupunha In Natura",
        categoria: "Cultivo Sustentável",
        descricao: "Produzido em áreas manejadas sem desmatamento da Mata Atlântica nativa. Colheita ecológica que preserva a raiz da planta.",
        imagem: "https://unsplash.com"
    },
    {
        nome: "Banana Caturra Orgânica",
        categoria: "Frutas do Litoral",
        descricao: "Rica em sabor e cultivada por agricultura familiar tradicional local, totalmente livre de pesticidas ou agrotóxicos químicos.",
        imagem: "https://unsplash.com"
    },
    {
        nome: "Hortaliças e Folhas Hidropônicas",
        categoria: "Verduras",
        descricao: "Alface, rúcula e agrião cultivados com sistema fechado de água reutilizável, reduzindo o consumo de recursos hídricos em até 80%.",
        imagem: "https://unsplash.com"
    },
    {
        nome: "Mel Puro de Abelhas Nativas",
        categoria: "Apicultura Consciente",
        descricao: "Produção artesanal que atua diretamente na polinização da flora nativa costeira, ajudando a regenerar florestas degradadas.",
        imagem: "https://unsplash.com"
    },
    {
        nome: "Mandioca Mansa Descascada",
        categoria: "Raízes",
        descricao: "Tradicional cultivo da nossa região litorânea. Raízes selecionadas, limpas e embaladas prontas para consumo comercial.",
        imagem: "https://unsplash.com"
    },
    {
        nome: "Polpa de Frutas Nativas (Juçara)",
        categoria: "Extrativismo Sustentável",
        descricao: "Fruto do bioma local colhido sem derrubar a palmeira Juçara, estimulando a preservação da árvore viva na floresta.",
        imagem: "https://unsplash.com"
    }
];

// Função principal para renderizar os cards na tela
function renderizarProdutos(lista) {
    const grid = document.getElementById("lista-produtos");
    grid.innerHTML = ""; // Limpa os elementos atuais antes de redesenhar

    if (lista.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #64748b; padding: 20px;">Nenhum produto sustentável foi encontrado com esse nome.</p>`;
        return;
    }

    lista.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("produto-card");

        card.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}" class="produto-foto">
            <div class="produto-info">
                <span class="produto-tag">${item.categoria}</span>
                <h3>${item.nome}</h3>
                <p>${item.descricao}</p>
                <button class="btn-contato" onclick="abrirContatoSimulado('${item.nome}')">Contatar Produtor</button>
            </div>
        `;

        grid.appendChild(card);
    });
}

// Função do Filtro de Busca (Captura a digitação em tempo real)
function configurarBusca() {
    const inputBusca = document.getElementById("campo-busca");
    
    inputBusca.addEventListener("input", (evento) => {
        const textoDigitado = evento.target.value.toLowerCase();
        
        // Filtra o array principal comparando o nome ou descrição com o texto buscado
        const produtosFiltrados = produtosSustentaveis.filter(prod => {
            return prod.nome.toLowerCase().includes(textoDigitado) || 
                   prod.descricao.toLowerCase().includes(textoDigitado) ||
                   prod.categoria.toLowerCase().includes(textoDigitado);
        });

        renderizarProdutos(produtosFiltrados);
    });
}

// Simulação de Interação para o Agrinho
function abrirContatoSimulado(nomeDoProduto) {
    alert(`Ótima escolha sustentável! Você selecionou: "${nomeDoProduto}".\n\nNo projeto final do Agrinho, este botão fará a integração automática que redireciona o restaurante local para o WhatsApp real do agricultor cadastrado de Pontal do Paraná.`);
}

// Inicialização da página
window.onload = () => {
    renderizarProdutos(produtosSustentaveis);
    configurarBusca();
};
