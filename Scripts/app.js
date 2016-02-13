"use strict";

// setup your IIFE (Immediately Invoked Function Expression)
(function () {

    console.log("App Started..."); 
  
  
    //declared a named function way
    /*
    function replaceFirstParagraph() {
        console.log("inside replaceFirstParagraph function");
        var firstParagraph;

        firstParagraph = document.getElementById("firstParagraph");

        firstParagraph.innerHTML = "My New Paragraph Data";
    }
    */
    
    // declare an anonymous function with named alias
    
    var replaceFirstParagraph = function() {
        console.log("inside replaceFirstParagraph anonymous function");
        var firstParagraph;

        firstParagraph = document.getElementById("firstParagraph");

        firstParagraph.innerHTML = "My name is Brittany and I am currently in the Interactive Web Design & Development program at Georgian College. My strength is in design, but I hope to learn and develop my skills in programming. <br>I come from a photography and illustration background which I am sure will be a big asset the styling and designing websites. Being able to see a webpage come together slowley is very rewarding and I hope to be able to build and create websites as a career.";
    };
//     Javascript CSS Styles
document.getElementById("firstParagraph").style.width = "1000px";
document.getElementById("firstParagraph").style.textAlign = "center";
document.getElementById("firstParagraph").style.fontSize = "18px";
document.getElementById("firstParagraph").style.padding = "20px";
document.getElementById("firstParagraph").style.paddingLeft = "100px";
document.getElementById("firstParagraph").style.color = "black";

   
    // call the replaceFirstParagraph function
    replaceFirstParagraph();


})();