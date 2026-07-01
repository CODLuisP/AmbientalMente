import { Service, Value, WhyUsPoint, BrandApp, Stat } from './types';

export const statsData: Stat[] = [
  {
    id: 'stat1',
    value: '8M',
    label: 'Toneladas de plástico llegan al océano cada año, equivalente a un camión por minuto',
    iconName: 'Trash2',
    bgImage: '/cifras/oceano.webp'
  },
  {
    id: 'stat2',
    value: '1.5°C',
    label: 'Límite crítico de calentamiento global establecido por el Acuerdo de París para evitar daños irreversibles',
    iconName: 'Activity',
    bgImage: '/cifras/calentamiento.webp'
  },
  {
    id: 'stat3',
    value: '70%',
    label: 'Del agua dulce mundial se destina a la agricultura; su gestión eficiente es clave para la sostenibilidad',
    iconName: 'ShieldCheck',
    bgImage: '/cifras/agua.webp'
  },
  {
    id: 'stat4',
    value: '13M ha',
    label: 'De bosques se pierden anualmente en el mundo, afectando la biodiversidad y el ciclo del carbono',
    iconName: 'Building2',
    bgImage: '/cifras/bosque.webp'
  }
];

export const servicesData: Service[] = [
  {
    id: 'residuos',
    title: 'Gestión Integral de Residuos Sólidos',
    shortDescription: 'Soluciones integrales para la recolección, transporte y manejo responsable de residuos sólidos, garantizando el cumplimiento de la normativa ambiental vigente.',
    fullDescription: 'Brindamos soluciones integrales para la recolección, transporte y manejo responsable de residuos sólidos, garantizando el cumplimiento de la normativa ambiental vigente y promoviendo prácticas sostenibles que contribuyen a la protección del medio ambiente.',
    iconName: 'Truck',
    categories: ['Recolección y transporte', 'Segregación y manejo', 'Asesoría en gestión', 'Trazabilidad del servicio'],
    regulation: 'Cumplimiento de la normativa ambiental peruana vigente.',
    features: [
      'Recolección y transporte de residuos sólidos.',
      'Segregación y manejo adecuado de residuos.',
      'Asesoría en gestión integral de residuos.',
      'Trazabilidad del servicio.',
      'Cumplimiento de la normativa ambiental.'
    ]
  },
  {
    id: 'monitoreo',
    title: 'Monitoreos Ambientales',
    shortDescription: 'Evaluamos la calidad de los componentes ambientales con equipos y metodologías confiables para la toma de decisiones y el cumplimiento legal.',
    fullDescription: 'Realizamos monitoreos ambientales con equipos y metodologías que permiten evaluar la calidad de los diferentes componentes ambientales, proporcionando información confiable para la toma de decisiones y el cumplimiento legal.',
    iconName: 'Gauge',
    categories: ['Calidad de agua', 'Calidad de aire', 'Calidad de suelo', 'Ruido ambiental'],
    regulation: 'Análisis realizados con laboratorios acreditados ante el INACAL bajo métodos normalizados.',
    features: [
      'Monitoreo de calidad de agua.',
      'Monitoreo de calidad de aire.',
      'Monitoreo de calidad de suelo.',
      'Monitoreo de ruido ambiental.',
      'Elaboración de informes técnicos.'
    ]
  },
  {
    id: 'consultoria',
    title: 'Consultoría Ambiental',
    shortDescription: 'Asesoría especializada para empresas e instituciones que buscan desarrollar sus actividades de manera responsable y conforme a la legislación ambiental vigente.',
    fullDescription: 'Ofrecemos asesoría especializada para empresas e instituciones que buscan desarrollar sus actividades de manera responsable y conforme a la legislación ambiental vigente.',
    iconName: 'FileText',
    categories: ['Instrumentos de Gestión Ambiental', 'Declaraciones de Impacto (DIA)', 'Planes de Manejo Ambiental', 'Capacitaciones ambientales'],
    regulation: 'Conforme al Sistema Nacional de Evaluación de Impacto Ambiental (Ley N° 27446).',
    features: [
      'Elaboración de Instrumentos de Gestión Ambiental.',
      'Declaraciones de Impacto Ambiental (DIA).',
      'Planes de Manejo Ambiental.',
      'Programas de Monitoreo Ambiental.',
      'Capacitaciones en gestión ambiental.',
      'Asesoría para el cumplimiento de la normativa ambiental.'
    ]
  },
  {
    id: 'banos',
    title: 'Alquiler de Baños Portátiles',
    shortDescription: 'Servicio de alquiler de baños portátiles para obras, proyectos, eventos e instituciones con limpieza y mantenimiento incluidos.',
    fullDescription: 'Brindamos el servicio de alquiler de baños portátiles para obras, proyectos, eventos e instituciones, garantizando limpieza, mantenimiento y condiciones óptimas de higiene durante todo el periodo de servicio.',
    iconName: 'Leaf',
    categories: ['Obras y construcción', 'Eventos', 'Instituciones', 'Minería e industria'],
    regulation: 'Cumplimiento de normas de saneamiento e higiene ambiental.',
    features: [
      'Instalación.',
      'Limpieza y desinfección.',
      'Mantenimiento preventivo.',
      'Reposición de insumos.',
      'Retiro del equipo.'
    ]
  },
  {
    id: 'capacitacion',
    title: 'Capacitación en Seguridad, Salud y Medio Ambiente',
    shortDescription: 'Programas de capacitación orientados a la prevención de riesgos, protección del medio ambiente y cumplimiento de normativa en seguridad y salud en el trabajo.',
    fullDescription: 'Fortalecemos las competencias del personal mediante programas de capacitación orientados a la prevención de riesgos, la protección del medio ambiente y el cumplimiento de la normativa en seguridad y salud en el trabajo.',
    iconName: 'Gauge',
    categories: ['Seguridad y Salud en el Trabajo', 'Gestión ambiental', 'Manejo de residuos', 'Prevención de riesgos'],
    regulation: 'Lineamientos conforme a la Ley N° 29783 de Seguridad y Salud en el Trabajo y normativa ambiental vigente.',
    features: [
      'Talleres de manejo de residuos y código de colores.',
      'Capacitación en prevención de riesgos laborales.',
      'Formación en normativa ambiental peruana.',
      'Programas adaptados a cada sector productivo.',
      'Certificación de participantes.'
    ]
  }
];

