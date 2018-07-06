jQuery(document).ready(function() {
  var update_texts = function() {
    $('body').i18n();
  };

  $('.lang-switch').click(function(e) {
    e.preventDefault();
    $.i18n().locale = $(this).data('locale');
    update_texts();
  });

  $.i18n().load({
    'en': {
      'nav-home': 'Home',
      'nav-about': 'Hi, I am Julia',
      'nav-photopackages': 'Photo packages',
      'nav-contact': 'Contact me',
      'nav-close': 'Close x'
    },
    'fi': {
      'nav-home': 'Etusivu',
      'nav-about': 'Moikka, olen Julia',
      'nav-photopackages': 'Kuvauspaketit',
      'nav-contact': 'Ota yhteyttä',
      'nav-close': 'Sulje x'
    }
  });

  update_texts();
});
