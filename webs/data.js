var tramites = new Vue({
  el: '#data-tramites',
  data: {
    title: 'Sistema de trámites',
    summary: 'Sistema para la Subsecretaría de Regulación y Fomento Sanitario de la Secretaría de Salud de Nuevo León',
    appType: 'Web',
    tech:[
      { tecno: 'HTML' },
      { tecno: 'PHP' },
      { tecno: 'Yii2 framework' }
    ],
    carousel:[
      { img: 'alertacovid19-android-1.png' }
    ],
  },
});

var registroVacInfluenza = new Vue({
  el: '#data-registro-vacuna-influenza',
  data: {
    title: 'Sistema de registro para vacunación contra la influenza',
    summary: 'Sistema para la Secretaría de Salud de Nuevo León para llevar un' +
              'registro de las personas a vacunar y tener fluidez en su aplicación' +
              'en el modulo drive thru. Se acompaña de una app para el personal médico. http://saludnl.gob.mx/vacunacion/influenza',
    appType: 'Web',
    tech:[
      { tecno: 'HTML' },
      { tecno: 'PHP' },
      { tecno: 'MySQL' },
      { tecno: 'Yii2 Framework' },
      { tecno: 'Sweet Alert 2' }
    ],
    carousel:[
      { img: 'reg_vac_influenza_1.png' },
      { img: 'reg_vac_influenza_2.png' },
      { img: 'reg_vac_influenza_3.png' },
      { img: 'reg_vac_influenza_4.png' },
      { img: 'reg_vac_influenza_5.png' },
      { img: 'reg_vac_influenza_6.png' },
    ],
  },
});
