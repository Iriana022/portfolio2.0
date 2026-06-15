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
    languages_runtimes: ["PHP", "JavaScript (ES6+)", "HTML5", "CSS3/SASS"],
    frameworks_libraries: ["React.js", "Redux Toolkit", "Next.js", "NestJS", "Vue.js", "Vite"],
    devops_infrastructure: ["Docker", "Docker Compose", "Linux (CentOS/Debian/Ubuntu)", "Bash Scripting", "Gestion de serveurs cPanel"],
    databases_cms: ["MariaDB/MySQL", "Joomla", "WordPress", "VirtueMart"],
    tools_methods: ["Git", "API RESTful", "JWT", "Webpack", "Responsive Design", "Sécurité Web (SSL/HTTPS)"]
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
      name: "Inception(42)",
      description: "Orchestration d'infrastructure virtualisée avec Docker Compose, Nginx (TLS) et MariaDB sous Alpine Linux."
    },
    {
      name: "ft_irc(42)",
      description: "Développement d'un serveur de messagerie instantanée en C++ utilisant le protocole IRC et la gestion de sockets non-bloquants."
    },
    {
      name: "ft_transcendence(42)",
      description: "Plateforme de tickets en temps réel (NestJS/React) avec WebSockets, authentification OAuth2 et dashboards de données."
    },
    {
      name: "Gestion de Suivi de Ferme",
      description: "Conception et développement d'une Single Page Application (SPA) pour la gestion de données de la ferme.",
      url: "https://iriana022.github.io/react-farm-management/"
    },
    {
      name: "Landing Page 'Novexa'",
      description: "Démonstration de l'intégration pixel-perfect, du Responsive Design et de l'interactivité JavaScript.",
      url: "https://iriana022.github.io/novexa-lp/"
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