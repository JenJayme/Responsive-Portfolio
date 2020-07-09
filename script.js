//Key Functions Needed
//starts with full-screen video banner
//on click, show nav bar and divs with project cards
//on hover over project cards, darken and slight animate
var portfolioLink = document.getElementById("portfolio");
var video = document.getElementById("myVideo");
var pauseButton = document.getElementById("pauseBtn");


// function hideVideo() {
//     video.setAttribute("hide");
//     portfolioLink.setAttribute("show");
// }

function pauseVid() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

function startonPauseVid() {
    if (window.matchMedia('(prefers-reduced-motion)').matches) {
        video.removeAttribute("autoplay");
        video.pauseVid();
        pauseButton.innerHTML = "Paused";
    }
}

function setUp() {

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
    });


    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
      });

      // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
      var collapsibleElem = document.querySelector('.collapsible');
      var collapsibleInstance = M.Collapsible.init(collapsibleElem, open);

}


$(document).ready(function () {
    // "use strict";
    // M.AutoInit();
    startonPauseVid();
    setUp();
    $('.tap-target').tapTarget();
});