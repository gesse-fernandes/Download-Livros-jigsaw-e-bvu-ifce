function pegaUrlPagEsquerda(){
	return document.getElementsByTagName("iframe")[1].src
}

function pegaUrlPagDireita(){
	if(document.getElementById('easyXDM_default602_provider').length>1)
		return document.getElementById('easyXDM_default602_provider')[1].src
}

function passarAFolha(){
	document.getElementsByClassName("navigation-button no-button horizontal-button next-button")[0].click()
}

function comandoWgetEConvertPdf() {
	var listaDeUrlEmString = "" 
	for (var i = 0; i < arrayUrlsImgs.length; i++) {
		if(arrayUrlsImgs[i]!=undefined)
		listaDeUrlEmString+='"'+arrayUrlsImgs[i]+'" ';
	}
	var comandoWget = "wget "+listaDeUrlEmString 
	var comandoConvert = "convert *.jpg.s livro.pdf"
	console.log(comandoWget+" && "+comandoConvert)
}

var arrayUrlsImgs=new Array();
var setUrlsImgs=new Set();

function urlsImgs(qtdPag,i=0,naopassou=0){
	var pagEsquerda= pegaUrlPagEsquerda()
	//var pagDireita= pegaUrlPagDireita()
	if(!setUrlsImgs.has(pagEsquerda)){
		setUrlsImgs.add(pagEsquerda)
		arrayUrlsImgs.push(pagEsquerda)
	//	setUrlsImgs.add(pagDireita)
		//arrayUrlsImgs.push(pagDireita)
		passarAFolha()
		i+=1
	}else{
		naopassou++;
	}
	if(naopassou>4){
		passarAFolha()
		naopassou=0
	}
	console.log("quantidade de paginas: "+i+"/"+qtdPag)
	if(i<qtdPag)
		setTimeout(function(){urlsImgs(qtdPag,i,naopassou)},1000 )
}