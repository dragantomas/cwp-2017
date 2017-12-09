document.getElementById("googlelink").addEventListener("click", redirectToYahoo);
document.getElementById("googlelink").addEventListener("auxclick", redirectToYahooNewTab);
document.getElementById("googlelink").addEventListener("oncontextmenu", rightClick);

function redirectToYahoo() {
 	window.location.href = "https://www.yahoo.com";
}


function redirectToYahooNewTab() {
 	window.open('https://www.yahoo.com', '_blank');
}

function rightClick() {};

function presmetaj(){
	var prvBroj = document.LiveCalculator.Broj1.value;
	var vtorBroj = document.LiveCalculator.Broj2.value;
	var rezultat = parseFloat(prvBroj) + parseFloat(vtorBroj);
	document.LiveCalculator.Rezultat.value = rezultat;
}