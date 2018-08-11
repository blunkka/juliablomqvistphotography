jQuery(document).ready(function() {

  var setDefaultLang = function() {
    var selectedLocale = localStorage.getItem('jbplocale');
    if(selectedLocale === null) {
      localStorage.setItem('jbplocale', 'fi');
    }
  }

  var lang_param = function() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    /*
    
    
    var l = url.searchParams.get('lang');
    
    
    if(l!==null) {
      if(l.trim()==='fi' || l.trim()==='FI' || l.trim()==='en' || l.trim()==='EN') {
        localStorage.setItem('jbplocale', l.toLowerCase());
      } else {
        setDefaultLang();
      }
      clear_lang_param();
    } else {
      setDefaultLang();
    }
    */
   setDefaultLang();
  };

  var clear_lang_param = function() {
    // get the string following the ?
    var query = window.location.search.substring(1);
    // is there anything there ?
    if(query.length) {
      // are the new history methods available ?
      if(window.history != undefined && window.history.pushState != undefined) {
            // if pushstate exists, add a new state the the history, this changes the url without reloading the page
            window.history.pushState({}, document.title, window.location.pathname);
      }
    }
  };

  var update_texts = function() {
    lang_param();

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
      'nav-photopackages': 'Pricing',
      'nav-contact': 'Contact me',
      'nav-close': 'Close x',
      'title-intro': 'Party photoshoot, family photoshoot, portrait photoshoot, pet photoshoot',
      'header-intro': 'Nice that you found my website!',
      'text-intro': 'I’m Julia Blomqvist, a 30-year-old family photographer from Helsinki. I strongly believe that every individual, relationship and moment is unique and beautiful in it’s own way. I feel that I have succeeded as a photographer when I manage to capture that beauty so that the outcome is as natural as possible. This means I don’t aim to take shoots that look like ads. Instead my goal is to create images from which you can easily recognize the best qualities of yourself and your loved ones. Pictures that help you to remember those moments and relationships, which are close to your heart. I shoot mainly in the metropoly area of Helsinki, but I can be hired to photograph everywhere in Finland. In addition to Finnish I can serve my customers in English and German. If you got interested, contact me via the contact form and I will reply within 24 hours. I can’t wait to hear from you and plan a photo shoot together that serves your needs in the best possible way.',
      'title-portfolio': 'Portfolio',
      'header-about': 'Hi there!',
      'text-about-p1': 'I’m a thirty years old photographer from Helsinki Finland, who has always been inspired by people and their life stories.',
      'text-about-p2': 'Photography has been a part of my everyday life already as a child. It’s because my father used to photograph a lot when I was young and he still does. Pictures taken by him have helped me to remember things from way back then and many of the images have become very important to me.',
      'text-about-p3': 'I personally got excited about photography when I got my first system camera in 2010. I instantly started to shoot at home and on holidays, but I didn’t see photography as something I would like to do for work yet.',
      'text-about-p4': 'In summer 2017 I was personally at a crossroads in my life. I graduated from university, but I felt I would like to do something more creative for work than people with my degree usually do.',
      'text-about-p5': 'That summer I also got married. While searching for my own wedding photographer I realized that people actually photograph ”regular” people outside the studio for work. I felt inspired and photographed a few weddings and child naming ceremonies. After those experiences I knew photography was something I enjoyed doing.',
      'text-about-p6': 'My aim as a photographer can be squeezed to one word: naturalness. I don’t do heavy editing and I strive to find the natural beauty in every individual I photograph.',
      'text-about-p7': 'If you got interested, don’t hesitate to contact me through the contact form on my website. I aim to answer you in 24 hours.',
      'text-about-p8': 'I’m very open to different kinds of projects so don’t be afraid to suggest ”crazy” or ”unusual” photography ideas to me. My ultimate goal is to take pictures that give you joy for the rest of your life.',
      'text-about-p9': 'Waiting for your message',
      'image-text-about': "Me at a German farm year 1990. Photo: Michael Müller",
      'header-contact': 'Awesome!',
      'text-contact-p1': 'I’m very happy, if after seeing my webpage you have decided that you want to get to know me better and let me photo capture something that is important for you.',
      'text-contact-p2': 'Please tell me in the contact form at least when, where and for how long you would like to order me to photograph. I aim to reply to your message within 24 hours. If we agree that I’m the right photographer for you, we meet in person or talk on the phone before we sign the contract.',
      'header-contact-form': 'Contact form',
      'contact-form-placeholder-name':'Name',
      'contact-form-placeholder-email':'Email',
      'contact-form-placeholder-phone':'Phonenumber',
      'contact-form-placeholder-message':'Message',
      'contact-form-button': 'Send',
      'header-photopackages': 'My services',
      'text-photopackages-p1': 'My charging is based on the time I put to the photography session. However, I do promise <b>a minimum amount of carefully edited images</b> for each hour I shoot. The time and price of the session are always agreed with the customer beforehand. <b>I promise to deliver the pictures digitally within two weeks</b>. I’m a beginner in professional photography, which has been taken into account in my fees. <b>I always charge via Ukko.fi</b>, which guarantees, that taxes are being paid correctly from my photography pay.',
      'text-photopackages-p2': '<b>I charge 90 euros for one hour</b> and <b>45 euros for half an hour</b>. From a <b>one hour photography session I promise at least 20 edited images</b> and <b>from half an hour 3 images</b>. With these prices I’m allowed to use the pictures for marketing my photography services online etc. You are also allowed to share the pictures on Facebook and on other platforms if you wish, as long as the photographer is being mentioned.',
      'text-photopackages-p3': 'I have noticed that sometimes people find a photography session and images of themselves or their children very intimate and are therefore uncomfortable by the idea that the pictures are showed in public for example on my website. I want to be able to serve these customers as well. Therefore <b>I also offer a contract where both sides agree not to publish the images online</b> or anywhere else <b>in public</b>. In this case <b>I charge fifty per cent extra for the service</b>, which means that my fee for one hour is <b>135 euros</b> and for half an hour <b>67,5 euros</b>. However you can share the photos in social media to a limited group of people if you like, in which case the photographer must be mentioned as well.',
      'text-photopackages-p4': 'From a photography session over 10 kilometres away from my home in Herttoniemi, <b>I charge a kilometre allowance, which is 0,5 euros per kilometre</b>. For <b>a photography session over three hours I charge 20 per cent</b> of the fee <b>beforehand</b>.',
      'text-photopackages-p5': 'I also sell <b>handmade gift cards</b> for the price of 5 euros to the different photography services. What would be a better gift to somebody you love than a series of pictures of you together in a setting that represents the relationship of you two?',
      'text-photopackages-p6': 'Did you get interested? Contact me via the contact form and let’s go for a coffee to chat. We can discuss about your ideas and plan a photo shoot session that serves your needs as well as possible.',
      'dl-photopackages-header':'I recommend following amounts of time for the different photography sessions, although the time needed depends always of what kind of photos the client wishes to receive',
      'dl-photopackages-dt1': '<b>Wedding photography</b>',
      'dl-photopackages-dl11': '- Ceremony and portraits: 2 to 4 hours',
      'dl-photopackages-dl12': '- Documentary wedding photography: 6 to 10 hours',
      'dl-photopackages-dt2': '<b>A party photo shoot</b>',
      'dl-photopackages-dl21': '- graduation-, birthday-, baptism- or bachelor/bachelorette –celebration: 2 to 10 hours',
      'dl-photopackages-dt3': '<b>A personal photo shoot</b>',
      'dl-photopackages-dl31': '- maternity or graduation photography session in a setting: 0,5 to 2 hours',
      'dl-photopackages-dt4': '<b>A family/ child/ engagement/ love story or friendship photo shoot in a setting</b>',
      'dl-photopackages-dl41': '- 1 to 2 hours',
      'dl-photopackages-dt5': '<b>A pet photo shoot in setting</b>',
      'dl-photopackages-dl51': '- 1 to 2 hours',
      'header-thankyou': 'Thank you for your message!',
      'text-thankyou': 'I aim to reply to your message within 24 hours.',
      'image-text-contact': 'Photo: Aki Blomqvist'
    },
    'fi': {
      'nav-home': 'Etusivu',
      'nav-about': 'Moikka, olen Julia',
      'nav-photopackages': 'Hinnasto',
      'nav-contact': 'Ota yhteyttä',
      'nav-close': 'Sulje x',
      'title-intro': 'Juhlakuvaus, perhekuvaus, potrettikuvaus, lemmikkikuvaus',
      'header-intro': 'Kiva, kun löysit sivustoni!',
      'text-intro': 'Minä olen Julia Blomqvist, 31-vuotias perhevalokuvaaja Helsingistä. Uskon vakaasti siihen, että jokainen yksilö, ihmissuhde ja hetki on omalla tavallaan ainutlaatuinen ja kaunis. Koenkin onnistuneeni valokuvaajana parhaiten silloin, kun pystyn ikuistamaan tämän kauneuden niin, että lopputulos on mahdollisimman luonnollinen. En siis pyri valokuvauksessa mainosmaisiin otoksiin, vaan tavoitteenani on ottaa kuvia, joista sinun on helppo tunnistaa omasi ja läheistesi parhaat puolet. Kuvia, jotka auttavat muistamaan niitä hetkiä, ihmissuhteita ja asioita, jotka ovat elämässäsi tärkeitä. Minut voi tilata valokuvaamaan ympäri Suomea, vaikkakin kuvaan pääsääntöisesti pääkaupunkiseudulla. Ota rohkeasti yhteyttä ja suunnitellaan yhdessä kuvauspäivä, joka täyttää parhaalla mahdollisella tavalla toiveesi.',
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
      'image-text-about': 'Minä saksalaisella maatilalla vuonna 1990. Kuva: Michael Müller',
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
      'text-photopackages-p4': 'Kuvauksesta yli 10 kilometrin päässä kodistani Helsingin Herttoniemessä perin <b>kilometrikorvauksen</b>, joka on <b>0,5 €/km</b>. Yli kolmen tunnin mittaisesta kuvauskeikasta perin etukäteen <b>20 prosenttia</b> työstä maksettavasta kokonaispalkkiosta.',
      'text-photopackages-p5': 'Minulta on mahdollista ostaa myös käsintehtyjä <b>lahjakortteja</b> eri kuvauspalveluihin. Mikä olisikaan ihanampi aineeton lahja rakkaalle ihmiselle, kuin vaikkapa sarja yhteiskuvia jossakin molemmille merkityksellisessä paikassa?',
      'text-photopackages-p6': 'Kiinnostuitko? Ota yhteyttä <a href="contact.html">lomakkeen</a> avulla ja käydään vaikka kahvilla. Jutellaan toiveistasi ja suunnitellaan kuvauspäivä, joka palvelee parhaalla mahdollisella tavalla sinun tarpeitasi.',
      'dl-photopackages-header':'Eri kuvaustilanteisiin suosittelen seuraavia kuvausaikoja, vaikkakin kuvauksiin tarvittava aika riippuu aina siitä millaisia kuvia asiakas toivoo',
      'dl-photopackages-dt1': '<b>Hääkuvaus</b>',
      'dl-photopackages-dl11': '- Vihkiseremonia ja potretit: 2–4 tuntia',
      'dl-photopackages-dl12': '- Dokumentaarinen hääkuvaus: 6–10 tuntia',
      'dl-photopackages-dt2': '<b>Muu juhlakuvaus</b>',
      'dl-photopackages-dl21': '- valmistujais-, syntymäpäivä-, ristiäis- tai polttarikuvaus : 2–10 tuntia',
      'dl-photopackages-dt3': '<b>Minä itse -kuvaus</b>',
      'dl-photopackages-dl31': '- odotuskuvaus, valmistujaiskuvaus tai muuten vain -kuvaus miljöössä: 0,5–2 tuntia',
      'dl-photopackages-dt4': '<b>Perhekuvaus / lapsikuvaus / kihlakuvaus / parisuhdekuvaus / ystäväkuvaus miljöössä</b>',
      'dl-photopackages-dl41': '- 1–2 tuntia',
      'dl-photopackages-dt5': '<b>Lemmikkikuvaus miljöössä</b>',
      'dl-photopackages-dl51': '- 1–2 tuntia',
      'header-thankyou': 'Kiitos viestistäsi!',
      'text-thankyou': 'Pyrin vastaamaan sinulle seuraavan vuorokauden aikana.',
      'image-text-contact': 'Kuva: Aki Blomqvist'
    }
  });

  update_texts();
});
