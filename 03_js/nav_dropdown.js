$(".nav_left-dropdown-btn").hover(
  function () {
    $(".nav_left-dropdown_items").animate(
      {
        opacity: "1",
      },
      200
    );
  },
  function () {
    setTimeout(function () {
      $(".nav_left-dropdown_items").animate(
        {
          opacity: "0",
        },
        200
      );
    }, 6000);
  }
);

/* SMALL */
const sem_button = document.querySelector(".nav_left-dropdown-btn");
const small_nav = document.querySelector(".small_nav");
const closeSmall = document.querySelector(".click");

sem_button.addEventListener("click", (e) => {
  small_nav.style.marginLeft = "2rem";
});
closeSmall.addEventListener("click", (e) => {
  small_nav.style.marginLeft = "";
});

/* MOBILE */
$(document).ready(function () {
  $("#mobile").click(function () {
    console.log("click");
    $(".mobile_nav").toggle();

    $(".fa-caret-down, .fa-caret-up").toggleClass("fa-caret-down fa-caret-up");
  });
});
