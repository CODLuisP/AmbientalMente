import { Service, Value, WhyUsPoint, BrandApp, Stat } from './types';

export const statsData: Stat[] = [
  {
    id: 'stat1',
    value: '12K+',
    label: 'Toneladas de residuos gestionadas de forma segura',
    iconName: 'Trash2'
  },
  {
    id: 'stat2',
    value: '100%',
    label: 'Cumplimiento normativo y fiscalización con éxito (MINAM/OEFA)',
    iconName: 'ShieldCheck'
  },
  {
    id: 'stat3',
    value: '150+',
    label: 'Clientes corporativos en sectores industrial, comercial y salud',
    iconName: 'Building2'
  },
  {
    id: 'stat4',
    value: '500+',
    label: 'Monitoreos de calidad de aire, agua, suelo y ruido ejecutados',
    iconName: 'Activity'
  }
];

export const servicesData: Service[] = [
  {
    id: 'residuos',
    title: 'Gestión Integral de Residuos Sólidos',
    shortDescription: 'Recolección, transporte, valorización y disposición final de residuos peligrosos y no peligrosos con estricto cumplimiento legal.',
    fullDescription: 'Ofrecemos soluciones integrales para la correcta segregación, recolección autorizada, transporte seguro y disposición final de residuos industriales, comerciales, de construcción y hospitalarios. Priorizamos la economía circular mediante la segregación y valorización de materiales reciclables y orgánicos.',
    iconName: 'Truck',
    categories: ['Residuos Peligrosos', 'Residuos No Peligrosos', 'Valorización (Reciclaje)', 'Destrucción de Mercaderías'],
    regulation: 'Conforme a la Ley de Gestión Integral de Residuos Sólidos (D.L. 1278) y su Reglamento (D.S. N° 014-2017-MINAM).',
    features: [
      'Transporte en unidades autorizadas por el MINAM.',
      'Emisión de Manifiestos de Residuos Sólidos Peligrosos.',
      'Certificados de Disposición Final válidos para fiscalizaciones.',
      'Programas de segregación en la fuente para empresas.'
    ]
  },
  {
    id: 'monitoreo',
    title: 'Monitoreo Ambiental Ocupacional',
    shortDescription: 'Evaluación técnica de agentes de calidad de aire, agua, suelos, emisiones y ruido con equipos calibrados.',
    fullDescription: 'Realizamos mediciones en campo para determinar la concentración de contaminantes o niveles de exposición en su entorno de trabajo y operaciones. Aseguramos que sus actividades cumplan con los Estándares de Calidad Ambiental (ECA) y Límites Máximos Permisibles (LMP) exigidos por las autoridades correspondientes.',
    iconName: 'Gauge',
    categories: ['Monitoreo de Calidad de Aire', 'Monitoreo de Ruido Ambiental y Ocupacional', 'Monitoreo de Calidad de Agua y Efluentes', 'Monitoreo de Suelos'],
    regulation: 'Análisis realizados con laboratorios acreditados ante el INACAL bajo métodos normalizados.',
    features: [
      'Equipos de alta precisión calibrados (sonómetros, muestreadores de aire de alto volumen, etc.).',
      'Elaboración de informes de ensayo visados por ingenieros colegiados.',
      'Identificación de medidas de mitigación y control.',
      'Soporte frente a inspecciones de la OEFA y SUNAFIL.'
    ]
  },
  {
    id: 'consultoria',
    title: 'Consultoría e Instrumentos Ambientales',
    shortDescription: 'Elaboración de estudios e instrumentos de gestión ambiental para licencias, permisos y auditorías.',
    fullDescription: 'Acompañamos a su empresa en el diseño y aprobación de los instrumentos exigidos por el marco legal peruano. Nos encargamos de todo el proceso de tramitación, subsanación de observaciones e interacciones con las entidades evaluadoras (SENACE, ministerios y municipalidades).',
    iconName: 'FileText',
    categories: ['Declaraciones de Impacto Ambiental (DIA)', 'Planes de Minimización de Residuos', 'Planes de Contingencia', 'Auditorías y Diagnósticos Ambientales'],
    regulation: 'Desarrollado bajo el Sistema Nacional de Evaluación de Impacto Ambiental (Ley N° 27446).',
    features: [
      'Elaboración técnica rigurosa adaptada a la realidad operativa de su negocio.',
      'Asesoría en auditorías de cumplimiento normativo legal.',
      'Elaboración del Reporte de Manejo de Residuos Sólidos en el SIGERSOL.',
      'Defensa técnica en procedimientos administrativos sancionadores.'
    ]
  },
  {
    id: 'sostenibilidad',
    title: 'Soluciones Sostenibles y Ecoeficiencia',
    shortDescription: 'Estrategias de economía circular, huella de carbono y capacitaciones para transformar su cultura organizacional.',
    fullDescription: 'Ayudamos a su organización a transicionar hacia un modelo sostenible y de bajo impacto ambiental. Diseñamos planes de ecoeficiencia enfocados en optimizar el uso de agua, energía y papel, y estructuramos programas educativos interactivos para concientizar a sus colaboradores.',
    iconName: 'Leaf',
    categories: ['Medición de Huella de Carbono', 'Planes de Ecoeficiencia Institucional', 'Estrategias de Economía Circular', 'Capacitaciones y Talleres Ambientales'],
    regulation: 'Lineamientos alineados al MINAM y estándares internacionales como el Green House Gas (GHG) Protocol.',
    features: [
      'Talleres interactivos de manejo de residuos y código de colores peruano.',
      'Asesoría para la obtención del Reconocimiento de Huella de Carbono Perú.',
      'Valorización de residuos orgánicos (Compostaje y vermicompostaje).',
      'Diseño de indicadores de desempeño ambiental corporativo.'
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
    title: 'Calidad',
    description: 'Brindamos servicios que satisfacen las expectativas de nuestros clientes mediante procesos eficientes, personal capacitado y mejora continua de nuestra gestión.',
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
    description: 'Colocamos las necesidades del cliente en el centro de nuestras decisiones, brindando atención personalizada y soluciones que generan confianza y relaciones duraderas.',
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
    title: 'Unidad de Ingeniería y Monitoreo',
    subtitle: 'Identidad y Seguridad de Nuestro Equipo en Campo',
    description: 'El personal de AmbientalMente LV viste uniformes técnicos diseñados bajo estándares internacionales de seguridad (ANSI/OSHA), combinando la protección contra agentes externos con una presencia impecable que honra el profesionalismo de nuestros clientes.',
    specs: [
      'Chaleco de ingeniería de alta visibilidad Verde Hoja con logo bordado.',
      'Casco técnico de ala completa con logotipos troquelados en contraste.',
      'EPP dieléctrico y respiradores con filtros para gases/partículas.',
      'Identificación fotocheck con chip NFC de seguridad ambiental.'
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
  }
];
