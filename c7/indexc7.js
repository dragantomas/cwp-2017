// var timedate = new Date();

// console.log(timedate);

var timenode = document.querySelector('.time');

setInterval(function(){

	var timedate = new Date();
	
	var hours = timedate.getHours() < 10 ? '0' + timedate.getHours() : timedate.getHours();
	var minutes = timedate.getMinutes() < 10 ? '0' + timedate.getMinutes() : timedate.getMinutes();
	var seconds = timedate.getSeconds() < 10 ? '0' + timedate.getSeconds() : timedate.getSeconds();

	// var output = timedate.getHours() + ':' + timedate.getMinutes() + ':' + timedate.getSeconds();

	// timenode.innerText = timedate;
	// timenode.innerText = output;

	timenode.innerText = hours + ':' + minutes + ':' + seconds;

	// console.log(timedate);



}, 1000);

// var vreme = new Date(2017, 12, 31);
// var den = vreme.getDate();

// var vremeSega = Date();
// var denSega = vremeSega.getDate();

// console.log(den - denSega);


// var mesec = vreme.getMonth();

// console.log(vreme);

// console.log(mesec);

// console.log(den);


// var sega = Date();

// console.log(sega);


var novagodina = new Date(2018, 0, 1, 0, 0, 0, 0);

var momentalno = new Date();

console.log(novagodina);
console.log(momentalno.getTime());

var razlika = novagodina.getTime() - momentalno.getTime();

var denovi = (razlika - (razlika % (1000 * 60 * 60 * 24)));

var saati = (razlika - (razlika % (1000 * 60 * 60)));

console.log(denovi);
console.log(saati);







