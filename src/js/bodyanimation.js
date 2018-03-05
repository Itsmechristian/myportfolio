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

$window.scroll(function() {
    let y = this.pageYOffset;
    if(y > 380) {
      aboutHeader.classList.add('slideleft')
      border.classList.add('slideleft')
    }
})