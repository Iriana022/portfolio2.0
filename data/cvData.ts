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
      name: "Tikeo (ft_transcendence)",
      category: "Fullstack",
      tags: ["NestJS", "React", "PostgreSQL", "Docker", "WebSockets"],
      description: "Plateforme de support client en temps réel avec workflows basés sur les rôles.",
      url: "https://github.com/Iriana022/ft_"
    },
    {
      name: "Inception(42)",
      category: "DevOps",
      tags: ["Docker", "Docker Compose", "Nginx", "MariaDB", "Alpine Linux"],
      description: "Orchestration d'infrastructure virtualisée sécurisée avec certificats TLS.",
      url: "#"
    },
    {
      name: "ft_irc(42)",
      category: "Infrastructure",
      tags: ["C++", "Protocoles Réseaux", "Sockets"],
      description: "Développement d'un serveur IRC avec gestion de sockets non-bloquants.",
      url: "#"
    },
    {
      name: "Simulation Ferme IOT",
      category: "DevOps",
      tags: ["Docker", "Python", "MQTT", "InfluxDB", "Grafana"],
      description: "Architecture de monitoring temps réel pour capteurs IOT.",
      url: "https://github.com/Iriana022/Frme-iot-simumator"
    },
    {
      name: "Monitoring LaFirme",
      category: "DevOps",
      tags: ["Docker", "Uptime Kuma", "Maintenance"],
      description: "Remplacement du système de monitoring pour infrastructures Joomla.",
      url: "http://184.168.20.146:3001/"
    },
    {
      name: "Nest Blog",
      category: "Fullstack",
      tags: ["NestJS", "React", "Vercel", "CI/CD"],
      description: "Projet pédagogique NextJS/NestJS avec pipeline de déploiement automatisé.",
      url: "https://nestblog-drab.vercel.app/"
    },
    {
      name: "Gestion Suivi Ferme",
      category: "Fullstack",
      tags: ["React", "SPA", "Neon"],
      description: "Conception d'une Single Page Application pour la gestion de données.",
      url: "https://iriana022.github.io/react-farm-management/"
    },
    {
      name: "Aqua Pure",
      category: "Web",
      tags: ["WordPress", "PHP", "Elementor"],
      description: "Maintenance continue et refonte design d'un site e-commerce.",
      url: "https://aqua-pure.mg/"
    },
    {
      name: "Koota (SaaS)",
      category: "Web",
      tags: ["WordPress", "PHP", "ACF"],
      description: "Collaboration sur l'intégration d'un SaaS WordPress.",
      url: "https://apps.koota.app/log-in/"
    },
    {
      name: "Zibo Restaurant Theme",
      category: "Web",
      tags: ["Webpack", "SCSS", "PHP"],
      description: "Développement d'un thème WordPress personnalisé from scratch.",
      url: "https://github.com/Iriana022/zibowpthemes"
    },
    {
      name: "Novexa LP",
      category: "Web",
      tags: ["HTML/CSS", "JavaScript"],
      description: "Landing page statique avec intégration pixel-perfect.",
      url: "https://iriana022.github.io/novexa-lp/"
    },
    {
      name: "NetPractice(42)",
      category: "Infrastructure",
      tags: ["Réseau", "IP", "Gateway"],
      description: "Apprentissage des bases de l'adressage IP et routage réseau.",
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