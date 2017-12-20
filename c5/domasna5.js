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

var ul = document.createElement('ul');

var li = document.createElement('li');

var img = document.createElement('img');

var closeButton = document.createElement('button');




document.createElement('li').style.display = "block";
document.createElement('img').style.display = "block";
document.createElement('close-button').style.display = "block";

var imagesList = document.createElement('ul');

images.forEach(function(v, i){
	var imgThumb = document.createElement('li');
	var imagesItem = document.createElement('img');
	var closeButton = document.createElement('button');

	imagesList.appendChild(imgThumb);
	imgThumb.appendChild(closeButton);
	imgThumb.appendChild(imagesItem);
	
	closeButton.addEventListener('click', function(){
	//	images.splice(i, 1);
		imagesList.removeChild(imagesList.childNodes[i]);
		console.log(imagesList);
	});

	imagesItem.src=v.image;
	
	imgThumb.innerText = v.title;

	imagesList.appendChild(imgThumb);
	imgThumb.appendChild(closeButton);
	imgThumb.appendChild(imagesItem);
});






body.appendChild(imagesList);


