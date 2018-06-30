(function(){

	$.ajax({
		type: "GET",
		url: "data/quejas.xml",
		dataType: "xml",
		success: obtenerQuejas
	});
})();

function cargarNoticia(){
    var noticiaId=$(this).attr('id');
    window.location="noticia.html?noticia="+noticiaId;
}

function obtenerQuejas(data){
	$(data).find('categoria').each(function(){
		var nombreCategoria = $(this).find('nombreCategoria').text();
		var quejas = $(this).find('queja');
		for(i of quejas){
			var idQueja = $(i).find('id').text();
			var titulo = $(i).find('titulo').text();
			var fecha = $(i).find('fecha').text();
			var contenido = $(i).find('contenido').text();
			var imagen = $(i).find('imagen').text();
			var nombreUsuario = $(i).find('nombreUsuario').text();
			var conteoComentarios = 0;
			for(comentario of $(i).find('comentarios').find('comentario')){
				conteoComentarios++;
			}
			var previaQueja = $("<div></div>").attr("class", "previaConImagen col-md-3 p-1 align-self-stretch d-flex flex-column");
			var encabezadoQueja = $("<div></div>").attr("class", "encabezadoQueja");
			encabezadoQueja.append('<div class="tituloQueja"> <h3 id="'+idQueja+'">'+titulo+'</h3></div>');
			encabezadoQueja.append("<h6>"+nombreCategoria+"</h6>");
			var contenidoQueja = $("<div></div>").attr("class", "contenidoQueja");
			contenidoQueja.append('<img class="imagenQueja" src="'+imagen+'">');
			if(contenido.length>=120){
				contenidoQueja.append('<p class="textoQueja">'+contenido.slice(0,117)+"...</p>");
			}else{
				contenidoQueja.append('<p class="textoQueja">'+contenido+"</p>");
			}
			var pieQueja = $("<div></div>").attr("class","pieQueja align-self-baseline");
			if(nombreUsuario.length>=20){
				pieQueja.append('<p class="mr-auto d-flex"><br><strong>Posteado por: </strong><a href="#home" class="mr-auto">'+nombreUsuario.slice(0,17)+'...</a></p>')
			}else{
				pieQueja.append('<p class="mr-auto d-flex "><br><strong>Posteado por: </strong><a href="#home" class="mr-auto">'+nombreUsuario+'</a></p>')
			}
			pieQueja.append('<button type="button" class="btn btn-primary ml-auto"> Comentar <span class="badge badge-light">'+conteoComentarios+'</span></button>');
			previaQueja.append(encabezadoQueja);
			previaQueja.append(contenidoQueja);
			previaQueja.append(pieQueja);
			previaQueja.appendTo("#conjuntoDeQuejas");

		}
	})
	$(".tituloQueja").find('*').click(cargarNoticia);			

}