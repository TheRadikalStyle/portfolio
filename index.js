//Index - List of android projects
var androidProjects = new Vue({
    el: '#android-projects',
    data: {
        androidProjects: [
            { name: 'DashrX', id: '1', url: 'renderPage("apps/index-dashrx.html")', thumb: 'android-dashrx.png' },
            { name: 'Checa Tu Peso', id: '2', url: 'renderPage("apps/index-imc.html")', thumb: 'android-imc.png' },
            { name: 'Código embolia', id: '3', url: 'renderPage("apps/index-ictus.html")', thumb: 'android-ictus.png' },
            { name: 'Lactancia educativa', id: '4', url: 'renderPage("apps/index-lactapp.html")', thumb: 'android-lactancia.png' },
            { name: 'Encuentro estatal de investigación', id: '5', url: 'renderPage("apps/index-eei.html")', thumb: 'android-EEI.png' },
            { name: 'Alerta COVID19', id: '6', url: 'renderPage("apps/index-alertacovid19.html")', thumb: 'android-alertacovid19.png' },
            { name: 'Registro de entrega', id: '7', url: 'renderPage("apps/index-registrodeentrega.html")', thumb: 'android-registrodeentrega.png' },
            { name: 'Registro Vacunación Influenza', id: '8', url: 'renderPage("apps/index-ssnlvacinflu.html")', thumb: 'android-reg-vacinflu.png' },
        ],
    },
});

//Index - List of iOS projects
var iOSProjects = new Vue({
    el: '#iOS-projects',
    data: {
        iOSProjects: [
            { name: 'Checa Tu Peso', id: '1', url: 'renderPage("apps/index-imc.html")', thumb: 'android-imc.png' },
            { name: 'Código embolia', id: '2', url: 'renderPage("apps/index-ictus.html")', thumb: 'android-ictus.png' },
            { name: 'Lactancia educativa', id: '3', url: 'renderPage("apps/index-lactapp.html")', thumb: 'android-lactancia.png' },
            { name: 'Alerta COVID19', id: '4', url: 'renderPage("apps/index-alertacovid19.html")', thumb: 'ios-alertacovid19.png' },
        ],
    },
});

//Index - List of web projects
var webProjects = new Vue({
    el: '#web-projects',
    data: {
        webProjects: [
            { name: 'Apoyos', id: '1', url: 'renderPage("webs/index-apoyos.html")', thumb: 'ssnl-general.png' },
            { name: 'Nóminas', id: '2', url: 'renderPage("webs/index-.html")', thumb: 'ssnl-general.png' },
            { name: 'Gafetes', id: '3', url: 'renderPage("webs/index-.html")', thumb: 'ssnl-general.png' },
            { name: 'LDRP', id: '4', url: 'renderPage("webs/index-ldrp.html")', thumb: 'ssnl-general.png' },
            { name: 'Seguimiento de trámites', id: '5', url: 'renderPage("webs/index-tramites.html")', thumb: 'ssnl-general.png' },
            { name: 'Asenco', id: '4', id: '6', url: 'renderPage("webs/index-asenco.html")', thumb: 'web-asenco.png' },
            { name: 'Registro Vacunación Influenza', id: '7', url: 'renderPage("webs/index-registro-vac-influenza.html")', thumb: 'ssnl-general.png' },
            { name: 'RED Cancer', id: '8', url: 'renderPage("webs/index-red-cancer.html")', thumb: 'ssnl-general.png' },
            { name: 'Registro Vacunación Personal de Salud', id: '9', url: 'renderPage("webs/index-reg-covid19-persalud.html")', thumb: 'ssnl-general.png' },
            { name: 'Unraitte | Consola administración', id: '10', url: 'renderPage("webs/index-unraitte-console.html")', thumb: 'web-unraitte.png' }
        ],
    },
});