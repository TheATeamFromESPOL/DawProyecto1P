(function(){

	//Para cargar quejas
	$.getJSON("data/datos.json",function(data){
		var arr = data.quejas
		console.log(arr);
	});

})();

var quejas=$(".encabezadoQueja").find('*').click(cargarNoticia);

function cargarNoticia(){
    var noticia=this.textContent;
    window.location="noticia.html?noticia="+noticia;
}