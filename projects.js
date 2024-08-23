const projects = Vue.createApp({
    data() {
        return [
            {
                name: 'DashrX', id: '1', url: 'renderPage("apps/index-dashrx.html")', thumb: 'android-dashrx.png',
                platforms: { android: true, ios: false, web: false },
                downloadStore: { playstore: null, appstore: null },
                appType: 'Aplicación nativa',
                appTypeIcon: 'mdi-cellphone',
                summary: 'DashrX brinda un HUD simple pero util diseñado para ayudar a visualizar la velocidad de tu vehiculo especialmente en un entorno nocturno sin perder de vista el camino.',
                images: [
                    'android-dashrx-1.webp', 'android-dashrx-2.png', 'android-dashrx-3.png', 'android-dashrx-4.png',
                    'android-dashrx-5.png'
                ],
            },
            {
                name: 'Checa Tu Peso', id: '2', url: 'renderPage("apps/index-imc.html")', thumb: 'android-imc.png',
                platforms: { android: true, ios: false, web: false },
                downloadStore: { playstore: null, appstore: null },
                appType: 'Aplicación nativa',
                appTypeIcon: 'mdi-cellphone',
                summary: 'Aplicación para concientizar a la población sobre los peligros del sobrepeso y la obesidad por medio de tips e invitando a estar activo incorporando un contador de pasos.',
                images: [
                    'android-imc-1.png', 'android-imc-2.png', 'android-imc-3.png', 'ios-imc-1.png', 'ios-imc-2.png'
                ],
            },
            {
                name: 'Código embolia', id: '3', url: 'renderPage("apps/index-ictus.html")', thumb: 'android-ictus.png',
                platforms: { android: true, ios: false, web: false },
                downloadStore: { playstore: null, appstore: null },
                appType: 'Aplicación nativa',
                appTypeIcon: 'mdi-cellphone',
                summary: 'Aplicación de ayuda a la población para detectar sintomas de una embolia cerebral (ICTUS)',
                images: [],
            },
            {
                name: 'Lactancia educativa', id: '4', url: 'renderPage("apps/index-lactapp.html")', thumb: 'android-lactancia.png',
                platforms: { android: true, ios: true, web: false },
                downloadStore: { playstore: null, appstore: null },
                appType: 'Aplicación nativa',
                appTypeIcon: 'mdi-cellphone',
                summary: 'Proyecto realizado con fines de información e investigación sobre la lactancia' +
                    'materna y su importancia, a traves de diapositivas convertidas en una experiencia similar' +
                    'a cursos.' +
                    '' +
                    'Hace uso del inicio de sesión de Facebook para identificación del usuario,' +
                    'se sigue su progreso en los cursos (tiempo, progreso, usuario) para enviarlos a un webservice al finalizar.' +
                    '' +
                    'Se conecta a un panel de administración donde se muestra el progreso de los estudiantes y ' +
                    'exportación a excel de los mismos.',
                images: [
                    'android-lactancia-1.webp', 'android-lactancia-2.webp', 'android-lactancia-3.webp', 'android-lactancia-4.webp',
                    'ios-lactancia-1.png', 'ios-lactancia-2.png', 'ios-lactancia-3.png', 'ios-lactancia-4.png'
                ],
            },
            { name: 'Encuentro estatal de investigación', id: '5', url: 'renderPage("apps/index-eei.html")', thumb: 'android-EEI.png' },
            { name: 'Alerta COVID19', id: '6', url: 'renderPage("apps/index-alertacovid19.html")', thumb: 'android-alertacovid19.png' },
            { name: 'Registro de entrega', id: '7', url: 'renderPage("apps/index-registrodeentrega.html")', thumb: 'android-registrodeentrega.png' },
            { name: 'Registro Vacunación Influenza', id: '8', url: 'renderPage("apps/index-ssnlvacinflu.html")', thumb: 'android-reg-vacinflu.png' },

        ]
    },
});