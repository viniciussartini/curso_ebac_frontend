const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');
    if (campoB.value > campoA.value) {
        alert("Deu bom, meu padrin!");
    } else {
        alert("Deu ruim, meu padrin!");
    }
})