'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'en';

type Dictionary = any;

const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    products: "Products",
    projects: "Projects",
    contact: "Contact",
    startProject: "Start Project",
    startYourProject: "Start Your Project",
  },
  hero: {
    slides: [
      {
        headline1: "Glass That",
        headline2: "Transforms",
        headline3: "Spaces.",
        sub: "Structural glazing & aluminum systems engineered for landmark architecture.",
        tag: "Structural Glazing",
      },
      {
        headline1: "Precision",
        headline2: "Crafted",
        headline3: "Facades.",
        sub: "Curtain-wall systems certified to international wind-load standards.",
        tag: "Aluminum Facades",
      },
      {
        headline1: "Luxury",
        headline2: "Meets",
        headline3: "Clarity.",
        sub: "Floor-to-ceiling glazing for high-end residential and commercial projects.",
        tag: "Premium Enclosures",
      }
    ],
    viewWork: "View Our Work",
    getQuote: "Get a Quote",
    stats: {
      projects: "Projects",
      years: "Years",
      glass: "m² Glass",
    },
    location: "Abidjan · Côte d'Ivoire",
    scroll: "Scroll"
  },
  marquee: [
    "Structural Glazing",
    "Tempered Safety Glass",
    "Aluminum Facades",
    "ISO-Certified Systems",
    "Thermal Efficiency",
    "Double Glazing",
    "Fire-Resistant Systems",
    "Acoustic Performance",
    "Interior Walls",
    "Sun Visors",
    "Precision Engineering",
    "Abidjan & Côte d'Ivoire",
  ],
  solutions: {
    tag: "Our Systems",
    heading1: "Engineering for",
    heading2: "every project.",
    viewAll: "View All Products",
    system: "System",
    viewDetails: "View Details",
    products: [
      {
        title: 'Aluminum Windows',
        description: 'Thermally broken profiles for tropical climates. Engineered to ISO 9001 tolerances.',
      },
      {
        title: 'Aluminum Doors',
        description: 'High-security, aesthetically refined entrances for commercial and luxury residential.',
      },
      {
        title: 'Sliding Doors',
        description: 'Ultra-slim rail systems with seamless indoor-outdoor spatial integration.',
      },
      {
        title: 'Facades (TENTAL)',
        description: 'Full curtain-wall and structural glazing systems defining modern skylines.',
      },
      {
        title: 'Fire-Resistant Systems',
        description: 'Certified EI30–EI120 barriers integrating safety without compromise on aesthetics.',
      },
      {
        title: 'Interior Walls',
        description: 'Floor-to-ceiling glass partitions shaping open, luminous workspace environments.',
      },
      {
        title: 'Sun Visors',
        description: 'Precision-angled brise-soleil elements reducing solar gain without blocking daylight.',
      }
    ]
  },
  featured: {
    tag: "Technical Portfolio",
    heading1: "Engineering",
    heading2: "Excellence.",
    allProducts: "All Products",
    viewDetails: "View Details",
    products: [
      {
        title: "Structural Glazing",
        category: "Facades",
        description: "Full curtain-wall systems engineered for wind-load compliance across Abidjan's skyline.",
      },
      {
        title: "Thermal Breaks",
        category: "Insulation",
        description: "Polyamide-reinforced profiles achieving Uf values below 1.0 W/m²K.",
      },
      {
        title: "Jumbo Formats",
        category: "Dimensions",
        description: "Floor-to-ceiling spans up to 6m with structural interlayer bonding.",
      },
      {
        title: "Acoustic Units",
        category: "Performance",
        description: "Triple-laminate assemblies rated up to Rw 52 dB for urban environments.",
      }
    ]
  },
  sustainability: {
    tag: "Environmental Impact",
    heading1: "Decarbonizing",
    heading2: "Architecture.",
    description: "Our structural systems go beyond standard compliance — engineered to integrate circular economy principles, maximize thermal efficiency, and utilize up to 75% recycled aluminum.",
    link: "Our Eco-Approach",
    certified: "Certified",
    standard: "Environmental Standard",
    stats: {
      thermal: "Thermal Efficiency",
      recycled: "Recycled Alloys",
      carbon: "Carbon vs Standard"
    }
  },
  trust: {
    tag: "Quality Assurance",
    heading1: "We take care of",
    heading2: "our customers.",
    stats: {
      projects: "Projects",
      years: "Years",
      certified: "Certified"
    },
    features: [
      {
        title: "10+ Years",
        subtitle: "of Fabrication",
        description: "A decade of mastering aluminum extrusion, precision glass cutting, and site-specific project delivery in Abidjan.",
      },
      {
        title: "In-House",
        subtitle: "Quality Control",
        description: "Our dedicated workshop ensures local fabrication meets rigorous international tolerances before site deployment.",
      },
      {
        title: "ISO-Certified",
        subtitle: "Systems",
        description: "All our glazing and aluminum assemblies adhere to global safety standards for wind-load and impact resistance.",
      },
      {
        title: "Eco-Conscious",
        subtitle: "Supply Chain",
        description: "We prioritize low-carbon aluminum alloys and high-thermal-efficiency glass to support sustainable building certifications.",
      }
    ]
  },
  cta: {
    tag: "Start Your Vision",
    heading1: "Let's build",
    heading2: "the future.",
    description: "Precision glass engineering for landmark projects. Our technical team is ready to review your specifications and supply your site with excellence.",
    button: "Get In Touch",
    badges: ["ISO Certified", "10+ Years", "200+ Projects"]
  },
  footer: {
    description: "Premium manufacturer and distributor of architectural glass and high-performance aluminium systems for Abidjan's construction and housing sectors.",
    whatsapp: "WhatsApp Us",
    navigate: "Navigate",
    productsHeader: "Products",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    productLinks: [
      { href: '/products#windows', label: 'Aluminium Windows (SOLEAL)' },
      { href: '/products#doors', label: 'Aluminium Sliding Systems (ARTLINE)' },
      { href: '/products#facades', label: 'Façades (TENTAL)' },
      { href: '/products#bulletproof', label: 'Bulletproof Glass' },
      { href: '/products#shower', label: 'Shower Cabins' },
    ]
  },
  productsPage: {
    hero: {
      tag: "Technical Portfolio",
      title1: "Glass categories for",
      title2: "every build.",
      description: "Choose from our extensive portfolio of glass systems, engineered for safety, thermal performance, and architectural elegance across Côte d'Ivoire."
    },
    cta: {
      title: "Ready to start your project?",
      description: "Our technical team in Abidjan is ready to assist you with specifications, structural calculations, and custom glass fabrication for your next building.",
      button: "Request a Custom Quote"
    },
    card: {
      getQuote: "Get a Quote"
    },
    items: [
      {
        title: "Aluminium Windows (SOLEAL)",
        category: "Performance",
        description: "High-performance aluminium window systems engineered for architectural elegance, superior thermal insulation, and acoustic performance.",
        features: ["Hydro CIRCAL aluminium", "High thermal resistance", "Custom powder coating"]
      },
      {
        title: "Aluminium Sliding Systems",
        category: "Elegance",
        description: "Premium sliding systems (ARTLINE) designed for large openings, bringing maximum natural light with minimal visible frames.",
        features: ["Floor-to-ceiling spans", "Smooth operation", "Maximized daylight"]
      },
      {
        title: "Façades (TENTAL)",
        category: "Architecture",
        description: "Innovative curtain wall and façade systems for low-carbon buildings. Designed to withstand wind loads while creating stunning modern skylines.",
        features: ["Wind-load certified", "UV and solar control", "Circular economy focused"]
      },
      {
        title: "Bulletproof Glass",
        category: "Security",
        description: "Advanced multi-laminated safety glass designed to withstand ballistic impacts, ensuring maximum security for banks, embassies, and luxury retail.",
        features: ["Ballistic resistance", "Multi-layered lamination", "Uncompromised clarity"]
      },
      {
        title: "Shower Enclosures",
        category: "Interiors",
        description: "Custom-cut tempered glass shower cabins and screens. Precision-engineered for watertight elegance in luxury residential and hotel projects.",
        features: ["Heavy-duty hardware", "Frameless profiles", "Easy-clean coating"]
      },
      {
        title: "Stained Glass (Vitraux)",
        category: "Custom Design",
        description: "Bespoke stained glass and decorative glass art for religious, residential, and commercial projects, combining traditional craftsmanship with modern techniques.",
        features: ["Handcrafted designs", "Vibrant colors", "Historical restoration"]
      }
    ]
  },
  projectsPage: {
    hero: {
      tag: "Featured Work",
      title1: "Engineering the",
      title2: "modern skyline.",
      description: "Explore our curated portfolio of landmark architectural glazing projects, bespoke luxury housing, and high-performance structural systems across Abidjan and Côte d'Ivoire."
    },
    items: [
      {
        title: "Skyline Corporate Tower",
        location: "Plateau, Abidjan",
        description: "A landmark 20-story structural glazing façade, engineered for high wind-load resistance and optimal thermal performance in tropical climates.",
        category: "Commercial Façade",
      },
      {
        title: "Villa Riviera",
        location: "Riviera Golf",
        description: "Premium frameless sliding doors and ultra-clear structural balustrades for seamless indoor-outdoor living.",
        category: "Luxury Residential",
      },
      {
        title: "Innovation Hub",
        location: "Cocody",
        description: "Interior floor-to-ceiling acoustic glass partitions maximizing natural light and privacy.",
        category: "Workspace",
      },
      {
        title: "L'Océan Boutique",
        location: "Assinie",
        description: "Custom tempered glass enclosures and large format mirrors elevating the luxury hospitality experience.",
        category: "Hospitality",
      },
      {
        title: "Plateau Flagship",
        location: "Plateau",
        description: "A striking two-story retail glass storefront utilizing jumbo format clear structural glazing.",
        category: "Retail Storefront",
      }
    ]
  },
  aboutPage: {
    hero: {
      tag: "Our Story",
      title1: "Crafting Light.",
      title2: "Defining Space."
    },
    legacy: {
      tag: "The Glass Ivoire Legacy",
      title1: "Elevating Abidjan's",
      title2: "Architectural Horizon.",
      p1: "Glass Ivoire is a premier manufacturer and distributor of high-quality architectural glass and aluminum systems. Established in June 2023 at Boulevard de Marseille, Treichville, we serve as the vital link between visionary architectural design and flawless physical execution in Côte d'Ivoire.",
      p2: "Our mission is simple yet ambitious: to deliver durable, elegant glazing solutions accompanied by unmatched local service. We blend technical rigor with premium materials like endlessly recyclable Hydro CIRCAL aluminium, ensuring every facade, partition, and structural enclosure we produce enhances modern design, maximizes safety, and optimizes energy efficiency.",
      since: "Since",
      year: "2023"
    },
    pillars: {
      title: "The Pillars of Our Process",
      subtitle: "What drives our engineering and manufacturing excellence daily.",
      items: [
        {
          title: "Precision Engineering",
          description: "Every millimeter matters. We fabricate systems to exacting international tolerances, ensuring perfect fit and flawless performance on site."
        },
        {
          title: "Sustainable Innovation",
          description: "Committed to circular economy principles, maximizing thermal efficiency, and utilizing high-recycled-content aluminum alloys."
        },
        {
          title: "Local Expertise",
          description: "Deep understanding of Abidjan's climate and architectural nuances, delivering global standards with localized insights and rapid support."
        }
      ]
    },
    manufacturing: {
      tag: "Global Standards, Local Facility",
      title1: "State-of-the-Art",
      title2: "Fabrication in Abidjan.",
      description: "By maintaining a cutting-edge local workshop, we eliminate long import delays for fabricated components while ensuring every cut, join, and seal meets strict European ISO standards. We don't just assemble; we engineer.",
      workshop: "Local Workshop",
      tech: "Global Tech",
      stats: [
        { label: "Years Experience" },
        { label: "Projects Completed" },
        { label: "Expert Technicians" },
        { label: "Quality Certified" }
      ]
    }
  },
  contactForm: {
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "name@example.com",
    company: "Company Name",
    optional: "(Optional)",
    companyPlaceholder: "Your company",
    projectType: "Project Type",
    projectTypePlaceholder: "Select project type...",
    types: {
      residential: "Residential",
      commercial: "Commercial",
      industrial: "Industrial",
      other: "Other"
    },
    message: "Message",
    messagePlaceholder: "Tell us about your project requirements...",
    submit: "Send Enquiry"
  },
  contactPage: {
    hero: {
      tag: "Get in touch",
      title: "Let's create something brilliant.",
      description: "Reach out for consultations, technical support, and bespoke glass solutions tailored to your construction, housing, or architectural projects."
    },
    details: {
      headquarters: "Our Headquarters",
      contact: "Contact",
      phone: "Phone",
      general: "General Enquiries",
      sales: "Sales",
      whatsapp: "WhatsApp Us"
    },
    hours: {
      title: "Hours",
      weekdays: "Mon - Fri",
      saturday: "Saturday",
      sunday: "Sunday"
    }
  }
};

