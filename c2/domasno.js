function c2f (c) {
	console.log (Math.round ((c * 1.8 + 32) * 100) / 100 + ' ' + 'Fahrenheit');
}

c2f (-1000);
c2f (-100);
c2f (-50);
c2f (-20);
c2f (-18);
c2f (-10);
c2f (0);
c2f (10);
c2f (15);
c2f (18);
c2f (20);
c2f (50);
c2f (100);
c2f (1000);

console.log ("\n");

function f2c (f) {
	console.log (Math.round ((f - 32) * .5556 * 100) / 100 + ' ' + 'Celsius');
	  ;
}

f2c (-1000);
f2c (-120);
f2c (-100);
f2c (-50);
f2c (-20);
f2c (-10);
f2c (0);
f2c (10);
f2c (20);
f2c (50);
f2c (100);
f2c (120);
f2c (1000);

console.log ("\n");


function temp1 (c) {
	console.log (c + ' Celsius' + ' = ' + Math.round ((c * 1.8 + 32) * 100) / 100 + ' Fahrenheit');
}

temp1 (-1000);
temp1 (-100);
temp1 (-50);
temp1 (-20);
temp1 (-12);
temp1 (-10);
temp1 (0);
temp1 (10);
temp1 (15);
temp1 (12);
temp1 (20);
temp1 (50);
temp1 (100);
temp1 (1000);


console.log ("\n");

function temp2 (f) {
	console.log (f + ' Fahrenheit' + ' = ' + Math.round ((f - 32) * .5556 * 100) / 100 + ' Celsius')
}

temp2 (-1000);
temp2 (-102);
temp2 (-100);
temp2 (-50);
temp2 (-20);
temp2 (-10);
temp2 (0);
temp2 (10);
temp2 (20);
temp2 (50);
temp2 (100);
temp2 (102);
temp2 (1000);

console.log ("\n");


// c2f(18); // celzius vo farenhajt
// f2c(120); //farenhajt vo celzius

// temp(12, 'c2f'); // x celziusovi vo farenhajt
// temp(102, 'f2c'); // x fahrenhajt vo celzius
