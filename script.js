document.addEventListener("DOMContentLoaded", function () {
    
    // 1. CÁLCULO DO SIMULADOR DE IMPACTO
    const btnCalcular = document.getElementById('btn-calcular');
    
    if (btnCalcular) {
        btnCalcular.addEventListener('click', function () {
            const hectares = parseFloat(document.getElementById('hectares').value) || 1;
            const manejo = document.getElementById('manejo').value;

            let fatorCarbono = 2.5;
            let fatorAgua = 9000;
            let biodiversidade = "Alta";

            if (manejo === "horta") {
                fatorCarbono = 1.2;
                fatorAgua = 4000;
                biodiversidade = "Média";
            } else if (manejo === "hidro") {
                fatorCarbono = 0.5;
                fatorAgua = 15000;
                biodiversidade = "Controlada";
            }

            // Atualiza os números no HTML de forma bonita
            document.getElementById('res-carbono').textContent = (hectares * fatorCarbono).toFixed(1) + " Ton";
            document.getElementById('res-agua').textContent = (hectares * fatorAgua).toLocaleString('pt-BR') + " L";
            document.getElementById('res-biodiv').textContent = biodiversidade;
        });
    }

    // 2. FILTRO DE BUSCA DO CATÁLOGO
    const campoBusca = document.getElementById('campo-busca');
    
    if (campoBusca) {
        campoBusca.addEventListener('input', function () {
            const termo = campoBusca.value.toLowerCase().trim();
            const cards = document.querySelectorAll('.produto-card');

            cards.forEach(card => {
                const titulo = card.querySelector('h3').textContent.toLowerCase();
                const desc = card.querySelector('p').textContent.toLowerCase();
                const regiao = card.querySelector('.tag-regiao').textContent.toLowerCase();
                const tag = card.querySelector('.produto-tag').textContent.toLowerCase();

                if (titulo.includes(termo) || desc.includes(termo) || regiao.includes(termo) || tag.includes(termo)) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }
});
