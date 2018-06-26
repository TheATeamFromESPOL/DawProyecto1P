(function(){ 
	$.ajax({
		type: "GET",
		url: "data/quienesSomos.xml",
		dataType: "xml",
		success: obtenerIntegrantes
	});

	$.ajax({
		type: "GET",
		url: "data/timeline.xml",
		dataType: "xml",
		success: cargarTimeline
	});
})();

function obtenerIntegrantes(data){
	$(data).find('integrante').each(function(){
		var nombres = $(this).find('nombres').text();
		var apellidos = $(this).find('apellidos').text();
		var urlFoto = $(this).find('urlFoto').text();
		var carrera = $(this).find('carrera').text();
		var bio = $(this).find('bio').text();
		var nuevo = $("<div></div>").attr("class","border col-md-4 p-2 m-5");
		nuevo.append("<h3>"+nombres+"</h3>");
		nuevo.append("<h3>"+apellidos+"</h3>");
		nuevo.append("<img class='col-12' src='"+urlFoto+"' alt='Foto de "+nombres+apellidos+"'>");
		nuevo.append("<p><strong>Carrera: </strong>"+carrera+"</p>")
		nuevo.append("<p><strong>Bio: </strong><br>"+bio+"</p>")
		nuevo.appendTo("#integrantes");
	});
}

function cargarTimeline(data){
	var i = 0;
	$(data).find('content').each(function(){
		var fecha = $(this).find('fecha').text();
		var contenido = $(this).find('Contenido').text();
		var nuevo;
		if(i%2 == 0){
			nuevo = $('<div></div>').attr("class","contenedor izq");
		}else{
			nuevo = $('<div></div>').attr("class","contenedor der");
		}
		var cont = $('<div></div>').attr("class","content");
		cont.append("<h2>"+fecha+"</h2>");
		cont.append("<p>"+contenido+"</p>");
		nuevo.append(cont);
		nuevo.appendTo("#timeline");
		i++;
	});
}