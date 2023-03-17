$(document).ready(function () {

    $('.btn-mobile').click(function () {
        $('.navigation-mobile').slideToggle();;
    });

    $('.sm_megamenu_menu_black .parent-item').each(function () {
        $(this).click(function () {
            $(this).find(".sm-megamenu-child ").slideToggle(200);
        });
    });
    // end menu
    $('.sm-listing-tabs .ltabs-tabs-container').each(function () {
        $(this).click(function () {
            $(this).find(".ltabs-tabs-wrap").toggleClass('active');
        });
    });
    // end menu list
    // $('.header-top-links .switcher-options').each(function () {
    //     $(this).click(function () {
    //         $(this).find(".mage-dropdown-dialog").toggle();
    //     });
    // });
    // ---------
    $('.showcart').click(function () {
        $('.minicart-header .mage-dropdown-dialog').toggle();;
    });
    // end
    $('.mega-left-title').click(function () {
        $('.wrapper_vertical_menu').slideToggle(400);;
        $('.vertical_megamenu-header').toggleClass('close-item');
    });
    // end header-top
    $('.sm-listing-tabs li.ltabs-tab').on('click', function () {
        var tabId = $(this).data('tab-id');
        $(this).parent().find("li.ltabs-tab").removeClass('tab-sel');
        $(this).addClass('tab-sel');
        $(this).parents(".sm-listing-tabs").find(".ltabs-items-container").find(".ltabs-items").removeClass('ltabs-items-selected');
        $(this).parents(".sm-listing-tabs").find(".ltabs-items-container").find(".ltabs-items.ltabs-items-" + tabId).addClass('ltabs-items-selected');
    });
    // end tab index
    $('.button-header').click(function () {
        $('.dropdown-form.toogle_content').slideToggle();;
    });
    $('.header-login').click(function () {
        $('.toplinks-wrapper').slideToggle();;
    });
    // end header button
    $('.resp-tabs-list li').on('click', function () {
        var tabId = $(this).attr('data-tab');
        $('.resp-tabs-list li').removeClass('active');
        $('.resp-tab-content').hide();

        $(this).addClass('active');
        $('#' + tabId).show();
    });
    // end tab detail
    $('.showMore').click(function() {
        $('.item-more').slideDown();
        $('.showLess').show();
        $('.showMore').hide();
    });
    $('.showLess').click(function() {
        $('.item-more').slideUp();
        $('.showMore').show();
        $('.showLess').hide();
    });
    //click add wish list
    $('.towishlist').on("click", function () {
        $('#popup-wishlist').addClass("_show");
        $('body').addClass("_has-modal");
    });
    $('.quickview-handler').on("click", function () {
        $('#popup-detail').addClass("_show");
        $('body').addClass("_has-modal");
    });

    if ($('#hotdeal-slide').length > 0) {
        var $element = $('#hotdeal-slide');
        $('.owl-carousel', $element).owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            autoplay: false,
            margin: 30,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
        $(".deals-countdown", $element).each(function () {
            var timer = $(this).data('timer');
            var data = new Date(timer);
            CountDown(data, $(this));
        });
    }
    if ($(".post-list-wrapper-home2 ul.post-list").length > 0) {
        $(".post-list-wrapper-home2 ul.post-list").owlCarousel({
            nav: false,
            dots: true,
            margin: 10,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        });
    }
    if ($(".our-brands .inner-brands").length > 0) {
        $(".our-brands .inner-brands").owlCarousel({
            nav: true,
            dots: false,
            loop: true,
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                991: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            }
        });
    }

    if ($('#img-detail').length > 0) {
        $('#img-detail').owlCarousel({
            nav: false,
            dots: true,
            loop: true,
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 1
                },
                991: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }
    if ($(".upsell-block .product-items").length > 0) {
        $(".upsell-block .product-items").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            },
            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30
        });
    }


    if ($('#book-slide').length > 0) {
        var $element = $('#book-slide');
        $('.owl-carousel', $element).owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            autoplay: false,
            autoplayHoverPause: true,
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 2
                },
                991: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }

    if ($('#food-slide').length > 0) {
        var $element = $('#food-slide');
        $('.owl-carousel', $element).owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            autoplay: false,
            autoplayHoverPause: true,
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 2
                },
                991: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }

    if ($('#sport-slide').length > 0) {
        var $element = $('#sport-slide');
        $('.owl-carousel', $element).owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            autoplay: false,
            autoplayHoverPause: true,
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 2
                },
                991: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }


    $('#switcher-language-trigger-nav').on("click", function () {
        var index = $(this);
        if (!index.next(".mage-dropdown-dialog").is(":visible")) {
            index.next(".mage-dropdown-dialog").slideDown();
        }
    });
    $(document).mouseup(function (e) {
        var container = $('#switcher-language-nav .mage-dropdown-dialog');
        if (!container.is(e.target)
            && container.has(e.target).length === 0) {
            if (container.is(":visible")) {
                container.slideUp();
            }
        }
    });

    $('#switcher-currency-trigger-nav').on("click", function () {
        var index = $(this);
        if (!index.next(".mage-dropdown-dialog").is(":visible")) {
            index.next(".mage-dropdown-dialog").slideDown();
        }
    });
    $(document).mouseup(function (e) {
        var container = $('#switcher-currency-nav .mage-dropdown-dialog');
        if (!container.is(e.target)
            && container.has(e.target).length === 0) {
            if (container.is(":visible")) {
                container.slideUp();
            }
        }
    });

    function scroll_to(div) {
        $('html, body').animate({
            scrollTop: $(div).offset().top - 80
        }, 800);
    }
    $(".list_diemneo ul li").each(function () {
        $(this).click(function () {
            $('.list_diemneo ul li').removeClass("active");
            $(this).addClass("active");
            var neoindext = $(this).index() + 1;
            scroll_to(".title_neo" + neoindext);
            var neodiv = (".title_neo" + neoindext);
            console.log(neodiv);
            var x = $(neodiv).position();
            $(".custom-scoll").css("top", x.top);
            return true;
        });
    });
    $('.quantity-plus').click(function () {
        $('.qty-default').val(Number($('.qty-default').val()) + 1);
    });

    $('.quantity-minus').click(function () {
        var value = Number($('.qty-default').val()) - 1;
        if (value > 0) {
            $('.qty-default').val(value);
        }

    });

    $('.product-dt .product-variation').click(function () {
        $(this).parent().find(".product-variation").removeClass("active");
        $(this).addClass("active");
    });


    $('.swatch-layered.color .swatch-option-link-layered').on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).parent().find(".swatch-option-link-layered").removeClass("active");
        } else {
            $(this).parent().find(".swatch-option-link-layered").removeClass("active");
            $(this).addClass("active");
        }
    });

    $('.filter-options-content .my.item').on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).parent().find(".my.item").removeClass("active");
        } else {
            $(this).parent().find(".my.item").removeClass("active");
            $(this).addClass("active");
        }
    });
    
});

