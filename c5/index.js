var body = document.querySelector('body');
var div1 = document.createElement('div');
var div2 = document.createElement('div');

div2.innerText = 'Hello!';
div1.appendChild(div2);

body.appendChild(div1);


var student = [
	{
		ime: 'Pero',
		prezime: 'Perovski'
	},
	{
		ime: 'Janko',
		prezime: 'Jankovski'
	},
	{
		ime: 'Mile',
		prezime: 'Mitevski'
	},
	{
		ime: 'Tome',
		prezime: 'Tomevski'
	},
	{
		ime: 'Mile',
		prezime: 'Mitevski'
	},
	{
		ime: 'Tome',
		prezime: 'Tomevski'
	},
];

var list = document.createElement('ul');

var colorChanger = function(e){
	e.preventDefault();
	this.classList.remove('red');
	this.classList.remove('green');

	switch(e.type){
		case 'auxclick':
		this.classList.add('green');
		break;
		case 'click':
		this.classList.add('red');
		break;
	}

}

student.forEach(function(v, i){
	var item = document.createElement('li');
	item.innerText = v.ime + ' ' + v.prezime;

	item.addEventListener('click', colorChanger);
	item.addEventListener('auxclick', colorChanger);
	item.addEventListener('contextmenu', colorChanger);

	list.appendChild(item);
});

body.appendChild(list);


var input = document.querySelector('.input');
var kopce = document.querySelector('.kopce');

kopce.addEventListener('click', function(){

	var li = document.createElement("li");
	li.innerText = input.value;

	list.appendChild(li);
});





