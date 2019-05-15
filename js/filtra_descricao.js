/**
 * @author lucas
 */
function ler(){
	var url = document.location.toString();
	var inicioParam = url.indexOf("?");
	var param = url.substring(inicioParam);
	var igual = param.indexOf("=");
	
	var valor = param.slice(igual + 1);
	
	return valor;
}