// Lista para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    // Validação: campo vazio
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Adiciona nome e limpa o campo
    amigos.push(nome);
    input.value = "";
    atualizarLista();
}

// Atualiza a lista de amigos visível na tela
function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    amigos.forEach((nome, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${nome}`;
        ul.appendChild(li);
    });
}

// Função para sortear um amigo da lista
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Verifica se há nomes suficientes
    if (amigos.length === 0) {
        alert("Adicione ao menos um nome antes de sortear.");
        return;
    }

    // Sorteia um nome aleatório
    const indice = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[indice];

    // Exibe o resultado na tela
    resultado.innerHTML = `<li>🎉 O amigo sorteado foi: <strong>${sorteado}</strong> 🎉</li>`;
}
