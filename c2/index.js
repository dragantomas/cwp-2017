var kolicinaBrasno = 0.8;
var beloBrasno = true;
var crnoBrasno = true;

var ucimeJavaSkript = true;
var znaemeJavaSkript = true;

// > pogolemo
// < pomalo
// >= pogolemo ili ednakvo
// <= pomalo ili ednakvo
// == ednakvo
// === apsolutno ednakvo (identicno)
// != neednakvo - razlicno
// !== apsolutno neednakvo

if(kolicinaBrasno > 1){
	console.log('Kje pravime torta! :D');
} else {
	console.log('Prvo kupi brasno, pa posle ke pravime');
}

if(beloBrasno == true){
	console.log('Ke Pravime so belo brasno!');
} else if(crnoBrasno == true){
	console.log('Ke pravime so crno brasno');
} else {
	console.log('Nema da pravime...');
}

if(ucimeJavaSkript == true){
	console.log('Bravo!');
} else if(znaemeJavaSkript==false){
	console.log('Kako ne be!');
} else {
	console.log('Zemi UCI!')
}

// + - / %

console.log(2 + 2);
console.log(2 / 135);
console.log(4 - 12);
console.log(3 * 10);
console.log(19 % 4);

var broj = 216;

if(broj % 2 == 0){
	console.log('Paren!');
} else {
	console.log('Neparen!')
}

var mesec = "Ноември";

if(mesec.length % 2 == 0){
	console.log ('Ubav mesec');
} else { console.log ('Grd mesec') 
}

// && и
// || или

kolicinaBrasno = 1;
var brasno = true;

if (brasno == true && kolicinaBrasno >=1){
	console.log('Ima brasno i pravime torta');
} else {
	console.log('Nema brasno i ne pravime nisto');
}

broj = 12;
if (broj < 5 || broj > 10){
	console.log('brojot e pomal od 5 ili pogolem od 10');
} else {
	console.log('brojot e vo opsegot od 5 do 10 vklucuvajki gi 5 i 10');
}

//true && true = true
//true && false = false
// false && true = false
// false && false = false

// true || true = true
// true || false = true
// false || true = true
// false || false = false

mesec = "Majo"

switch(mesec){
	case 'Januari':
		console.log('Go odbravte Januari');
	break;
	case 'Fevruaru':
		console.log('Go odbravte Fevruari');
	break;
	case 'Mart':
		console.log('Go odbravte Mart');
	break;
	case 'April':
		console.log('Go odbravte April');
	break;
	case 'Maj':
		console.log('Go odbravte Maj');
	break;
	case 'Juni':
		console.log('Go odbravte Juni');
	break;
	case 'Juli':
		console.log('Go odbravte Juli');
	break;
	case 'Avgust':
		console.log('Go odbravte Avgust');
	break;	
	case 'Septemvri':
		console.log('Go odbravte Septemvri');
	break;	
	case 'Oktomvri':
		console.log('Go odbravte Oktomvri');
	break;	
	case 'Noemvri':
		console.log('Go odbravte Noemvri');
	break;	
	case 'Dekemvri':
		console.log('Go odbravte Dekemvri');
	break;		
	default:
	console.log('Ne postoi takov mesec');
	break;
}

mesec = "Avgusto"

switch(mesec){
	case 'Januari':
	case 'Fevruaru':
	case 'Mart':
	case 'Oktomvri':
	case 'Noemvri':
	case 'Dekemvri':
		console.log('Studeni meseci');
	break;		
	case 'April':
	case 'Maj':
	case 'Juni':
	case 'Juli':
	case 'Avgust':
	case 'Septemvri':
		console.log('Topli meseci');
	break;	
	default:
	console.log('Ne postoi takov mesec')
}



function zdravo(ime, prezime){
	console.log('Zdravo ' + ime + ' ' + prezime + '!')
}

zdravo('Bojan', 'Bojanovski');
zdravo('Pero', 'Petrovski');

c2f(18); // celzius vo farenhajt
f2c(120); //farenhajt vo celzius

temp(12, 'c2f'); // x celziusovi vo farenhajt
temp(102, 'f2c'); // x fahrenhajt vo celzius