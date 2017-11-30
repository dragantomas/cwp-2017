// function name(ime);
// if(ime % 2 == 0){
//	console.log("Ubavo ime");
//	} else {
//		console.log("Loso ime");
//	}




function name(ime){
	switch(ime.length % 2){
		case 0:
		console.log(ime + ' e Ubavo ime');
		break;
		case 1:
		console.log('Neubavo ime');
		break;
	}
}

name('Natalija');


var niza = ['a', 'b', 'c', 'd', 'e'];

console.log(niza);

console.log(niza[2]);

// niza[20] = 'z';

console.log(niza);

console.log(niza.length);

niza.push('z');

console.log(niza.length);

console.log(niza);	

var niza2 = ['bojan', 2222332, true, 'test'];
console.log(niza2);

var niza3 = [
	[1, 2, 3, 4, 5],
	[7, 8, 9, 10, 11],
	['a', 'b', 'c', 'd']
];

console.log(niza3[0][1]);

var o1 = {
	ime: 'Dragan',
	prezime: 'Tomovski',
	oceni: [1, 2, 3, 4, 5, 6],
	profesori: [
		{
			ime: 'Pero',
			prezime: 'Petrovski',
		},
		{
			ime: 'Stanko',
			prezime: 'Stankovski'
		}
	]
};

console.log(o1['ime']);
console.log(o1['prezime']);

console.log(o1.ime);
console.log(o1.prezime);
console.log(o1.oceni[3]);

console.log(o1.profesori[1].prezime);

for(var i=0; i < 10; i = i + 1) { // start, end, step, i = iterator
	console.log('Hello!'); 
	console.log(i); 
}

var niza4 = [20, 30, 40, 50, 60, 70];

// console.log(niza4[0]);
// console.log(niza4[1]);
// console.log(niza4[2]);
// console.log(niza4[3]);
// console.log(niza4[4]);

for(var i = 0; i < 5; i++) {
	console.log(niza4[i]);
}


var niza4 = [2, 2, 3, 5, 4, 5, 6, 7, 8, 9, 12];

// console.log(niza4[0]);
// console.log(niza4[1]);
// console.log(niza4[2]);
// console.log(niza4[3]);
// console.log(niza4[4]);

// for(var i = 0; i < niza4.length; i++) {

for(var i = 0; i < niza4.length; i++) {
	if(niza4[i] % 2 == 0){ 
	console.log(niza4[i]);
	}
}




