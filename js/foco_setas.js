/**
 * @author lucas
 */

var CONST_X = 9;
var CONST_Y = 18;

var x = 0;
var y = 0;

var funcaoInversa;
/*
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

*/

// [IE] Verifica os parametros para resgatar as posições antigas
// No IE ele executa o script novamente quando a pagina 
function verificaPosicaoXY(){
	
}

function keyPress(e){    			
	var chave = (window.event) ? event.keyCode : e.keyCode;
	
	if(chave == 40){
		setaBaixo();
		funcaoInversa = setaCima;
	}else if(chave == 38){
		setaCima();		
		funcaoInversa = setaBaixo;
	}else if(chave == 37){
		setaEsquerda();
		funcaoInversa = setaDireita;
	}else if(chave == 39){
		setaDireita();
		funcaoInversa = setaEsquerda;
	}	
	
	atualizaFoco();
}


function atualizaFoco(){
	var tabela = document.getElementById("tabela_periodica");
	var linha = tabela.rows[x];
	var elemento = linha.cells[y]; 
	
	var tag = elemento.getElementsByTagName("a");
	if (tag[0]) {
		tag[0].focus();
	}else{
		funcaoInversa();
		atualizaFoco();
	}	
}

function setaCima(){
	if(x > 0){
		x -= 1;
	}
}

function setaBaixo(){
	if(x <= CONST_X){
		x += 1;
	}
}

function setaDireita(){
	if(y < CONST_Y - 1){
		y += 1;
	}
}

function setaEsquerda(){
	if(y > 0){
		y -= 1;
	}
}

// IE 6, Firefox 2, Opera
document.onkeydown = keyPress;

//adicionarEvento(window, "keyup", keyPress);
//adicionarEvento(window ,"load", function(){alert("inicio");});
