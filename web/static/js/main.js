(function($) {
  "use strict";

  /*--------------------------
  preloader
  ---------------------------- */
  $(window).on('load', function() {
    var pre_loader = $('#preloader');
    pre_loader.fadeOut('slow', function() {
      $(this).remove();
    });
  });

  /*---------------------
   TOP Menu Stick
  --------------------- */
  var s = $("#sticker");
  var pos = s.position();
  $(window).on('scroll', function() {
    var windowpos = $(window).scrollTop() > 300;
    if (windowpos > pos.top) {
      s.addClass("stick");
    } else {
      s.removeClass("stick");
    }
  });

  /*----------------------------
   Navbar nav
  ------------------------------ */
  var main_menu = $(".main-menu ul.navbar-nav li ");
  main_menu.on('click', function() {
    main_menu.removeClass("active");
    $(this).addClass("active");
  });

  /*----------------------------
   wow js active
  ------------------------------ */
  new WOW().init();

  $(".navbar-collapse a:not(.dropdown-toggle)").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  //---------------------------------------------
  //Nivo slider
  //---------------------------------------------
  $('#ensign-nivoslider').nivoSlider({
    effect: 'random',
    slices: 15,
    boxCols: 12,
    boxRows: 8,
    animSpeed: 500,
    pauseTime: 5000,
    startSlide: 0,
    directionNav: true,
    controlNavThumbs: false,
    pauseOnHover: true,
    manualAdvance: false,
  });

  /*----------------------------
   Scrollspy js
  ------------------------------ */
  var Body = $('body');
  Body.scrollspy({
    target: '.navbar-collapse',
    offset: 80
  });

  /*---------------------
    Venobox
  --------------------- */
  var veno_box = $('.venobox');
  veno_box.venobox();

  /*----------------------------
  Page Scroll
  ------------------------------ */
  var page_scroll = $('a.page-scroll');
  page_scroll.on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 55
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  /*--------------------------
    Back to top button
  ---------------------------- */
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  /*----------------------------
   Parallax
  ------------------------------ */
  var well_lax = $('.wellcome-area');
  well_lax.parallax("50%", 0.4);
  var well_text = $('.wellcome-text');
  well_text.parallax("50%", 0.6);

  /*--------------------------
   collapse
  ---------------------------- */
  var panel_test = $('.panel-heading a');
  panel_test.on('click', function() {
    panel_test.removeClass('active');
    $(this).addClass('active');
  });

  /*---------------------
   Testimonial carousel
  ---------------------*/
  var test_carousel = $('.testimonial-carousel');
  test_carousel.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  /*----------------------------
   isotope active
  ------------------------------ */
  // portfolio start
  $(window).on("load", function() {
    var $container = $('.awesome-project-content');
    $container.isotope({
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    var pro_menu = $('.project-menu li a');
    pro_menu.on("click", function() {
      var pro_menu_active = $('.project-menu li a.active');
      pro_menu_active.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    });

  });
  //portfolio end

  /*---------------------
   Circular Bars - Knob
--------------------- */
  if (typeof($.fn.knob) != 'undefined') {
    var knob_tex = $('.knob');
    knob_tex.each(function() {
      var $this = $(this),
        knobVal = $this.attr('data-rel');

      $this.knob({
        'draw': function() {
          $(this.i).val(this.cv + '%')
        }
      });

      $this.appear(function() {
        $({
          value: 0
        }).animate({
          value: knobVal
        }, {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.val(Math.ceil(this.value)).trigger('change');
          }
        });
      }, {
        accX: 0,
        accY: -150
      });
    });
  }

})(jQuery);

"use strict";

window.onload = function() {

    var quiz = {
        title: 'Ketahui uji statistik Anda!',

        questions: [{
                text: "Apa objek riset utama Anda?",
                responses: [{
                        text: 'Manusia',
                        value: 'Manusia',
                        example: 'Data pasien uji klinis.'
                    },
                    {
                        text: 'Hewan',
                        value: 'Hewan',
                        example: 'Tikus, mencit, marmut, kelinci, dll.'
                    },
                    {
                        text: 'Lainnya',
                        value: 'Lainnya',
                        example: 'Lini sel stabil, lini sel primer, tanaman, mikro-organisme, dll.'
                    }
                ]
            },
            {
                text: "Jenis data apakah yang akan Anda kumpulkan?",
                responses: [{
                        text: 'Continuous (parametric)',
                        value: 'Cont para',
                        example: 'Berat badan, tinggi badan, tekanan darah, gula darah sewaktu, dll.'
                    },
                    {
                        text: 'Continuous non parametric',
                        value: 'Cont non-para',
                        example: 'Indeks massa tubuh atau blood pressure hypertension stages (normal, stage 1, stage 2).'
                    },
                    {
                        text: 'Survival data',
                        value: 'Survival',
                        example: 'Persentase objek yang masih hidup dalam waktu penelitian.'
                    }
                ]
            },
            {
                text: "Berapakah jumlah kelompok yang akan diteliti?",
                responses: [{
                        text: '1 kelompok',
                        value: 'Satu kelompok',
                        example: 'Jumlah rata-rata pasien per hari dalam rumah sakit dan rata-rata nilai kelas tahun ini dibanding tahun lalu.'
                    },
                    {
                        text: '2 kelompok tidak berpasangan',
                        value: 'Dua kelompok tidak berpasangan',
                        example: 'Penggunaan pupuk dan tanpa pupuk terhadap pertumbuhan tanaman.'
                    },
                    {
                        text: '2 kelompok berpasangan',
                        value: 'Dua kelompok berpasangan',
                        example: 'Nilai tes sebelum dan sesudah mengikuti pelatihan'
                    },
                    {
                        text: 'Lebih dari 2 kelompok',
                        value: 'Lebih dari dua',
                        example: 'Perbandingan nilai kelas 4A, 4B, dan 4C yang menerima metode pembelajaran yang berbeda'
                    },
                    {
                        text: 'Continuous',
                        value: 'Continuous',
                        example: 'Dosis obat dan efek yang diperoleh atau jumlah pekerja dan tingkat produksi.'
                    }
                ]
            },
        ]
    };


    var app = new Vue({
        el: '#app',
        data: {
            quiz: quiz,
            questionIndex: 0,
            userResponses: Array()
        },
        methods: {
            // Go to next question
            next: function() {
                this.questionIndex++;
                console.log(this.userResponses);
            },
            // Go to previous question
            prev: function() {
                this.questionIndex--;
            },
            score: function() {
                //find the highest occurence in responses
                var modeMap = {};
                var maxEl = this.userResponses[0],
                    maxCount = 1;
                for (var i = 0; i < this.userResponses.length; i++) {
                    var el = this.userResponses[i];
                    if (modeMap[el] == null)
                        modeMap[el] = 1;
                    else
                        modeMap[el]++;
                    if (modeMap[el] > maxCount) {
                        maxEl = el;
                        maxCount = modeMap[el];
                    }
                }
                return maxEl;
            }
        }
    });
}