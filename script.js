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

chatInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        sendChat.click();

    }

});

sendChat.addEventListener("click", () => {

    const mensagem = chatInput.value;

    if (mensagem === "") {
        return;
    }

    // mensagem do usuário
    const novaMensagem = document.createElement("div");

    novaMensagem.textContent = mensagem;

    novaMensagem.style.background = "white";
    novaMensagem.style.color = "black";
    novaMensagem.style.padding = "10px";
    novaMensagem.style.marginBottom = "10px";
    novaMensagem.style.borderRadius = "10px";
    novaMensagem.style.width = "fit-content";
    novaMensagem.style.marginLeft = "auto";

    chatMessages.appendChild(novaMensagem);

    chatMessages.scrollTop = chatMessages.scrollHeight;

    // limpa input
    chatInput.value = "";

    // resposta automática fake
    setTimeout(() => {

        const respostaBot = document.createElement("div");

        let resposta = "Obrigado pelo Contato!";

if (
    mensagem.toLowerCase().includes("preços") ||
    mensagem.toLowerCase().includes("preço") ||
    mensagem.toLowerCase().includes("cardápio")
) {

    resposta =
    "Acesse a sessão Cardápio aqui em nosso site e confira nossos preços! 😄";

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
    mensagem.toLowerCase().includes("local") ||
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

        respostaBot.style.background = "white";
        respostaBot.style.padding = "10px";
        respostaBot.style.marginBottom = "10px";
        respostaBot.style.borderRadius = "10px";
        respostaBot.style.width = "fit-content";
        respostaBot.style.color = "black";

        chatMessages.appendChild(respostaBot);

        chatMessages.scrollTop = chatMessages.scrollHeight;

    }, 500);

});

const menuToggle = document.querySelector(".menu-toggle");

const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {

  menu.classList.toggle("active");

});