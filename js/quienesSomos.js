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
	$.ajax({
		type: "GET",
		url: "data/quejas.xml",
		dataType: "xml",
		success: cargarEstadisticos
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
function cargarEstadisticos(data){
	var datos = [];
	$(data).find('categoria').each(function(){
		var categoria={}
		var nombreCategoria = $(this).find('nombreCategoria').text();
		categoria["label"]=nombreCategoria;
		categoria["value"]=0;
		categoria["color"]=getRandomColor();		
		var contador=0;
		var quejas = $(this).find('queja');
		for(i of quejas){
			contador++;
		}
		categoria.value=contador;
		datos.push(categoria);
	});
		
	var svg = d3.select("#statistics").append("svg").attr("height",450);
	svg.append("g").attr("id","salesDonut");
	Donut3D.draw("salesDonut", datos, 250, 200, 250, 200, 20, 0);
	
	var tabla=$('<table></table>').attr("class","tablaColores");
	for(dat of datos){
		tabla.append("<tr><th>"+dat.label+"</th><th width=20 bgcolor='"+dat.color+"'></th></tr>");

	}
	tabla.appendTo("#statistics");
	
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}