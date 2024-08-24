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


let currentIndex = 0;

function moveSlide(step) {
  const container = document.querySelector('.carrossel-container');
  const slides = document.querySelectorAll('.row');
  const totalSlides = slides.length;
  const slideWidth = slides[0].offsetWidth;
  const containerWidth = container.offsetWidth;

  // Atualiza o índice e faz o loop se necessário
  currentIndex = (currentIndex + step + totalSlides) % totalSlides;
  // Calcula a nova posição de transformação
  const offset = -currentIndex * slideWidth;
  
  // Se houver mais slides do que cabem no contêiner, ajuste a posição
  container.style.transform = `translateX(${offset}px)`;
}
