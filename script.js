document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    let inputField = document.getElementById("user-input");
    let message = inputField.value.trim();
    if (message === "") return;

    let chatBox = document.getElementById("messages");

    let userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.textContent = message;
    chatBox.appendChild(userMessage);

    inputField.value = "";
    
    setTimeout(() => {
        let botMessage = document.createElement("div");
        botMessage.className = "message bot";
        botMessage.textContent = "This is a dummy response.";
        chatBox.appendChild(botMessage);
    }, 1000);
}