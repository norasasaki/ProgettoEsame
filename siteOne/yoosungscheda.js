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
   "Il videogioco preferito di Yoosung è LOLOL ( League of Loneliness of Life), una parodia del famoso gioco \"League of Legends\" detto anche LOL. ",
   "La stella nera accanto al suo nick è stata aggiunta da Seven",
   "Yoosung legge shojo manga e alle medie scriveva poesie d'amore.",
   "Frequensta la facoltà di veterinaria alla SKY National University.",
   "Citazione preferita: It's not that people have humor. Humor is what moves people.",
   "Yoosung ama i film romantici e odia quelli horror.",
   "Nell'evento precedente a quello della storia ha adottato un gatto, chiamandolo Lisa, trovato da Jumin fuori da casa sua."
 
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