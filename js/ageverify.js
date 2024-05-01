document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("header").classList.add("blur")
  })

let overAge = function () {
    document.querySelector(".ageverify").classList.toggle("hidden"); 
    document.querySelector("header").classList.remove("blur")

}
  underAge = function () {
    document.querySelector(".ageverify").classList.toggle("under");
  }
  goBack = function () {
      window.history.back();
  }