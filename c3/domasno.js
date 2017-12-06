var niza5 = [2, 5, 3, 2, 3, 3, 5, 1, 1, 4, 4, 2, 4, 2, 2, 4];
var niza1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

function sekojTretParenBroj(array){
	var pb = 0;
    for (var i = 0; i < array.length; i++){
        if (array[i] % 2 == 0){
            pb = pb + 1;
            	if (pb == 3) {
	console.log(array[i]);
				pb = 0;
            }
        }
    }
}

sekojTretParenBroj(niza5);
sekojTretParenBroj(niza1);

// 4
// 4
// 4

function zbirNaNeparniBroevi(array){
	var zbir = 0;
	for(var i = 0; i < array.length; i++){
		if (array[i] % 2 == 1) {
		zbir = zbir + array[i];
		}
	}
	console.log(zbir);
		return zbir;
}

zbirNaNeparniBroevi(niza5);
zbirNaNeparniBroevi(niza1);

// 21

function prosek(array){
	var p = 0;
	for(var i = 0; i <array.length; i++){
		p = p + array[i];
		}
		p = p / array.length;
	console.log(p);
		return p;
}

prosek(niza5);
prosek(niza1);


// 47 / 16 = 2.9375