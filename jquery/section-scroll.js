// The page navigates to the section onClick

$(document).ready(function() {
  $('#button-header').click(function() {
    $path = $('#section-project').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
});

// For NavBar
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.nav').addClass('shrink');
  } else {
    $('.nav').removeClass('shrink');
  }
});

// for navigation bar when it's mobile size
$(document).ready(function() {
  $('.nav__menuicon').on('click', function() {
    $('nav ul').toggleClass('showing');
  });
});

$(document).ready(function() {
  $('.nav__menu ul li a').on('click', function() {
    $('nav ul').toggleClass('showing');
  });
});

// scrolling effect for nav bar
$(window).on('scroll', function() {
  if ($(window).scrollTop() > 20) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }
});
