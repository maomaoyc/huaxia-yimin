export type Locale = 'zh' | 'en' | 'es';

export const localePrefixes: Record<Locale, string> = {
  zh: '',
  en: '/en',
  es: '/es'
};

export const siteTitle: Record<Locale, string> = {
  zh: '华夏义民起义、变革、正常化之法理',
  en: 'Huaxia Civic Uprising, Transformation, and Jurisprudence of Normalization',
  es: 'Levantamiento cívico Huaxia, transformación y jurisprudencia de la normalización'
};

export const navTranslations: Record<string, Record<Locale, string>> = {
  home: { zh: '首页', en: 'Home', es: 'Inicio' },
  read: { zh: '作者', en: 'Author', es: 'Autor' },
  introduction: { zh: '简介', en: 'Introduction', es: 'Introducción' },
  author: { zh: '作者', en: 'Author', es: 'Autor' },
  arguments: { zh: '核心论证', en: 'Core Arguments', es: 'Argumentos' },
  structure: { zh: '结构', en: 'Structure', es: 'Estructura' },
  diagrams: { zh: '图解', en: 'Diagrams', es: 'Diagramas' },
  timeline: { zh: '时间线', en: 'Timeline', es: 'Cronología' },
  downloads: { zh: '下载', en: 'Downloads', es: 'Descargas' },
  letter: { zh: '后记', en: 'Afterword', es: 'Epílogo' },
  'author-submissions': { zh: '作者上传', en: 'Author Uploads', es: 'Envíos del autor' },
  'reader-feedback': { zh: '读者留言', en: 'Reader Feedback', es: 'Comentarios' },
  'volume-1': { zh: '心境科学', en: 'Volume I', es: 'Volumen I' },
  'volume-2': { zh: '名实学科', en: 'Volume II', es: 'Volumen II' },
  'volume-3': { zh: '群境科学', en: 'Volume III', es: 'Volumen III' }
};

export const uiText = {
  downloadPdf: { zh: 'PDF 下载', en: 'Download PDF', es: 'Descargar PDF' },
  downloadWord: { zh: 'Word 下载', en: 'Download Word', es: 'Descargar Word' },
  readOnline: { zh: '在线阅读', en: 'Read Online', es: 'Leer en línea' },
  contact: {
    zh: '联系出版与资料提交',
    en: 'Publication and materials contact',
    es: 'Contacto para publicación y materiales'
  },
  footerNote: {
    zh: '近代中国诊治之钥——人之操作系统。',
    en: 'A diagnostic key for modern China: the human operating system.',
    es: 'Una clave diagnóstica para la China moderna: el sistema operativo humano.'
  }
};

const keywordMap: Record<string, Record<'en' | 'es', string>> = {
  心境: { en: 'Mind-state', es: 'Estado interior' },
  名实: { en: 'Name and reality', es: 'Nombre y realidad' },
  群境: { en: 'Collective environment', es: 'Entorno colectivo' },
  法理: { en: 'Jurisprudence', es: 'Jurisprudencia' },
  正常化: { en: 'Normalization', es: 'Normalización' },
  思想: { en: 'Thought', es: 'Pensamiento' },
  原则: { en: 'Principle', es: 'Principio' },
  体验: { en: 'Experience', es: 'Experiencia' },
  过程: { en: 'Process', es: 'Proceso' },
  信仰: { en: 'Belief', es: 'Creencia' },
  差异: { en: 'Difference', es: 'Diferencia' },
  人文: { en: 'Humanistic order', es: 'Orden humanístico' },
  政体: { en: 'Political system', es: 'Sistema político' },
  民众: { en: 'People', es: 'Pueblo' },
  主权: { en: 'Sovereignty', es: 'Soberanía' },
  民主: { en: 'Democracy', es: 'Democracia' },
  科学: { en: 'Science', es: 'Ciencia' },
  儒学: { en: 'Confucian learning', es: 'Confucianismo' },
  历史: { en: 'History', es: 'Historia' },
  记忆: { en: 'Memory', es: 'Memoria' },
  教育: { en: 'Education', es: 'Educación' },
  土地: { en: 'Land policy', es: 'Política de tierras' },
  公权力: { en: 'Public authority', es: 'Autoridad pública' },
  医学: { en: 'Medicine', es: 'Medicina' },
  分类: { en: 'Classification', es: 'Clasificación' },
  命名: { en: 'Naming', es: 'Nombramiento' }
};

export function localizeKeyword(keyword: string, locale: Locale) {
  if (locale === 'zh') return keyword;
  return keywordMap[keyword]?.[locale] ?? (locale === 'en' ? 'Concept' : 'Concepto');
}

export function localizeKeywords(keywords: string[], locale: Locale) {
  if (locale === 'zh') return keywords;
  return keywords.map((keyword) => localizeKeyword(keyword, locale));
}

