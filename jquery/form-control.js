// Adds the 'active' class when the user focus in the input
$(document).ready(function() {
  $('.form-input').on('focusin', function() {
    $(this)
      .parent()
      .find('label')
      .addClass('active');
  });
});

// Removes the 'active' class when the use focous out of the input
$(document).ready(function() {
  $('.form-input').on('focusout', function() {
    if (!this.value) {
      $(this)
        .parent()
        .find('label')
        .removeClass('active');
    }
  });
});

// Adds the 'active' class when the user focus in the textarea
$(document).ready(function() {
  $('.form-textarea').on('focusin', function() {
    $(this)
      .parent()
      .find('label')
      .addClass('active');
  });
});

// Removes the 'active' class when the use focous out of the textarea
$(document).ready(function() {
  $('.form-textarea').on('focusout', function() {
    if (!this.value) {
      $(this)
        .parent()
        .find('label')
        .removeClass('active');
    }
  });
});
