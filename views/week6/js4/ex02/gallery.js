"use strict";
// 1. Using an appropriate HTML event handler attribute, modify gallery.html so that loadRandomImage() is called whenever the page loads. Once you’ve made this change, reload your page in the browser a few times to check that this works as intended.
// 2. In a similar manner, further modify the page so that the featured image is randomized whenever it is clicked.
// 3. Modify the changeImage() function so that whenever the image src is changed, its alt and title attributes are also changed. These values can simply be set to the description property of the appropriate element in the provided imageCollection array.
// 4. Finally, modify the changeImage() function once more so the descriptionText div also displays the selected image’s description.
// Once you've made the changes, preview the page. Click

// An array of JSON data used in this question.
var imageCollection = [	
    { name: "arctic_fox", description: "An Arctic fox." },
    { name: "grazing_wombat", description: "A wombat grazing." },
    { name: "Himalayan_Pika", description: "The Himalayan pika is a mammal too." },
    { name: "lynx", description: "A lynx has pointy ears." },
    { name: "Pallas_Cat", description: "A Pallas cat is also called a manul." },
    { name: "Pallas_Cat2", description: "Pallas cats live at high altitudes and are wild animals." },
    { name: "pika", description: "Pikas occur in certain mountainous regions of the world." },
    { name: "quokka", description: "The quokka is a marsupial that looks like it's always smiling." },
    { name: "RedPanda", description: "The nearest Red pandas are probably in your local zoo." },
    { name: "wombat2", description: "Wombats are found in Australia." },
    { name: "wombats", description: "A wombat family at lunch time." }
];

// index of image selected, between 0 and length of array non-inclusive
var selectedImage = 0;


// This function uses the variable numImage, which is passed in, to access the associated value from the "imageCollection" declared above,
// then sets the featuredImage to this image.
function changeImage(numImage) {

    var featuredImage = document.getElementById("featuredImage");
    var thumbImages = document.getElementsByClassName("thumb-holder") ; 

    featuredImage.src = "../images/" + imageCollection[numImage].name + ".jpg"; // mustn't forget the file extension and the "../images/" folder prefix

    var descDisplay = document.getElementById("descriptionText") ;
    descDisplay.innerText = imageCollection[numImage]["description"] ; 

    for (var i = 0 ; i < thumbImages.length ; i++) {
        
    }

    // leave this line at the end of this function
    selectedImage = numImage; // keep track for next time of what image has been selected

    
}


// This function generates a random number then changes the image to the corresponding one.
function loadRandomImage() {
    // Generate the random index into the array of images:
    // Math.random returns a random decimal point number between 0 and 1
    // We want a *whole* number (int) between 0 inclusive and the number of images in imageCollection exclusive
    // To get a whole number, use Math.floor() to round down.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    var numImage = Math.floor(Math.random() * (imageCollection.length)); // generates a number between 0 and upto but not including 11: [0, 11). 

    // Now we know number of the random image we want to show, so change the featured image using this:
    changeImage(numImage);
}