const livros = [
  { id: 1, titulo: "Dom Casmurro", preco: 35.0 },
  { id: 2, titulo: "Clean Code", preco: 50 },
  { id: 3, titulo: "O alquimista", preco: 42 },
  { id: 4, titulo: "JavaScript Eloquente", preco: 75 },
];

let carrinho = [];
let total = 0;

//Selecionando elementos do DOM
const listaLivrosHtml = document.getElementById("lista-livros");
const itensCarrinhoHtml = document.getElementById("itens-carrinho");
const valorTotalHtml = document.getElementById("valor-total");

function carregarCatalogo() {
  // 2. Nome corrigido
  livros.forEach((livro) => {
    // 3. Usando 'livro' no singular
    const div = document.createElement("div");
    div.classList.add("livro-card");
    // 4. innerHTML (com maiúsculas)
    div.innerHTML = `
      <h3>${livro.titulo}</h3>
      <p>R$ ${livro.preco.toFixed(2)}</p>
      <button onclick="adicionarAoCarrinho(${livro.id})">Adicionar</button>
    `;
    listaLivrosHtml.appendChild(div);
  });
}

//funcao para adicionar ao carinho
function adicionarAoCarrinho(id) {
  const livro = livros.find((l) => l.id === id);
  carrinho.push(livro);
  total += livro.preco;

  atualizarInterfaceCarrinho();
}

//atualizar a interface do carrinho
function atualizarInterfaceCarrinho() {
  itensCarrinhoHtml.innerHTML = "";

  carrinho.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerText = `${item.titulo} - R$ ${item.preco.toFixed(2)}`;
    const botaoRemover = document.createElement("button")
    botaoRemover.innerText = "Remover";
    botaoRemover.onclick = () => removerDoCarrinho(index); 
    li.appendChild(botaoRemover);
    itensCarrinhoHtml.appendChild(li);
  });
  valorTotalHtml.innerText = total.toFixed(2);
}
function removerDoCarrinho(index) {
  const item = carrinho[index];
  total -= item.preco;
  carrinho.splice(index, 1);

  // atualiza a tela
  atualizarInterfaceCarrinho();
}

//inicializar nossa pagina
carregarCatalogo();
