function openNav() {
  document.querySelector("body").style.background = "#2e3842";
  document.querySelector(".container").style.opacity = "0.35";
  document.querySelector(".sidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.querySelector("body").style.background = "trasparent";
  document.querySelector(".container").style.opacity = "1";
  document.querySelector(".sidenav").style.width = "0";
}