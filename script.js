
const hamburger = document.getElementById("tbn")
const modal = document.getElementById('modal');
const close = document.getElementById("close")

hamburger.addEventListener("click", () => {
    modal.style.display = "flex"
    close.style.display = "flex"
    hamburger.style.display = "none"
})

close.addEventListener("click", () => {
    modal.style.display = "none"
    close.style.display = "none"
    hamburger.style.display = "flex"
})