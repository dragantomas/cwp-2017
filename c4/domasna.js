//document.getElementById("googlelink").addEventListener("click", redirectToYahoo);
//document.getElementById("googlelink").addEventListener("auxclick", redirectToYahooNewTab);

//function redirectToYahoo(e) {
//  e.preventDefault();
  // this.href = "https://www.yahoo.com";
//  window.location = "https://www.yahoo.com";
// }

// function redirectToYahooNewTab() {
//  this.href = "https://www.yahoo.com", "_blank";
// }

function presmetaj(){
  var prvBroj = document.LiveCalculator.Broj1.value;
  var vtorBroj = document.LiveCalculator.Broj2.value;
  var rezultat = parseFloat(prvBroj) + parseFloat(vtorBroj);
  document.LiveCalculator.Rezultat.value = rezultat;

   if(rezultat == 1000){
    document.querySelector('.prize').style.display='block';
    }else{
      document.querySelector('.prize').style.display='none';
    }
}

/*

var link = document.querySelector('.googlelink');

var clickHandler = function(e){
  e.preventDefault();
  switch(e.type){
    case 'click':
      window.location = 'https://yahoo.com';
    break;
    case 'auxclick':
      window.open('https://yahoo.com', '_blank');
    break;
  }
}

// link.addEventListener('click', 'clickHandler');
// link.addEventListener('auxclick', 'clickHandler');


/*

function presmetaj(){ 
  var prvBroj = document.LiveCalculator.Broj1.value;
  var vtorBroj = document.LiveCalculator.Broj2.value;
  var rezultat = parseFloat(prvBroj) + parseFloat(vtorBroj);
  document.LiveCalculator.Rezultat.value = rezultat;
  if(rezultat == 1000){
    document.querySelector('.prize').style.display='block';
    }
  

  }

  */

