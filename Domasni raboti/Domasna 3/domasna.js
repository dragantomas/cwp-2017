// document.getElementById("googlelink").addEventListener("click", redirectToYahoo);
// document.getElementById("googlelink").addEventListener("auxclick", redirectToYahooNewTab);
// document.getElementById("googlelink").addEventListener("contextmenu", rightClick);


// function redirectToYahoo() {
//  	window.location.href = "https://www.yahoo.com";
// }

// function redirectToYahooNewTab() {
//  	window.open('https://www.yahoo.com', '_blank');
// }

// function rightClick() {
// 	event.preventDefault();
// };

var link = document.getElementById('googlelink');

link.addEventListener('click', function(e){
 window.location.href = "https://www.yahoo.com";
});

link.addEventListener("auxclick",function(e){
   if(e.button !==2){
      window.open('https://www.yahoo.com', '_blank');
   }else{
     e.preventDefault()
   } 
});

link.addEventListener('contextmenu', function(e){
});

function presmetaj(){
	var prvBroj = document.LiveCalculator.Broj1.value;
	var vtorBroj = document.LiveCalculator.Broj2.value;
	var rezultat = parseFloat(prvBroj) + parseFloat(vtorBroj);
	document.LiveCalculator.Rezultat.value = rezultat;
}