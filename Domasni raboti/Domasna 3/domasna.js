 function redirectToYahoo() {
  event.preventDefault();
  window.location='https://www.yahoo.com';
}

 function redirectToYahooNewTab() {
  event.preventDefault();
  window.open('https://www.yahoo.com', '_blank');
}

function presmetaj(){
	var prvBroj = document.LiveCalculator.Broj1.value;
	var vtorBroj = document.LiveCalculator.Broj2.value;
	var rezultat = parseFloat(prvBroj) + parseFloat(vtorBroj);
	document.LiveCalculator.Rezultat.value = rezultat;
}