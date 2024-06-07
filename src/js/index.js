// Burger
const screenWidth = window.screen.width;
if (screenWidth <= 1023) {
  const body = document.body;
  const core = document.querySelector(".core");
  const burger = document.querySelector(".burger");
  const close = document.querySelector(".close");
  const burgerMenu = document.querySelector(".burger__menu");
  burger.addEventListener("click", () => {
    core.classList.remove("hide");
    burgerMenu.classList.remove("hide");
    body.classList.add("no-scroll");
  });
  core.addEventListener("click", (el) => {
    core.classList.add("hide");
    burgerMenu.classList.add("hide");
    body.classList.remove("no-scroll");
  });
  close.addEventListener("click", (el) => {
    core.classList.add("hide");
    burgerMenu.classList.add("hide");
    body.classList.remove("no-scroll");
  });
}
// Burger

// Функция для изменения видимости пароля
const visibButton = document.querySelector(".visibility-button");
visibButton.addEventListener("click", () => {
  const i = document.getElementById("inputPass");
  if (i.type === "password") {
    i.type = "text";
  } else {
    i.type = "password";
  }
});
