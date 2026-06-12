### 2. Código completo para colar no seu `script.js`
```javascript
document.addEventListener("DOMContentLoaded", function () {
    
    // 1. CÁLCULO DO SIMULADOR DE IMPACTO (Consertado e testado)
    const btnCalcular = document.getElementById('btn-calcular');
    
    if (btnCalcular) {
        btnCalcular.addEventListener('click', function () {
            const hectaresInput = document.getElementById('hectares');
            const hectares = parseFloat(hectaresInput.value) || 1;
            const manejo = document.getElementById('manejo').value;

            let fCarbono = 2.5;
            let fAgua = 9000;
            let biodiv = "Alta";

            if (manejo === "horta") {
                fCarbono = 1.2;
                fAgua = 4000;
                biodiv = "Média";
            } else if (manejo === "hidro") {
                fCarbono = 0.5;
                fAgua = 15000;
                biodiv = "Controlada";
            }

            document.getElementById('res-carbono').textContent = (hectares * fCarbono).toFixed(1) + " Ton";
            document.getElementById('res-agua').textContent = (hectares * fAgua).toLocaleString('pt-BR') + " L";
            document.getElementById('res-biodiv').textContent = biodiv;
        });
    }

    // 2. FILTRO DE BUSCA DO CATÁLOGO (Refatorado sem travar)
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

    // 3. AVISO DO BOTÃO NEGOCIAR
    const botoesNegociar = document.querySelectorAll('.btn-negociar');
    botoesNegociar.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = btn.closest('.produto-card');
            const nome = card.querySelector('h3').textContent;
            alert(`Conexão estabelecida!\nVocê iniciou uma solicitação direta para o produtor de: ${nome}.`);
        });
    });
});
