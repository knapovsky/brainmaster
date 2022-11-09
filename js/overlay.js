// funkci makeMeVisible predate id divu/prvku stranky, kterou chcete zobrazit
// na popredi
// divy nastevte na width a height 100%, dejte pozadi cerne transparency treba 0.7,
// tim docilite prekryti cele stranky
// samotny div s informacemi bude umisten uvnitr tohoto overlay divu
// zaroven je potreba nastavit vsechny overlay divy do popredi, takze z-index treba 1000

// !pozor...start takto delat nelze...je potreba, aby start div presne prekryval hraci pole
// a po kliknuti na nej se zavola hideAll()

// nevim jeste jak to chcete volat, takze to otestujte a kdyztak mi napiste, kdyz to 
// nebude fungovat tak jak ma


var divs = new Array("survey", "score", "req_send", "req", "login", "start", "overlay");

function makeMeVisible(divId){
	for(var div in divs){
		$("#"+divs[div]).css('display', 'none');	
	}
	
	showOverlay();
	$("#"+divId).css('display', 'block');

}

function hideAll(){
	for(var div in divs){
		$("#"+divs[div]).css('display', 'none');
	}
}

function showOverlay() { 
if (document.getElementById) { // DOM3 = IE5, NS6 
document.getElementById("overlay").style.display = "block"; 
} 
else { 
if (document.layers) { // Netscape 4 
document.overlay.display = "block"; 
} 
else { // IE 4 
document.all.overlay.style.display = "block"; 
} 
} 
}

function log_out_vis(){
	$("#log_out").css('display', 'block');	
}
 
function log_out_invis(){
	$("#log_out").css('display', 'none');	
}

function start_game(){
	$("#start").css('display', 'block');	
}