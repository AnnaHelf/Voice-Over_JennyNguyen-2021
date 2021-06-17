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
