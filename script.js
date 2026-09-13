const elementos = document.querySelectorAll('#texto-principal h1, #texto-principal p, .linha-fina');

elementos.forEach((el, i) => {
    setTimeout(() => el.classList.add('visivel'), i * 300);
});
