import type { Language } from '../hooks/useLanguage';

export interface Translations {
  // Header
  about: string;
  services: string;
  whyChooseUs: string;
  getStarted: string;
  
  // Hero Section
  heroTagline: string;
  heroTitle1: string;
  heroTitle2: string;
  heroDescription: string;
  sendMessage: string;
  bookMeeting: string;
  
  // About Section
  whoWeAre: string;
  whoWeAreDescription: string;
  pioneersTitle: string;
  pioneersDescription1: string;
  pioneersDescription2: string;
  aiFirst: string;
  aiFirstDesc: string;
  lightningFast: string;
  lightningFastDesc: string;
  
  // Services Section
  whatWeDo: string;
  whatWeDoDescription: string;
  aiDevelopment: string;
  aiDevelopmentDesc: string;
  smartAutomation: string;
  smartAutomationDesc: string;
  customSolutions: string;
  customSolutionsDesc: string;
  machineLearning: string;
  nlp: string;
  predictiveAnalytics: string;
  processAutomation: string;
  workflowOptimization: string;
  integrationSolutions: string;
  webApplications: string;
  apiDevelopment: string;
  systemIntegration: string;
  
  // Why Choose Us Section
  whyChooseUsTitle: string;
  whyChooseUsDescription: string;
  innovationFirst: string;
  innovationFirstDesc: string;
  maximumEfficiency: string;
  maximumEfficiencyDesc: string;
  fastResults: string;
  fastResultsDesc: string;
  
  // CTA Section
  ctaTitle: string;
  ctaDescription: string;
  
  // Footer
  readyToStart: string;
  footerText: string;
}

