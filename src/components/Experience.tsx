
import { Calendar, MapPin, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: ' AWS DevOps Engineer',
      company: 'Immersivevision Technology Pvt. Ltd.',
      location: 'Pune, India',
      duration: '2023 - Present',
      description: 'As a AWS DevOps Engineer at Immersive Technology, I play a key role in managing cloud infrastructure, automating deployment pipelines, and ensuring reliable software delivery across development, staging, and production environments. I work closely with developers, QA teams, and cloud architects to maintain a scalable, secure, and cost-effective infrastructure on AWS.',
      achievements: [
        'Increased application performance by 40%',
        'Received star of the month award for implementing 20 percent cost reduction.',
        'Implemented CI/CD pipelines',
        'Reduced AWS compute costs by 60% by right-sizing EC2 instances—migrated ERP and PostgreSQL workloads from t3.large to t2.medium after performance benchmarking confirmed no impact on application efficiency.',
        'Designed and deployed a real-time AWS monitoring dashboard using Amazon Q CLI and Model Context Protocol (MCP), enabling better cloud observability.',
        'Designed and maintained CI/CD pipelines using Jenkins, supporting deployments across Dev, SI (System Integration), and Production environments.',
        'Containerized applications using Docker, ensuring environment consistency and deployment speed.',
        'Created release branches and merged developer contributions after thorough review, ensuring quality and stability in releases.',
        'Optimized backup strategy to reduce operational cost by replacing AWS Lambda-based automated RDS backups with a custom shell script and cron job, while retaining logging via CloudWatch for visibility and alerting.'
      ],
      technologies: ['AWS', 'Jenkins', 'Docker', 'Ansible', 'CloudWatch', 'Python', 'Shell Scripting', 'CloudFormation', 'Git', 'Github', 'TortoiseSVN', 'OWASP', 'Trivy', 'SonarQube']
    },
    {
      title: 'Web Dev & Cloud Associate',
      company: 'Globussoft Technologies Pvt. Ltd.',
      location: 'Bangalore, India',
      duration: '2021 - 2023',
      description: 'Developed and maintained multiple client projects, focusing on modern web technologies and user experience optimization.',
      achievements: [
        'Developed WordPress plugins/themes and customized features with PHP.',
        'Handled AWS services like EC2, AMIs, VPC, subnets, EIPs, and routing configurations.',
        'Deployed and maintained servers; supported cloud backup, monitoring, and recovery.'
      ],
      technologies: ['AWS', 'WordPress', 'PHP', 'Docker', 'Jenkins', 'Terraform', ]
    },
  ];
  

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made along the way
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-portfolio-primary to-portfolio-secondary hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-portfolio-primary rounded-full border-4 border-background shadow-lg hidden md:block"></div>
                  
                  <Card className="md:ml-16 card-hover">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl font-poppins mb-2">
                            {exp.title}
                          </CardTitle>
                          <div className="flex items-center gap-4 text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Building size={16} />
                              <span>{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={16} />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-portfolio-primary font-semibold">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Achievements and Responsibilities </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-center gap-2 text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-portfolio-primary rounded-full"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-portfolio-primary/10 text-portfolio-primary rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
