
"use strict";
(function () {

      if (document.getElementById("about") !=null) {
            console.log("About Page");
      } else if (document.getElementById("projects") !=null) {
            console.log("Projects Page");
      } else if (document.getElementById("contact") !=null) {
            console.log("Contact Page");
            // Declare Variables
            var name = document.getElementById("name");
            var email = document.getElementById("email");
            var subject = document.getElementById("subject");
            var message = document.getElementById("message");
            var submitButton = document.getElementById("submitButton");
            submitButton.pre
            
            submitButton.addEventListener("click", function(event){
                  event.precentDefault();
                  console.log("Name: " + name.value);
                  console.log("Email: " + email.value);
                  console.log("Subject: " + subject.value);
                  console.log("Message: " + message.value);
            });
            
        var replaceFirstParagraph = function() {
        console.log("inside replaceFirstParagraph anonymous function");
        var firstParagraph;

        firstParagraph = document.getElementById("firstParagraph");

        firstParagraph.innerHTML = "My name is Brittany Lanegraff and I am currently in the Interactive Web Design & Development program at Georgian College. My strength is in design, but I hope to learn and develop my skills in programming. I come from a photography and illustration background which I am sure will be a great asset to assist me in styling and designing websites. I love the process of putting all the elements together that are required for a fully functional and beautiful website, it is very rewarding and enjoyable. I hope to be able to succeed in having a great career in the web design and development field.";
    };
      }

//     Javascript CSS Styles
document.getElementById("firstParagraph").style.width = "1000px";
document.getElementById("firstParagraph").style.textAlign = "center";
document.getElementById("firstParagraph").style.fontSize = "18px";
document.getElementById("firstParagraph").style.padding = "20px";
document.getElementById("firstParagraph").style.paddingLeft = "100px";
document.getElementById("firstParagraph").style.color = "black";
document.getElementById("firstParagraph").style.letterSpacing = "1px";
document.getElementById("firstParagraph").style.lineHeight = "30px";

    // call the replaceFirstParagraph function
    replaceFirstParagraph();
    
})();