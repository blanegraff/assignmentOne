
"use strict";
(function () {
            console.log("App Started...")
            
        var replaceFirstParagraph = function() {
        console.log("inside replaceFirstParagraph anonymous function");
        var firstParagraph;

        firstParagraph = document.getElementById("firstParagraph");

        firstParagraph.innerHTML = "My name is Brittany Lanegraff and I am currently in the Interactive Web Design & Development program at Georgian College. My strength is in design, but I hope to learn and develop my skills in programming. I come from a photography and illustration background which I am sure will be a great asset to assist me in styling and designing websites. I love the process of putting all the elements together that are required for a fully functional and beautiful website, it is very rewarding and enjoyable. I hope to be able to succeed in having a great career in the web design and development field.";
      
        };
    // call the replaceFirstParagraph function
    replaceFirstParagraph();
    
})();