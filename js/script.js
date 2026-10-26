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
    ],

    cookies: [
        {
            img:'https://res.cloudinary.com/dn5ktthoj/image/upload/v1789260981/Cookie_de_Nutella_ybs8ji.png',
            titulo: 'Cookie de Nutella',
            descricao: 'Crocante por fora, recheado com Nutella derretida por dentro.',
            preco: 'R$ 15,00',
        },
        {
            img:'https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928705/Imagem_do_Codex_20_de_set._de_2026_14_25_06_gza2zx.png',
            titulo: 'Cookie Red Velvet Recheado',
            descricao: 'Cookie red velvet com gotas e recheio de chocolate branco.',
            preco: 'R$ 15,00',
        },
        {
            img:'https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928677/Imagem_do_Codex_20_de_set._de_2026_14_19_59_yvxqx5.png',
            titulo: 'Cookie Meio Amargo com Nutellaa',
            descricao: 'Massa de chocolate meio amargo com gotas de chocolate e recheio de Nutella.',
            preco: 'R$ 12,00',
        },
        {
            img:'https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928666/Imagem_do_Codex_20_de_set._de_2026_14_27_28_oeuwrv.png',
            titulo: 'Cookie de Pistache Recheado',
            descricao: 'Cookie de matcha com pistache e recheio de pistache.',
            preco: 'R$ 18,00',
        },
        {
            img:'https://res.cloudinary.com/dn5ktthoj/image/upload/v1789934634/Imagem_do_Codex_20_de_set._de_2026_15_30_39_vg6x6t.png',
            titulo: 'Cookie de Oreo e Ninho',
            descricao: 'Macio com pedaços de Oreo e recheio de brigadeiro de Ninho.',
            preco: 'R$ 16,00',
        },
        {
            img:'https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928669/Imagem_do_Codex_20_de_set._de_2026_15_08_46_bzc3ro.png',
            titulo: 'Cookie Tradicional',
            descricao: 'Cookie macio por dentro e douradinho por fora, com gotas de chocolate.',
            preco: 'R$ 10,00',
        },
        {
            img:'https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928650/Imagem_do_Codex_20_de_set._de_2026_14_40_37_o8opf1.png',
            titulo: 'Cookie Red Velvet',
            descricao: 'Red velvet macio e saboroso, com gotas de chocolate branco.',
            preco: 'R$ 12,00',
        },
        {
            img:'https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928676/Imagem_do_Codex_20_de_set._de_2026_15_08_39_o4qwji.png',
            titulo: 'Cookie Meio Amargo',
            descricao: 'Massa de chocolate intensa e macia, com gotas de chocolate.',
            preco: 'R$ 10,00',
        },
        {
            img:'https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928686/Imagem_do_Codex_20_de_set._de_2026_14_35_21_xotccn.png',
            titulo: 'Cookie de Pistache',
            descricao: 'Massa de matcha com pistache e um pedaço de chocolate branco por cima.',
            preco: 'R$ 12,00',
        },
        {
            img:'https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928606/Imagem_do_Codex_20_de_set._de_2026_15_19_32_tecbgh.png',
            titulo: 'Cookie de Oreo',
            descricao: 'Macio com pedaços de Oreo e gotas de chocolate.',
            preco: 'R$ 10,00',
        },
        {
            img:'https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928675/Imagem_do_Codex_20_de_set._de_2026_15_06_43_s85nhg.png',
            titulo: 'Cookie de Ninho com Nutella',
            descricao: 'Cookie recheado com brigadeiro de Ninho e uma bolinha de Nutella.',
            preco: 'R$ 18,00',
        },
        {
            img:'https://res.cloudinary.com/dn5ktthoj/image/upload/v1789937356/Imagem_do_Codex_20_de_set._de_2026_17_48_22_a0d3j7.png',
            titulo: 'Cookie de Café com Chocolate',
            descricao: 'Cookie de café com recheio de chocolate e café.',
            preco: 'R$ 18,00',
        },
        {
            img:'https://res.cloudinary.com/dn5ktthoj/image/upload/v1789937546/Imagem_do_Codex_20_de_set._de_2026_17_52_12_hi7evs.png',
            titulo: 'Cookie de Chocolate Branco Recheado',
            descricao: 'Massa tradicional com gotas e recheio de chocolate branco.',
            preco: 'R$ 15,00',
        },
        {
            img:'https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928596/Imagem_do_Codex_20_de_set._de_2026_15_21_13_timyjp.png',
            titulo: 'Cookie Meio Amargo com Ninho',
            descricao: 'Massa intensa de chocolate meio amargo e recheio de brigadeiro de Ninho.',
            preco: 'R$ 16,00',
        },
        {
            img:'https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928622/Imagem_do_Codex_20_de_set._de_2026_15_02_56_r7brv2.png',
            titulo: 'Cookie de Doce de Leite',
            descricao: 'Cookie com gotas de chocolate e um recheio de doce de leite.',
            preco: 'R$ 15,00',
        },
        {
            img:'https://res.cloudinary.com/dn5ktthoj/image/upload/v1789934637/Imagem_do_Codex_20_de_set._de_2026_17_01_58_rwcq9o.png',
            titulo: 'Cookie Tradicional com Ninho',
            descricao: 'Cookie tradicional com leite em pó polvilhado por cima.',
            preco: 'R$ 10,00',
        },
        {
            img:'https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928622/Imagem_do_Codex_20_de_set._de_2026_14_59_37_ki5cbe.png',
            titulo: 'Cookie de Café',
            descricao: 'Cookie intenso de chocolate com café, finalizado com um grão de café por cima.',
            preco: 'R$ 12,00',
        },
        {
            img:'https://res.cloudinary.com/dn5ktthoj/image/upload/v1789934639/Imagem_do_Codex_20_de_set._de_2026_15_27_20_v6hdpw.png',
            titulo: 'Cookie de Chocolate Branco',
            descricao: 'Massa tradicional macia com gotas de chocolate branco.',
            preco: 'R$ 10,00',
        },
    ]
};



/* Carregar Cards (Favoritos e Cardápio) */
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
        card.querySelector('.botao-comprar').href = categoria === 'favoritos'
            ? p.link
            : 'contato.html';

        container.appendChild(card);
    });
}

carregarCards('favoritos')
carregarCards('cookies')
