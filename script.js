const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};


// const stars = document.querySelectorAll(".star");

// stars.forEach((star, clickedStar) => {
//   star.onclick = () => {
//     stars.forEach((currentStar, currentIndex) => {
//       if (currentIndex <= clickedStar) {
//         currentStar.classList.add("ranked");
//       } else if (currentIndex >= clickedStar) {
//         currentStar.classList.remove("ranked");
//       }
//     });
//   };
// });