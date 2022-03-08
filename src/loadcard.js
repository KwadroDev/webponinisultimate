jQuery(function($) {
    $(".hide").slice(0, 5).show(); // seleccione los primeros cuatro módulos
        $("#hideCard_btn").click(function(e) { // click en el evento para cargar más
            e.preventDefault();
    $(".hide:hidden").slice(0, 2).slideDown(); // seleccione los siguientes 2 módulos ocultos y muéstrelos
        if($(".hide:hidden").length == 0) { // comprobar si todavía existen módulos ocultos
            $("#hideCard_btn").attr("style", "display:none;"); // eliminar botón si ya no hay módulos
        }
    });
});