
function captura(){
    verificar=true;
    var nombre=document.getElementById("user_name").value;
    if (nombre==''){
        var name = document.getElementById("name_alert");
        name.style="color: red", 
        alert("Es necesario introducir su nombre");
    }
    
    else{
        alert("Bienvenido "+nombre);
        ocultar ()
    }
    
}
var tiempo;
    window.onload = function(){
        var after = document.getElementById('after_load');
        var f1 = document.getElementById('fondo1');
        /*tiempo=setTimeout(ocultar,3000);*/
        
        after.style.display='none';
        f1.style.display='none';
        
    }
    function ocultar (){
        var contenedor_carga = document.getElementById('loader-container');
        var welcome = document.getElementById('texto');
        var nombre = document.getElementById('nombre');
        var fondo = document.getElementById('fondo');
        var after = document.getElementById('after_load');
        var f1 = document.getElementById('fondo1');
        /*Cambia propiedades css*/
        contenedor_carga.style.visibility = 'hidden';
        contenedor_carga.style.opacity= '100';/*Oculta la animación*/
        welcome.style.visibility = 'hidden';
        welcome.style.opacity= '100';
        nombre.style.visibility='hidden';
        nombre.style.opacity='100';
        fondo.style.visibility='hidden';
        fondo.style.opacity='100';
        f1.style.display='block';
        f1.style.backgroundColor="black";
        tiempo=setTimeout(mostrar1,3000);
    }
    function mostrar1(){
        var after = document.getElementById('after_load');
        var f1 = document.getElementById('fondo1');
        after.style.display='block';
        f1.style.display='none';

    }