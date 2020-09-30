//Index - List of android projects
var androidProjects = new Vue({
  el: '#android-projects',
  data: {
    androidProjects: [
      { name: 'DashrX', id: '1', url: 'window.location.href="apps/index-dashrx.html"', thumb: 'android-dashrx.png' },
      { name: 'Checa Tu Peso', id: '2', url: 'window.location.href="apps/index-imc.html"', thumb: 'android-imc.png' },
      { name: 'Código embolia', id: '3', url: 'window.location.href="apps/index-ictus.html"', thumb: 'android-ictus.png' },
      { name: 'Lactancia educativa', id: '4', url: 'window.location.href="apps/index-lactapp.html"', thumb: 'android-lactancia.png' },
      { name: 'Encuentro estatal de investigación', id: '5', url: 'window.location.href="apps/index-eei.html"', thumb: 'android-EEI.png' },
      { name: 'Alerta COVID19', id: '6', url: 'window.location.href="apps/index-alertacovid19.html"', thumb: 'android-alertacovid19.png' },
      { name: 'Registro de entrega', id: '7', url: 'window.location.href="apps/index-registrodeentrega.html"', thumb: 'android-registrodeentrega.png' },
    ],
  },
});

//Index - List of iOS projects
var iOSProjects = new Vue({
  el: '#iOS-projects',
  data: {
    iOSProjects: [
      { name: 'Checa Tu Peso', id: '1', url: 'window.location.href="apps/index-imc.html"', thumb: 'android-imc.png' },
      { name: 'Código embolia', id: '2', url: 'window.location.href="apps/index-ictus.html"', thumb: 'android-ictus.png' },
      { name: 'Lactancia educativa', id: '3', url: 'window.location.href="apps/index-lactapp.html"', thumb: 'android-lactancia.png' },
      { name: 'Alerta COVID19', id: '4', url: 'window.location.href="apps/index-alertacovid19.html"', thumb: 'ios-alertacovid19.png' },
    ],
  },
});

//Index - List of iOS projects
var webProjects = new Vue({
  el: '#web-projects',
  data: {
    webProjects: [
      { name: 'Apoyos', id: '1', url: 'window.location.href="webs/index-.html"', thumb: 'web-apoyos.png' },
      { name: 'Nóminas', id: '2', url: 'window.location.href="webs/index-.html"', thumb: 'web-nominas.png' },
      { name: 'Gafetes', id: '3', url: 'window.location.href="webs/index-.html"', thumb: 'web-gafetes.png' },
      { name: 'LDRP', id: '4', url: 'window.location.href="webs/index-.html"', thumb: 'web-ldrp.png' },
      { name: 'Seguimiento de trámites', url:'window.location.href="webs/index-tramites.html"', thumb: 'web-tramites.png' },
      { name: 'Asenco', id: '4', url: 'window.location.href="webs/index-.html"', thumb: 'web-asenco.png' }
    ],
  },
});
