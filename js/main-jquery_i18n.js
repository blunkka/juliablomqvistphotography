jQuery(document).ready(function() {

  var update_texts = function() {

    var selectedLocale = localStorage.getItem('jbplocale');
    if(selectedLocale == null) {
      localStorage.setItem('jbplocale', 'fi');
    }

    $.i18n().locale = localStorage.getItem('jbplocale');

    $('body').i18n();
  };

  $('.lang-switch').click(function(e) {
    e.preventDefault();

    /*$.i18n().locale = $(this).data('locale');*/
    localStorage.setItem('jbplocale', $(this).data('locale'));

    update_texts();
  });

  $.i18n().load({
    'en': {
      'nav-home': 'Home',
      'nav-about': 'Hi, I am Julia',
      'nav-photopackages': 'Photo packages',
      'nav-contact': 'Contact me',
      'nav-close': 'Close x',
      'title-intro': 'Party photoshoot, family photoshoot, portrait photoshoot, pet photoshoot',
      'title-portfolio': 'Portfolio'
    },
    'fi': {
      'nav-home': 'Etusivu',
      'nav-about': 'Moikka, olen Julia',
      'nav-photopackages': 'Kuvauspaketit',
      'nav-contact': 'Ota yhteyttä',
      'nav-close': 'Sulje x',
      'title-intro': 'Juhlakuvaus, perhekuvaus, potrettikuvaus, lemmikkikuvaus',
      'title-portfolio': 'Portfolio'
    }
  });

  update_texts();
});
