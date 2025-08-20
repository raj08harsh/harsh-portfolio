import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Mail, Github, Linkedin, ExternalLink, MapPin, Calendar, User, Code, Briefcase } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { mockData } from '../data/mock';
import harshPhoto from '../data/harsh.jpg';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Mock submission
    alert('Message sent successfully!');
    setContactForm({ name: '', email: '', message: '' });
  };

  const handleDownloadResume = () => {
    window.open('https://customer-assets.emergentagent.com/job_fullstack-harsh/artifacts/xnat9ebk_Harshraj_resume.pdf', '_blank');
  };

  const handleGetInTouch = () => {
    const to = 'raj08harsh@gmail.com';
    const subject = 'Hello Harsh';
    const body = 'Hi Harsh,\n\nI came across your portfolio and would like to connect.';

    const gmailComposeUrl =
      'https://mail.google.com/mail/?view=cm&fs=1' +
      `&to=${encodeURIComponent(to)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    // Always open Gmail compose; if popups are blocked, replace the tab instead
    const win = window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
    if (!win) {
      window.location.assign(gmailComposeUrl);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-brand-primary">
            Harsh Raj
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="p-[3px] rounded-full bg-gradient-to-tr from-emerald-400 via-emerald-500 to-teal-400 shadow-[0_10px_30px_rgba(34,197,94,0.35)]">
                <img
                  src={harshPhoto}
                  alt="Harsh Raj"
                  loading="lazy"
                  decoding="async"
                  className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover bg-bg-card"
                />
              </div>
            </div>
            <h1 className="hero-title mb-6">
              Hi, I'm <span className="text-brand-primary">Harsh Raj</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-text-secondary">
              Full Stack Web Developer | Problem Solver | Lifelong Learner
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-text-secondary leading-relaxed">
              {mockData.hero.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                className="btn-primary"
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button variant="outline" className="btn-secondary" onClick={handleGetInTouch}>
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <a href={mockData.hero.socialLinks.github} target="_blank" rel="noopener noreferrer" 
                 className="text-text-secondary hover:text-brand-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href={mockData.hero.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                 className="text-text-secondary hover:text-brand-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-brand-primary">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {Object.entries(mockData.skills).map(([category, skills]) => (
              <Card key={category} className="p-6 bg-background border-border-medium">
                <h3 className="text-xl font-semibold mb-6 text-brand-primary capitalize">
                  {category}
                </h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-text-primary font-medium">{skill.name}</span>
                        <span className="text-text-secondary text-sm">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-brand-primary">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {mockData.techStack.map((tech, index) => (
              <Card key={index} className="p-4 text-center hover:scale-105 transition-transform bg-bg-card border-border-medium">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <p className="text-sm font-medium text-text-primary">{tech.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-brand-primary">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mockData.projects.map((project, index) => (
              <Card key={index} className="overflow-hidden bg-background border-border-medium hover:scale-105 transition-transform">
                <div className="aspect-video bg-bg-light">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-brand-primary">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-border-medium text-text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.showGithub && (
                      <Button variant="outline" size="sm" className="btn-secondary">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                    )}
                    <Button 
                      size="sm" 
                      className="btn-primary"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-brand-primary">
            Experience & Education
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-brand-primary flex items-center">
                <Briefcase className="mr-3 h-6 w-6" />
                Experience
              </h3>
              <div className="space-y-6">
                {mockData.experience.map((exp, index) => (
                  <Card key={index} className="p-6 bg-bg-card border-border-medium">
                    <h4 className="text-lg font-semibold text-text-primary">{exp.role}</h4>
                    <p className="text-brand-primary font-medium">{exp.company}</p>
                    <p className="text-text-secondary text-sm flex items-center mt-1">
                      <Calendar className="mr-1 h-4 w-4" />
                      {exp.period}
                    </p>
                    <p className="text-text-secondary mt-3 leading-relaxed">{exp.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-brand-primary flex items-center">
                <User className="mr-3 h-6 w-6" />
                Education
              </h3>
              <div className="space-y-6">
                {mockData.education.map((edu, index) => (
                  <Card key={index} className="p-6 bg-bg-card border-border-medium">
                    <h4 className="text-lg font-semibold text-text-primary">{edu.degree}</h4>
                    <p className="text-brand-primary font-medium">{edu.school}</p>
                    <p className="text-text-secondary text-sm flex items-center mt-1">
                      <Calendar className="mr-1 h-4 w-4" />
                      {edu.year}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-brand-primary">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-lg text-text-secondary mb-4">
                I'm always interested in new opportunities and collaborations.
              </p>
              <div className="flex justify-center items-center space-x-2 text-text-primary">
                <Mail className="h-5 w-5" />
                <span>raj08harsh@gmail.com</span>
              </div>
            </div>
            
            <Card className="p-6 bg-background border-border-medium">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 rounded-md bg-white border border-border-medium text-black caret-black placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 rounded-md bg-white border border-border-medium text-black caret-black placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full p-3 rounded-md bg-white border border-border-medium text-black caret-black placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full btn-primary">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border-medium">
        <div className="container mx-auto px-6 text-center">
          <p className="text-text-secondary">
            © 2025 Harsh Raj. Built with ❤️ using React & TailwindCSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;