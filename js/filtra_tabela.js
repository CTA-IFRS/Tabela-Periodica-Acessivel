/**
 * @author lucas
 */

function adicionarEvento(objeto, TipoEvento, funcao){
		if(objeto.addEventListener){ // todos navegadores menos IE
	//	    alert("outros");
			objeto.addEventListener(TipoEvento, funcao, false);
			return true;
		} else if (objeto.attachEvent){ // IE
		//    alert("IE");
			var r = objeto.attachEvent('on'+TipoEvento, funcao);
			return r;
		} else {
			return false;
		}
}

function lerGrupo(){
	var url = document.location.toString();
	var inicioParam = url.indexOf("?");
	var param = url.substring(inicioParam);
	var igual = param.indexOf("=");
	
	var valor = param.slice(igual + 1);
	
	return valor;
}

function carregarGrupo(){
	var tabela = document.getElementById("tabela_periodica");
	var grupo = lerGrupo();
	var nomeClasse = grupo.substring(1);
	
	if(nomeClasse != "todos") {	
		var tags = tabela.getElementsByTagName("td");
		for (var i = 0; i < (9 * 18); i++) {
			if (tags[i] != null && tags[i].className.indexOf(" " + nomeClasse) == -1) {
				// emptycells -> 
				tags[i].style.visibility = "hidden";
				//tags[i].innerHTML = "&nbsp;";
			}
		}
    }			
	
}

adicionarEvento(window, "load", carregarGrupo);
