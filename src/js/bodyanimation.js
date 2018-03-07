const landingpagelink = document.getElementById('landing-page-link')
    , arrowleft = document.getElementById('arrow')
    , nav = document.getElementById('navigation')
    , aboutHeader = document.getElementById('about-header')
    , border = document.getElementById('border')

    
var $window = $(window)
var $arrow = $('#arrow')
var $pagelink = $('#landing-page-link')


$pagelink.mouseover(function() {
    $pagelink.removeClass('unhover').addClass('hover');
    $arrow.removeClass('arrowDeRotate').addClass('arrowRotate');
})

$pagelink.mouseout(function() {
  $pagelink.removeClass('hover').addClass('unhover');
  $arrow.removeClass('arrowRotate').addClass('arrowDeRotate');
})

var $navbar = $("#navigation"),
    y_pos = $navbar.offset().top,
    about = $('#about-header').top
    height = $navbar.height();
console.log(y_pos)
$(document).scroll(function() {
    $('.drop-items').removeClass('show')

    var scrollTop = $(this).scrollTop();
    if (scrollTop > y_pos + height) {
        $('.about-me-section').addClass('test')
        $navbar.addClass("fixed").animate({
            top: 0
        });
    } else if (scrollTop <= y_pos) {
        $('.about-me-section').removeClass('test')
        $navbar.removeClass("fixed").clearQueue().animate({
            top: "-50px"
        }, 0);
    }
    if(scrollTop > 500) {
        aboutHeader.classList.add('slideleft')
        border.classList.add('slideleft')
      }
    if(scrollTop > 700) {
        $('.about-wrapper-right img').addClass('flipinx')
        $('.about-wrapper-left').addClass('slideleft')
    }
    if(scrollTop > 1200) {
        $('.icon-item').addClass('flipinx')
    }
});
$('.hamburger').click(function() {
    $('.drop-items').toggleClass('show')
})