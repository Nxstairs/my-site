const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

const track = document.querySelector(".carypto-track");
const slides = document.querySelectorAll(".carypto-card");

let index = 0;

setInterval(() => {

  index++;

  track.style.transition = "transform 0.7s ease";
  track.style.transform =
    `translateX(-${index * 100}%)`;

  // ÅŒã‚ÌƒRƒs[‰æ‘œ‚É—ˆ‚½‚ç
  if(index === slides.length - 1){

    setTimeout(() => {

      track.style.transition = "none";

      index = 0;

      track.style.transform =
        `translateX(0%)`;

    }, 700);

  }

}, 3000);