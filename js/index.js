var quejas=$(".encabezadoQueja").find('*').click(cargarNoticia);

function cargarNoticia(){
    var noticia=this.textContent;
    window.location="noticia.html?noticia="+noticia;
}
