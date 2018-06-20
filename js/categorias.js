(function(){ })();

var itemsMenu = document.querySelectorAll('a[class*="list-group-item"]');
var itemsContenido = document.querySelectorAll('div[id^="cont-"]');

function activar(ja){
	for(i of itemsMenu){
		if(i == ja){
			i.classList.add("active");
		}else{
			i.classList.remove("active");
		}
	}

	for(j of itemsContenido){
		j.classList.remove("d-flex");
		j.classList.remove("d-none");
		if(j.id.includes(ja.id)){
			j.classList.add("d-flex");
		}else{
			j.classList.add("d-none");
		}
	}
}