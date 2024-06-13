// Burger
const screenWidth = window.screen.width;
if (screenWidth <= 1023) {
  const body = document.body;
  const burger = document.querySelector(".burger");
  const close = document.querySelector(".close");
  const burgerMenu = document.querySelector(".burger__menu");
  burger.addEventListener("click", () => {
    burgerMenu.classList.remove("hide");
    body.classList.add("no-scroll");
  });
  close.addEventListener("click", (el) => {
    burgerMenu.classList.add("hide");
    body.classList.remove("no-scroll");
  });
}
// Burger

// tabs
function TabsManager(el) {
  this.tabsContainers = document.querySelectorAll(el);
  this.init();
}

TabsManager.prototype.init = function () {
  var self = this;

  document.body.addEventListener("click", function (event) {
    var target = event.target;

    while (target !== document.body) {
      if (target.matches(".tabs-tags__tag")) {
        self.handleTabClick(target);
        return;
      }

      target = target.parentNode;
    }
  });

  self.tabsContainers.forEach(function (tabsContainer) {
    if (tabsContainer) {
      var contentTexts = tabsContainer.querySelectorAll(".tabs-content__text");
      contentTexts.forEach(function (text, index) {
        if (index !== 0) {
          text.style.display = "none";
        }
      });
      tabsContainer.querySelector(".tabs-tags__tag").classList.add("active");
    }
  });
};

TabsManager.prototype.handleTabClick = function (clickedTab) {
  var self = this;
  var tabsContainer = clickedTab.closest(".tabs");

  if (tabsContainer) {
    var contentTexts = tabsContainer.querySelectorAll(".tabs-content__text");
    var tags = tabsContainer.querySelectorAll(".tabs-tags__tag");
    var index = Array.from(tags).indexOf(clickedTab);
    contentTexts.forEach(function (text) {
      text.style.display = "none";
    });
    contentTexts[index].style.display = "block";
    tags.forEach(function (t) {
      t.classList.remove("active");
    });
    clickedTab.classList.add("active");
  }
};

// Инициализация объекта TabsManager
var tabsManager = new TabsManager(".tabs");

// tabs

// Функция для изменения видимости пароля
const visibButton = document.querySelector(".visibility-button");
if (visibButton) {
  visibButton.addEventListener("click", () => {
    const i = document.getElementById("inputPass");
    if (i.type === "password") {
      i.type = "text";
    } else {
      i.type = "password";
    }
  });
}

// modals
document.addEventListener(
  "click",
  function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (
      target.hasAttribute("data-toggle") &&
      target.getAttribute("data-toggle") == "modal"
    ) {
      if (target.hasAttribute("data-target")) {
        var m_ID = target.getAttribute("data-target");
        var getDemosBtn = document
          .querySelector(`#${m_ID}`)
          .querySelector("#get-demos");
        var backBtn = document
          .querySelector(`#${m_ID}`)
          .querySelector("#back-button");
        document.getElementById(m_ID).classList.add("open");
        document.getElementsByTagName("body")[0].classList.add("no-scroll");
        if (getDemosBtn) {
          getDemosBtn.addEventListener("click", () => {
            getDemosBtn.closest("#modal-content").classList.add("hide");
            getDemosBtn
              .closest("#modal-content")
              .nextElementSibling.classList.add("modal-form-show");
          });
          backBtn.addEventListener("click", (e) => {
            getDemosBtn.closest("#modal-content").classList.remove("hide");
            getDemosBtn
              .closest("#modal-content")
              .nextElementSibling.classList.remove("modal-form-show");
          });
        }
      }
    }

    // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
    if (
      (target.hasAttribute("data-dismiss") &&
        target.getAttribute("data-dismiss") == "modal") ||
      target.classList.contains("modal")
    ) {
      var modal = document.querySelector('[class="modal open"]');
      modal.classList.remove("open");
      document.getElementsByTagName("body")[0].classList.remove("no-scroll");
    }
  },
  false
);
// modals

$(".tabs-wrapper-big").each(function () {
  let ths = $(this);
  ths.find(".tab-item-big").not(":first").hide();
  ths
    .find(".tab-big")
    .click(function () {
      ths
        .find(".tab-big")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
      ths.find(".tab-item-big").hide().eq($(this).index()).fadeIn();
    })
    .eq(0)
    .addClass("active");
});

$(".result").each(function () {
  let ths = $(this);
  ths.find(".result__content-item").not(":first").hide();
  ths
    .find(".result__buttons-item")
    .click(function () {
      ths
        .find(".result__buttons-item")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
      ths.find(".result__content-item").hide().eq($(this).index()).fadeIn();
    })
    .eq(0)
    .addClass("active");
});
