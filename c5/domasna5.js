var images = [
	{
		title: 'Title 1',
		image: 'images/img1.jpeg'
	},
	{
		title: 'Title 2',
		image: 'images/img2.jpg'
	},
	{
		title: 'Title 3',
		image: 'images/img3.jpg'
	},
	{
		title: 'Title 4',
		image: 'images/img4.jpg'
	},
	{
		title: 'Title 5',
		image: 'images/img5.jpg'
	},
	{
		title: 'Title 6',
		image: 'images/img6.jpg'
	},
	{
		title: 'Title 7',
		image: 'images/img7.jpg'
	},
	{
		title: 'Title 8',
		image: 'images/img8.jpg'
	},
	{
		title: 'Title 9',
		image: 'images/img9.jpg'
	},
	{
		title: 'Title 10',
		image: 'images/img10.jpeg'
	},
	{
		title: 'Title 11',
		image: 'images/img11.jpg'
	},
	{
		title: 'Title 12',
		image: 'images/img12.jpg'
	},
];

var body = document.querySelector('body');

var h1 = document.createElement('h1');

var ul = document.createElement('ul');

var li = document.createElement('li');

var img = document.createElement('img');

var closeButton = document.createElement('button');

h1.appendChild(document.createTextNode("Галерија"));

body.appendChild(h1);

var imagesList = document.createElement('ul');

images.forEach(function(v, i){
	var imgThumb = document.createElement('li');
	var imagesItem = document.createElement('img');
	var title = document.createElement("v.title");
		title.innerText = v.title;
	var closeButton = document.createElement('button');
	var fontAwesome = document.createElement('i');
		fontAwesome.setAttribute("class","fa fa-times");
	
	imagesList.appendChild(imgThumb);
	closeButton.appendChild(fontAwesome);
	imgThumb.appendChild(imagesItem);
	imgThumb.appendChild(title);

imgThumb.addEventListener("mouseover",addCloseButton);

function addCloseButton(){
	imgThumb.appendChild(closeButton);
};

imgThumb.addEventListener("mouseleave",removeCloseButton);

function removeCloseButton(){
	imgThumb.removeChild(closeButton);
};

	closeButton.addEventListener('click', function(){
		this.parentNode.remove();
	});

var bigBox = document.createElement('div');
	bigBox.setAttribute("class", "big-box");
var bigImage = document.createElement('img');
var bigBoxImage = document.createElement('big-box-image');
	bigBoxImage.setAttribute("class", "big-box-image");
var closeButtonBig = document.createElement('button');
var bigBoxTitle = document.createElement("v.title");
	bigBoxTitle.innerText = v.title;

imagesItem.addEventListener("click",bringBigBox);

function bringBigBox(){
	imagesList.appendChild(bigBox);
	bigBox.appendChild(closeButton);
	bigBox.appendChild(bigBoxImage);
	bigBoxImage.appendChild(bigImage);
	bigBoxImage.appendChild(bigBoxTitle);
}

imagesItem.src=v.image;
bigImage.src=v.image;
	
body.appendChild(imagesList);

});


