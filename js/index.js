(function(){

	$.ajax({
		type: "GET",
		url: "data/quejas.xml",
		dataType: "xml",
		success: obtenerQuejas
	});

})();

var quejas=$(".encabezadoQueja").find('*').click(cargarNoticia);

function cargarNoticia(){
    var noticia=this.textContent;
    window.location="noticia.html?noticia="+noticia;
}

function obtenerQuejas(data){
	$(data).find('categoria').each(function(){
		var nombreCategoria = $(this).find('nombreCategoria').text();
		var quejas = $(this).find('queja');
		for(i of quejas){
			var id = $(i).find('id').text();
			var titulo = $(i).find('titulo').text();
			var fecha = $(i).find('fecha').text();
			var contenido = $(i).find('contenido').text();
			var imagen = $(i).find('imagen').text();
			var nombreUsuario = $(i).find('nombreUsuario').text();
			var comentarios = $(i).find('comentarios');
			for(comentario of comentarios){
				
			}
		}
	})
}