export const valuesData: Value[] = [
  {
    id: 'val1',
    title: 'Responsabilidad Ambiental',
    description: 'Desarrollamos todas nuestras actividades con respeto por el medio ambiente, promoviendo el uso eficiente de los recursos naturales y la gestión responsable de los residuos.',
    iconName: 'Heart'
  },
  {
    id: 'val2',
    title: 'Integridad',
    description: 'Actuamos con honestidad, ética y transparencia en cada decisión, manteniendo relaciones basadas en la confianza y el cumplimiento de nuestros compromisos.',
    iconName: 'Scale'
  },
  {
    id: 'val3',
    title: 'Compromiso',
    description: 'Trabajamos con dedicación para cumplir los objetivos de nuestros clientes, involucrándonos activamente en cada proyecto con actitud de mejora continua.',
    iconName: 'Award'
  },
  {
    id: 'val4',
    title: 'Innovación',
    description: 'Fomentamos la búsqueda constante de nuevas tecnologías y metodologías para ofrecer soluciones ambientales más eficientes y sostenibles.',
    iconName: 'Sparkles'
  },
  {
    id: 'val5',
    title: 'Seguridad',
    description: 'Promovemos una cultura preventiva que protege la integridad y salud de nuestros colaboradores, clientes y comunidades, cumpliendo la normativa vigente en SST.',
    iconName: 'Award'
  },
  {
    id: 'val6',
    title: 'Compromiso con la Calidad',
    description: 'Operamos bajo el cumplimiento de la legislación ambiental peruana y aplicamos procedimientos internos orientados a la mejora continua, la seguridad y salud en el trabajo, la protección del medio ambiente y la satisfacción de nuestros clientes, brindando servicios confiables, eficientes y responsables en cada proyecto.',
    iconName: 'Star'
  },
  {
    id: 'val7',
    title: 'Trabajo en Equipo',
    description: 'Promovemos la colaboración, el respeto mutuo y la comunicación efectiva, creyendo que el trabajo conjunto impulsa la innovación y genera mayor impacto.',
    iconName: 'Heart'
  },
  {
    id: 'val8',
    title: 'Orientación al Cliente',
    description: 'Atendemos empresas de los sectores construcción, minería, industria, comercio, salud, e instituciones públicas y privadas, ofreciendo soluciones ambientales personalizadas, eficientes y adaptadas a las necesidades de cada organización, construyendo relaciones de confianza mediante un servicio responsable, oportuno y de alta calidad.',
    iconName: 'Scale'
  },
  {
    id: 'val9',
    title: 'Sostenibilidad',
    description: 'Buscamos el equilibrio entre el crecimiento económico, la protección ambiental y el desarrollo social, promoviendo prácticas responsables para el bienestar de la sociedad.',
    iconName: 'Sparkles'
  }
];

