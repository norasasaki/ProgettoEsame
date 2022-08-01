/**/function cambiaAggiunta (x) {
/**/   indice += x;
       if (indice == 1) {
	      Ancora();
       }
       if (indice == 7) {
	      nodoAggiunta2.removeChild(nodoAggiunta2.lastChild);
       }
/**/   if (indice == numeroAggiunte) {
/**/	  return;
/**/   }
	   var nodoTesto = document.createTextNode(Aggiunte[indice]);
	   nodoAggiunta.replaceChild(nodoTesto, nodoAggiunta.firstChild);
}
function gestoreAppare () {
   try {
	  if (indice < numeroAggiunte) {
/**/     cambiaAggiunta (+1);
	  } else {
		    cambiaAggiunta(0);
	  }
	  permanente.style.display = 'none';
	  chiudi.style.display = "block";
	  nodoAggiunta.style.display = 'block';
   } catch ( e ) {
      alert ("gestoreAppare" + e);
   }
}
function Ancora () {
   var nodoNave = document.createElement("img");
   nodoNave.setAttribute("src", "immagini/spaceship.gif");
   nodoAggiunta2.appendChild(nodoNave);
}
function gestoreScompari () {
   try {
	  indice = 0;
	  permanente.style.display = 'block';
	  chiudi.style.display = "none";
	  nodoAggiunta.style.display = 'none';
   } catch ( e ) {
      alert ("gestoreAppare" + e);
   }
}
var nodoAggiunta2;
var nodoCuore;
var nodoAggiunta;
var nodoChiudi;
var astronave;
var indice;
var numeroAggiunte;
var Aggiunte = [
   "",
   "A causa del suo backgroud famigliare, Jumin non sa molto sul cibo comune ed è interessato agli slang.",
   "Jumin \u00E9 terribile a guidare, questo perchè solitamente si sposta con il suo autista, Driver Kim. ",
   "Jumin ha un alto IQ tanto da far parte della Mensa.",
   "Quando è stressato tende a bere vino, non importa l'ora o il luogo.",
   "Citazione preferita:You must appeal to the profits rather than your intelligence in order to persuade someone. ",
   "Elizabeth the 3rd le fu regalata da V, è probabilmente la cosa a cui tiene di più, tant'\u00E9 che si sente meno stressato se qualcuno la complimenta..",
   "Gli piacciono motivi simmetrici e motivi a strisce"
];
function gestoreLoad () {
   try {
	  nodoAggiunta2 = document.getElementById("aggiunta2");
	  nodoCuore = document.getElementById("cuore");
	  nodoCuore.onclick = gestoreAppare;
	  	  astronave = document.getElementById("aggiunta2");
		astronave.onclick = gestoreAppare;
	  nodoAggiunta = document.getElementById("aggiunta");
	  nodoChiudi = document.getElementById("chiudi");
	  nodoChiudi.onclick = gestoreScompari;
/**/  indice = 0;
/**/  numeroAggiunte = 8;
/**/  cambiaAggiunta(0);
   } catch ( e ) {
        alert("gestoreLoad "+ e);
   }
}
window.onload = gestoreLoad;