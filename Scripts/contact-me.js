"use strict";
(function () {
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
})();