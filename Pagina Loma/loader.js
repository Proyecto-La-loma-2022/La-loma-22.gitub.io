var tiempo;
            window.onload = function(){
                tiempo=setTimeout(ocultar,1000)
                after.style.visibility='hidden';
            }
            function ocultar (){
              var contenedor_carga = document.getElementById('loader-container');
              var welcome = document.getElementById('texto');
              var welcome = document.getElementById('fondo');
              /*Cambia propiedades css*/
              contenedor_carga.style.visibility = 'hidden';
              contenedor_carga.style.opacity= '100';/*Oculta la animación*/
              welcome.style.visibility = 'hidden';
              welcome.style.opacity= '100';
              fondo.style.visibility = 'hidden';
              fondo.style.opacity= '100';
              after.style.visibility='';
              
            }