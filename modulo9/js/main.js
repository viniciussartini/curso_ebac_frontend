$(document).ready(function() {

    $("h2").each(function() {
        $(this).on("click mouseout",function() {
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

    $(".menu-lateral").click(function() {
        $(this).animate(
            {
                width: "1.25fr"
            }, {
                duration: 500,
                easing: "swing",
                step: function(width) {
                    console.log(1);
                    $(".container-conteudo").css("grid-template-columns", `${0.5 + width}fr ${(width-1)+8}fr`);
                }, 
                progress: function() {
                    console.log("2");
                },
                complete: function() {
                    console.log("3");
                }
            }
        )
    })
});