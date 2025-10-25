// scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// background color
const bgOption = document.getElementById("bg-option");
bgOption.addEventListener("change", function (){
    document.body.style.backgroundColor = this.value;

    // ini agar dark mode otomatis mati saat ganti bg
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        darkModeBtn.textContent = "Dark Mode";
    }
});

// dark mode
const darkModeBtn = document.getElementById("darkmode");
darkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "Light Mode";

    // ini agar change bg otomatis mati saat dark mode diaktifkan
    document.body.style.backgroundColor = "";
    bgOption.value = "";
  } else {
    darkModeBtn.textContent = "Dark Mode";
  }
});