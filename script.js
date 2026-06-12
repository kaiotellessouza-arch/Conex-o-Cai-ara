<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conexão Caiçara - Megaportal Agrinho 2026</title>
    <link rel="stylesheet" href="style.css">
    <!-- Ícones modernos para deixar o site profissional -->
    <link rel="stylesheet" href="https://cloudflare.com">
</head>
<body>

    <!-- ACESSIBILIDADE E BARRA TOPO -->
    <div class="barra-topo">
        <span><i class="fas fa-map-marker-alt"></i> Pontal do Paraná - PR</span>
        <span><i class="fas fa-calendar-alt"></i> Concurso Agrinho 2026</span>
    </div>

    <!-- CABEÇALHO HERO GIGANTE -->
    <header>
        <div class="header-container">
            <span class="badge-agrinho"><i class="fas fa-trophy"></i> Projeto Destaque Agrinho 2026</span>
            <h1>Conexão Caiçara</h1>
            <p class="tagline">Agro Forte, Futuro Sustentável</p>
            <p class="subtext">A maior plataforma integrada de inteligência agroecológica, rastreabilidade de bioinsumos e valorização da cultura tradicional do litoral paranaense.</p>
            <div class="header-botoes">
                <a href="#vitrine" class="btn-header principal">Explorar Catálogo</a>
                <a href="#simulador" class="btn-header secundario">Simulador Eco-Impacto</a>
            </div>
        </div>
    </header>

    <!-- DASHBOARD DE METRICAS E IMPACTO EM TEMPO REAL -->
    <section class="painel-estatisticas container-global">
        <div class="estatistica-item">
            <i class="fas fa-leaf"></i>
            <span class="num" id="contador-agro">100%</span>
            <span class="txt">Produção Orgânica Certificada</span>
        </div>
        <div class="estatistica-item">
            <i class="fas fa-users"></i>
            <span class="num">142</span>
            <span class="txt">Famílias Caiçaras Atendidas</span>
        </div>
        <div class="estatistica-item">
            <i class="fas fa-tree"></i>
            <span class="num">450k m²</span>
            <span class="txt">Área de Mata Atlântica Monitorada</span>
        </div>
        <div class="estatistica-item">
            <i class="fas fa-recycle"></i>
            <span class="num">84 Ton</span>
            <span class="txt">Resíduos de Pesca Reciclados</span>
        </div>
    </section>

    <!-- CONTEÚDO PRINCIPAL -->
    <main class="container-global">
        
        <!-- SEÇÃO 1: MACRO MANIFESTO E PROPÓSITO -->
        <section class="card-secao secao-manifesto">
            <div class="titulo-bloco">
                <span class="sub-titulo">Nossa Filosofia</span>
                <h2>O Manifesto do Equilíbrio: Alimento Forte, Floresta em Pé</h2>
            </div>
            <div class="conteudo-flex">
                <div class="texto-bloco">
                    <p>Desenvolvido em Pontal do Paraná, o <strong>Conexão Caiçara</strong> prova que o agronegócio e a agricultura familiar do litoral não precisam competir com a natureza. A Mata Atlântica, os complexos estuarinos e a restinga deixam de ser restrições e passam a ser os maiores ativos biológicos do produtor.</p>
                    <p>Substituímos a cadeia de insumos químicos por um ciclo perfeito de economia circular costeira: o que sobra da atividade pesqueira vira a base de fertilização de lavouras agroflorestais altamente produtivas.</p>
                </div>
                <div class="texto-bloco-destaque">
                    <h3><i class="fas fa-shield-alt"></i> Compromissos Socioambientais</h3>
                    <ul class="lista-sustentavel">
                        <li><strong>Preservação de Mananciais:</strong> Proteção total de rios e áreas de mangue.</li>
                        <li><strong>Soberania Alimentar:</strong> Alimento limpo de verdade para as escolas e comunidades locais.</li>
                        <li><strong>Rastreabilidade Digital:</strong> Tecnologia aplicada para garantir a origem justa do produto.</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- SEÇÃO 2: SIMULADOR INTERATIVO JAVASCRIPT (MUITA INTERAÇÃO!) -->
        <section id="simulador" class="card-secao secao-simulador">
            <div class="titulo-bloco">
                <span class="sub-titulo">Ferramenta Interativa</span>
                <h2>Simulador de Impacto Agroecológico</h2>
                <p>Calcule os benefícios ambientais ao trocar a agricultura convencional pelas técnicas do projeto Conexão Caiçara.</p>
            </div>
            <div class="simulador-grid">
                <div class="simulador-controles">
                    <div class="campo-controle">
                        <label for="input-area">Tamanho da Área de Plantio (em Hectares):</label>
                        <input type="number" id="input-area" value="5" min="1" max="100">
                    </div>
                    <div class="campo-controle">
                        <label for="select-cultivo">Tipo de Manejo Principal:</label>
                        <select id="select-cultivo">
                            <option value="agrofloresta">Sistema Agroflorestal (SAF)</option>
                            <option value="organico">Horta Orgânica Comunitária</option>
                            <option value="hidroponia">Hidroponia Circular</option>
                        </select>
                    </div>
                    <button id="btn-calcular" class="btn-acao-forte">Atualizar Métricas de Impacto</button>
                </div>
                <div class="simulador-resultados">
                    <div class="res-card">
                        <i class="fas fa-cloud-sun"></i>
                        <h4 id="res-carbono">12.5 Ton</h4>
                        <p>Carbono Sequestrado / Ano</p>
                    </div>
                    <div class="res-card">
                        <i class="fas fa-water"></i>
                        <h4 id="res-agua">45.000 L</h4>
                        <p>Água Economizada / Mês</p>
                    </div>
                    <div class="res-card">
                        <i class="fas fa-bug"></i>
                        <h4 id="res-biodiv">Alta</h4>
                        <p>Retorno de Polinizadores Nativos</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SEÇÃO 3: SISTEMA DE BUSCA E VITRINE GIGANTE (6 PRODUTOS MAIS ROBUSTOS) -->
        <section id="vitrine" class="card-secao secao-vitrine">
            <div class="busca-container">
                <div class="titulo-bloco">
                    <span class="sub-titulo">E-Commerce Social</span>
                    <h2>Catálogo e Rastreabilidade de Produtos Caiçaras</h2>
                </div>
                <div class="busca-input-wrapper">
                    <i class="fas fa-search icone-busca"></i>
                    <input type="text" id="campo-busca" placeholder="Filtre o portal inteiro por palavra-chave (ex: Mel, Banana, Palmito, Inovação, Adubo)...">
                </div>
                <p class="instrucao-busca"><i class="fas fa-info-circle"></i> O banco de dados renderiza e filtra os elementos em tempo real através do arquivo JavaScript.</p>
            </div>

            <div class="produtos-grid" id="lista-produtos">
                <!-- CARD 1 -->
                <div class="produto-card">
                    <div class="card-imagem-container">
                        <img class="produto-foto" src="https://unsplash.com" alt="Palmito Pupunha">
                        <span class="produto-tag tag-sustentavel">Manejo Sustentável</span>
                    </div>
                    <div class="produto-info">
                        <h3>Palmito Pupunha Premium</h3>
                        <p>Extraído de palmeiras cultivadas sem desmatamento. Garante a sobrevivência das aves nativas que se alimentam dos frutos das palmeiras silvestres.</p>
                        <div class="card-meta">
                            <span><i class="fas fa-map-marker-alt"></i> Região: Shangri-lá</span>
                            <span><i class="fas fa-certificate"></i> Selo Orgânico</span>
                        </div>
                        <button class="btn-contato"><i class="fab fa-whatsapp"></i> Negociar Direto</button>
                    </div>
                </div>

                <!-- CARD 2 -->
                <div class="produto-card">
                    <div class="card-imagem-container">
                        <img class="produto-foto" src="https://unsplash.com" alt="Banana Orgânica">
                        <span class="produto-tag tag-fruta">Frutas Tropicais</span>
                    </div>
                    <div class="produto-info">
                        <h3>Banana Caturra Agroflorestal</h3>
                        <p>Nossas bananas crescem integradas à mata nativa, aproveitando a adubação natural das folhas que caem. Sabor doce e sem resíduos químicos.</p>
                        <div class="card-meta">
                            <span><i class="fas fa-map-marker-alt"></i> Região: Macacos</span>
                            <span><i class="fas fa-certificate"></i> Premium</span>
                        </div>
                        <button class="btn-contato"><i class="fab fa-whatsapp"></i> Negociar Direto</button>
                    </div>
                </div>

                <!-- CARD 3 -->
                <div class="produto-card">
                    <div class="card-imagem-container">
                        <img class="produto-foto" src="https://unsplash.com" alt="Hortaliças">
