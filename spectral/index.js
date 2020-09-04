function openNav() {
  document.querySelector("body").style.background = "#2e3842";
  document.querySelector(".container").style.opacity = "0.35";
  document.querySelector(".sidenav").classList.add("sidenav-width");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.querySelector("body").style.background = "trasparent";
  document.querySelector(".container").style.opacity = "1";
  document.querySelector(".sidenav").classList.remove("sidenav-width");
}


window.onload = function(event) {
    
};

var scrollObject = {};
window.onscroll = getScrollPosition;

function getScrollPosition(){
    scrollObject = {
       x: window.pageXOffset,
       y: window.pageYOffset
    }
    // If you want to check distance
    if(scrollObject.y > 200) {
      document.querySelector(".header").classList.remove("alt");
      document.querySelector(".header__title").classList.remove("alt-title");
    } else {
      document.querySelector(".header").classList.add("alt");
      document.querySelector(".header__title").classList.add("alt-title");
    }
}