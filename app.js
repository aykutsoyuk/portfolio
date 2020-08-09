$(document).ready(function () {
  $(".hamburger").click(() => {
    $(".nav-link").toggleClass("open");
    $(".nav-link").hasClass("open")
      ? $(".hamburger").css({ position: "fixed", top: "3%" })
      : $(".hamburger").css({ position: "absolute", top: "50%" });
  });
  $(".button-list").click(() => {
    $(".nav-link").removeClass("open");
    $(".hamburger").css({ position: "absolute", top: "50%" });
  });
  $(window).width() < 450
    ? $(".knowledge").empty().append(`<p class="knowledge-info">
   <del style="text-decoration: none;"
   >Hello. I'm Aykut... <ins>1</ins>
   </del>
   <del style="text-decoration: none;">I love coding & music...<ins>1</ins></del
   >Here is my portfolio.
   </p>`)
    : false;
  $(".knowledge-info").t({
    speed: 80,
    delay: 1,
  });
});
