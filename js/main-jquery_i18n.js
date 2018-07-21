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
      'nav-photopackages': 'Prices',
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
      'header-contact': '',
      'text-contact-p1': '',
      'text-contact-p2': '',
      'header-contact-form': 'Contact form',
      'contact-form-placeholder-name':'Name',
      'contact-form-placeholder-email':'Email',
      'contact-form-placeholder-phone':'Phonenumber',
      'contact-form-placeholder-message':'Message',
      'contact-form-button': 'Send',
      'header-photopackages': '',
      'text-photopackages-p1': '',
      'text-photopackages-p2': '',
      'text-photopackages-p3': '',
      'text-photopackages-p4': ''
    },
    'fi': {
      'nav-home': 'Etusivu',
      'nav-about': 'Moikka, olen Julia',
      'nav-photopackages': 'Hinnasto',
      'nav-contact': 'Ota yhteyttä',
      'nav-close': 'Sulje x',
      'title-intro': 'Juhlakuvaus, perhekuvaus, potrettikuvaus, lemmikkikuvaus',
      'header-intro': 'Kiva, kun olet täällä!',
      'text-intro': 'Minä olen Julia Blomqvist, 31-vuotias perhevalokuvaaja Helsingistä. Uskon vakaasti siihen, että jokainen yksilö, ihmissuhde ja hetki on omalla tavallaan ainutlaatuinen ja kaunis. Koenkin onnistuneeni valokuvaajana parhaiten silloin, kun pystyn ikuistamaan tämän kauneuden niin, että lopputulos on mahdollisimman luonnollinen. En siis pyri valokuvauksessa mainosmaisiin otoksiin, vaan tavoitteenani on ottaa kuvia, joista sinun on helppo tunnistaa omasi ja läheistesi parhaat puolet. Kuvia, jotka auttavat muistamaan niitä hetkiä, ihmissuhteita ja asioita, jotka ovat elämässäsi tärkeitä. Minut voi tilata valokuvaamaan ympäri Suomea, vaikkakin kuvaan pääsääntöisesti pääkaupunkiseudulla. Ota rohkeasti yhteyttä ja suunnitellaan sinulle yhdessä ikimuistoinen kuvauspäivä.',
      'title-portfolio': 'Portfolio',

      'header-about': 'Moikka!',
      'text-about-p1': 'Olen kolmekymppinen valokuvaaja Helsingistä, joka on aina inspiroitunut ihmisistä ja heidän elämäntarinoistaan.',
      'text-about-p2': 'Valokuvaus on minulle tuttua lapsesta saakka, koska isäni tapasi kuvata paljon jo ollessani pieni. Hänen tekemänsä kuva-albumit ovat auttaneet minua muistamaan asioita vuosien takaa ja monesta kuvasta on tullut minulle erittäin tärkeä.',
      'text-about-p3': 'Innostuin itse olemaan kameran takana saatuani lahjaksi ensimmäisen  järjestelmäkamerani vuonna 2012. Ryhdyin oitis kuvaamaan arjessa ja ulkomaanmatkoilla, mutten olisi tuolloin vielä uskonut valokuvauksesta tulevan minulle muuta kuin harrastus.',
      'text-about-p4': 'Kesällä 2017 elämäni oli eräänlaisessa taitekohdassa. Valmistuin yliopistosta, mutta koin että haluan tehdä työkseni jotain luovempaa, kuin mitä omalta alaltani valmistuneet tyypillisesti tekevät.',
      'text-about-p5': 'Menin myös naimisiin ja etsiessäni sopivaa hääkuvaajaa tulin ensimmäistä kertaa ajatelleeksi, että on olemassa sellainenkin ammatti kuin perhevalokuvaaja. Inspiroiduin ja kuvasin muutamat nimiäiset  ja häät. Tämän jälkeen olin aivan myyty ja tiesin haluavani kehittyä  valokuvaajana. Syksyllä 2017 aloitin medianomin opinnot avoimessa ammattikorkeakoulussa, jossa olen opiskellut muun muassa valokuvauksellista ilmaisua.',
      'text-about-p6': 'Pyrin valokuvauksessa luonnollisuuteen. Tyylissäni voi havaita rosoisuutta ja historian havinaa. Rakkauteni luontoon ja eläimiin näkyvät nekin vahvasti kuvakerronnassani.',
      'text-about-p7': 'Jos kiinnostuksesi heräsi, minuun saa yhteyden tämän sivuston yhteydenottolomakkeen avulla. Pyrin vastaamaan 24 tunnin sisällä.',
      'text-about-p8': 'Suhtaudun avoimin mielin erilaisiin projekteihin, joten ethän epäröi ehdottaa ”hullujakin ideoita”. Tavoitteeni on, että valokuvani tuottaisivat sinulle hyvää mieltä läpi elämän.',
      'text-about-p9': 'Yhteydenottoasi odottaen',
      'image-text-about': "Minä saksalaisella maatilalla vuonna 1990. Kuva: Michael Müller",
      'header-contact': 'Kivaa!',
      'text-contact-p1': 'Olen todella otettu, jos sivustoni nähtyäsi olet päättänyt, että haluat tutustua paremmin ja antaa minun taltioida jotakin sinulle tärkeää.',
      'text-contact-p2': 'Kerrothan yhteydenottolomakkeessa ainakin mihin, milloin ja miten pitkäksi aikaa haluaisit minut mahdollisesti kuvaajaksi tilata. Pyrin vastaamaan viestiisi 24 tunnin sisällä. Mikäli olemme yhdessä sitä mieltä, että olen sinulle sopiva kuvaaja, puhumme puhelimessa tai tapaamme livenä, ennen kuin allekirjoitamme kuvaussopimuksen.',
      'header-contact-form': 'Yhteydenottolomake',
      'contact-form-placeholder-name':'Nimi',
      'contact-form-placeholder-email':'Sähköposti',
      'contact-form-placeholder-phone':'Puhelinnumero',
      'contact-form-placeholder-message':'Viesti',
      'contact-form-button': 'Lähetä',
      'header-photopackages': 'Tarjoamani palvelut',
      'text-photopackages-p1': 'Laskutan kuvaukseeni käyttämästäni ajasta enkä kuvien määrästä, vaikkakin lupaan jokaista tuntia kohden <b>minimimäärän huolellisesti editoituja kuvia</b>. Kuvaukseen käytettävä aika sovitaan asiakkaan kanssa aina etukäteen. Kuvien <b>toimitusaika</b> on <b>enintään kaksi viikkoa</b> ja kaikki kuvat toimitetaan <b>digitaalisesti</b> asiakkaan henkilökohtaisen <b>salasanasuojatun nettigallerian kautta</b>. Olen aloitteleva ammattikuvaaja ja olen huomioinut sen hinnoissani. <b>Laskutan aina UKKO.FI palvelun kautta</b>, joka huolehtii siitä, että kuvauspalkkiostani maksetaan asianmukaiset verot.',
      'text-photopackages-p2': 'Tuntitaksani on <b>90 euroa</b> ja puolesta tunnista veloitan vastaavasti <b>45 euroa</b>. Tunnin kuvauskeikasta <b>lupaan vähintään 20 kpl</b> ja puolen tunnin kuvauskeikasta <b>vähintään 3 kpl</b> käsiteltyjä kuvia. Tällä tuntitaksalla pidätän oikeudet käyttää kuvia rajoituksetta omien kuvauspalveluideni markkinoitiin internet- ja some-kanavillani. Vastaavasti sinäkin saat jakaa kuvia halutessasi avoimesti internetissä, kunhan kuvaaja mainitaan.',
      'text-photopackages-p3': 'Olen havainnut, että joskus ihmiset kokevat kuvaustilanteet hyvin henkilökohtaisiksi. Tällöin kuvien käyttö markkinoinnissa voi tuntua kuvattavista epämukavalta. Haluan pystyä palvelemaan myös näitä henkilöitä. Siksi minut on mahdollista tilata myös sopimuksella, jossa molemmat osapuolet sitoutuvat siihen, ettei kuvia julkaista avoimesti. <b>Tällöin laskutan käyttöoikeuksista luopumisesta 50 prosentin lisämaksun</b>, jolloin tuntitaksakseni muodostuu <b>135 euroa</b> ja puolen tunnin taksaksi vastaavasti <b>67,5 euroa</b>. Saat kuitenkin jakaa valokuvia halutessasi sosiaalisessa mediassa rajatulle yleisölle, jolloin kuvaaja on niin ikään mainittava.',
      'text-photopackages-p4': 'Kuvauksesta 10 kilometrin päässä kodistani Helsingin Herttoniemessä perin <b>kilometrikorvauksen</b>, joka on <b>0,5 €/km</b>. Yli kolmen tunnin mittaisesta kuvauskeikasta perin etukäteen <b>20 prosenttia</b> työstä maksettavasta kokonaispalkkiosta.',
      'text-photopackages-p5': 'Minulta on mahdollista ostaa myös käsintehtyjä <b>lahjakortteja</b> eri kuvauspalveluihin. Mikä olisikaan ihanampi aineeton lahja rakkaalle ihmiselle, kuin vaikkapa sarja yhteiskuvia jossakin molemmille merkityksellisessä paikassa?',
      'text-photopackages-p6': 'Kiinnostuitko? Ota yhteyttä <a href="contact.html">lomakkeen</a> avulla ja käydään vaikka kahvilla. Jutellaan toiveistasi ja suunnitellaan kuvauspäivä, joka palvelee parhaalla mahdollisella tavalla sinun tarpeitasi.',
      'dl-photopackages-header':"Eri kuvaustilanteisiin suosittelen seuraavia kuvausaikoja, vaikkakin kuvauksiin tarvittava aika riippuu aina siitä millaisia kuvia asiakas toivoo",
      'dl-photopackages-dt1':"Hääkuvaus",
      'dl-photopackages-dl11':"- Vihkiseremonia ja potretit: 2–4 tuntia",
      'dl-photopackages-dl12':"- Dokumentaarinen hääkuvaus: 6–10 tuntia",
      'dl-photopackages-dt2':"Muu juhlakuvaus",
      'dl-photopackages-dl21':"- valmistujais-, syntymäpäivä-, ristijäis- tai polttarikuvaus : 2–10 tuntia",
      'dl-photopackages-dt3':"Minä itse -kuvaus",
      'dl-photopackages-dl31':"- odotuskuvaus, valmistujaiskuvaus tai muuten vain -kuvaus miljöössä: 0,5–2 tuntia",
      'dl-photopackages-dt4':"Perhekuvaus / lapsikuvaus / kihlakuvaus / parisuhdekuvaus / ystäväkuvaus miljöössä",
      'dl-photopackages-dl41':"- 1–2 tuntia",
      'dl-photopackages-dt5':"Lemmikkikuvaus miljöössä",
      'dl-photopackages-dl51':"- 1–2 tuntia",
      'text-thankyou': "Kiitos viestistäsi. Pyrin vastaamaan sinulle seuraavan vuorokauden aikana."
    }
  });

  update_texts();
});