function ClosePopupWishList(index) {
    $(index).parents(".modal-popup").removeClass("_show");
    $('body').removeClass("_has-modal");
}

function CountDown(date, id) {
    dateNow = new Date();
    amount = date.getTime() - dateNow.getTime();
    delete dateNow;
    if (amount < 0) {
        id.html("Now!");
    } else {
        days = 0;
        hours = 0;
        mins = 0;
        secs = 0;
        out = "";
        amount = Math.floor(amount / 1000);
        days = Math.floor(amount / 86400);
        amount = amount % 86400;
        hours = Math.floor(amount / 3600);
        amount = amount % 3600;
        mins = Math.floor(amount / 60);
        amount = amount % 60;
        secs = Math.floor(amount);
        if (days != 0) {
            out += "<div class='deals-time time-day'><div class='num-time'>" + days + "</div><div class='title-time'>" + ((days == 1) ? "Day" : "Days :") + "</div></div>";
        }
        out += "<div class='deals-time time-hours'><div class='num-time'>" + hours + "</div><div class='title-time'>" + ((hours == 1) ? "Hour" : ":") + "</div></div>";
        out += "<div class='deals-time time-mins'><div class='num-time'>" + mins + "</div><div class='title-time'>" + ((mins == 1) ? "Min" : ":") + "</div></div>";
        out += "<div class='deals-time time-secs'><div class='num-time'>" + secs + "</div><div class='title-time'>" + ((secs == 1) ? "Sec" : "") + "</div></div>";
        out = out.substr(0, out.length - 2);
        id.html(out);
        setTimeout(function () {
            CountDown(date, id)
        }, 1000);
    }
}
$.fn.osgslide = function (movepx, counttab, countimage) {
    var objId = $(this).attr('id');
    var tabindex = 1;
    var imageindex = 0;
    //Sự kiện next ảnh
    $('#' + objId + ' .slide-next').click(function () {
        if ($(this).hasClass('noneclick')) {
            tabindex = 0;
            imageindex = -1;
            $(this).removeClass('noneclick');
            //return;
        }
        $('#' + objId + ' .slide-prev').removeClass('noneclick');
        imageindex++;
        if ((countimage > counttab) && (tabindex <= (countimage - counttab))) {
            tabindex++;
            var toppx = (tabindex - 1) * (-movepx);
            $('#' + objId + ' .content-listthumb').animate({
                left: toppx
            }, 500);
        }
        ReplaceImage(imageindex);
        if (imageindex == countimage - 1) {
            $(this).addClass('noneclick');
        }
        else if (imageindex == 0) {
            $('#' + objId + ' .slide-prev').addClass('noneclick');
        }
    });

    //Sự kiện back ảnh
    $('#' + objId + ' .slide-prev').click(function () {
        var countImg = $('#' + objId + ' .list-thumb .osgslideimg').length;
        if ($(this).hasClass('noneclick')) {
            tabindex = countImg - (counttab - 2);
            imageindex = countImg;
            $(this).removeClass('noneclick');
            //return;
        }
        $('#' + objId + ' .slide-next').removeClass('noneclick');
        imageindex--;
        if ((countimage > counttab) && tabindex > 1) {
            tabindex--;
            var toppx = (tabindex - 1) * (-movepx);
            $('#' + objId + ' .content-listthumb').animate({
                left: toppx
            }, 500);
        }
        ReplaceImage(imageindex);
        if (imageindex == 0) {
            $(this).addClass('noneclick');
        }
        else if (imageindex == countImg - 1) {
            $('#' + objId + ' .slide-next').addClass('noneclick');
        }
    });

    //Sự kiện khi click vào ảnh nhỏ
    $('#' + objId + ' .osgslideimg img').click(function () {
        var currentimage = $(this).parent().index()
        ReplaceImage(currentimage);
        currentimage++;
        $('#' + objId + ' .slide-prev').removeClass('noneclick');
        $('#' + objId + ' .slide-next').removeClass('noneclick');
        if (currentimage == 1) {
            $('#' + objId + ' .slide-prev').addClass('noneclick');
        } else if (currentimage == $('#' + objId + ' .list-thumb .osgslideimg').length) {
            $('#' + objId + ' .slide-next').addClass('noneclick');
        }
    });

    //Sự kiện khi click vào ảnh lớn
    $('#' + objId + ' .show-img img').click(function () {
        var rel = $(this).attr('rel');
        $('#' + objId + ' #' + rel).click();
    });

    //Func thay thế ảnh nhỏ => ảnh lớn
    function ReplaceImage(currentimage) {
        imageindex = currentimage;
        var src = $('#' + objId + ' .osgslideimg:eq(' + currentimage + ') img').attr('src');
        var rel = $('#' + objId + ' .osgslideimg:eq(' + currentimage + ') img').attr('rel');
        var attr = $('#' + objId + ' .osgslideimg:eq(' + currentimage + ') img').attr('class');
        var cls = "";
        if (typeof attr !== typeof undefined && attr !== false) {
            var cls = attr;
        }

        $('#' + objId + ' .show-img img')
            .attr('src', src)
            .attr('rel', rel)
            // .attr('class', cls);

        $('#' + objId + ' .osgslideimg').removeClass('osgslide-active');
        $('#' + objId + ' .osgslideimg:eq(' + currentimage + ')').addClass('osgslide-active');
    }
};

