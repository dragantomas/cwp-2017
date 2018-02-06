var ul = document.querySelector(".container");
var body = document.querySelector("body");

fetch('https://jsonplaceholder.typicode.com/posts')
	.then(function(odgovor) {
		return odgovor.json();
			}).then(function(podatoci){
				console.log(podatoci)

			podatoci.forEach(function(v){

				var li = document.createElement('li');
				var h4 = document.createElement('h4');
				var p = document.createElement('p');
				var div = document.createElement('div');

				h4.innerText = v.title;
				p.innerText = v.body;
				div.innerText = v.title;

				li.appendChild(h4);
				li.appendChild(p);
				ul.appendChild(li);
				body.appendChild(ul);
	})
});
