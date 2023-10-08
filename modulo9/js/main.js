$(document).ready(function() {

    $("h2").each(function() {
        $(this).on("mouseover mouseout",function() {
            let idMenu = $(this).attr("id")
            switch (idMenu) {
                case "titulo-menu-cabecalho1":
                    $("#lista-menu1").slideToggle(500);
                    break;
                case "titulo-menu-cabecalho2":
                    $("#lista-menu2").slideToggle(500);
                    break;
                case "titulo-menu-cabecalho3":
                    $("#lista-menu3").slideToggle(500);
                    break;
                case "titulo-menu-cabecalho4":
                    $("#lista-menu4").slideToggle(500);
                    break;
                default:
                    break;
            }
        })
    })


    let passoTeste = 0;
    $(".menu-lateral").click(function() {
        $(this).animate(
            {
                width: "1.25fr"
            }, {
                duration: 500,
                easing: "linear",
                step: function(x) {
                        console.log(x);
                        passoTeste = x;
                        console.log(passoTeste);
                        let pegaCol1 = $("body").css("--col1-conteudo");
                        let pegaCol2 = $("body").css("--col2-conteudo");
                        let resultadoColuna1 = parseFloat(pegaCol1.replace("fr","")) + x;
                        let resultadoColuna2 = parseFloat(pegaCol2.replace("fr","")) - x;
                        $(".container-conteudo").css("grid-template-columns", `${resultadoColuna1}fr ${resultadoColuna2}fr`);
                }
            }
        )
    })
});