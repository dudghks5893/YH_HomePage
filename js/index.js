$(document).ready(function () {
  init();

  $(window).on("scroll", function (e) {
    resize();
  });

  $(window).resize(function () {
    init();
    eserviceReset();
  });

  // 초기화
  function init() {
    $("header").removeClass("on");
    $(".dim").removeClass("on");
    // resize();
  }
  
  // $('body').impulse({
  //   tempo: 300
  //  });

  // 리사이즈 시 적용되는 function
  // function resize(pheight) {
  //   var height = $(document).scrollTop();
  //   if (pheight) {
  //     height = pheight;
  //   }
  // }



  // 해더 언어 클릭
  // $(".language-selection ul li").on("click", function (event) {
  //   $(".language-selection").find(".on").removeClass("on");
  //   $(this).attr("class", "on");
  //   $(".selected-value").text($(this).text());
  // });

  // 메뉴 opne & close
  $(".mobile-menu").on("click", function (event) {
    console.log("여기?");
    if ($("header").hasClass("on")) {
      init();
      $("header").addClass("off");
      setTimeout(function () {
        $("header").removeClass("off");
      }, 180);
      $(".mobile-menu").css("animation", "outMenuRotate 1s");
    } else {
      $(".dim").addClass("on");
      $("header").addClass("on");
      $(".mobile-menu").css("animation", "inMenuRotate 1s");
    }
  });
});
