const chatbotButton = document.getElementById("chatbot-button");
const chatbotContainer = document.getElementById("chatbot-container");
const closeChat = document.getElementById("close-chat");

chatbotButton.addEventListener("click", () => {
    chatbotContainer.style.display = "flex";
});

closeChat.addEventListener("click", () => {
    chatbotContainer.style.display = "none";
});

const sendChat = document.getElementById("send-chat");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chatbot-messages");

sendChat.addEventListener("click", () => {

    const mensagem = chatInput.value;

    if (mensagem === "") {
        return;
    }

    // mensagem do usuário
    const novaMensagem = document.createElement("div");

    novaMensagem.textContent = mensagem;

    novaMensagem.style.background = "#272727";
    novaMensagem.style.color = "white";
    novaMensagem.style.padding = "10px";
    novaMensagem.style.marginBottom = "10px";
    novaMensagem.style.borderRadius = "10px";
    novaMensagem.style.width = "fit-content";
    novaMensagem.style.marginLeft = "auto";

    chatMessages.appendChild(novaMensagem);

    // limpa input
    chatInput.value = "";

    // resposta automática fake
    setTimeout(() => {

        const respostaBot = document.createElement("div");

        let resposta = "";

if (
    mensagem.toLowerCase().includes("preços") ||
    mensagem.toLowerCase().includes("cardápio")
) {

    resposta =
    "Acesse a sessão Cardápio aqui em nosso Site e confira nossos Sabores e Preços! 😄";

}

else if (
    mensagem.toLowerCase().includes("pedido") ||
    mensagem.toLowerCase().includes("pedir")
) {

    resposta =
    "Clique em [Pedir pelo WhatsApp] e você será automaticamente direcionado aos nossos atendentes no WhatsApp. 😄 Aguardamos o seu Pedido!";

}

else if (
    mensagem.toLowerCase().includes("localização") ||
    mensagem.toLowerCase().includes("endereço")
) {

    resposta =
    "Estamos na Rua Hélio Machado, Boca do Rio. Se quiser, acesse a sessão Localização aqui em nosso Site, para ter o endereço exato no Google Maps. 😄 Aguardamos sua visita!";

}

else {

    resposta =
    "Tenha um bom apetite! 😄";

}

respostaBot.textContent = resposta;

        respostaBot.style.background = "black";
        respostaBot.style.padding = "10px";
        respostaBot.style.marginBottom = "10px";
        respostaBot.style.borderRadius = "10px";
        respostaBot.style.width = "fit-content";

        chatMessages.appendChild(respostaBot);

    }, 500);

});

const menuToggle = document.querySelector(".menu-toggle");

const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {

  menu.classList.toggle("active");

});