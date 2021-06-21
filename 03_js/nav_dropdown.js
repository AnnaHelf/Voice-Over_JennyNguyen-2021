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

$(document).ready(function () {
  $(".nav_left-dropdown-btn").click(function () {
    $(".small_nav").toggle();
  });
  $(".click").click(function () {
    $(".small_nav").toggle();
  });
});

/* MOBILE */
$(document).ready(function () {
  $("#mobile").click(function () {
    console.log("click");
    $(".mobile_nav").toggle();
    $(".fa-caret-down, .fa-caret-up").toggleClass("fa-caret-down fa-caret-up");
  });
});
