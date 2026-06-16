// data/cvData.ts

export const cvData = {
  profile: {
    name: "Iriana Razafimandimby",
    title: "Développeur Web/Fullstack & OPS",
    contact: {
      phone: "+261 32 14 860 25",
      email: "dev32.irin@gmail.com",
      address: "III L 32 Ter Soanierana-Fiadanana",
      linkedin: "Iriana Razafimandimby"
    },
    summary: "Développeur passionné avec 9 années d'expérience en conception et déploiement d'applications Web performantes. Fort d'une formation axée sur le projet (42), j'excelle dans la transformation d'exigences complexes en solutions architecturales claires. Spécialiste de la maintenance et de l'optimisation de systèmes legacy en environnement de production."
  },
  hard_skills: {
    languages_runtimes: ["PHP", "JavaScript (ES6+)", "HTML5", "CSS3/SASS", "C++", "Python"],
    frameworks_libraries: ["React.js", "Redux Toolkit", "Next.js", "NestJS", "Vue.js", "Vite", "Bootstrap"],
    devops_infrastructure: ["Docker", "Docker Compose", "Linux (CentOS/Debian/Ubuntu)", "Bash Scripting", "CI/CD", "MQTT Broker", "Grafana"],
    databases_cms: ["MariaDB/MySQL", "PostgreSQL", "InfluxDB", "Joomla", "WordPress", "VirtueMart"],
    tools_methods: ["Git", "API RESTful", "WebSockets", "JWT", "Webpack", "Responsive Design", "Sécurité Web (SSL/HTTPS)"]
  },
  soft_skills: [
    "Rigueur et sens du détail",
    "Capacité d'apprentissage rapide",
    "Autonomie",
    "Esprit d'analyse et de résolution de problèmes",
    "Curiosité technologique",
    "Motivation et engagement"
  ],
  experiences: [
    {
      role: "Consultant technique / expert",
      company: "Lafirme Agence web",
      period: "2016 - Aujourd'hui",
      description: "Intervention en urgence sur des infrastructures e-commerce (Joomla/VirtueMart) subissant des attaques massives de spams. Restauration de l'intégrité des données et optimisation des performances serveur sous CentOS 7."
    },
    {
      role: "Développeur Web Wordpress",
      company: "VIWEB",
      period: "2018-2025",
      description: "Gestion d'un parc de plus de 150 sites WordPress: maintenance, sécurité et mises à jour critiques. Développement de thèmes et plugins sur mesure en PHP/SQL. Migration de serveurs legacy vers des infrastructures modernes et monitorées."
    }
  ],
  projects: [
    {
      name: "Tikeo (ft_transcendence)",
      category: "Fullstack",
      tags: ["NestJS", "React", "PostgreSQL", "Docker", "WebSockets"],
      description: "Plateforme de support client en temps réel.",
      details: "Développement d'une SPA de support client basée sur les rôles pour le projet 42.",
      challenges: ["Gestion de la latence WebSockets", "Architecture RBAC complexe", "Optimisation Prisma ORM"],
      benefits: "Gestion collaborative et traçabilité immédiate des tickets de support.",
      url: "https://github.com/Iriana022/ft_"
    },
    {
      name: "Inception(42)",
      category: "DevOps",
      tags: ["Docker", "Nginx", "MariaDB", "Alpine"],
      description: "Infrastructure virtualisée sécurisée.",
      details: "Orchestration d'une infrastructure système complète en conteneurs.",
      challenges: ["Isolation réseau", "Configuration TLS/SSL", "Persistance des volumes"],
      benefits: "Environnement de production robuste et reproductible.",
      url: "#"
    },
    {
      name: "ft_irc(42)",
      category: "Infrastructure",
      tags: ["C++", "Sockets", "Protocole IRC"],
      description: "Serveur de messagerie temps réel.",
      details: "Implémentation d'un serveur IRC conforme au RFC, gérant les connexions simultanées.",
      challenges: ["Gestion des sockets non-bloquants", "Parsing de protocole complexe"],
      benefits: "Maîtrise profonde de la programmation système et des flux réseaux.",
      url: "#"
    },
    {
      name: "Simulation Ferme IOT",
      category: "DevOps",
      tags: ["Docker", "Python", "MQTT", "InfluxDB", "Grafana"],
      description: "Monitoring IOT temps réel.",
      details: "Collecte et visualisation de données de capteurs agricoles via un broker MQTT.",
      challenges: ["Gestion de flux de données continus", "Architecture de stockage time-series"],
      benefits: "Prise de décision basée sur des données précises et graphiques.",
      url: "https://github.com/Iriana022/Frme-iot-simumator"
    },
    {
      name: "Monitoring LaFirme",
      category: "DevOps",
      tags: ["Docker", "Uptime Kuma"],
      description: "Réduction des coûts de monitoring.",
      details: "Migration d'un système payant vers une solution self-hosted (Uptime Kuma).",
      challenges: ["Maintenance sans interruption de service"],
      benefits: "Réduction totale des coûts de licence et autonomie accrue.",
      url: "http://184.168.20.146:3001/"
    },
    {
      name: "Nest Blog",
      category: "Fullstack",
      tags: ["NestJS", "React", "CI/CD"],
      description: "Pipeline de déploiement automatisé.",
      details: "Projet pédagogique NextJS/NestJS incluant un pipeline complet.",
      challenges: ["Configuration des runners CI/CD", "Optimisation des builds Vercel"],
      benefits: "Workflow de déploiement moderne et professionnel.",
      url: "https://nestblog-drab.vercel.app/"
    },
    {
      name: "Gestion Suivi Ferme",
      category: "Fullstack",
      tags: ["React", "SPA", "Neon"],
      description: "SPA pour gestion de données agricoles.",
      details: "Interface de suivi optimisée pour la gestion opérationnelle de fermes.",
      challenges: ["Performance de rendu de larges datasets", "Architecture client-serveur"],
      benefits: "Digitalisation des processus manuels.",
      url: "https://iriana022.github.io/react-farm-management/"
    },
    {
      name: "Aqua Pure",
      category: "Web",
      tags: ["WordPress", "Elementor"],
      description: "Refonte e-commerce.",
      details: "Optimisation de l'expérience utilisateur et refonte graphique.",
      challenges: ["Performance de chargement", "Compatibilité mobile"],
      benefits: "Amélioration significative du taux de conversion.",
      url: "https://aqua-pure.mg/"
    },
    {
      name: "Koota (SaaS)",
      category: "Web",
      tags: ["WordPress", "PHP", "ACF"],
      description: "Collaboration intégration SaaS.",
      details: "Développement d'outils personnalisés via Advanced Custom Fields.",
      challenges: ["Flexibilité de l'interface admin", "Gestion des permissions utilisateurs"],
      benefits: "Solution SaaS robuste pour la gestion client.",
      url: "https://apps.koota.app/log-in/"
    },
    {
      name: "Zibo Restaurant Theme",
      category: "Web",
      tags: ["Webpack", "SCSS", "PHP"],
      description: "Thème WordPress sur-mesure.",
      details: "Création d'un thème from-scratch optimisé pour la performance.",
      challenges: ["Asset bundling avec Webpack", "Respect des standards WordPress"],
      benefits: "Temps de chargement réduit et liberté de design totale.",
      url: "https://github.com/Iriana022/zibowpthemes"
    },
    {
      name: "Novexa LP",
      category: "Web",
      tags: ["HTML/CSS", "JavaScript"],
      description: "Landing page pixel-perfect.",
      details: "Intégration rigoureuse d'un design fidèle à la maquette.",
      challenges: ["Responsivité parfaite sur tous devices"],
      benefits: "Excellente première impression pour le client.",
      url: "https://iriana022.github.io/novexa-lp/"
    },
    {
      name: "NetPractice(42)",
      category: "Infrastructure",
      tags: ["Réseau", "IP", "Routage"],
      description: "Apprentissage réseaux.",
      details: "Simulations de configuration de routeurs et adressage réseau.",
      challenges: ["Compréhension des couches OSI"],
      benefits: "Base solide pour la gestion d'infrastructures réseaux.",
      url: "#"
    }
  ],
  education: [
    {
      institution: "42 Antananarivo",
      period: "2024 - Aujourd'hui",
      degree: "Tronc commun"
    },
    {
      institution: "ISPM",
      period: "2010 - 2013",
      degree: "Electronique Systeme informatique et IA"
    }
  ],
  languages: ["Malagasy", "Français", "Anglais"],
  hobbies: ["Lire", "Jeux vidéo", "Football", "Guitare"]
};