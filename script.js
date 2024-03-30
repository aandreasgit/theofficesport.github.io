// Get the rolling text element
var rollingText = document.getElementById("rollingText");

// Set up the animation loop
setInterval(function() {
  // Move the text to the left edge of the screen
  rollingText.style.transform = "translateX(-100%)";

  // Wait for 1 second
  setTimeout(function() {
    // Move the text back to the right edge of the screen
    rollingText.style.transform = "translateX(100%)";
  }, 1000);
}, 1000);