export const whyUsData: WhyUsPoint[] = [
  {
    id: 'why1',
    title: 'Respaldo Legal Completo',
    description: 'Garantizamos que todas sus operaciones se ajusten a las exigencias vigentes del MINAM, OEFA, DIGESA y municipalidades, protegiendo a su empresa de multas o sanciones administrativas.',
    highlight: 'Cero Multas',
    iconName: 'ShieldCheck'
  },
  {
    id: 'why2',
    title: 'Laboratorios Acreditados',
    description: 'Trabajamos en alianza con laboratorios que cuentan con métodos acreditados ante el INACAL, lo que otorga máxima validez jurídica e institucional a sus informes de monitoreo.',
    highlight: 'Garantía INACAL',
    iconName: 'ClipboardCheck'
  },
  {
    id: 'why3',
    title: 'Personal Altamente Calificado',
    description: 'Nuestro staff está conformado por destacados ingenieros ambientales y sanitarios colegiados, formados en las principales universidades públicas y privadas especializadas del país.',
    highlight: 'Staff Senior',
    iconName: 'Users'
  },
  {
    id: 'why4',
    title: 'Atención Personalizada y Ágil',
    description: 'Sabemos que el tiempo es crítico. Diseñamos planes logísticos y de monitoreo a la medida exacta de su producción, con tiempos de respuesta inmediatos y reportes detallados.',
    highlight: 'Respuesta Rápida',
    iconName: 'Zap'
  }
];

export const brandAppsData: BrandApp[] = [
  {
    id: 'app-truck',
    title: 'Flota de Transporte Autorizada',
    subtitle: 'Logística de Residuos Peligrosos y Especiales',
    description: 'Nuestras unidades están equipadas con la rotulación oficial exigida por el MINAM y el MTC. Diseñadas en nuestro Verde Bosque y Verde Hoja distintivos, proyectan seguridad, limpieza y estricta disciplina técnica en el traslado de residuos sólidos.',
    specs: [
      'Placas ambientales y códigos de autorización visibles.',
      'Cinta reflectiva reglamentaria y equipos de control de derrames.',
      'Personal equipado con EPP completo de alta visibilidad.',
      'Sistemas de rastreo satelital GPS activo.'
    ],
    illustrationType: 'truck'
  },
  {
    id: 'app-report',
    title: 'Certificaciones e Informes Técnicos',
    subtitle: 'Evidencia de Gestión para Fiscalización Exigente',
    description: 'Nuestros entregables (Manifiestos de Residuos, Informes de Monitoreo, Certificados de Disposición) cuentan con un diseño editorial impecable, limpio y profesional. Su estructura clara facilita las auditorías de OEFA, SUNAFIL o certificaciones ISO.',
    specs: [
      'Código QR único de trazabilidad documental.',
      'Firma digital del Ingeniero Ambiental Colegiado responsable.',
      'Anexos técnicos con planos de monitoreo georreferenciados.',
      'Formatos optimizados para presentación en el SIGERSOL.'
    ],
    illustrationType: 'report'
  },
  {
    id: 'app-uniform',
    title: 'Seguridad de Nuestro Personal',
    subtitle: 'Identidad y Seguridad de Nuestro Equipo en Campo',
    description: 'La seguridad de nuestro equipo es una prioridad. Por ello, nuestro personal desarrolla sus actividades utilizando Equipos de Protección Personal (EPP) adecuados para cada operación, contribuyendo a reducir riesgos laborales y ambientales. Implementamos procedimientos de trabajo seguro y herramientas adecuadas para garantizar operaciones eficientes, responsables y respetuosas con el medio ambiente.',
    specs: [
      'Casco de seguridad.',
      'Chaleco reflectivo.',
      'Guantes de protección.',
      'Zapatos de seguridad con punta de acero.',
      'Lentes de seguridad.',
      'Respiradores según la actividad.',
      'Overoles de trabajo.'
    ],
    illustrationType: 'uniform'
  },
  {
    id: 'app-stations',
    title: 'Estaciones de Segregación Industrial',
    subtitle: 'Puntos Ecológicos Personalizados en Planta',
    description: 'Implementamos y rotulamos estaciones ecológicas en las instalaciones de nuestros clientes basadas en la Norma Técnica Peruana (NTP 900.058:2019). Su diseño minimalista y código de colores estandarizado fomenta la participación y el orden en planta.',
    specs: [
      'Contenedores industriales de alta densidad con tapa hermética.',
      'Señalética iconográfica clara de residuos orgánicos, aprovechables e industriales.',
      'Acabados en pintura anticorrosiva de alta duración con logo de AmbientalMente LV.',
      'Indicadores de volumen de llenado y guías de disposición rápida.'
    ],
    illustrationType: 'stations'
  },
  {
    id: 'app-stationery',
    title: 'Papelería Corporativa',
    subtitle: 'Identidad Institucional en Cada Documento',
    description: 'Nuestra papelería —tarjetas de presentación, hojas membretadas y firma de correo electrónico— sigue un mismo sistema visual, tipográfico y cromático, proyectando solidez institucional en cada comunicación oficial de AmbientalMente LV.',
    specs: [
      'Tarjetas de presentación con datos de contacto y cargo del colaborador.',
      'Hoja membretada oficial para informes, propuestas y cotizaciones.',
      'Firma de correo electrónico con logotipo, teléfono, web y redes sociales.',
      'RUC y razón social visibles conforme a normativa vigente.'
    ],
    illustrationType: 'stationery'
  }
];
