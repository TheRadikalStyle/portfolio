//Datos de aplicaciones

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
      { img: 'alertacovid19-ios-1.PNG' },
      { img: 'alertacovid19-ios-2.PNG' },
      { img: 'alertacovid19-ios-3.PNG' },
      { img: 'alertacovid19-ios-5.PNG' },
      { img: 'alertacovid19-ios-6.PNG' },
      { img: 'alertacovid19-ios-7.PNG' }
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

var encuestaEstatal = new Vue({
  el: '#data-eei',
  data: {
    title: 'Encuentro Estatal de Investigación',
    platforms: {
      android: true,
      ios: false,
    },
    appType: 'Aplicación nativa',
    summary: 'Aplicación que se usa para registrar a los asistentes a los eventos de investigación por parte del departamento de Enseñanza e Investigación de la Secretaría de Salud.',
    carouselDroid:[
      { img: 'android-EEI-1.png' },
      { img: 'android-EEI-2.png' },
      { img: 'android-EEI-3.png' },
      { img: 'android-EEI-4.png' }
    ],
  },
});


var codigoICTUS = new Vue({
  el: '#data-ictus',
  data: {
    title: 'Código ICTUS',
    platforms: {
      android: true,
      ios: false,
    },
    appType: 'Aplicación nativa',
    summary: 'Aplicación de ayuda a la población para detectar sintomas de una embolia cerebral (ICTUS).',
    carouselDroid:[
      { img: '' },
      { img: '' },
      { img: '' },
      { img: '' }
    ],
  },
});

var checaTuPeso = new Vue({
  el: '#data-imc',
  data: {
    title: 'Checa Tu Peso',
    platforms: {
      android: true,
      ios: true,
    },
    appType: 'Aplicación nativa',
    summary: 'Aplicación para concientizar a la población sobre los peligros del sobrepeso y la obesidad por medio de tips e invitando a estar activo incorporando un contador de pasos.',
    carouselDroid:[
      { img: 'android-imc-1.png' },
      { img: 'android-imc-1.png' },
      { img: 'android-imc-1.png' }
    ],
    carouselIos:[
      { img: 'ios-imc-1.png' },
      { img: 'ios-imc-2.png' }
    ],
  },
});

var lactanciaEducativa = new Vue({
  el: '#data-lactapp',
  data: {
    title: 'Lactancia Educativa',
    platforms: {
      android: true,
      ios: true,
    },
    appType: 'Aplicación nativa',
    summary: 'Proyecto realizado con fines de información e investigación sobre la lactancia' +
    'materna y su importancia, a traves de diapositivas convertidas en una experiencia similar' +
    'a cursos.' +
    '' +
    'Hace uso del inicio de sesión de Facebook para identificación del usuario,' +
    'se sigue su progreso en los cursos (tiempo, progreso, usuario) para enviarlos a un webservice al finalizar.' +
    '' +
    'Se conecta a un panel de administración donde se muestra el progreso de los estudiantes y ' +
    'exportación a excel de los mismos.',
    carouselDroid:[
      { img: 'android-lactancia-1.webp' },
      { img: 'android-lactancia-2.webp' },
      { img: 'android-lactancia-3.webp' },
      { img: 'android-lactancia-4.webp' }
    ],
    carouselIos:[
      { img: 'ios-lactancia-1.png' },
      { img: 'ios-lactancia-2.png' },
      { img: 'ios-lactancia-3.png' },
      { img: 'ios-lactancia-4.png' }
    ],
  },
});

var registroEntrega = new Vue({
  el: '#data-registrodeentrega',
  data: {
    title: 'Registro de entrega',
    platforms: {
      android: true,
      ios: false,
    },
    appType: 'Aplicación nativa',
    summary: 'Aplicación nativa Aplicación realizada para apoyar al equipo de colaboradores que registran ' +
    'a las personas que reciben una tarjeta de bonificación entregada por el gobierno de Nuevo León para apoyar en la contingencia COVID-19.',
    carouselDroid:[
      { img: 'android-registrodeentrega_1.png' },
      { img: 'android-registrodeentrega_2.png' },
      { img: 'android-registrodeentrega_3.png' },
      { img: 'android-registrodeentrega_4.png' },
      { img: 'android-registrodeentrega_5.png' }
    ],
  },
});
