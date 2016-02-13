 "use strict";
(function () {

    console.log("App Started..."); 
    var replaceGravityPoster = function() {
        console.log("inside replaceGravityPoster anonymous function");
        var gravityPoster;

        gravityPoster = document.getElementById("gravityPoster");

        gravityPoster.innerHTML = "This was one of my first assignments, we had to choose a movie poster and recreate it using html and css. The main goal was to practice marking up the text with different types of formatting. Made with just HTML and CSS";
    };
    
       var replaceVoxAmp = function() {
        console.log("inside replaceVoxAmp anonymous function");
        var voxAmp;

        voxAmp = document.getElementById("voxAmp");

       voxAmp.innerHTML = "This was a final project for semester one. We had to create a five page micro site on an item that was created before the internet. This was alot of fun to create from scratch, and I think it is a very visually interesting site.";
    };
    
       var replaceFavoriteSong = function() {
        console.log("inside replaceFavoriteSong anonymous function");
        var favoriteSong;

        favoriteSong = document.getElementById("favoriteSong");

        favoriteSong.innerHTML = "One of my first assignments using PHP and SQL to create a input form and database to collect the information input in the form. It was a very fun project, and made a huge impact on my understanding of the basics of using and writing in PHP.";
    };
// Call the replaceGravityPoster function
    replaceGravityPoster();
    replaceVoxAmp();
    replaceFavoriteSong();
    
})();