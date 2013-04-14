/*
TO-DO: 
- Fix so the images can't exit the screen on the right and bottom side if the user defines a value too high?
- Captions/text for each image that appears on :hover?
*/
var imageModule = (function() {
    
	var imageList = [];
	
	var addImage = function(url, scale, x, y, rotate){
		var image = {
			url: url,
			scale: scale,
			x: x,
			y: y,
			rotate: rotate
		}
		
		imageList.push(image);
	}
	
	var printImage = function(image){	
		return '<img src="'+image.url+'" style="left:'+image.x+'; top:'+image.y+'; transform:rotate('+image.rotate+'deg) scale('+image.scale+');'+ 
		'-webkit-transform:rotate('+image.rotate+'deg) scale('+image.scale+');'+
		'-o-transform:rotate('+image.rotate+'deg) scale('+image.scale+');'+
		'-ms-transform:rotate('+image.rotate+'deg) scale('+image.scale+');'+'"/>';	
	}
	
	var imageInit = function(){
		for(var i = 0; i < imageList.length; i++){
			$(".images").append(printImage(imageList[i]));
			console.log(printImage(imageList[i]));
		}
		$(".images").css("height", $(window).height());
	}
	
   //Public: Returns the public variables
	return {
		addImage: addImage,
		imageInit: imageInit,
	};
}());

//Start the game	
$(document).ready(function(){
	
	/*
		Write it like this:
		imageModule.addImage(
		url, 						[write a normal URL]
		scale, 						[0.1 = 10% of normal size. 2 = 200%. I suggest that you use smaller sizes]
		distance from the left, 	[write either in pixels or percent. Remember to encapsulate in " " or ' ']
		distance from the top, 		[write either in pixels or percent. Remember to encapsulate in " " or ' ']
		rotation in degrees);		[both positive and negative degrees work]
	*/
	imageModule.addImage(
		"http://blog.gettyimages.com/wp-content/uploads/2013/01/Siberian-Tiger-Running-Through-Snow-Tom-Brakefield-Getty-Images-200353826-001.jpg",
		0.2, "90px", "19%", -10);
	imageModule.addImage(
		"http://www.bigpicture.in/wp-content/uploads/2011/01/LandscapePhotographsOfBeautifulRoads4_004.jpg",
		0.15, "20px", "9%", 10);
	imageModule.addImage(
		"http://i.telegraph.co.uk/multimedia/archive/01842/landscape-rainbow_1842437i.jpg",
		0.1, "3px", "17%", 30);
	imageModule.addImage(
		"http://www.hdwallpapersarena.com/wp-content/uploads/2012/05/sunset_landscape.jpg",
		0.1, "100px", "0%", 2);
	imageModule.addImage(
		"http://beauty-places.com/wp-content/uploads/2012/10/landscape-wallpaper-.jpg",
		0.1, "0px", "0px", -40);
		imageModule.addImage(
		"http://digital-photography-school.com/wp-content/uploads/2010/07/Landscape-Composition-66.jpg",
		0.1, "194px", "100px", 30);
	
	//Adds the images to the images-div.
	imageModule.imageInit();
});