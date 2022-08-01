//crea segreti e affibia id a segreto
function scriviMessaggio (indice) {
   try {
	  var immagine = segreti[indice].testo
	  var nodoDescrizione = document.createElement("img");
	  nodoMessaggio.replaceChild(nodoDescrizione, nodoMessaggio.lastChild);
	  if (segreti[indice].id == "cuore" && verifica == true) {
		 var immagine2 = "immagini/distorsione2.png";
		 nodoDescrizione.setAttribute("src", immagine2);
	  } else {
	         nodoDescrizione.setAttribute("src", immagine);
	  }
	  nodoDescrizione.setAttribute("id", "aggiunta");
   } catch ( e ) {
      alert ("scriviMessaggio" + e);
   }
}
//al click nasconde permanente e mostra segreto in base ad id (se minteye cambia immagine base)
function gestoreClickArea () {
   try {
	  nodoPermanente.style.display = "none";
	  nodoMessaggio.setAttribute("style", "display : display");
	  nodoChiusura.setAttribute("style", "display : display");
	  for (var i = 0; i < segreti.length; i++) {
          if (segreti[i].id == this.getAttribute("id")) {
             scriviMessaggio(i);
	         if (segreti[i].id == "minteye") {
		        var distorto = "immagini/rikaafter.jpg";
		        nodoRika.setAttribute("src", distorto);
				verifica = true;
	         }
	      }
	  }
   } catch ( e ) {
      alert ("gestoreClickArea" + e);
   }
}
//mostra descrizioni e img iniziale e nasconde messaggi e X
function gestoreChiudi () {
   nodoPermanente.setAttribute("style", "display : display");
   nodoMessaggio.setAttribute("style", "display : none");
   nodoChiusura.setAttribute("style", "display : none");
   var normale = "immagini/rikafoto.png";
   nodoRika.setAttribute("src", normale);
   verifica = false;
}
//ridimensione immagine e posizioni mappa in base a dimensione pagina
/**/function gestoreResize () {
/**/ try {
/**/	var attualeDimensioneFoto = nodoRika.width;
/**/	var ratio = attualeDimensioneFoto / dimensioneFoto;
/**/	for (var i = 0; i < nodiArea.length; i++) {
/**/		for (var j = 0; j < coordinateAree[i].length; j++) {
/**/			coordinateAree[i][j] *= ratio;
/**/		}
/**/	    nodiArea[i].coords = coordinateAree[i].join(',');
/**/	}
/**/	dimensioneFoto = attualeDimensioneFoto;
/**/ } catch ( e ) {
/**/    alert("gestoreResize" + e);
/**/ }
/**/}

const LARGHEZZZA_FOTO = 1500;
var segreti=[];
var nodoInfos;
var nodoChiusura;
var nodoMessaggio;
var nodiArea;
var nodoRika;
var nodoPermanente;
var coordinateAree;
var dimensioneFoto;
var verifica;

function gestoreLoad () {
   try {
	   verifica = false;
	  nodoPermanente = document.getElementById("permanente");
	  nodoChiusura = document.getElementById("chiusura");
	  nodoChiusura.onclick = gestoreChiudi;
	  nodoInfos = document.getElementById("infos");
      nodoMessaggio = document.getElementById("messaggio");
	  nodiArea = document.getElementsByTagName("area");
	  nodoRika = document.getElementById("rika");
/**/  coordinateAree = [];
/**/  for (var i = 0; i < nodiArea.length; i++) {
/**/      var nodoArea = nodiArea[i];
/**/	  nodoArea.onclick = gestoreClickArea;
/**/	  coordinateAree[i] = nodoArea.coords.split(',');
/**/  }
/**/  dimensioneFoto = LARGHEZZZA_FOTO;
/**/  window.onresize = gestoreResize;
/**/  gestoreResize();
   } catch ( e ) {
      alert ("gestoreLoad " + e);
   }
}

var segreti = [
   {	
      id:"cuore",
      testo: "immagini/mappa1.jpg",
   },
   {
      id:"minteye",
      testo: "immagini/magenta1.png",
   },
   {
      id:"rfa",
	  testo: "immagini/mappa2.jpg"
   }
];		
	   
window.onload = gestoreLoad;