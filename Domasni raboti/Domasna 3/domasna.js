document.getElementById("googlelink").addEventListener("click", redirectToYahoo);
document.getElementById("googlelink").addEventListener("auxclick", redirectToYahooNewTab);

function redirectToYahoo() {
 	this.href = "https://www.yahoo.com";
}

function redirectToYahooNewTab() {
	this.href = "https://www.yahoo.com", "_blank";
}

function presmetaj(){
	var prvBroj = document.LiveCalculator.Broj1.value;
	var vtorBroj = document.LiveCalculator.Broj2.value;
	var rezultat = parseFloat(prvBroj) + parseFloat(vtorBroj);
	document.LiveCalculator.Rezultat.value = rezultat;
}