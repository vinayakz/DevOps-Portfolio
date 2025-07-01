import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'AWS CloudWatch Log Analyzer & Real-Time EC2 Dashboard',
      description: 'A Real-Time AWS Monitoring Dashboard with Integrated Cost Analysis, powered by Amazon Q Developer & Model Context Protocol (MCP)!',
      image: './AWS_dashboard.jpg',
      technologies: ['Amazon Q', 'MCP', 'Python', 'AWS', 'GenAI', 'Prompt Engineering'],
      category: 'fullstack',
      liveUrl: '', // Leave empty or update with actual live deployment
      githubUrl: 'https://github.com/vinayakz/Real-Time-AWS-Monitoring-Dashboard',
      featured: true
    },
    {
      title: 'Java Banking app',
      description: 'End-To-End Banking Application built using SpringBoot and Deployed using DevOps - CI/CD Automation Pipeline Project',
      image: './java_bank-app.jpg',
      technologies: ['GitHub', 'Jenkins', 'OWASP', 'SonarQube', 'Trivy', 'Docker', 'Helm', 'ArgoCD', 'AWS EKS', 'Prometheus', 'Grafana'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: 'https://github.com/vinayakz/Java-banking-app',
      featured: true
    },
    {
      title: 'TrekTales',
      description: 'Designed and implemented the end-to-end CI/CD pipeline architecture.',
      image: './TrekTales.jpg',
      technologies: ['GitHub', 'Jenkins', 'OWASP', 'SonarQube', 'Trivy', 'Docker', 'Helm', 'ArgoCD', 'AWS EKS', 'Prometheus', 'Grafana'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: 'https://github.com/vinayakz/TrekTales-vinayakz?tab=readme-ov-file',
      featured: false
    },
    // {
    //   title: 'Weather Dashboard',
    //   description: 'A comprehensive weather application with detailed forecasts, interactive maps, and location-based services.',
    //   image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    //   technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
    //   category: 'frontend',
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   featured: false
    // },
    // {
    //   title: 'REST API Service',
    //   description: 'A scalable REST API service with authentication, rate limiting, and comprehensive documentation.',
    //   image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    //   technologies: ['Node.js', 'Express', 'JWT', 'Redis', 'Docker'],
    //   category: 'backend',
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   featured: false
    // },
    // {
    //   title: 'Real-time Chat App',
    //   description: 'A real-time messaging application with group chats, file sharing, and online presence indicators.',
    //   image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
    //   technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Cloudinary'],
    //   category: 'fullstack',
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   featured: true
    // }
  ];

  const categories = [
    { id: 'all', name: 'DevOps' },
    // { id: 'fullstack', name: 'Full Stack' },
    // { id: 'frontend', name: 'Frontend' },
    // { id: 'backend', name: 'Backend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? 'default' : 'outline'}
              onClick={() => setFilter(category.id)}
              className="transition-all duration-300"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group card-hover overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-portfolio-primary">
                    Featured
                  </Badge>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveUrl && project.liveUrl !== '#' && project.liveUrl !== project.githubUrl && (
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-poppins group-hover:text-portfolio-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.liveUrl && project.liveUrl !== '#' && project.liveUrl !== project.githubUrl && (
                      <Button size="sm" variant="ghost" className="p-2" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <Button size="sm" variant="ghost" className="p-2" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                        </a>
                      </Button>
                    )}
                  </div>
                  {/* <Button size="sm" variant="ghost" className="group/btn">
                    Learn More
                    <ArrowRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more projects or discuss a collaboration?
          </p>
          <Button size="lg" className="group">
            View All Projects
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
