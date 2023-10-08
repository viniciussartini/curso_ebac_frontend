$(document).ready(function() {

    $(".titulo-menu-cabecalho").each(function() {
        let tituloMenu = this.innerHTML;
        $(this).click(function() {
            switch (tituloMenu) {
                case "Menu 1":
                    $("#lista-menu1").slideDown();
                    break;
                case "Menu 2":
                    $("#lista-menu2").slideDown();
                    break;
                case "Menu 3":
                    $("#lista-menu3").slideDown();
                    break;
                case "Menu 4":
                    $("#lista-menu4").slideDown();
                    break;
                default:
                    break;
            }
        }).mouseout(function() {
            switch (tituloMenu) {
                case "Menu 1":
                    $("#lista-menu1").slideUp();
                    break;
                case "Menu 2":
                    $("#lista-menu2").slideUp();
                    break;
                case "Menu 3":
                    $("#lista-menu3").slideUp();
                    break;
                case "Menu 4":
                    $("#lista-menu4").slideUp();
                    break;
                default:
                    break;
            }
        });
    });

    $(".menu-lateral").mouseover(function() {
        console.log("Entrei");
        $(".container-conteudo").css("grid-template-columns", "1fr 8fr");
    }).mouseout(function() {
        console.log("Sai");
        $(".container-conteudo").css("grid-template-columns", "0.5fr 9.5fr");
    });
});