"use strict";

var index = 0;

function initPage() {
  // Get array containing all the pages
  var animation = document.querySelectorAll(".page");

  for (var i = 0; i < animation.length; i++) {
    // Remove all the delays from all the pages
    animation[i].style.animationDelay = "0s";

    // Set all the pages to have the onclick function
    animation[i].setAttribute("onclick", "flipPage(this)");

    // Add an event listener to change the z-index of each page after the current pages finishes it's animation
    animation[i].addEventListener("animationend", updateZ);

    console.log("Animated JS");
  }
}

function updateZ() {
  var pages = document.getElementsByClassName("page");

  // Use the index to update the current pages zIndex value to 0 which will make it clickable by the mouse
  pages[index].style.zIndex = "0";
  console.log("Inside updateZ function");
}

function flipPage(element) {
  // Add the 'pageAnimation' class to the clicked page so that the external CSS file can animate it
  element.classList.add("pageAnimation");

  // Ignore: For troubleshooting
  console.log(element.classList + "Clicked");

  // Increament the index so that the index now represents the current page that the book is on.
  // Remember that the 'flipPage()' function is happening before the 'updateZ()' function
  index++;
  console.log(index);
}
