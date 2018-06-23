var paramstr = window.location.search.substr(1);
var paramarr = paramstr.split ("&");
var params = {};
console.log(paramarr)
for ( var i = 0; i < paramarr.length; i++) {
var tmparr = paramarr[i].split("=");
params[tmparr[0]] = tmparr[1];
}
var noticia =  params['noticia'].replace(/%20/g," ");
console.log(noticia)
//Cargar noticia solo si es igual a la variable nombre