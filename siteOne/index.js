function gestoreScompare () {
   try {
	  nodoNascosta.style.display = 'none';
	  if (typeof(nodoLogo) != 'undefined' && nodoLogo != null) {
		nodoLogo.style.display = "block";
	  }
   } catch ( e ) {
      alert ("gestoreScompare" + e);
   }
}
function gestoreAppare () {
   try {
	  nodoNascosta.style.display = "block";
	  if (typeof(nodoLogo) != 'undefined' && nodoLogo != null) {
			nodoLogo.style.display = "none";
			if (typeof(nodoApri) != 'undefined' && nodoApri != null) {
				nodoApri.style.display = "block";
			}
	  }
	  window.scrollTo(2,4000);
   } catch ( e ) {
      alert ("gestoreAppare" + e);
   }
}

function gestoreApri () {
		try {
			menu.style.width = "280px";
		} catch ( e ) {
			alert("gestoreApri "+ e);
		}
}

function gestoreChiudi () {
		try {
			menu.style.width = "0";

		} catch ( e ) {
			alert("gestoreChiudi "+ e);
		}
}

var nodoMenu;
var nodoApri;
var nodoChiudi;
var nodoChiusura;
var nodoNascosta;
var nodoLogo;

function gestoreLoad () {
   try {
	  nodoNascosta = document.getElementById("nascosta");
	  nodoChiusura = document.getElementById("chiusura");
	  nodoChiusura.onclick = gestoreScompare;
	  nodoLogo = document.getElementById("contenitorelogo");
	  nodoLogo.onclick = gestoreAppare;
	  
	  nodoMenu = document.getElementById("menu");
      nodoApri = document.getElementById("apri");
	  if (typeof(nodoApri) != 'undefined' && nodoApri != null) {
		nodoApri.onclick = gestoreApri;
		nodoChiudi = document.getElementById("chiudi");
		nodoChiudi.onclick = gestoreChiudi;
	  }
   } catch ( e ) {
      alert("gestoreLoad "+ e);
   }
}
window.onload = gestoreLoad;
