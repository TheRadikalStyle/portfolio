var alertacovid19 = new Vue({
  el: '#data-alertacovid19',
  data: {
    title: 'Alerta COVID19',
    platforms: {
      android: true,
      ios: true,
    },
    appType: 'Aplicación nativa',
    summary: 'Alerta COVID-19 nace al intentar ayudar a la Secretaría de Salud de' +
       'Nuevo León a tener una app que ofrezca mejor interacción al usuario' +
       'para que use el chat que se implementó, al igual que ayudar mejorar' +
       'las estadisticas de uso dando un mejor acceso a la información de' +
       'casos a través de una interfáz amigable.',
     carouselDroid:[
       { img: 'alertacovid19-android-1.png' },
       { img: 'alertacovid19-android-2.png' },
       { img: 'alertacovid19-android-3.png' },
       { img: 'alertacovid19-android-4.png' },
       { img: 'alertacovid19-android-5.png' }
     ],
     carouselIos:[
       { img: 'alertacovid19-ios-1.png' },
       { img: 'alertacovid19-ios-2.png' },
       { img: 'alertacovid19-ios-3.png' },
       { img: 'alertacovid19-ios-5.png' },
       { img: 'alertacovid19-ios-6.png' },
       { img: 'alertacovid19-ios-7.png' }
     ],
  },
});

var dashrx = new Vue({
  el: '#data-dashrx',
  data: {
    title: 'DashrX',
    platforms: {
      android: true,
      ios: false,
    },
    appType: 'Aplicación nativa',
    summary: 'DashrX brinda un HUD simple pero util diseñado para ayudar a visualizar la velocidad de tu vehiculo especialmente en un entorno nocturno sin perder de vista el camino.',
    carouselDroid:[
      { img: 'android-dashrx-1.webp' },
      { img: 'android-dashrx-2.png' },
      { img: 'android-dashrx-3.png' },
      { img: 'android-dashrx-4.png' },
      { img: 'android-dashrx-5.png' }
    ],
  },
});

var eei = new Vue({
  el: '#data-eei',
  data: {
    title: 'DashrX',
    platforms: {
      android: true,
      ios: false,
    },
    appType: 'Aplicación nativa',
    summary: 'DashrX brinda un HUD simple pero util diseñado para ayudar a visualizar la velocidad de tu vehiculo especialmente en un entorno nocturno sin perder de vista el camino.',
    carouselDroid:[
      { img: 'android-dashrx-1.webp' },
      { img: 'android-dashrx-2.png' },
      { img: 'android-dashrx-3.png' },
      { img: 'android-dashrx-4.png' },
      { img: 'android-dashrx-5.png' }
    ],
  },
});
