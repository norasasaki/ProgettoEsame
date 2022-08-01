/**/function cambiaAggiunta (x) {
/**/   indice += x;
       if (indice == 1) {
	      Ancora();
       }
       if (indice == 7) {
	      nodoAggiunta2.removeChild(nodoAggiunta2.lastChild);
       }
/**/   if (indice == numeroAggiunte) {
/**/      return;
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
   " ",
   "V \u00E9 speso offline per i suoi \"viaggi\", ha promesso di loggare di più da quando c'è MC. ",
   " \u00C9 stato V a dare il nome Elizabeth 3rd al gatto di Jumin.",
   "Citazione preferita:The bud of our love will swell up during the summer wind, and blossom into a beautiful flower next time we meet.",
   "V è diventato fotografo da autodidatta.",
   "Prima di MC, V non ha mai ricevuto un abbraccio, non lasciava sua madre abbracciarlo ed solitamente era lui il \"donatore\".",
   "Quando pensa ha l'abitudine di fumare la pipa.",
   "Nel suo tempo libero gli piace risolvere puzzle, inoltre gli piace il vino (differentemente da Jumin regge bene l'alcool)."
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