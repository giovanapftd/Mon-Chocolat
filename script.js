const elementos = document.querySelectorAll('.texto-principal h1, .texto-principal p, .linha-fina');

elementos.forEach((elements, i) => {
    setTimeout(() => elements.classList.add('visivel'), i * 500);
});