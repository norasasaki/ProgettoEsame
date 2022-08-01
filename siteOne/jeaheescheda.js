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
var indice;
var astronave;
var numeroAggiunte;
var Aggiunte = [
   "",
   "Spesso quando gli altri membri della RFA sono malati è Jeahee a prendersi cura di loro.",
   "Jeahee ama molto il caffe, tanto da farvi alcune ricerche sopra.",
   "Spesso fa delle passeggiate nel parco per alleviare lo stress del lavoro.",
   "Citazione preferita:Your happiness depends on what makes your soul sing.",
   "Jaehee \u00E9 cintura nera di judo che pratica fin dall'infanzia.",
   "Non ha un particolare attaccamento alla sua famiglia, composta solo dai suoi zii.",
   "L'unica cosa che desidera è una vacanza. "
];
function gestoreLoad () {
   try {
	  nodoAggiunta2 = document.getElementById("aggiunta2");
	  nodoCuore = document.getElementById("cuore");
	  astronave = document.getElementById("aggiunta2");
		astronave.onclick = gestoreAppare;
	  nodoCuore.onclick = gestoreAppare;
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