export const localizedPages: Record<string, Record<'en' | 'es', { title: string; eyebrow: string; description: string; body: string[] }>> = {
  home: {
    en: {
      title: siteTitle.en,
      eyebrow: 'Academic Book Project',
      description: 'A static academic website for the Chinese book, with online reading, diagrams, downloads, and publication contact.',
      body: ['The full text remains in Chinese. This English layer provides navigation, summaries, and editorial context for international readers.', 'Historical and political claims are presented as the author’s thesis, not as neutral assertions by the website.']
    },
    es: {
      title: siteTitle.es,
      eyebrow: 'Proyecto académico',
      description: 'Sitio académico estático para la obra china, con lectura en línea, diagramas, descargas y contacto editorial.',
      body: ['El texto completo permanece en chino. Esta capa en español ofrece navegación, resúmenes y contexto editorial.', 'Las afirmaciones históricas y políticas se presentan como tesis del autor, no como afirmaciones neutrales del sitio.']
    }
  },
  introduction: {
    en: {
      title: 'Book Introduction',
      eyebrow: 'Introduction',
      description: 'The book connects inner disposition, name-reality analysis, collective order, jurisprudence, and normalization.',
      body: ['The author argues that the problems addressed by the book involve not only institutions, but also public language, historical memory, personal disposition, and collective order.', 'The preface emphasizes the ability to extract principles from repeated realities. The full Chinese preface remains available in the online reader.']
    },
    es: {
      title: 'Introducción',
      eyebrow: 'Introducción',
      description: 'La obra conecta disposición interior, análisis nombre-realidad, orden colectivo, jurisprudencia y normalización.',
      body: ['El autor sostiene que los problemas tratados no son solo institucionales, sino también lingüísticos, históricos, subjetivos y colectivos.', 'El prefacio destaca la capacidad de extraer principios de realidades repetidas. El prefacio chino completo está disponible en la lectura en línea.']
    }
  },
  arguments: {
    en: {
      title: 'Core Arguments',
      eyebrow: 'Core Arguments',
      description: 'A restrained summary of the author’s main theses and conceptual structure.',
      body: ['The author’s central framework can be summarized through inner disposition, name-reality relations, collective environment, jurisprudence, and normalization.', 'The site presents strong historical-political judgments as authorial claims to be examined through the original text and supporting materials.']
    },
    es: {
      title: 'Argumentos centrales',
      eyebrow: 'Argumentos',
      description: 'Resumen sobrio de las tesis principales del autor y su estructura conceptual.',
      body: ['El marco central se resume en disposición interior, relación nombre-realidad, entorno colectivo, jurisprudencia y normalización.', 'El sitio presenta los juicios histórico-políticos fuertes como tesis del autor que deben examinarse con el texto original y sus materiales.']
    }
  },
  author: {
    en: {
      title: 'Author',
      eyebrow: 'Author',
      description: 'Author information, publication contact, and editorial context.',
      body: ['This page provides a restrained public author profile and keeps publication contact visible for rights, translation, and editorial matters.', 'Additional biographical or scholarly materials can be added later without changing the page structure.']
    },
    es: {
      title: 'Autor',
      eyebrow: 'Autor',
      description: 'Información del autor, contacto editorial y contexto de publicación.',
      body: ['Esta página ofrece un perfil público sobrio del autor y mantiene visible el contacto para derechos, traducción y asuntos editoriales.', 'Se podrán añadir más materiales biográficos o académicos sin cambiar la estructura de la página.']
    }
  },
  structure: {
    en: {
      title: 'Book Structure',
      eyebrow: 'Structure',
      description: 'The book is organized into three conceptual volumes and online chapter pages.',
      body: ['The structure below provides English navigation into the three-volume Chinese text. Each volume opens to chapter cards and reading links.']
    },
    es: {
      title: 'Estructura de la obra',
      eyebrow: 'Estructura',
      description: 'La obra se organiza en tres volúmenes conceptuales y páginas de lectura por capítulo.',
      body: ['La estructura siguiente ofrece navegación en español hacia el texto chino de tres volúmenes. Cada volumen abre tarjetas de capítulos y enlaces de lectura.']
    }
  },
  diagrams: {
    en: {
      title: 'Visual Diagrams',
      eyebrow: 'Diagrams',
      description: 'Flowchart, conceptual map, and placeholder for future geographic visualization.',
      body: ['These diagrams summarize the author’s conceptual sequence and provide a place for future map-based materials.']
    },
    es: {
      title: 'Diagramas visuales',
      eyebrow: 'Diagramas',
      description: 'Diagrama de flujo, mapa conceptual y marcador para visualización geográfica futura.',
      body: ['Estos diagramas resumen la secuencia conceptual del autor y reservan espacio para futuros materiales cartográficos.']
    }
  },
  timeline: {
    en: {
      title: 'Timeline',
      eyebrow: 'Timeline',
      description: 'A conceptual timeline of the book’s argument rather than a neutral historical chronology.',
      body: ['The timeline frames the author’s argument from inner disposition to normalization jurisprudence.']
    },
    es: {
      title: 'Cronología',
      eyebrow: 'Cronología',
      description: 'Una cronología conceptual del argumento, no una cronología histórica neutral.',
      body: ['La cronología organiza el argumento del autor desde el estado interior hasta la jurisprudencia de la normalización.']
    }
  },
  downloads: {
    en: {
      title: 'Downloads',
      eyebrow: 'Downloads',
      description: 'Download the PDF and Word versions of the book.',
      body: ['The download center keeps stable public links for the PDF and Word files. Replace the files in public/downloads/ to update them.']
    },
    es: {
      title: 'Descargas',
      eyebrow: 'Descargas',
      description: 'Descargue las versiones PDF y Word de la obra.',
      body: ['El centro de descargas mantiene enlaces públicos estables para los archivos PDF y Word. Reemplace los archivos en public/downloads/ para actualizarlos.']
    }
  },
  letter: {
    en: {
      title: 'Letter to Readers',
      eyebrow: 'Letter',
      description: 'A reader-facing note integrating the afterword and author’s message.',
      body: ['This page is designed for the author’s closing note, reader address, and future publication updates. Strong claims remain presented as the author’s argument.']
    },
    es: {
      title: 'Carta a los lectores',
      eyebrow: 'Carta',
      description: 'Nota para lectores que integra el epílogo y el mensaje del autor.',
      body: ['Esta página está pensada para la nota final del autor, el mensaje a lectores y futuras novedades editoriales. Las afirmaciones fuertes permanecen formuladas como argumento del autor.']
    }
  },
  'author-submissions': {
    en: {
      title: 'Author Uploads',
      eyebrow: 'Author Uploads',
      description: 'A contact entry for videos, images, chapter explanations, and supplementary materials.',
      body: ['The static website does not store uploads directly. Use the form below to generate an email with links or attachment notes.']
    },
    es: {
      title: 'Envíos del autor',
      eyebrow: 'Envíos del autor',
      description: 'Entrada de contacto para videos, imágenes, explicaciones de capítulos y materiales complementarios.',
      body: ['El sitio estático no almacena archivos directamente. Use el formulario para crear un correo con enlaces o notas de adjuntos.']
    }
  },
  'reader-feedback': {
    en: {
      title: 'Reader Feedback',
      eyebrow: 'Feedback',
      description: 'A reader contact entry for comments, corrections, and publication leads.',
      body: ['Readers may send comments, corrections, chapter suggestions, or publication-related messages through the email form below.']
    },
    es: {
      title: 'Comentarios de lectores',
      eyebrow: 'Comentarios',
      description: 'Entrada de contacto para comentarios, correcciones y contactos editoriales.',
      body: ['Los lectores pueden enviar comentarios, correcciones, sugerencias de capítulos o mensajes editoriales mediante el formulario siguiente.']
    }
  }
};

