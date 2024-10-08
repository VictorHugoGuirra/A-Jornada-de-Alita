const storyText = document.getElementById('story-text');
const choicesDiv = document.getElementById('choices');

const storyParts = {
    start: {
        text: "Você é Alita, uma jovem pesquisadora ambiental determinada a entender e combater as mudanças climáticas. Depois de ler sobre o impacto dos gases de efeito estufa no site U.S. Greenhouse Gas Center, você decide embarcar em uma jornada para coletar dados e encontrar soluções. Sua missão é crucial: a saúde do planeta depende de suas ações!",
        choices: [
            { text: "Investigar os dados de emissões de CO₂ e metano.", action: "investigateData" },
            { text: "Visitar a área de reflorestamento.", action: "visitReforestation" }
        ]
    },
    investigateData: {
        text: "Você se senta em frente ao computador e começa a analisar os gráficos. Descobre que os setores de transporte e energia são os maiores responsáveis pelas emissões de CO₂. Agora, o que você fará?",
        choices: [
            { text: "Organizar uma palestra comunitária.", action: "communityTalk" },
            { text: "Escrever um artigo para a revista local.", action: "writeArticle" }
        ]
    },
    visitReforestation: {
        text: "Ao chegar na área de reflorestamento, você se depara com um grupo de voluntários plantando árvores. Eles explicam como as florestas absorvem CO₂. O que você fará?",
        choices: [
            { text: "Ajudar no plantio.", action: "helpPlant" },
            { text: "Documentar o projeto em fotos e vídeos.", action: "documentProject" }
        ]
    },
    communityTalk: {
        text: "A palestra foi um sucesso! Muitas pessoas compareceram e mostraram interesse em mudar seus hábitos. Agora, você deve continuar sua luta.",
        choices: []
    },
    writeArticle: {
        text: "Seu artigo foi bem recebido e as pessoas começaram a discutir ações em suas casas. Você percebe que a informação é uma poderosa ferramenta.",
        choices: []
    },
    helpPlant: {
        text: "Depois de horas de trabalho, você se sente conectada à natureza. Você percebe a importância de unir esforços na luta contra as mudanças climáticas.",
        choices: []
    },
    documentProject: {
        text: "Seus vídeos e fotos viralizaram! Muitas pessoas se mostraram interessadas em participar. Você percebe que a conscientização pode fazer a diferença.",
        choices: []
    }
};

function displayStory(part) {
    storyText.textContent = storyParts[part].text;
    choicesDiv.innerHTML = '';

    storyParts[part].choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => displayStory(choice.action);
        choicesDiv.appendChild(button);
    });
}

displayStory('start');