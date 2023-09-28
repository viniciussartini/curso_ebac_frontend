const formulario = document.getElementById("form-atividade");
const imgAprovado = '<img src="assets/images/aprovado.png" alt="Emoji celebrando">';
const imgReprovado = '<img src="assets/images/reprovado.png" alt="Emoji triste">';
const atividades = [];
const notas = [];

let linhas ="";

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById("nota-atividade");

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida.`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = "<tr>";
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += "</tr>"
        linhas += linha;
    }
    inputNomeAtividade.value = "";
    inputNotaAtividade.value = "";
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}