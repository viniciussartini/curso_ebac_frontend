const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');
    const mensagemValida = `Formulário válido. Campo B: ${campoB.value} é maior que o Campo A: ${campoA.value}.`;
    const mensagemInvalida = `Formulário inválido. Campo B: ${campoB.value} é menor ou igual ao Campo A: ${campoA.value}.`;

    if (Number(campoB.value) > Number(campoA.value)) {
        document.getElementById('mensagem').innerHTML = mensagemValida;
        document.getElementById('mensagem').style.backgroundColor = "Green";
    } else {
        document.getElementById('mensagem').innerHTML = mensagemInvalida;
        document.getElementById('mensagem').style.backgroundColor = "Red";
    }
})

formulario.addEventListener('reset', function(event) {
    document.getElementById('mensagem').innerHTML = "";
    document.getElementById('mensagem').style.backgroundColor = "transparent";
})