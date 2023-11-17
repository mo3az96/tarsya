$(window).on("load", function () {
  $("body").removeClass("overflow");
});

$(document).ready(function () {
  /************************************ Fixed Header ************************************/
  $(window).scroll(function () {
    $(this).scrollTop() >= 50
      ? $("header").addClass("fixed")
      : $("header").removeClass("fixed ");
  });
  /************************************ Main Slider ************************************/
  var mainSwiper = new Swiper(".main-slider .swiper", {
    a11y: {
      enabled: false,
    },
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //   delay: 5000,
    // },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /************************************ Services Slider ************************************/
  var servicesSwiper = new Swiper(".services-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 15,
        slidesPerView: 3,
      },
      1199: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".services-slider .swiper-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /************************************ Clients Slider ************************************/
  var clientsSwiper = new Swiper(".clients-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        spaceBetween: 10,
        slidesPerView: 3.3,
        centeredSlides: true,
      },
      480: {
        spaceBetween: 15,
        slidesPerView: 3.5,
        centeredSlides: true,
      },
      767: {
        spaceBetween: 20,
        slidesPerView: 5,
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 5.5,
      },
      1199: {
        spaceBetween: 20,
        slidesPerView: 6.515,
      },
    },
    navigation: {
      nextEl: ".clients-section .swiper-btn-next",
      prevEl: ".clients-section .swiper-btn-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /************************************ Blog Slider ************************************/
  var blogSwiper = new Swiper(".blog-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 15,
        slidesPerView: 3,
      },
      1199: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".blog-slider .swiper-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /************************************ Arrow Top ************************************/
  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(500)
      : $(".arrow-top").fadeOut(500);
  });
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  /************************************ Statistics ************************************/
  if ($(".statistics-section").length) {
    var a = 0;
    $(window).scroll(function () {
      if (
        a == 0 &&
        $(this).scrollTop() >= $(".about-section").offset().top - 100
      ) {
        $(".statistic-value span").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 1000,
                easing: "swing",
                step: function (now) {
                  $(this).text(Math.ceil(now));
                },
              }
            );
        });
        a++;
      }
    });
  }

  $(".nav-btn").click(function () {
    $(this).toggleClass("active");
    $(".header-nav").toggleClass("active");
    $("body").toggleClass("overflow");
  });

  if ($(window).width() <= 767) {
    $(".has-children>.nav-link>i").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      var parent = $(this).parent(".nav-link");
      $(".has-children>.nav-link").not(parent).removeClass("active");
      parent.toggleClass("active");
      if (parent.siblings().css("display") == "none") {
        parent.siblings().slideDown(500);
      } else {
        parent.siblings().slideUp(500);
      }
      $(".has-children>.nav-link").not(parent).siblings().slideUp(500);
    });
  }
});
