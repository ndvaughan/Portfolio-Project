//PacMen Image Automation
var imageElement = document.getElementById("pacmenimage");
var imageIndex = 1;

setInterval(function() {
  imageIndex = (imageIndex === 1) ? 2 : 1;  // Toggle between 1 and 2
  imageElement.src = "PacMan" + imageIndex + ".png";
}, 1000);  // Change image every 1 seconds

//Eyes Image Automation
var imageElement1 = document.getElementById("eyeimage");
var imageIndex1 = 1;

setInterval(function() {
  imageIndex1 = (imageIndex1 === 1) ? 2 : 1;  // Toggle between 1 and 2
  imageElement1.src = "eyes" + imageIndex1 + ".png";
}, 1000);  // Change image every 1 seconds

//Bus Image Automation
var imageElement2 = document.getElementById("busimage");
var imageIndex2 = 1;

setInterval(function() {
  imageIndex2 = (imageIndex2 === 1) ? 2 : 1;  // Toggle between 1 and 2
  imageElement2.src = "bus" + imageIndex2 + ".png";
}, 1000);  // Change image every 1 seconds