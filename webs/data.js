/**
 * Webs Settings
<<<<<<< HEAD
 *
 * appTypeIcon: 'mdi-web', 'mdi-android', 'mdi-apple-ios'
 *
 *
 *
 */

var tramites = new Vue({
  el: "#data-tramites",
  data: {
    title: "Atención y Seguimiento de Trámites",
    summary:
      "Sistema para la Subsecretaría de Regulación y Fomento Sanitario de la Secretaría de Salud de Nuevo León, donde se ingresan los " +
      "trámites correspondientes al area para control y asignación, también se proporciona una forma en la que la persona involucrada puede darle " +
      "seguimiento a su trámite.",
    link: "http://saludnl.gob.mx/regulacion-sanitaria/tramites",
    appType: "Web",
    appTypeIcon: "mdi-web",
    tech: [{ tecno: "HTML" }, { tecno: "PHP" }, { tecno: "Yii2 framework" }],
    carousel: [
      { img: "web-tramites-1.png" },
      { img: "web-tramites-2.png" },
      { img: "web-tramites-3.png" },
      { img: "web-tramites-4.png" },
      { img: "web-tramites-5.png" },
      { img: "web-tramites-6.png" },
    ],
  },
=======
 * 
 * appTypeIcon: 'mdi-web', 'mdi-android', 'mdi-apple-ios' 
 * 
 * 
 * 
 */


var tramites = new Vue({
    el: '#data-tramites',
    data: {
        title: 'Atención y Seguimiento de Trámites',
        summary: 'Sistema para la Subsecretaría de Regulación y Fomento Sanitario de la Secretaría de Salud de Nuevo León, donde se ingresan los ' +
            'trámites correspondientes al area para control y asignación, también se proporciona una forma en la que la persona involucrada puede darle ' +
            'seguimiento a su trámite.',
        link: 'http://saludnl.gob.mx/regulacion-sanitaria/tramites',
        appType: 'Web',
        appTypeIcon: 'mdi-web',
        tech: [
            { tecno: 'HTML' },
            { tecno: 'PHP' },
            { tecno: 'Yii2 framework' }
        ],
        carousel: [
            { img: 'web-tramites-1.png' },
            { img: 'web-tramites-2.png' },
            { img: 'web-tramites-3.png' },
            { img: 'web-tramites-4.png' },
            { img: 'web-tramites-5.png' },
            { img: 'web-tramites-6.png' },
        ],
    },
>>>>>>> a41cbb7f4e2ffe96c95d150ffce60198515d3685
});

var asenco = new Vue({
  el: "#data-asenco",
  data: {
    title: "ASENCO Integram S.A. de C.V.",
    summary: "Página web para la consultora ASENCO Integram S.A. de C.V.",
    link: " http://www.asenco.mx",
    appType: "Web",
    appTypeIcon: "mdi-web",
    tech: [{ tecno: "Wordpress" }],
    carousel: [
      { img: "web-asenco-1.png" },
      { img: "web-asenco-2.png" },
      { img: "web-asenco-3.png" },
    ],
  },
});

var registroVacInfluenza = new Vue({
  el: "#data-registro-vacuna-influenza",
  data: {
    title: "Sistema de registro para vacunación contra la influenza",
    summary:
      "Sistema para la Secretaría de Salud de Nuevo León para llevar un" +
      "registro de las personas a vacunar y tener fluidez en su aplicación" +
      "en el modulo drive thru. Se acompaña de una app para el personal médico.",
    link: "http://saludnl.gob.mx/vacunacion/influenza",
    appType: "Web",
    appTypeIcon: "mdi-web",
    tech: [
      { tecno: "HTML" },
      { tecno: "PHP" },
      { tecno: "MySQL" },
      { tecno: "Yii2 Framework" },
      { tecno: "Sweet Alert 2" },
    ],
    carousel: [
      { img: "reg_vac_influenza_1.png" },
      { img: "reg_vac_influenza_2.png" },
      { img: "reg_vac_influenza_3.png" },
      { img: "reg_vac_influenza_4.png" },
      { img: "reg_vac_influenza_5.png" },
      { img: "reg_vac_influenza_6.png" },
    ],
  },
});

var redCancer = new Vue({
  el: "#data-red-cancer",
  data: {
    title: "Sistema RED Cancer",
    summary:
      "Sistema para captura de los casos de cancer en el estado de Nuevo León.",
    appType: "Web",
    appTypeIcon: "mdi-web",
    tech: [
      { tecno: "PHP" },
      { tecno: "Yii2" },
      { tecno: "Bootstrap" },
      { tecno: "JavaScript" },
    ],
    carousel: [{ img: "red-cancer-1.png" }],
  },
});

var apoyos = new Vue({
  el: "#data-apoyos",
  data: {
    title: "Apoyos",
    summary:
      "Sistema para captura de los apoyos otorgados por el departamento de Gestoría y Atención Ciudadana de la Secretaría de Salud de Nuevo León.",
    appType: "Web",
    appTypeIcon: "mdi-web",
    tech: [
      { tecno: "PHP" },
      { tecno: "Yii2" },
      { tecno: "Bootstrap" },
      { tecno: "JavaScript" },
    ],
    carousel: [
      { img: "web-apoyos-1.png" },
      { img: "web-apoyos-2.png" },
      { img: "web-apoyos-3.png" },
    ],
  },
});

var ldrp = new Vue({
<<<<<<< HEAD
  el: "#data-ldrp",
  data: {
    title: "Sistema LDRP",
    summary:
      "Sistema para captura de licencias sanitarias, reconocimientos y permisos sanitarios, así como " +
      "el distintivo salud que otroga la Subsecretaría de Regulación y Fomento Sanitario de la Secretaría de Salud de Nuevo León.",
    appType: "Web",
    appTypeIcon: "mdi-web",
    tech: [
      { tecno: "PHP" },
      { tecno: "Yii2" },
      { tecno: "Bootstrap" },
      { tecno: "JavaScript" },
    ],
    carousel: [
      { img: "web-ldrp-1.png" },
      { img: "web-ldrp-2.png" },
      { img: "web-ldrp-3.png" },
    ],
  },
=======
    el: '#data-ldrp',
    data: {
        title: 'Sistema LDRP',
        summary: 'Sistema para captura de licencias sanitarias, reconocimientos y permisos sanitarios, así como ' +
            'el distintivo salud que otroga la Subsecretaría de Regulación y Fomento Sanitario de la Secretaría de Salud de Nuevo León.',
        appType: 'Web',
        appTypeIcon: 'mdi-web',
        tech: [
            { tecno: 'PHP' },
            { tecno: 'Yii2' },
            { tecno: 'Bootstrap' },
            { tecno: 'JavaScript' },
        ],
        carousel: [
            { img: 'web-ldrp-1.png' },
            { img: 'web-ldrp-2.png' },
            { img: 'web-ldrp-3.png' },
        ],
    },
>>>>>>> a41cbb7f4e2ffe96c95d150ffce60198515d3685
});

var registroVacInfluenza = new Vue({
  el: "#data-registro-vacuna-covid19-persalud",
  data: {
    title:
      "Registro para vacunación contra la COVID-19 para el personal de Salud de Nuevo León",
    summary:
      "Sistema para la Secretaría de Salud de Nuevo León para llevar un" +
      "registro del personal de salud que falta por vacunar para solicitar el apoyo de dosis " +
      "a la federación.",
    link: "http://saludnl.gob.mx/vacunacion/covid19/personaldesalud",
    appType: "Web",
    appTypeIcon: "mdi-web",
    tech: [
      { tecno: "HTML" },
      { tecno: "PHP" },
      { tecno: "MySQL" },
      { tecno: "Yii2 Framework" },
      { tecno: "Sweet Alert 2" },
    ],
    carousel: [
      { img: "reg_vac_covid19_persalud_1.png" },
      { img: "reg_vac_covid19_persalud_2.png" },
      { img: "reg_vac_covid19_persalud_3.png" },
      { img: "reg_vac_covid19_persalud_4.png" },
      { img: "reg_vac_covid19_persalud_5.png" },
      { img: "reg_vac_covid19_persalud_6.png" },
      { img: "reg_vac_covid19_persalud_7.png" },
    ],
  },
});

var unraitteAdminConsole = new Vue({
<<<<<<< HEAD
  el: "#data-unraitte-adminconsole",
  data: {
    title: "Unraitte | Consola administrativa",
    summary:
      "FrontEnd amigable que ayuda al personal de la empresa Unraitte con las altas / bajas de conductores / vehiculos y " +
      "sus respectivos documentos, al conectarse a la API del Instituto de Movilidad y Accesibilidad de Nuevo León.",
    appType: "Web",
    appTypeIcon: "mdi-web",
    appTypeIcon: "mdi-web",
    tech: [
      { tecno: "HTML" },
      { tecno: "PHP" },
      { tecno: "MySQL" },
      { tecno: "Yii2 Framework" },
      { tecno: "Sweet Alert 2" },
    ],
    carousel: [
      { img: "unraitte-console-1.png" },
      { img: "unraitte-console-2.png" },
      { img: "unraitte-console-3.png" },
      { img: "unraitte-console-4.png" },
      { img: "unraitte-console-5.png" },
      { img: "unraitte-console-6.png" },
      { img: "unraitte-console-7.png" },
      { img: "unraitte-console-8.png" },
    ],
  },
});

var gafetes = new Vue({
  el: "#data-gafetes",
  data: {
    title: "Gafetes",
    summary:
      "Sistema de captura de personal del departamento de Regulación Sanitaria para administrar " +
      "a su personal y crear los gafetes respectivos para los operativos administrativos y los operativos de campo.",
    appType: "Web",
    appTypeIcon: "mdi-web",
    tech: [
      { tecno: "HTML" },
      { tecno: "PHP" },
      { tecno: "MySQL" },
      { tecno: "Yii2 Framework" },
    ],
    carousel: [
      { img: "gafetes-1.png" },
      { img: "gafetes-2.png" },
      { img: "gafetes-3.png" },
      { img: "gafetes-4.png" },
      { img: "gafetes-5.png" },
      { img: "gafetes-6.png" },
      { img: "gafetes-7.png" },
    ],
  },
});

var coberturaUniversal = new Vue({
  el: "#data-cobertura-universal",
  data: {
    title: "Cobertura Universal",
    summary:
      "Landing page de promoción de la Cobertura Universal para niñas, niños y adolescentes con caner, " +
      "brindando información especifica del proyecto y proporcionando un formulario para envio de datos.",
      link: "http://saludnl.gob.mx/cancerinfantil",
    appType: "Web",
    appTypeIcon: "mdi-web",
    tech: [
      { tecno: "HTML" },
      { tecno: "CSS" },
      { tecno: "Javascript" },
      { tecno: "VueJS" },
    ],
    carousel: [
        { img: "cobertura-1.png" },
        { img: "cobertura-2.png" },
        { img: "cobertura-3.png" },
        { img: "cobertura-4.png" },
      ],
  },
});
=======
    el: '#data-unraitte-adminconsole',
    data: {
        title: 'Unraitte | Consola administrativa',
        summary: 'FrontEnd amigable que ayuda al personal de la empresa Unraitte con las altas / bajas de conductores / vehiculos y ' +
            'sus respectivos documentos, al conectarse a la API del Instituto de Movilidad y Accesibilidad de Nuevo León.',
        appType: 'Web',
        appTypeIcon: 'mdi-web',
        appTypeIcon: 'mdi-web',
        tech: [
            { tecno: 'HTML' },
            { tecno: 'PHP' },
            { tecno: 'MySQL' },
            { tecno: 'Yii2 Framework' },
            { tecno: 'Sweet Alert 2' }
        ],
        carousel: [
            { img: 'unraitte-console-1.png' },
            { img: 'unraitte-console-2.png' },
            { img: 'unraitte-console-3.png' },
            { img: 'unraitte-console-4.png' },
            { img: 'unraitte-console-5.png' },
            { img: 'unraitte-console-6.png' },
            { img: 'unraitte-console-7.png' },
            { img: 'unraitte-console-8.png' },
        ],
    },
});

