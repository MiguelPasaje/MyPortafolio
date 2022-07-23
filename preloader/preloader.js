/* accion que carga todo como imagenes, estilos y no solo el html */
/* el .ready solo carga el html */
window.onload = function () {
    $('#preloader').fadeOut(1000);
    $('body').removeClass('hidden');
}