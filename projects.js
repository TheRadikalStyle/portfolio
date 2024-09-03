const projects = [
    {
        id: 1,
        name: 'DashrX',
        thumb: 'android-dashrx.png',
        platforms: { android: true, ios: false, web: false },
        downloadStore: { playstore: null, appstore: null },
        appType: 'Aplicación nativa',
        appTypeIcon: 'mdi-cellphone',
        summary: `DashrX brinda un HUD simple pero util diseñado para ayudar a visualizar la velocidad de tu vehiculo 
                especialmente en un entorno nocturno sin perder de vista el camino.`,
        images: [
            'dashrx/android-dashrx-2.png', 'dashrx/android-dashrx-3.png', 'dashrx/android-dashrx-4.png',
            'dashrx/android-dashrx-5.png'
        ],
    },
    {
        id: 2,
        name: 'Checa Tu Peso',
        thumb: 'android-imc.png',
        platforms: { android: true, ios: true, web: false },
        downloadStore: { playstore: null, appstore: null },
        appType: 'Aplicación nativa',
        appTypeIcon: 'mdi-cellphone',
        summary: `Aplicación para concientizar a la población sobre los peligros del sobrepeso y la 
                obesidad por medio de tips e invitando a estar activo incorporando un contador de pasos.`,
        images: [
            'imc/android-imc-1.png', 'imc/android-imc-2.png', 'imc/android-imc-3.png', 'imc/ios-imc-1.png', 'imc/ios-imc-2.png'
        ],
    },
    {
        id: 3,
        name: 'Código embolia',
        thumb: 'android-ictus.png',
        platforms: { android: true, ios: false, web: false },
        downloadStore: { playstore: null, appstore: null },
        appType: 'Aplicación nativa',
        appTypeIcon: 'mdi-cellphone',
        summary: `Aplicación de ayuda a la población para detectar sintomas de una embolia cerebral (ICTUS)`,
        images: [],
    },
    {
        id: 4,
        name: 'Lactancia educativa',
        thumb: 'android-lactancia.png',
        platforms: { android: true, ios: true, web: false },
        downloadStore: { playstore: null, appstore: null },
        appType: 'Aplicación nativa',
        appTypeIcon: 'mdi-cellphone',
        summary: `Proyecto realizado con fines de información e investigación sobre la lactancia materna y 
            su importancia, a traves de diapositivas convertidas en una experiencia similar a cursos.
            
                Hace uso del inicio de sesión de Facebook para identificación del usuario,
                se sigue su progreso en los cursos (tiempo, progreso, usuario) para enviarlos a un webservice al finalizar.
            
                Se conecta a un panel de administración donde se muestra el progreso de los estudiantes y 
                exportación a excel de los mismos.`,
        images: [
            'lactapp/android-lactancia-1.webp', 'lactapp/android-lactancia-2.webp', 'lactapp/android-lactancia-3.webp', 'lactapp/android-lactancia-4.webp',
            'lactapp/ios-lactancia-1.png', 'lactapp/ios-lactancia-2.png', 'lactapp/ios-lactancia-3.png', 'lactapp/ios-lactancia-4.png'
        ],
    },
    {
        id: 5,
        name: 'Encuentro estatal de investigación',
        thumb: 'android-EEI.png',
        platforms: { android: true, ios: false, web: false },
        downloadStore: { playstore: null, appstore: null },
        appType: 'Aplicación nativa',
        appTypeIcon: 'mdi-cellphone',
        summary: `Aplicación que se usa para registrar a los asistentes a los eventos de investigación por parte del departamento de Enseñanza e Investigación de la Secretaría de Salud.`,
        images: [
            'eei/android-EEI-1.png', 'eei/android-EEI-2.png', 'eei/android-EEI-3.png', 'eei/android-EEI-4.png'
        ]
    },
    {
        id: 6,
        name: 'Alerta COVID19',
        thumb: 'android-alertacovid19.png',
        platforms: { android: true, ios: true, web: false },
        downloadStore: { playstore: null, appstore: null },
        appType: 'Aplicación nativa',
        appTypeIcon: 'mdi-cellphone',
        summary: `Alerta COVID-19 nace al intentar ayudar a la Secretaría de Salud de Nuevo León a tener una app 
                que ofrezca mejor interacción al usuario para que use el chat que se implementó, al igual que mejorar 
                las estadisticas de uso dando un mejor acceso a la información de casos a través de una interfáz amigable.`,
        images: [
            'alertacovid19/alertacovid19-android-1.png', 'alertacovid19/alertacovid19-android-2.png', 'alertacovid19/alertacovid19-android-3.png', 'alertacovid19/alertacovid19-android-4.png',
            'alertacovid19/alertacovid19-android-5.png', 'alertacovid19/alertacovid19-android-6.png', 'alertacovid19/alertacovid19-ios-1.PNG', 'alertacovid19/alertacovid19-ios-2.PNG',
            'alertacovid19/alertacovid19-ios-3.PNG', 'alertacovid19/alertacovid19-ios-5.PNG', 'alertacovid19/alertacovid19-ios-6.PNG', 'alertacovid19/alertacovid19-ios-7.PNG'
        ]
    },
    {
        id: 7,
        name: 'Registro de entrega',
        thumb: 'android-registrodeentrega.png',
        platforms: { android: true, ios: false, web: false },
        downloadStore: { playstore: null, appstore: null },
        appType: 'Aplicación nativa',
        appTypeIcon: 'mdi-cellphone',
        summary: `Aplicación realizada para apoyar al equipo de colaboradores que registran a 
                las personas que reciben una tarjeta de bonificación entregada por el gobierno 
                de Nuevo León para apoyar en la contingencia COVID-19.`,
        images: [
            'registrodeentrega/android-registrodeentrega_1.png', 'registrodeentrega/android-registrodeentrega_2.png', 'registrodeentrega/android-registrodeentrega_3.png', 'registrodeentrega/android-registrodeentrega_4.png',
            'registrodeentrega/android-registrodeentrega_5.png'
        ],
    },
    {
        id: 8,
        name: 'Registro Vacunación Influenza',
        thumb: 'android-reg-vacinflu.png',
        platforms: { android: true, ios: false, web: false },
        appType: 'Aplicación nativa',
        downloadStore: { playstore: null, appstore: null },
        appTypeIcon: 'mdi-cellphone',
        summary: 'Aplicación realizada para agilizar el Drive Thru de vacunación contra la influenza' +
            'los doctores escanearán el QR de los usuarios registrados y la app actualiza valores en los servidores.',
        images: [
            'SSNL_VacInflu/android-ssnl-vacinflu-1.png', 'SSNL_VacInflu/android-ssnl-vacinflu-2.png', 'SSNL_VacInflu/android-ssnl-vacinflu-3.png'
        ],
    },
    {
        id: 9,
        name: 'Atención y Seguimiento de Trámites',
        thumb: 'ssnl-general.png',
        platforms: { android: false, ios: false, web: true },
        appType: 'Web',
        downloadStore: { playstore: null, appstore: null },
        appTypeIcon: 'mdi-web',
        tech: [
            { tecno: 'HTML' },
            { tecno: 'PHP' },
            { tecno: 'Yii2 framework' }
        ],
        summary: `Sistema para la Subsecretaría de Regulación y Fomento Sanitario de la Secretaría de Salud de Nuevo León, donde se ingresan los 
                trámites correspondientes al area para control y asignación, también se proporciona una forma en la que la persona involucrada puede darle 
                seguimiento a su trámite.`,
        images: [
            'web-tramites/web-tramites-1.png', 'web-tramites/web-tramites-2.png', 'web-tramites/web-tramites-3.png',
            'web-tramites/web-tramites-4.png', 'web-tramites/web-tramites-5.png', 'web-tramites/web-tramites-6.png'
        ],
    },
    {
        id: 10,
        name: 'Apoyos',
        thumb: 'ssnl-general.png',
        platforms: { android: false, ios: false, web: true },
        appType: 'Web',
        downloadStore: { playstore: null, appstore: null },
        appTypeIcon: 'mdi-web',
        tech: [
            { tecno: "PHP" },
            { tecno: "Yii2" },
            { tecno: "Bootstrap" },
            { tecno: "JavaScript" },
        ],
        summary: `Sistema para captura de los apoyos otorgados por el departamento de Gestoría y Atención Ciudadana de la Secretaría de Salud de Nuevo León.`,
        images: [
            'web-apoyos/web-apoyos-1.png', 'web-apoyos/web-apoyos-2.png', 'web-apoyos/web-apoyos-3.png',
            'web-apoyos/web-apoyos-4.png', 'web-apoyos/web-apoyos-5.png',
        ],
    },
    {
        id: 11,
        name: 'Sistema LDRP',
        thumb: 'ssnl-general.png',
        platforms: { android: false, ios: false, web: true },
        appType: 'Web',
        downloadStore: { playstore: null, appstore: null },
        appTypeIcon: 'mdi-web',
        tech: [
            { tecno: "PHP" },
            { tecno: "Yii2" },
            { tecno: "Bootstrap" },
            { tecno: "JavaScript" },
        ],
        summary: `Sistema para captura de licencias sanitarias, reconocimientos y permisos sanitarios, así como
                el distintivo salud que otroga la Subsecretaría de Regulación y Fomento Sanitario de la 
                Secretaría de Salud de Nuevo León.`,
        images: [
            'web-ldrp/web-ldrp-1.png', 'web-ldrp/web-ldrp-2.png', 'web-ldrp/web-ldrp-3.png'
        ],
    },
    {
        id: 12,
        name: 'Gafetes',
        thumb: 'ssnl-general.png',
        platforms: { android: false, ios: false, web: true },
        appType: 'Web',
        downloadStore: { playstore: null, appstore: null },
        appTypeIcon: 'mdi-web',
        tech: [
            { tecno: "PHP" },
            { tecno: "Yii2" },
            { tecno: "Bootstrap" },
            { tecno: "JavaScript" },
        ],
        summary: `Sistema para captura de licencias sanitarias, reconocimientos y permisos sanitarios, así como
                el distintivo salud que otroga la Subsecretaría de Regulación y Fomento Sanitario de la 
                Secretaría de Salud de Nuevo León.`,
        images: [
            'web-gafetes/gafetes-1.png', 'web-gafetes/gafetes-2.png', 'web-gafetes/gafetes-3.png',
            'web-gafetes/gafetes-4.png', 'web-gafetes/gafetes-5.png', 'web-gafetes/gafetes-6.png',
            'web-gafetes/gafetes-7.png'
        ],
    },
    {
        id: 13,
        name: 'Coberturas universales contra el cancer',
        thumb: 'ssnl-general.png',
        platforms: { android: false, ios: false, web: true },
        appType: 'Web',
        downloadStore: { playstore: null, appstore: null },
        appTypeIcon: 'mdi-web',
        tech: [
            { tecno: 'HTML' },
            { tecno: 'VueJS' },
            { tecno: 'MySQL' },
            { tecno: 'SweetAlert2' }
        ],
        summary: `Landing pages para informar sobre las coberturas universales contra el cancer infantil y 
                cancer de mama que ofrece el gobierno del estado de Nuevo León.`,
        images: [
            'web-cobertura/cobertura-infan-1.png', 'web-cobertura/cobertura-infan-2.png', 'web-cobertura/cobertura-infan-3.png',
            'web-cobertura/cobertura-mama-1.png', 'web-cobertura/cobertura-mama-2.png', 'web-cobertura/cobertura-mama-3.png',
            'web-cobertura/cobertura-infan-mob-1.png', 'web-cobertura/cobertura-mama-mob-1.png'
        ],
    },
    {
        id: 14,
        name: 'Unraitte | Consola administrativa',
        thumb: 'web-unraitte.png',
        platforms: { android: false, ios: false, web: true },
        appType: 'Web',
        downloadStore: { playstore: null, appstore: null },
        appTypeIcon: 'mdi-web',
        tech: [
            { tecno: "HTML" },
            { tecno: "PHP" },
            { tecno: "MySQL" },
            { tecno: "Yii2 Framework" },
            { tecno: "SweetAlert2" },
        ],
        summary: `FrontEnd amigable que ayuda al personal de la empresa Unraitte con las altas / bajas de conductores / vehiculos y
                sus respectivos documentos, al conectarse a la API del Instituto de Movilidad y Accesibilidad de Nuevo León.`,
        images: [
            'web-unraitte-console/unraitte-console-1.png', 'web-unraitte-console/unraitte-console-2.png', 'web-unraitte-console/unraitte-console-3.png',
            'web-unraitte-console/unraitte-console-4.png', 'web-unraitte-console/unraitte-console-5.png', 'web-unraitte-console/unraitte-console-6.png',
            'web-unraitte-console/unraitte-console-7.png', 'web-unraitte-console/unraitte-console-8.png'
        ],
    },

];