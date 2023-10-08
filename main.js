$(document).ready(function() {
    $("form").on("submit", function(event) {
        event.preventDefault();

        const pegaTexto = $("#nova-tarefa").val();
        const novaLinha = $("<li></li>");
        $(`<p>${pegaTexto}</p>`).appendTo(novaLinha);
        $(novaLinha).appendTo("ul");
        $("#nova-tarefa").val("");

        $("li").click(function() {
            $(this).each(function() {
                $(this).toggleClass("texto");
            })
        })
    })
})