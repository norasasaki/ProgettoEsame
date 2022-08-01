/**/function cambiaAggiunta (x) {
/**/	 indice += x;
         if (indice == 1) {
	        Ancora();
         }
         if (indice == 7) {
	        nodoAggiunta2.removeChild(nodoAggiunta2.lastChild);
         }
/**/     if (indice == numeroAggiunte) {
/**/		return;
/**/	 }
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
   " ",
   "Il nome di battesimo di Seven è Luciel, come Lucifero, nome dell'angelo prima di cadere intentazione, così da non finire come l'angelo.",
   "Seven è il personaggio che maggiormente rompe la 4 parete, al punto da essere normale per il suo personaggio.",
   "I suoi snack preferiti sono Ph D. Pepper e Honey Buddha Chips.",
   "Oltre ad essere un hacker, Seven è anche un agente segreto e parla 18 lingue.",
   "Citazione preferita:It's not that people have humor. Humor is what moves people.",
   "Vuole sposarsi in una stazione spaziale (cosa a cui fa riferimanto la colonna sonora del gioco).",
   "Seven ha usato per la prima volta un computer all'et\u00E1 di 13 anni."
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