var gafetes = new Vue({
    el: '#data-gafetes',
    data: {
        title: 'Gafetes',
        summary: 'Sistema de captura de personal del departamento de Regulación Sanitaria para administrar ' +
            'a su personal y crear los gafetes respectivos para los operativos administrativos y los operativos de campo.',
        appType: 'Web',
        appTypeIcon: 'mdi-web',
        tech: [
            { tecno: 'HTML' },
            { tecno: 'PHP' },
            { tecno: 'MySQL' },
            { tecno: 'Yii2 Framework' }
        ],
        carousel: [
            { img: 'gafetes-1.png' },
            { img: 'gafetes-2.png' },
            { img: 'gafetes-3.png' },
            { img: 'gafetes-4.png' },
            { img: 'gafetes-5.png' },
            { img: 'gafetes-6.png' },
            { img: 'gafetes-7.png' },
        ],
    },
});

var cobertura = new Vue({
    el: '#data-cobertura-universal',
    data: {
        title: 'Cobertura universal para niñas, niños y adolescentes con cancer',
        summary: `Landing page para promocionar la cobertura universal que ofrece el gobierno 
         del estado de Nuevo León.`,
        link: 'https://saludnl.gob.mx/cancerinfantil',
        appType: 'Web',
        appTypeIcon: 'mdi-web',
        tech: [
            { tecno: 'HTML' },
            { tecno: 'VueJS' },
            { tecno: 'MySQL' },
            { tecno: 'Sweet Alert 2' }
        ],
        carousel: [
            { img: 'cobertura-1.png' },
            { img: 'cobertura-2.png' },
            { img: 'cobertura-3.png' },
            { img: 'cobertura-4.png' },
            { img: 'cobertura-5.png' },
            { img: 'cobertura-6.png' },
        ],
    },
});
>>>>>>> a41cbb7f4e2ffe96c95d150ffce60198515d3685
