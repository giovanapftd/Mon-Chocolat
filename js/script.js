const transicaoInicio = document.querySelectorAll('#texto-principal h1, #texto-principal p, #texto-principal .linha');

transicaoInicio.forEach((element, i) => {
    setTimeout(() => element.classList.add('visivel'), i * 350);
})



const produtos = {
    favoritos: [
        {
            img:'https://res.cloudinary.com/dn5ktthoj/image/upload/v1789260981/Cookie_de_Nutella_ybs8ji.png',
            titulo: 'Cookie de Nutella',
            descricao: 'Crocante por fora, recheado com Nutella derretida por dentro.',
            preco: 'R$ 15,00',
            link: 'cookie.html'
        },
        {
            img:'https://res.cloudinary.com/dn5ktthoj/image/upload/v1789351756/Brownie_de_Ninho_com_Nutella_ldyci0.png',
            titulo: 'Brownie de Ninho e Nutella',
            descricao: 'Denso e cremoso, com camadas de Ninho e Nutella que derretem.',
            preco: 'R$ 15,00',
            link: 'brownie.html'
        },
        {
            img:'https://res.cloudinary.com/dn5ktthoj/image/upload/v1789351749/Donuts_de_Morango_gktf9e.png',
            titulo: 'Donuts de Morango',
            descricao: 'Macio, leve e coberto com uma cobertura de morango.',
            preco: 'R$ 15,00',
            link: 'donut.html'
        },
        {
            img:'https://res.cloudinary.com/dn5ktthoj/image/upload/v1789351752/Bolo_de_Mirtilo_lyghzy.png',
            titulo: 'Bolo de Mirtilo',
            descricao: 'Aveludado, fofinho e com cobertura de chocolate branco.',
            preco: 'R$ 25,00',
            link: 'bolo.html'
        },
    ]
};


/* Carregar Cards (Favoritos e Carcápio) */
function carregarCards(categoria) {
    const container = document.querySelector(`.cards-${categoria}`);
    if (!container) return;

    const template = container.querySelector('template');
    if (!template) return;

    container.replaceChildren();

    produtos[categoria].forEach(p => {
        const card = template.content.cloneNode(true);
        const imagem = card.querySelector('img');
        
        imagem.src = p.img;
        imagem.alt = p.titulo;
        card.querySelector('.titulo-produto').textContent = p.titulo;
        card.querySelector('.descricao-produto').textContent = p.descricao;
        card.querySelector('.preco-produto').textContent = p.preco;
        card.querySelector('.botao-comprar').href = p.link;

        container.appendChild(card);
    });
}

carregarCards('favoritos')
