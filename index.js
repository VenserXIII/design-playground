$(document).ready(() => {
  $("#Header > img").on("mouseover", ({ target }) => {
    $(target).addClass("anim")
    $(target).one("animationiteration webkitAnimationIteration", () => {
      $(target).removeClass("anim")
    })
  })
  $("#Content").fadeIn(1000);
})

// Hide Header on scroll down
const Content = document.querySelector("#Content");
const Header = document.querySelector("#Header");
const delta = 1;
let didScroll;
let lastScrollTop = 0;
// Scroll validation
Content.onscroll = () => {
  didScroll = true;
}
setInterval(() => {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 0);
function hasScrolled() {
  const st = Content.scrollTop;
  // Only validate if scroll > delta
  if (Math.abs(lastScrollTop - st) <= delta) {
    return;
  }
  // If scroll beyond Header, add class HeaderSlide
  // This is necessary so you never see what is "behind" the Header.
  if (st > lastScrollTop && st > Header.offsetHeight) {
    // Scroll Down
    Header.classList.add("HeaderSlide");
  } else {
    // Scroll Up
    if (st + window.innerHeight < Content.scrollHeight) {
      Header.classList.remove("HeaderSlide");
    }
  }
  lastScrollTop = st;
}