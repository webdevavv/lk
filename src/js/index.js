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

// Удаление мед-данных
const medData = document.querySelectorAll("#medic-card-data");
const modalDeleteButton = document.getElementById("delete_modal__button");
const modalDelete = document.getElementById("delete_modal");
if (medData) {
  medData.forEach((el) => {
    const deleteButton = el.querySelector("#delete-button > .delete__button");

    deleteButton.addEventListener("click", () => {
      modalDelete.classList.add("open");
      modalDeleteButton.addEventListener("click", () => {
        el.style.display = "none";
      });
    });
  });
}
// Удаление мед-данных

// Работа с заявками на прием
const reqData = document.querySelectorAll("#request-card-data");
const modalCancelButton = document.getElementById("cancel_modal__button");
const modalCancel = document.getElementById("cancel_modal");
if (reqData) {
  reqData.forEach((el) => {
    const cancelButton = el.querySelector("#cancel");
    const confirmButton = el.querySelector("#confirm");

    cancelButton.addEventListener("click", () => {
      modalCancel.classList.add("open");
      modalCancelButton.addEventListener("click", () => {
        el.style.display = "none";
      });
    });
    confirmButton.addEventListener("click", (button) => {
      el.querySelector(".status_planed").style.display = "none";
      el.querySelector(".status_confirmed").style.display = "block";
      confirmButton.classList.add("hide");
    });
  });
}
// Работа с заявками на прием

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

//get input
let input = document.getElementById("search");
//get list of value
let list = document.querySelectorAll(".list li");
//get input
let input2 = document.getElementById("search2");
//get list of value
let list2 = document.querySelectorAll(".list2 li");

//function search on the list.
function search() {
  for (let i = 0; i < list.length; i += 1) {
    //check if the element contains the value of the input
    if (list[i].innerText.toLowerCase().includes(input.value.toLowerCase())) {
      list[i].style.display = "block";
    } else {
      list[i].style.display = "none";
    }
  }
}

//to the change run search.
input.addEventListener("input", search);
//function search on the list.
function search2() {
  for (let i = 0; i < list2.length; i += 1) {
    //check if the element contains the value of the input
    if (list2[i].innerText.toLowerCase().includes(input2.value.toLowerCase())) {
      list2[i].style.display = "block";
    } else {
      list2[i].style.display = "none";
    }
  }
}

//to the change run search.
input2.addEventListener("input", search2);

// filter
$(document).bind("click", function (e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown")) $(".dropdown ul").hide();
});
function getSelectedValue(id) {
  return $("#" + id)
    .find("a span.value")
    .html();
}

$(".dropdown1 a").on("click", function (event) {
  event.preventDefault();
  $(".dropdown1 ul").slideToggle("fast");
});
$(".dropdown2 a").on("click", function (event) {
  event.preventDefault();
  $(".dropdown2 ul").slideToggle("fast");
});

$('.dropdown1 .mutliSelect input[type="checkbox"]').on("click", function () {
  var title = $(this)
      .closest(".dropdown1 .mutliSelect")
      .find('.dropdown1 input[type="checkbox"]')
      .val(),
    title = $(this).val() + ", ";

  if ($(this).is(":checked")) {
    var html = '<span title="' + title + '">' + title + "</span>";
    $(".dropdown1 .multiSel").append(html);
  } else {
    $('span[title="' + title + '"]').remove();
  }
});

$('.dropdown2 .mutliSelect input[type="checkbox"]').on("click", function () {
  var title = $(this)
      .closest(".dropdown2 .mutliSelect")
      .find('.dropdown2 input[type="checkbox"]')
      .val(),
    title = $(this).val() + ", ";

  if ($(this).is(":checked")) {
    var html = '<span title="' + title + '">' + title + "</span>";
    $(".dropdown2 .multiSel").append(html);
  } else {
    $('span[title="' + title + '"]').remove();
  }
});

const ctx = document.getElementById("myChart");
// Цвет если меньше 28 (ограничение 28 поменять)
const low = (ctx, value) => (ctx.p0.parsed.y < 28 ? value : undefined);
// Цвет если от 28 до 36 (ограничения поменять)
const normal = (ctx, value) =>
  ctx.p0.parsed.y >= 28 && ctx.p0.parsed.y <= 36 ? value : undefined;
// Цвет если больше 36 (ограничение 36 поменять)
const high = (ctx, value) => (ctx.p0.parsed.y > 36 ? value : undefined);

const genericOptions = {
  interaction: {
    intersect: false,
  },
  radius: 0,
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        min: 0,
        max: 50,
        stepSize: 10,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    annotation: {
      annotations: {
        line1: {
          type: "line",
          yMin: 28,
          yMax: 28,
          borderColor: "rgba(0, 170, 160, 1)",
          borderWidth: 2,
          borderDash: [10, 10],
        },
        line2: {
          type: "line",
          yMin: 37,
          yMax: 37,
          borderColor: "rgba(0, 170, 160, 1)",
          borderWidth: 2,
          borderDash: [10, 10],
        },
      },
    },
  },
};

const config = {
  type: "line",
  data: {
    labels: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    datasets: [
      {
        data: [10, 20, 28, 37, 37, 37, 47, 47, 47, 47, 47, 47],
        backgroundColor: (context) => {
          const bgColor = ["rgba(0, 170, 160, 0.75)", "rgba(0, 170, 160, 0.1)"];
          if (!context.chart.chartArea) {
            return;
          }
          const {
            ctx,
            data,
            chartArea: { top, bottom },
          } = context.chart;
          const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
          gradientBg.addColorStop(0, bgColor[0]);
          gradientBg.addColorStop(1, bgColor[1]);
          return gradientBg;
        },
        borderColor: "rgb(0, 170, 160)",
        segment: {
          borderColor: (ctx) =>
            low(ctx, "rgb(242, 153, 74)") ||
            normal(ctx, "rgb(0, 170, 160)") ||
            high(ctx, "rgb(213, 56, 99)"),
        },
        spanGaps: true,
        fill: true,
      },
    ],
  },
  options: genericOptions,
};

new Chart(ctx, config);
