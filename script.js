class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);

mobileNavbar.init();

$J(function () {
  var $DiscountCountdown = $J("#564166_countdown_0");
  if ($DiscountCountdown) InitDailyDealTimer($DiscountCountdown, 1671732000);
});

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