$.fn.imageZoom = function() {
    "use strict";
    this.each(function() {
      var $this = $(this),
        $thumb = $this.find(".iz-js-thumb"),
        thumbWith = $thumb.width(),
        thumbHeight = $thumb.height(),
        // read out data-larg-size for large image dimension
        imageData = $thumb.attr("src"),
        $imageZoom = $this.find(".iz-js-zoom"),
        imageZoomWidth = $imageZoom.width(),
        imageZoomHeight = $imageZoom.height(),
        $imageZoomPic = $imageZoom.find(".iz-js-zoom-pic"),
        // offsetCorrectionX = imageZoomWidth / 2,
        // offsetCorrectionY = imageZoomHeight / 2,
  
        // build image path. e.g 'pathtoimage/imagename' + imageData + '.jpg'
        imagePath = imageData;
  
      $this.css({
        width: thumbWith
      });
      // position zoom-container next to thumbnail
      $imageZoom.css({
        top: 0,
        left: thumbWith
      });
      // set dimension of large image based on data-large-size values
      $imageZoomPic
        .css({
          width: 1170,
          height: 1170
        })
        .attr("src", imagePath);
      // move large image depending on mouse position over thumb
      $thumb.on("mousemove pointermove", function(e) {
        var getOffset = $(this).offset(),
          elemOffX = e.pageX - getOffset.left,
          elemOffY = e.pageY - getOffset.top;
        $imageZoomPic.css({
          "margin-left": -elemOffX * 3,
          "margin-top": -elemOffY * 3
        });
      });
    });
  };

  $(function() {
    $("#price-slider").slider({
        range: true,
        min: 40,
        max: 710,
        values: [0, 710],
        slide: function(event, ui) {
            $("#price_minimum").val(ui.values[0]);
            $("#price_maximum").val(ui.values[1]);
        }
    });
    $("#price_minimum").val($("#price-slider").slider("values", 0));
    $("#price_maximum").val($("#price-slider").slider("values", 1));
});