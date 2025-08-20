import socteamupImage from './socteamup.png';

export const mockData = {
  hero: {
    bio: "Highly motivated BCA student with a passion for building scalable web applications and solving real-world problems. Skilled in React, Next.js, Node.js, and modern web technologies.",
    socialLinks: {
      github: "https://github.com/raj08harsh",
      linkedin: "https://www.linkedin.com/in/rajharsh08"
    }
  },

  skills: {
    frontend: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "React.js", level: 75 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Bootstrap", level: 75 }
    ],
    backend: [
      { name: "Node.js", level: 75 },
      { name: "REST APIs", level: 68 },
      { name: "Firebase", level: 80 },
      { name: "MongoDB", level: 82 }
    ],
    tools: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 }
    ],
    deployment: [
      { name: "Vercel", level: 90 },
      { name: "Netlify", level: 88 },
      { name: "AWS", level: 75 }
    ]
  },

  techStack: [
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind", icon: "🎨" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Firebase", icon: "🔥" },
    { name: "GitHub", icon: "🐱" },
    { name: "Vercel", icon: "▲" },
    { name: "Netlify", icon: "🌐" },
    { name: "AWS", icon: "☁️" }
  ],

  projects: [
    {
      title: "ZippGo – Ride-Hailing App",
      description: "Built with Next.js, TailwindCSS, JavaScript, Mapbox API. Features: real-time ride requests, live location tracking, fare estimation.",
      image: "https://customer-assets.emergentagent.com/job_fullstack-harsh/artifacts/8jg07y0w_image.png",
      tech: ["Next.js", "TailwindCSS", "JavaScript", "Mapbox API"],
      demo: "https://uber-clone-olive-psi.vercel.app/",
      showGithub: false
    },
    {
      title: "SocTeamUp – Company Website",
      description: "Built with HTML, CSS, JavaScript. Features: SEO optimized, responsive, deployed on Netlify.",
      image: socteamupImage,
      tech: ["HTML", "CSS", "JavaScript", "Netlify"],
      demo: "https://sparkling-kheer-325453.netlify.app/",
      showGithub: false
    }
  ],

  experience: [
    {
      role: "Web Developer Intern",
      company: "SocTeamUp",
      period: "Jun–Aug 2025",
      description: "Developed and deployed responsive company website."
    },
    {
      role: "Sub-City Coordinator",
      company: "Strayniya",
      period: "Mar 2025 – Present",
      description: "Led community outreach programs, collaborations, and welfare drives."
    }
  ],

  education: [
    {
      degree: "BCA (Bachelor of Computer Applications)",
      school: "Galgotias University",
      year: "2022–2025"
    },
    {
      degree: "Intermediate",
      school: "Satyam International School",
      year: "2022"
    },
    {
      degree: "High School",
      school: "St. Karen's High School",
      year: "2020"
    }
  ]
};