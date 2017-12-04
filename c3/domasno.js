var niza5 = [2, 5, 3, 2, 3, 3, 5, 1, 1, 4, 4, 2, 4, 2, 2, 4];

function sekojTretParenBroj(){
	var pb = 0;
    for (var i = 0; i < niza5.length; i++){
        if (niza5[i] % 2 == 0){
            pb = pb + 1;
            	if (pb == 3) {
	console.log(niza5[i]);
				pb = 0;
            }
        }
    }
}

sekojTretParenBroj();

// 4
// 4
// 4

function zbirNaNeparniBroevi(){
	var zbir = 0;
	for(var i = 0; i < niza5.length; i++){
		if (niza5[i] % 2 == 1) {
		zbir = zbir + niza5[i];
		}
	}
	return zbir;
}

console.log(zbirNaNeparniBroevi());

// 21

function prosek(){
	var p = 0;
	for(var i = 0; i < niza5.length; i++){
		p = p + niza5[i];
		}
		p = p / niza5.length;
	return p;
}

console.log(prosek());


// 47 / 16 = 2.9375