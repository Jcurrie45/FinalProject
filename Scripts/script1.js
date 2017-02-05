var image = document.getElementById("image");
 
var imageArray = ["Images/a.jpg", "Images/b.jpg", "Images/c.jpg", "Images/d.jpg", "Images/e.jpg"];
 
var imageIndex = 0;
 
function changeImage() {
   image.setAttribute("src",imageArray[imageIndex]);
   imageIndex++;
   if (imageIndex >= imageArray.length) {
      imageIndex = 0;
   }
}
 
window.onload = function() {
   setInterval(changeImage,2000);
}