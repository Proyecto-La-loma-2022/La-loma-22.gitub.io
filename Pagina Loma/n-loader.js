window.onload = function(){
    var after = document.getElementById('after_load');
    tiempo=setTimeout(ocultar,3000);
    after.style.display='none';
}
function ocultar (){
    /*var contenedor_carga = document.getElementById('fondo');
    var welcome = document.getElementById('texto');
    var nombre = document.getElementById('nombre');*/
    var fondo = document.getElementById('fondo');
    var after = document.getElementById('after_load');
    
    /*Cambia propiedades css*/
    /*contenedor_carga.style.visibility = 'hidden';
    contenedor_carga.style.opacity= '100';/*Oculta la animación*/
    /*welcome.style.visibility = 'hidden';
    welcome.style.opacity= '100';
    nombre.style.visibility='hidden';
    nombre.style.opacity='100';*/
    fondo.style.visibility='hidden';
    fondo.style.opacity='100';
    after.style.display='block';
    
}