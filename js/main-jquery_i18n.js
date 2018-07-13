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
      'text-intro': '',
      'header-intro': '',
      'title-portfolio': 'Portfolio',
      'header-about': '',
      'text-about-p1': '',
      'text-about-p2': '',
      'text-about-p3': '',
      'text-about-p4': '',
      'text-about-p4': '',
      'text-about-p5': '',
      'text-about-p6': '',
      'text-about-p7': '',
      'text-about-p8': '',
      'text-about-p9': '',
      'contact-form-button': 'Send'
    },
    'fi': {
      'nav-home': 'Etusivu',
      'nav-about': 'Moikka, olen Julia',
      'nav-photopackages': 'Kuvauspaketit',
      'nav-contact': 'Ota yhteyttä',
      'nav-close': 'Sulje x',
      'title-intro': 'Juhlakuvaus, perhekuvaus, potrettikuvaus, lemmikkikuvaus',
      'text-intro': 'Minä olen Julia Blomqvist, 31-vuotias perhevalokuvaaja Helsingistä. Uskon vakaasti siihen, että jokainen yksilö, ihmissuhde ja hetki on omalla tavallaan ainutlaatuinen ja kaunis. Koen onnistuneeni valokuvaajana parhaiten silloin, kun pystyn ikuistamaan tämän kauneuden niin, että lopputulos on mahdollisimman luonnollinen. En siis pyri valokuvauksessa mainosmaisiin otoksiin, vaan tavoitteenani on ottaa kuvia, joista sinun on helppo tunnistaa omasi ja läheistesi parhaat puolet. Kuvia, jotka auttavat sinua muistamaan niitä hetkiä, ihmissuhteita ja asioita, jotka ovat elämässäsi tärkeitä. Minut voi tilata valokuvaamaan ympäri Suomea, vaikkakin kuvaan pääsääntöisesti pääkaupunkiseudulla. Ota rohkeasti yhteyttä ja suunnitellaan yhdessä ikimuistoinen kuvauspäivä!',
      'header-intro': 'Kiva, kun olet täällä!',
      'title-portfolio': 'Portfolio',
      'header-about': 'Moikka vaan!',
      'text-about-p1': 'Olen kolmekymppinen valokuvaaja Helsingistä, joka on aina inspiroitunut Ihmisistä ja heidän tarinoistaan.',
      'text-about-p2': 'Valokuvaus on ollut osa elämääni pienestä pitäen, sillä isäni harrasti intohimoisesti valokuvausta jo ollessani pieni. Hänen tekemänsä kuva-albumit ovat auttaneet minua muistamaan asioita lapsuudestani ja monesta kuvasta on tullut minulle erittäin tärkeä.',
      'text-about-p3': 'Innostuin itse olemaan kameran takana saatuani lahjaksi ensimmäisen  järjestelmäkamerani vuonna 2012. Ryhdyin oitis kuvaamaan arjessa ja ulkomaanmatkoilla, mutten olisi tuolloin vielä uskonut valokuvauksesta tulevan minulle muuta kuin harrastus.',
      'text-about-p4': 'Kesällä 2017 elämäni oli eräänlaisessa taitekohdassa. Valmistuin yliopistosta, mutta koin, etten ollut valmis siirtymään kaksin jaloin työelämään. Halusin tehdä työkseni jotain luovempaa, kuin mitä omalta alaltani valmistuneet tyypillisesti tekevät.',
      'text-about-p4': 'Menin myös naimisiin ja sopivaa hääkuvaajaa etsiessämme tulin ensimmäistä kertaa ajatelleeksi, että on olemassa sellainenkin ammatti kuin perhevalokuvaaja. Inspiroiduin ja kuvasin muutamat nimiäiset  ja häät. Tämän jälkeen olin aivan myyty ja tiesin haluavani kehittyä  valokuvaajana. Syksyllä 2017 aloitin medianomin opinnot avoimessa ammattikorkeakoulussa, jossa olen opiskellut muun muassa valokuvauksellista ilmaisua.',
      'text-about-p5': 'Pyrin valokuvauksessa luonnollisuuteen. Tyylissäni voi havaita rosoisuutta ja historian havinaa. Rakkauteni luontoon ja eläimiin näkyvät nekin vahvasti kuvakerronnassani.',
      'text-about-p6': 'Jos kiinnostuksesi heräsi, minuun saa yhteyden tämän sivuston yhteydenottolomakkeen avulla. Pyrin vastaamaan 24 tunnin sisällä.',
      'text-about-p7': 'Suhtaudun avoimin mielin erilaisiin projekteihin, joten ethän epäröi ehdottaa ”hullujakin ideoita”. Tavoitteeni on, että valokuvat tuottaisivat hyvää mieltä läpi elämäsi.',
      'text-about-p8': 'Yhteydenottoasi odottaen',
      'contact-form-button': 'Lähetä'
    }
  });

  update_texts();
});