const fr: Dictionary = {
  nav: {
    home: "Accueil",
    about: "À Propos",
    products: "Produits",
    projects: "Projets",
    contact: "Contact",
    startProject: "Démarrer un Projet",
    startYourProject: "Démarrez Votre Projet",
  },
  hero: {
    slides: [
      {
        headline1: "Le Verre Qui",
        headline2: "Transforme",
        headline3: "Les Espaces.",
        sub: "Vitrages structurels et systèmes en aluminium conçus pour l'architecture de référence.",
        tag: "Vitrage Structurel",
      },
      {
        headline1: "Façades",
        headline2: "Conçues Avec",
        headline3: "Précision.",
        sub: "Systèmes de murs-rideaux certifiés aux normes internationales de charge de vent.",
        tag: "Façades en Aluminium",
      },
      {
        headline1: "Le Luxe",
        headline2: "Rencontre La",
        headline3: "Clarté.",
        sub: "Vitrage du sol au plafond pour les projets résidentiels et commerciaux haut de gamme.",
        tag: "Enceintes Premium",
      }
    ],
    viewWork: "Voir Nos Réalisations",
    getQuote: "Obtenir un Devis",
    stats: {
      projects: "Projets",
      years: "Années",
      glass: "m² de Verre",
    },
    location: "Abidjan · Côte d'Ivoire",
    scroll: "Défiler"
  },
  marquee: [
    "Vitrage Structurel",
    "Verre de Sécurité Trempé",
    "Façades en Aluminium",
    "Systèmes Certifiés ISO",
    "Efficacité Thermique",
    "Double Vitrage",
    "Systèmes Résistants au Feu",
    "Performance Acoustique",
    "Murs Intérieurs",
    "Brise-Soleil",
    "Ingénierie de Précision",
    "Abidjan & Côte d'Ivoire",
  ],
  solutions: {
    tag: "Nos Systèmes",
    heading1: "Ingénierie pour",
    heading2: "chaque projet.",
    viewAll: "Voir Tous Les Produits",
    system: "Système",
    viewDetails: "Voir Les Détails",
    products: [
      {
        title: 'Fenêtres en Aluminium',
        description: 'Profilés à rupture de pont thermique pour climats tropicaux. Conçus selon les tolérances ISO 9001.',
      },
      {
        title: 'Portes en Aluminium',
        description: 'Entrées haute sécurité et esthétiquement raffinées pour les commerces et les résidences de luxe.',
      },
      {
        title: 'Portes Coulissantes',
        description: 'Systèmes de rails ultra-fins pour une intégration spatiale intérieure-extérieure fluide.',
      },
      {
        title: 'Façades (TENTAL)',
        description: 'Systèmes complets de murs-rideaux et de vitrages structurels redéfinissant les horizons urbains modernes.',
      },
      {
        title: 'Systèmes Résistants au Feu',
        description: 'Barrières certifiées EI30–EI120 intégrant la sécurité sans compromettre l\'esthétique.',
      },
      {
        title: 'Murs Intérieurs',
        description: 'Cloisons en verre du sol au plafond façonnant des espaces de travail ouverts et lumineux.',
      },
      {
        title: 'Brise-Soleil',
        description: 'Éléments brise-soleil orientés avec précision pour réduire l\'apport solaire sans bloquer la lumière du jour.',
      }
    ]
  },
  featured: {
    tag: "Portfolio Technique",
    heading1: "Excellence en",
    heading2: "Ingénierie.",
    allProducts: "Tous Les Produits",
    viewDetails: "Voir Les Détails",
    products: [
      {
        title: "Vitrage Structurel",
        category: "Façades",
        description: "Systèmes complets de murs-rideaux conçus pour la conformité aux charges de vent dans tout Abidjan.",
      },
      {
        title: "Ruptures Thermiques",
        category: "Isolation",
        description: "Profilés renforcés de polyamide atteignant des valeurs Uf inférieures à 1.0 W/m²K.",
      },
      {
        title: "Formats Jumbo",
        category: "Dimensions",
        description: "Portées du sol au plafond jusqu'à 6m avec collage structurel des intercalaires.",
      },
      {
        title: "Unités Acoustiques",
        category: "Performance",
        description: "Assemblages triplement feuilletés évalués jusqu'à Rw 52 dB pour les environnements urbains.",
      }
    ]
  },
  sustainability: {
    tag: "Impact Environnemental",
    heading1: "Décarboner",
    heading2: "L'Architecture.",
    description: "Nos systèmes structurels vont au-delà de la conformité standard — conçus pour intégrer les principes de l'économie circulaire, maximiser l'efficacité thermique et utiliser jusqu'à 75% d'aluminium recyclé.",
    link: "Notre Approche Éco",
    certified: "Certifié",
    standard: "Norme Environnementale",
    stats: {
      thermal: "Efficacité Thermique",
      recycled: "Alliages Recyclés",
      carbon: "Carbone vs Standard"
    }
  },
  trust: {
    tag: "Assurance Qualité",
    heading1: "Nous prenons soin de",
    heading2: "nos clients.",
    stats: {
      projects: "Projets",
      years: "Années",
      certified: "Certifié"
    },
    features: [
      {
        title: "Plus de 10 Ans",
        subtitle: "de Fabrication",
        description: "Une décennie de maîtrise de l'extrusion d'aluminium, de la découpe de précision du verre et de la livraison de projets sur mesure à Abidjan.",
      },
      {
        title: "En Interne",
        subtitle: "Contrôle Qualité",
        description: "Notre atelier dédié s'assure que la fabrication locale respecte des tolérances internationales rigoureuses avant le déploiement sur site.",
      },
      {
        title: "Certifié ISO",
        subtitle: "Systèmes",
        description: "Tous nos assemblages de vitrages et d'aluminium respectent les normes de sécurité mondiales pour la résistance aux charges de vent et aux impacts.",
      },
      {
        title: "Éco-Conscient",
        subtitle: "Chaîne d'Approvisionnement",
        description: "Nous privilégions les alliages d'aluminium bas carbone et les verres à haute efficacité thermique pour soutenir les certifications de bâtiments durables.",
      }
    ]
  },
  cta: {
    tag: "Démarrez Votre Vision",
    heading1: "Construisons",
    heading2: "l'avenir.",
    description: "Ingénierie de précision du verre pour des projets de référence. Notre équipe technique est prête à examiner vos spécifications et à approvisionner votre chantier avec excellence.",
    button: "Contactez-Nous",
    badges: ["Certifié ISO", "Plus de 10 Ans", "Plus de 200 Projets"]
  },
  footer: {
    description: "Fabricant et distributeur haut de gamme de verre architectural et de systèmes en aluminium haute performance pour les secteurs de la construction et du logement à Abidjan.",
    whatsapp: "Nous Contacter sur WhatsApp",
    navigate: "Navigation",
    productsHeader: "Produits",
    rights: "Tous droits réservés.",
    privacy: "Politique de Confidentialité",
    terms: "Conditions de Service",
    productLinks: [
      { href: '/products#windows', label: 'Fenêtres en Aluminium (SOLEAL)' },
      { href: '/products#doors', label: 'Systèmes Coulissants en Aluminium (ARTLINE)' },
      { href: '/products#facades', label: 'Façades (TENTAL)' },
      { href: '/products#bulletproof', label: 'Verre Blindé' },
      { href: '/products#shower', label: 'Cabines de Douche' },
    ]
  },
  productsPage: {
    hero: {
      tag: "Portfolio Technique",
      title1: "Catégories de verre pour",
      title2: "chaque construction.",
      description: "Faites votre choix parmi notre vaste portefeuille de systèmes en verre, conçus pour la sécurité, les performances thermiques et l'élégance architecturale à travers la Côte d'Ivoire."
    },
    cta: {
      title: "Prêt à démarrer votre projet ?",
      description: "Notre équipe technique à Abidjan est prête à vous assister pour les spécifications, les calculs structurels et la fabrication de verre sur mesure pour votre prochain bâtiment.",
      button: "Demander un Devis Personnalisé"
    },
    card: {
      getQuote: "Obtenir un Devis"
    },
    items: [
      {
        title: "Fenêtres en Aluminium (SOLEAL)",
        category: "Performance",
        description: "Systèmes de fenêtres en aluminium haute performance conçus pour l'élégance architecturale, une isolation thermique supérieure et des performances acoustiques.",
        features: ["Aluminium Hydro CIRCAL", "Haute résistance thermique", "Revêtement en poudre personnalisé"]
      },
      {
        title: "Systèmes Coulissants en Aluminium",
        category: "Élégance",
        description: "Systèmes coulissants haut de gamme (ARTLINE) conçus pour les grandes ouvertures, apportant un maximum de lumière naturelle avec un minimum de cadres visibles.",
        features: ["Portées du sol au plafond", "Fonctionnement fluide", "Lumière du jour maximisée"]
      },
      {
        title: "Façades (TENTAL)",
        category: "Architecture",
        description: "Systèmes innovants de murs-rideaux et de façades pour les bâtiments à faible émission de carbone. Conçus pour résister aux charges de vent tout en créant de superbes lignes d'horizon modernes.",
        features: ["Certifié pour les charges de vent", "Contrôle UV et solaire", "Axé sur l'économie circulaire"]
      },
      {
        title: "Verre Blindé",
        category: "Sécurité",
        description: "Verre de sécurité multi-feuilleté avancé conçu pour résister aux impacts balistiques, assurant une sécurité maximale pour les banques, les ambassades et le commerce de détail de luxe.",
        features: ["Résistance balistique", "Laminage multicouche", "Clarté sans compromis"]
      },
      {
        title: "Cabines de Douche",
        category: "Intérieurs",
        description: "Cabines et écrans de douche en verre trempé découpés sur mesure. Conçus avec précision pour une élégance étanche dans les projets résidentiels et hôteliers de luxe.",
        features: ["Quincaillerie robuste", "Profilés sans cadre", "Revêtement facile à nettoyer"]
      },
      {
        title: "Vitrail (Vitraux)",
        category: "Design sur Mesure",
        description: "Vitraux sur mesure et art du verre décoratif pour les projets religieux, résidentiels et commerciaux, alliant l'artisanat traditionnel aux techniques modernes.",
        features: ["Designs artisanaux", "Couleurs vibrantes", "Restauration historique"]
      }
    ]
  },
  projectsPage: {
    hero: {
      tag: "Réalisations Phares",
      title1: "Concevoir",
      title2: "la ligne d'horizon moderne.",
      description: "Explorez notre portefeuille de projets phares de vitrage architectural, de logements de luxe sur mesure et de systèmes structurels haute performance à Abidjan et en Côte d'Ivoire."
    },
    items: [
      {
        title: "Tour d'Entreprise Skyline",
        location: "Plateau, Abidjan",
        description: "Une façade en vitrage structurel emblématique de 20 étages, conçue pour une haute résistance aux charges de vent et des performances thermiques optimales en climat tropical.",
        category: "Façade Commerciale",
      },
      {
        title: "Villa Riviera",
        location: "Riviera Golf",
        description: "Portes coulissantes sans cadre haut de gamme et balustrades structurelles ultra-claires pour une vie intérieur-extérieur fluide.",
        category: "Résidentiel de Luxe",
      },
      {
        title: "Hub d'Innovation",
        location: "Cocody",
        description: "Cloisons intérieures en verre acoustique du sol au plafond maximisant la lumière naturelle et l'intimité.",
        category: "Espace de Travail",
      },
      {
        title: "L'Océan Boutique",
        location: "Assinie",
        description: "Enceintes en verre trempé sur mesure et miroirs grand format rehaussant l'expérience de l'hôtellerie de luxe.",
        category: "Hôtellerie",
      },
      {
        title: "Plateau Flagship",
        location: "Plateau",
        description: "Une vitrine commerciale en verre de deux étages frappante utilisant un vitrage structurel clair au format jumbo.",
        category: "Vitrine Commerciale",
      }
    ]
  },
  aboutPage: {
    hero: {
      tag: "Notre Histoire",
      title1: "Façonner la Lumière.",
      title2: "Définir l'Espace."
    },
    legacy: {
      tag: "L'Héritage Glass Ivoire",
      title1: "Élever l'Horizon Architectural",
      title2: "d'Abidjan.",
      p1: "Glass Ivoire est un fabricant et distributeur de premier plan de verre architectural et de systèmes en aluminium de haute qualité. Établis en juin 2023 au Boulevard de Marseille, Treichville, nous sommes le lien vital entre la conception architecturale visionnaire et l'exécution physique impeccable en Côte d'Ivoire.",
      p2: "Notre mission est simple mais ambitieuse : fournir des solutions de vitrage durables et élégantes accompagnées d'un service local inégalé. Nous allions la rigueur technique à des matériaux de qualité supérieure comme l'aluminium Hydro CIRCAL recyclable à l'infini, garantissant que chaque façade, cloison et enceinte structurelle que nous produisons améliore le design moderne, maximise la sécurité et optimise l'efficacité énergétique.",
      since: "Depuis",
      year: "2023"
    },
    pillars: {
      title: "Les Piliers de Notre Processus",
      subtitle: "Ce qui motive quotidiennement notre excellence en ingénierie et en fabrication.",
      items: [
        {
          title: "Ingénierie de Précision",
          description: "Chaque millimètre compte. Nous fabriquons des systèmes selon des tolérances internationales exigeantes, garantissant un ajustement parfait et des performances impeccables sur site."
        },
        {
          title: "Innovation Durable",
          description: "Engagés envers les principes de l'économie circulaire, maximisant l'efficacité thermique et utilisant des alliages d'aluminium à forte teneur en matières recyclées."
        },
        {
          title: "Expertise Locale",
          description: "Une compréhension approfondie du climat et des nuances architecturales d'Abidjan, offrant des normes mondiales avec des connaissances locales et un support rapide."
        }
      ]
    },
    manufacturing: {
      tag: "Normes Mondiales, Installation Locale",
      title1: "Fabrication de Pointe",
      title2: "à Abidjan.",
      description: "En maintenant un atelier local de pointe, nous éliminons les longs retards d'importation pour les composants fabriqués tout en garantissant que chaque coupe, assemblage et joint répond aux normes européennes ISO strictes. Nous ne nous contentons pas d'assembler ; nous concevons.",
      workshop: "Atelier Local",
      tech: "Technologie Mondiale",
      stats: [
        { label: "Années d'Expérience" },
        { label: "Projets Terminés" },
        { label: "Techniciens Experts" },
        { label: "Qualité Certifiée" }
      ]
    }
  },
  contactForm: {
    name: "Nom",
    namePlaceholder: "Votre nom",
    email: "Email",
    emailPlaceholder: "nom@exemple.com",
    company: "Nom de l'entreprise",
    optional: "(Optionnel)",
    companyPlaceholder: "Votre entreprise",
    projectType: "Type de Projet",
    projectTypePlaceholder: "Sélectionnez le type de projet...",
    types: {
      residential: "Résidentiel",
      commercial: "Commercial",
      industrial: "Industriel",
      other: "Autre"
    },
    message: "Message",
    messagePlaceholder: "Parlez-nous des exigences de votre projet...",
    submit: "Envoyer la Demande"
  },
  contactPage: {
    hero: {
      tag: "Entrez en contact",
      title: "Créons quelque chose de brillant.",
      description: "Contactez-nous pour des consultations, un support technique et des solutions en verre sur mesure adaptées à vos projets de construction, de logement ou d'architecture."
    },
    details: {
      headquarters: "Notre Siège Social",
      contact: "Contact",
      phone: "Téléphone",
      general: "Demandes Générales",
      sales: "Ventes",
      whatsapp: "Nous Contacter sur WhatsApp"
    },
    hours: {
      title: "Heures",
      weekdays: "Lun - Ven",
      saturday: "Samedi",
      sunday: "Dimanche"
    }
  }
};

const dictionaries: Record<Language, Dictionary> = { en, fr };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
  dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr'); // Default to French
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
      setLanguageState(savedLang);
    } else {
      setLanguageState('fr');
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = dictionaries[language];

    for (const k of keys) {
      if (value === undefined) break;
      value = value[k];
    }

    if (value === undefined) {
      // Fallback to English if translation is missing
      let fallbackValue: any = dictionaries['en'];
      for (const k of keys) {
        if (fallbackValue === undefined) break;
        fallbackValue = fallbackValue[k];
      }
      return fallbackValue !== undefined ? fallbackValue : key;
    }

    return value;
  };

  // To avoid hydration mismatch while still providing context during SSR,
  // we always render the provider but we might want to delay rendering children
  // if they heavily depend on language layout shifts, but here it's fine to just use 'fr' initially.
  // Actually, we can just return the provider immediately.
  const contextValue = { language, setLanguage, t, dict: dictionaries[language] };

  if (!mounted) {
    // Return provider with default language to prevent context errors during SSR
    return (
      <LanguageContext.Provider value={contextValue}>
        <div style={{ visibility: 'hidden' }}>
          {children}
        </div>
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
