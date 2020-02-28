// The page navigates to the section onClick

$(document).ready(function() {
  $('#button-header').click(function() {
    $path = $('#section-project').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
});
