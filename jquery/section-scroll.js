// The page navigates to the sections onClick
$(document).ready(function() {
  $('#link-home').click(function() {
    $path = $('#header').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
});

$(document).ready(function() {
  $('#button-header').click(function() {
    $path = $('#section-project').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
});

$(document).ready(function() {
  $('#link-about').click(function() {
    $path = $('#section-about').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
});

$(document).ready(function() {
  $('#link-project').click(function() {
    $path = $('#section-project').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
});

$(document).ready(function() {
  $('#link-contact').click(function() {
    $path = $('#section-contact').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
});

// The NavBar darkens on the very first scroll down
$(window).on('scroll', function() {
  if ($(window).scrollTop() > 20) {
    $('.nav').addClass('scrolled');
  } else {
    $('.nav').removeClass('scrolled');
  }
});

// for navigation bar when it's mobile size
$(document).ready(function() {
  $('.nav__burger').on('click', function() {
    $('nav ul').toggleClass('showing');
  });
});

$(document).ready(function() {
  $('.nav__links ul li').on('click', function() {
    $('nav ul').toggleClass('showing');
  });
});
