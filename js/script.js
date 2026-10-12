const transicaoInicio = document.querySelectorAll('#texto-principal h1, #texto-principal p, #texto-principal .linha');

transicaoInicio.forEach((element, i) => {
    setTimeout(() => element.classList.add('visivel'), i * 350);
})
