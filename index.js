// NAVIGATION BAR..............

const navMenu = document.querySelector(`#nav-menu`);
const closeMenu = document.querySelector(`#close-menu`);
const nav = document.querySelector(`.nav-list`);

if (navMenu) {
  navMenu.addEventListener(`click`, () => {
    nav.classList.add("active");
  });
}

if (closeMenu) {
  closeMenu.addEventListener(`click`, () => {
    nav.classList.remove("active");
  });
}

// NAVIGATION BAR................

// SINGLE PRODUCT SHOP PAGE........
let bigImage = document.querySelector(`#big-image`);
let smallImage = document.getElementsByClassName(`sm-img`);

// change the main Image

smallImage[0].onclick = function () {
  bigImage.src = smallImage[0].src;
};

smallImage[1].onclick = function () {
  bigImage.src = smallImage[1].src;
};
smallImage[2].onclick = function () {
  bigImage.src = smallImage[2].src;
};
smallImage[3].onclick = function () {
  bigImage.src = smallImage[3].src;
};