const translations: Record<Language, Translations> = {
  en: {
    // Header
    about: 'About',
    services: 'Services',
    whyChooseUs: 'Why Choose Us',
    getStarted: 'Get Started',
    
    // Hero Section
    heroTagline: 'AI-Powered Development & Automation',
    heroTitle1: 'Build Smarter.',
    heroTitle2: 'Automate Everything.',
    heroDescription: 'We transform your business with cutting-edge AI solutions and intelligent automation. Get faster results, reduce costs, and stay ahead of the competition.',
    sendMessage: 'Send us a message',
    bookMeeting: 'Book a meeting',
    
    // About Section
    whoWeAre: 'Who We Are',
    whoWeAreDescription: 'A forward-thinking team of AI specialists and automation experts dedicated to revolutionizing how businesses operate in the digital age.',
    pioneersTitle: 'Pioneers in AI Innovation',
    pioneersDescription1: 'We\'re not just developers – we\'re visionaries who see the transformative power of artificial intelligence and automation. Our mission is to make cutting-edge technology accessible to businesses of all sizes.',
    pioneersDescription2: 'With a fresh perspective and deep technical expertise, we focus on delivering solutions that don\'t just work today, but evolve with your business tomorrow.',
    aiFirst: 'AI-First',
    aiFirstDesc: 'Every solution powered by intelligent automation',
    lightningFast: 'Lightning Fast',
    lightningFastDesc: 'Rapid development and deployment cycles',
    
    // Services Section
    whatWeDo: 'What We Do',
    whatWeDoDescription: 'From AI-powered applications to intelligent automation systems, we create solutions that transform your business operations.',
    aiDevelopment: 'AI Development',
    aiDevelopmentDesc: 'Custom AI solutions including machine learning models, natural language processing, and intelligent data analysis systems tailored to your needs.',
    smartAutomation: 'Smart Automation',
    smartAutomationDesc: 'Intelligent workflow automation that learns and adapts, eliminating repetitive tasks and optimizing your business processes for maximum efficiency.',
    customSolutions: 'Custom Solutions',
    customSolutionsDesc: 'Bespoke applications and systems designed specifically for your unique business requirements, built with scalability and future growth in mind.',
    machineLearning: 'Machine Learning Models',
    nlp: 'Natural Language Processing',
    predictiveAnalytics: 'Predictive Analytics',
    processAutomation: 'Process Automation',
    workflowOptimization: 'Workflow Optimization',
    integrationSolutions: 'Integration Solutions',
    webApplications: 'Web Applications',
    apiDevelopment: 'API Development',
    systemIntegration: 'System Integration',
    
    // Why Choose Us Section
    whyChooseUsTitle: 'Why Choose Us',
    whyChooseUsDescription: 'We combine innovation with reliability to deliver exceptional results that drive your business forward.',
    innovationFirst: 'Innovation First',
    innovationFirstDesc: 'We stay at the forefront of AI and automation technology, ensuring you always have access to the latest and most effective solutions.',
    maximumEfficiency: 'Maximum Efficiency',
    maximumEfficiencyDesc: 'Our solutions are designed to maximize efficiency and minimize waste, helping you achieve more with less effort and resources.',
    fastResults: 'Fast Results',
    fastResultsDesc: 'We believe in rapid implementation and quick wins. See measurable improvements in your business operations within weeks, not months.',
    
    // CTA Section
    ctaTitle: 'Ready to Transform Your Business?',
    ctaDescription: 'Let\'s discuss how AI and automation can revolutionize your operations. Get started with a free consultation today.',
    
    // Footer
    readyToStart: 'Ready to get started?',
    footerText: '© 2025 AIFlow. Building the future with intelligent automation.',
  },
  
  es: {
    // Header
    about: 'Acerca de',
    services: 'Servicios',
    whyChooseUs: 'Por Qué Elegirnos',
    getStarted: 'Comenzar',
    
    // Hero Section
    heroTagline: 'Desarrollo y Automatización Impulsados por IA',
    heroTitle1: 'Construye Más Inteligente.',
    heroTitle2: 'Automatiza Todo.',
    heroDescription: 'Transformamos tu negocio con soluciones de IA de vanguardia y automatización inteligente. Obtén resultados más rápidos, reduce costos y mantente por delante de la competencia.',
    sendMessage: 'Envíanos un mensaje',
    bookMeeting: 'Reservar una reunión',
    
    // About Section
    whoWeAre: 'Quiénes Somos',
    whoWeAreDescription: 'Un equipo visionario de especialistas en IA y expertos en automatización dedicados a revolucionar cómo operan las empresas en la era digital.',
    pioneersTitle: 'Pioneros en Innovación de IA',
    pioneersDescription1: 'No somos solo desarrolladores – somos visionarios que ven el poder transformador de la inteligencia artificial y la automatización. Nuestra misión es hacer que la tecnología de vanguardia sea accesible para empresas de todos los tamaños.',
    pioneersDescription2: 'Con una perspectiva fresca y profunda experiencia técnica, nos enfocamos en entregar soluciones que no solo funcionan hoy, sino que evolucionan con tu negocio mañana.',
    aiFirst: 'IA Primero',
    aiFirstDesc: 'Cada solución impulsada por automatización inteligente',
    lightningFast: 'Súper Rápido',
    lightningFastDesc: 'Ciclos rápidos de desarrollo e implementación',
    
    // Services Section
    whatWeDo: 'Qué Hacemos',
    whatWeDoDescription: 'Desde aplicaciones impulsadas por IA hasta sistemas de automatización inteligente, creamos soluciones que transforman las operaciones de tu negocio.',
    aiDevelopment: 'Desarrollo de IA',
    aiDevelopmentDesc: 'Soluciones de IA personalizadas incluyendo modelos de aprendizaje automático, procesamiento de lenguaje natural y sistemas de análisis de datos inteligentes adaptados a tus necesidades.',
    smartAutomation: 'Automatización Inteligente',
    smartAutomationDesc: 'Automatización de flujos de trabajo inteligente que aprende y se adapta, eliminando tareas repetitivas y optimizando tus procesos de negocio para máxima eficiencia.',
    customSolutions: 'Soluciones Personalizadas',
    customSolutionsDesc: 'Aplicaciones y sistemas a medida diseñados específicamente para tus requisitos únicos de negocio, construidos con escalabilidad y crecimiento futuro en mente.',
    machineLearning: 'Modelos de Aprendizaje Automático',
    nlp: 'Procesamiento de Lenguaje Natural',
    predictiveAnalytics: 'Análisis Predictivo',
    processAutomation: 'Automatización de Procesos',
    workflowOptimization: 'Optimización de Flujos de Trabajo',
    integrationSolutions: 'Soluciones de Integración',
    webApplications: 'Aplicaciones Web',
    apiDevelopment: 'Desarrollo de APIs',
    systemIntegration: 'Integración de Sistemas',
    
    // Why Choose Us Section
    whyChooseUsTitle: 'Por Qué Elegirnos',
    whyChooseUsDescription: 'Combinamos innovación con confiabilidad para entregar resultados excepcionales que impulsan tu negocio hacia adelante.',
    innovationFirst: 'Innovación Primero',
    innovationFirstDesc: 'Nos mantenemos a la vanguardia de la tecnología de IA y automatización, asegurando que siempre tengas acceso a las soluciones más recientes y efectivas.',
    maximumEfficiency: 'Máxima Eficiencia',
    maximumEfficiencyDesc: 'Nuestras soluciones están diseñadas para maximizar la eficiencia y minimizar el desperdicio, ayudándote a lograr más con menos esfuerzo y recursos.',
    fastResults: 'Resultados Rápidos',
    fastResultsDesc: 'Creemos en la implementación rápida y victorias tempranas. Ve mejoras medibles en las operaciones de tu negocio en semanas, no meses.',
    
    // CTA Section
    ctaTitle: '¿Listo para Transformar tu Negocio?',
    ctaDescription: 'Hablemos sobre cómo la IA y automatización pueden revolucionar tus operaciones. Comienza con una consulta gratuita hoy.',
    
    // Footer
    readyToStart: '¿Listo para comenzar?',
    footerText: '© 2025 AIFlow. Construyendo el futuro con automatización inteligente.',
  },
  
  fr: {
    // Header
    about: 'À Propos',
    services: 'Services',
    whyChooseUs: 'Pourquoi Nous Choisir',
    getStarted: 'Commencer',
    
    // Hero Section
    heroTagline: 'Développement et Automatisation Alimentés par l\'IA',
    heroTitle1: 'Construisez Plus Intelligemment.',
    heroTitle2: 'Automatisez Tout.',
    heroDescription: 'Nous transformons votre entreprise avec des solutions d\'IA de pointe et une automatisation intelligente. Obtenez des résultats plus rapides, réduisez les coûts et gardez une longueur d\'avance sur la concurrence.',
    sendMessage: 'Envoyez-nous un message',
    bookMeeting: 'Réserver une réunion',
    
    // About Section
    whoWeAre: 'Qui Nous Sommes',
    whoWeAreDescription: 'Une équipe avant-gardiste de spécialistes en IA et d\'experts en automatisation dédiés à révolutionner la façon dont les entreprises opèrent à l\'ère numérique.',
    pioneersTitle: 'Pionniers de l\'Innovation IA',
    pioneersDescription1: 'Nous ne sommes pas seulement des développeurs – nous sommes des visionnaires qui voient le pouvoir transformateur de l\'intelligence artificielle et de l\'automatisation. Notre mission est de rendre la technologie de pointe accessible aux entreprises de toutes tailles.',
    pioneersDescription2: 'Avec une perspective fraîche et une expertise technique approfondie, nous nous concentrons sur la livraison de solutions qui ne fonctionnent pas seulement aujourd\'hui, mais évoluent avec votre entreprise demain.',
    aiFirst: 'IA d\'Abord',
    aiFirstDesc: 'Chaque solution alimentée par l\'automatisation intelligente',
    lightningFast: 'Ultra Rapide',
    lightningFastDesc: 'Cycles de développement et de déploiement rapides',
    
    // Services Section
    whatWeDo: 'Ce Que Nous Faisons',
    whatWeDoDescription: 'Des applications alimentées par l\'IA aux systèmes d\'automatisation intelligente, nous créons des solutions qui transforment vos opérations commerciales.',
    aiDevelopment: 'Développement IA',
    aiDevelopmentDesc: 'Solutions d\'IA personnalisées incluant des modèles d\'apprentissage automatique, le traitement du langage naturel et des systèmes d\'analyse de données intelligents adaptés à vos besoins.',
    smartAutomation: 'Automatisation Intelligente',
    smartAutomationDesc: 'Automatisation de flux de travail intelligente qui apprend et s\'adapte, éliminant les tâches répétitives et optimisant vos processus métier pour une efficacité maximale.',
    customSolutions: 'Solutions Personnalisées',
    customSolutionsDesc: 'Applications et systèmes sur mesure conçus spécifiquement pour vos exigences commerciales uniques, construits avec l\'évolutivité et la croissance future à l\'esprit.',
    machineLearning: 'Modèles d\'Apprentissage Automatique',
    nlp: 'Traitement du Langage Naturel',
    predictiveAnalytics: 'Analyse Prédictive',
    processAutomation: 'Automatisation des Processus',
    workflowOptimization: 'Optimisation des Flux de Travail',
    integrationSolutions: 'Solutions d\'Intégration',
    webApplications: 'Applications Web',
    apiDevelopment: 'Développement d\'API',
    systemIntegration: 'Intégration de Systèmes',
    
    // Why Choose Us Section
    whyChooseUsTitle: 'Pourquoi Nous Choisir',
    whyChooseUsDescription: 'Nous combinons innovation et fiabilité pour livrer des résultats exceptionnels qui propulsent votre entreprise vers l\'avant.',
    innovationFirst: 'Innovation d\'Abord',
    innovationFirstDesc: 'Nous restons à la pointe de la technologie IA et d\'automatisation, garantissant que vous ayez toujours accès aux solutions les plus récentes et les plus efficaces.',
    maximumEfficiency: 'Efficacité Maximale',
    maximumEfficiencyDesc: 'Nos solutions sont conçues pour maximiser l\'efficacité et minimiser le gaspillage, vous aidant à accomplir plus avec moins d\'effort et de ressources.',
    fastResults: 'Résultats Rapides',
    fastResultsDesc: 'Nous croyons en l\'implémentation rapide et les victoires rapides. Voyez des améliorations mesurables dans vos opérations commerciales en semaines, pas en mois.',
    
    // CTA Section
    ctaTitle: 'Prêt à Transformer Votre Entreprise ?',
    ctaDescription: 'Discutons de la façon dont l\'IA et l\'automatisation peuvent révolutionner vos opérations. Commencez avec une consultation gratuite aujourd\'hui.',
    
    // Footer
    readyToStart: 'Prêt à commencer ?',
    footerText: '© 2025 AIFlow. Construire l\'avenir avec l\'automatisation intelligente.',
  },
  
  de: {
    // Header
    about: 'Über Uns',
    services: 'Dienstleistungen',
    whyChooseUs: 'Warum Uns Wählen',
    getStarted: 'Loslegen',
    
    // Hero Section
    heroTagline: 'KI-gestützte Entwicklung & Automatisierung',
    heroTitle1: 'Intelligenter Bauen.',
    heroTitle2: 'Alles Automatisieren.',
    heroDescription: 'Wir transformieren Ihr Unternehmen mit modernsten KI-Lösungen und intelligenter Automatisierung. Erzielen Sie schnellere Ergebnisse, reduzieren Sie Kosten und bleiben Sie der Konkurrenz voraus.',
    sendMessage: 'Nachricht senden',
    bookMeeting: 'Meeting buchen',
    
    // About Section
    whoWeAre: 'Wer Wir Sind',
    whoWeAreDescription: 'Ein zukunftsorientiertes Team von KI-Spezialisten und Automatisierungsexperten, das sich der Revolution der Geschäftstätigkeit im digitalen Zeitalter widmet.',
    pioneersTitle: 'Pioniere der KI-Innovation',
    pioneersDescription1: 'Wir sind nicht nur Entwickler – wir sind Visionäre, die die transformative Kraft der künstlichen Intelligenz und Automatisierung sehen. Unsere Mission ist es, modernste Technologie für Unternehmen jeder Größe zugänglich zu machen.',
    pioneersDescription2: 'Mit einer frischen Perspektive und tiefgreifender technischer Expertise konzentrieren wir uns darauf, Lösungen zu liefern, die nicht nur heute funktionieren, sondern sich morgen mit Ihrem Unternehmen weiterentwickeln.',
    aiFirst: 'KI-First',
    aiFirstDesc: 'Jede Lösung wird von intelligenter Automatisierung angetrieben',
    lightningFast: 'Blitzschnell',
    lightningFastDesc: 'Schnelle Entwicklungs- und Bereitstellungszyklen',
    
    // Services Section
    whatWeDo: 'Was Wir Tun',
    whatWeDoDescription: 'Von KI-gestützten Anwendungen bis hin zu intelligenten Automatisierungssystemen schaffen wir Lösungen, die Ihre Geschäftsabläufe transformieren.',
    aiDevelopment: 'KI-Entwicklung',
    aiDevelopmentDesc: 'Maßgeschneiderte KI-Lösungen einschließlich Machine-Learning-Modelle, natürliche Sprachverarbeitung und intelligente Datenanalysesysteme, die auf Ihre Bedürfnisse zugeschnitten sind.',
    smartAutomation: 'Intelligente Automatisierung',
    smartAutomationDesc: 'Intelligente Workflow-Automatisierung, die lernt und sich anpasst, repetitive Aufgaben eliminiert und Ihre Geschäftsprozesse für maximale Effizienz optimiert.',
    customSolutions: 'Maßgeschneiderte Lösungen',
    customSolutionsDesc: 'Maßgeschneiderte Anwendungen und Systeme, die speziell für Ihre einzigartigen Geschäftsanforderungen entwickelt wurden, mit Fokus auf Skalierbarkeit und zukünftiges Wachstum.',
    machineLearning: 'Machine-Learning-Modelle',
    nlp: 'Natürliche Sprachverarbeitung',
    predictiveAnalytics: 'Prädiktive Analytik',
    processAutomation: 'Prozessautomatisierung',
    workflowOptimization: 'Workflow-Optimierung',
    integrationSolutions: 'Integrationslösungen',
    webApplications: 'Webanwendungen',
    apiDevelopment: 'API-Entwicklung',
    systemIntegration: 'Systemintegration',
    
    // Why Choose Us Section
    whyChooseUsTitle: 'Warum Uns Wählen',
    whyChooseUsDescription: 'Wir kombinieren Innovation mit Zuverlässigkeit, um außergewöhnliche Ergebnisse zu liefern, die Ihr Unternehmen voranbringen.',
    innovationFirst: 'Innovation Zuerst',
    innovationFirstDesc: 'Wir bleiben an der Spitze der KI- und Automatisierungstechnologie und stellen sicher, dass Sie immer Zugang zu den neuesten und effektivsten Lösungen haben.',
    maximumEfficiency: 'Maximale Effizienz',
    maximumEfficiencyDesc: 'Unsere Lösungen sind darauf ausgelegt, die Effizienz zu maximieren und Verschwendung zu minimieren, damit Sie mit weniger Aufwand und Ressourcen mehr erreichen.',
    fastResults: 'Schnelle Ergebnisse',
    fastResultsDesc: 'Wir glauben an schnelle Implementierung und schnelle Erfolge. Sehen Sie messbare Verbesserungen in Ihren Geschäftsabläufen innerhalb von Wochen, nicht Monaten.',
    
    // CTA Section
    ctaTitle: 'Bereit, Ihr Unternehmen zu Transformieren?',
    ctaDescription: 'Lassen Sie uns besprechen, wie KI und Automatisierung Ihre Abläufe revolutionieren können. Starten Sie heute mit einer kostenlosen Beratung.',
    
    // Footer
    readyToStart: 'Bereit anzufangen?',
    footerText: '© 2025 AIFlow. Die Zukunft mit intelligenter Automatisierung gestalten.',
  },
  
  pt: {
    // Header
    about: 'Sobre',
    services: 'Serviços',
    whyChooseUs: 'Por Que Nos Escolher',
    getStarted: 'Começar',
    
    // Hero Section
    heroTagline: 'Desenvolvimento e Automação Impulsionados por IA',
    heroTitle1: 'Construa Mais Inteligente.',
    heroTitle2: 'Automatize Tudo.',
    heroDescription: 'Transformamos seu negócio com soluções de IA de ponta e automação inteligente. Obtenha resultados mais rápidos, reduza custos e fique à frente da concorrência.',
    sendMessage: 'Envie uma mensagem',
    bookMeeting: 'Agendar reunião',
    
    // About Section
    whoWeAre: 'Quem Somos',
    whoWeAreDescription: 'Uma equipe visionária de especialistas em IA e experts em automação dedicados a revolucionar como as empresas operam na era digital.',
    pioneersTitle: 'Pioneiros em Inovação de IA',
    pioneersDescription1: 'Não somos apenas desenvolvedores – somos visionários que veem o poder transformador da inteligência artificial e automação. Nossa missão é tornar a tecnologia de ponta acessível para empresas de todos os tamanhos.',
    pioneersDescription2: 'Com uma perspectiva fresca e profunda expertise técnica, focamos em entregar soluções que não apenas funcionam hoje, mas evoluem com seu negócio amanhã.',
    aiFirst: 'IA em Primeiro',
    aiFirstDesc: 'Toda solução impulsionada por automação inteligente',
    lightningFast: 'Super Rápido',
    lightningFastDesc: 'Ciclos rápidos de desenvolvimento e implantação',
    
    // Services Section
    whatWeDo: 'O Que Fazemos',
    whatWeDoDescription: 'De aplicações impulsionadas por IA a sistemas de automação inteligente, criamos soluções que transformam suas operações de negócio.',
    aiDevelopment: 'Desenvolvimento de IA',
    aiDevelopmentDesc: 'Soluções de IA personalizadas incluindo modelos de aprendizado de máquina, processamento de linguagem natural e sistemas de análise de dados inteligentes adaptados às suas necessidades.',
    smartAutomation: 'Automação Inteligente',
    smartAutomationDesc: 'Automação de fluxo de trabalho inteligente que aprende e se adapta, eliminando tarefas repetitivas e otimizando seus processos de negócio para máxima eficiência.',
    customSolutions: 'Soluções Personalizadas',
    customSolutionsDesc: 'Aplicações e sistemas sob medida projetados especificamente para seus requisitos únicos de negócio, construídos com escalabilidade e crescimento futuro em mente.',
    machineLearning: 'Modelos de Aprendizado de Máquina',
    nlp: 'Processamento de Linguagem Natural',
    predictiveAnalytics: 'Análise Preditiva',
    processAutomation: 'Automação de Processos',
    workflowOptimization: 'Otimização de Fluxo de Trabalho',
    integrationSolutions: 'Soluções de Integração',
    webApplications: 'Aplicações Web',
    apiDevelopment: 'Desenvolvimento de API',
    systemIntegration: 'Integração de Sistemas',
    
    // Why Choose Us Section
    whyChooseUsTitle: 'Por Que Nos Escolher',
    whyChooseUsDescription: 'Combinamos inovação com confiabilidade para entregar resultados excepcionais que impulsionam seu negócio para frente.',
    innovationFirst: 'Inovação em Primeiro',
    innovationFirstDesc: 'Permanecemos na vanguarda da tecnologia de IA e automação, garantindo que você sempre tenha acesso às soluções mais recentes e eficazes.',
    maximumEfficiency: 'Máxima Eficiência',
    maximumEfficiencyDesc: 'Nossas soluções são projetadas para maximizar a eficiência e minimizar o desperdício, ajudando você a alcançar mais com menos esforço e recursos.',
    fastResults: 'Resultados Rápidos',
    fastResultsDesc: 'Acreditamos em implementação rápida e vitórias rápidas. Veja melhorias mensuráveis em suas operações de negócio em semanas, não meses.',
    
    // CTA Section
    ctaTitle: 'Pronto para Transformar Seu Negócio?',
    ctaDescription: 'Vamos discutir como IA e automação podem revolucionar suas operações. Comece com uma consulta gratuita hoje.',
    
    // Footer
    readyToStart: 'Pronto para começar?',
    footerText: '© 2025 AIFlow. Construindo o futuro com automação inteligente.',
  },
};

export const getTranslations = (language: Language): Translations => {
  return translations[language] || translations.en;
};