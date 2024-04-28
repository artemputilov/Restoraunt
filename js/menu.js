document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button__menu").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    } )
})