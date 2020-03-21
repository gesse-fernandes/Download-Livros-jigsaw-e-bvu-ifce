     function pegaUrl() {
    return document.getElementsByTagName("iframe")[1].src
}
function passarAFolha(){
    document.getElementsByClassName("navigation-button no-button horizontal-button next-button")[0].click()
}

function comandoConvertPdf(){
     var listaDeUrlEmString = "";
      for (var i = 0; i < arrayUrlsImgs.length; i++) {
        if (arrayUrlsImgs[i] != undefined)
            listaDeUrlEmString +=   arrayUrlsImgs[i] ;
    }
 var comandoWget = "wget"  +  listaDeUrlEmString 
    var comandoConvert = "convert *.jpg.s livro.pdf"
    console.log(comandoWget + " && " + comandoConvert )

console.log(listaDeUrlEmString)
}


var arrayUrlsImgs = new Array();
var setUrlsImgs = new Set();

function getString(qtdPaginas) {
    /**
       4
     */
     var juntar = '"';
    var s1="https://jigsaw.vitalsource.com/books/9788502200180/cfi/"
var s2="!/4/2@100:0.00?jigsaw_brand=integradaminhabiblioteca&dps_on=false&xdm_e=https%3A%2F%2Fintegrada.minhabiblioteca.com.br&xdm_c=default7496&xdm_p=1";
    var r = "";
    
    for (var i = 0; i < qtdPaginas; i++) {
        r+=juntar+s1+i+s2+juntar +"\n";
         var pagEsquerda = r;
         

    }
     if (!setUrlsImgs.has(pagEsquerda)) {
    setUrlsImgs.add(pagEsquerda)
        arrayUrlsImgs.push(pagEsquerda)
   }

    
   //console.log(r);
  console.log(arrayUrlsImgs.push(pagEsquerda));
}
function convertUrlParaHtml(){
    
}