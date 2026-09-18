const elementos = document.querySelectorAll('#texto-principal h1, #texto-principal p, .linha-fina');

elementos.forEach((element, i) => {
    setTimeout(() => element.classList.add('visivel'), i * 300);
});



const produtos = {
    cookies: [
        { 
            titulo: "Cookie de Nutella", 
            descricao: "Crocante por fora, recheado com Nutella derretida por dentro.", 
            preco: "R$ 12,00", 
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789260981/Cookie_de_Nutella_ybs8ji.png" 
        }],
        
    brownies: [
        
    ],
    
    donuts: [
        
    ],
    
    bolos: [
        
    ],
};

function carregarCards(categoria) {
    const container = document.querySelector(`.cardapio-${categoria}`);
    if (!container) return;

    const template = container.querySelector('template');
    if (!template) return;

    container.replaceChildren(template);

    produtos[categoria].forEach(p => {
        const card = template.content.cloneNode(true);
        const imagem = card.querySelector('img');

        imagem.src = p.img;
        imagem.alt = p.titulo;
        card.querySelector('.titulo-produto').textContent = p.titulo;
        card.querySelector('.descricao-produto').textContent = p.descricao;
        card.querySelector('.preco-produto').textContent = p.preco;

        container.appendChild(card);
    });
}

carregarCards('cookies');
carregarCards('brownies');
carregarCards('donuts');
carregarCards('bolos');
