/* accion que carga todo como imagenes, estilos y no solo el html */
/* el .ready solo carga el html */
window.onload = function () {
    $('#preloader').fadeOut(3000);
    $('body').removeClass('hidden');
}