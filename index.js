$(document).ready(function(){
	console.log("Index.js loaded!");
	const albumImages = ["teapots1.jpg", "teapots2.jpg", "teapots3.jpg", "teapots4.jpg"];

	$("#imageAlbum").html(`<img src="${albumImages[0]}" class="img-fluid w-50">`);

	const slideshow = function(arr) {
		let i = 1;
		setInterval(() =>{
			$("#imageAlbum").html(`<img src="${arr[i]}" class="img-fluid">`);
			i = (i+1)%arr.length;
		}, 5000);
		// console.log("slideshow function running");
	}

	slideshow(albumImages);


	// $("#imageAlbum").html(`<img src="${albumImages[0]}" class="img-fluid w-50">`);
});