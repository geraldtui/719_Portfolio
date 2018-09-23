"use strict";
// 1. Make the first div pink.
// 2. Make the last paragraph element have red text.
// 3. Hide the second div.
// 4. Change the text in the first paragraph to say “Hello World”.
// 5. Add an event handler to the button so that when it’s clicked, all paragraphs become bold.


/* Your answer here */

//1.
var firstDiv = document.getElementsByClassName("text1")[0].style.color = "pink" ; 

//2.
var lastP = document.getElementsByTagName("p") ; 

lastP[lastP.length-1].style.color = "red"; 

//3.
var secondDiv = document.getElementsByTagName("div")[0].style.visibility = "hidden" ; 

//4. 
function doBold() {
    var pList = document.getElementsByTagName("p"); 
    for (var i = 0 ; i < pList.length; i ++) {
        pList[i].style.fontWeight = "bold" ;     
    }
}