export const volumeTranslations: Record<string, Record<Locale, { title: string; shortTitle: string; description: string }>> = {
  'volume-1': {
    zh: {
      title: '卷一：心境科学原理概论',
      shortTitle: '心境科学',
      description: '围绕主体判断、责任意识、义感与内在秩序展开。'
    },
    en: {
      title: 'Volume I: Introduction to Principles of Mind-State Science',
      shortTitle: 'Volume I',
      description: 'A guide to the author’s analysis of judgment, responsibility, moral sentiment, and inner order.'
    },
    es: {
      title: 'Volumen I: Introducción a los principios de la ciencia del estado interior',
      shortTitle: 'Volumen I',
      description: 'Guía del análisis del autor sobre juicio, responsabilidad, sentido moral y orden interior.'
    }
  },
  'volume-2': {
    zh: {
      title: '卷二：名实学科原理概论',
      shortTitle: '名实学科',
      description: '讨论名称、现实、概念秩序与公共判断之间的关系。'
    },
    en: {
      title: 'Volume II: Introduction to Principles of Name-Reality Studies',
      shortTitle: 'Volume II',
      description: 'A guide to names, realities, conceptual order, and public judgment in the author’s framework.'
    },
    es: {
      title: 'Volumen II: Introducción a los principios de los estudios nombre-realidad',
      shortTitle: 'Volumen II',
      description: 'Guía sobre nombres, realidades, orden conceptual y juicio público en el marco del autor.'
    }
  },
  'volume-3': {
    zh: {
      title: '卷三：群境科学原理概论',
      shortTitle: '群境科学',
      description: '转向共同体环境、制度结构、公共秩序与正常化法理。'
    },
    en: {
      title: 'Volume III: Introduction to Principles of Collective-Environment Science',
      shortTitle: 'Volume III',
      description: 'A guide to collective environment, institutional structure, public order, and normalization jurisprudence.'
    },
    es: {
      title: 'Volumen III: Introducción a los principios de la ciencia del entorno colectivo',
      shortTitle: 'Volumen III',
      description: 'Guía sobre entorno colectivo, estructura institucional, orden público y jurisprudencia de la normalización.'
    }
  }
};

export function localizedPath(locale: Locale, path: string) {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const withoutLocale = clean.replace(/^\/(en|es)(?=\/|$)/, '') || '/';
  if (locale === 'zh') return withoutLocale;
  return `${localePrefixes[locale]}${withoutLocale === '/' ? '/' : withoutLocale}`;
}
