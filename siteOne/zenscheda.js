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
   "Zen un \u00E9 appassionato di moto, infatti ne possiede una. Tuttavia a seguito di un incidente non ha guidato per diverso tempo.",
   "Zen \u00E9 un fumatore, la sua marca preferita sono le \"Black Angel\". ",
   "Tra i suoi talenti vi è saper suonare il piano, ballare e danzare",
   "Fatta eccezione per il suo telefono, Zen non \u00E9 molto bravo con le nuove tecnologie. Il suo computer è un vecchio 386 con Hindows98, comprato ad un mercatino dell'usato.",
   "V considera Zen una delle sue muse.",
   "Citazione preferita: You don't see love with your eyes, you see it with your heart.",
   "Zen ha una saluta estremamente buona, quasi anormale, infatti i membri della RFA fanno notare che non si sia mai ammalato."
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