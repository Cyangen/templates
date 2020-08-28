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