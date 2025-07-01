
import { useState } from 'react';
import { Cloud, Server, Database, Settings, Shield, GitBranch } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Skills = () => {
  const skillCategories = [
    {
      id: 'cloud',
      title: 'Cloud Platforms',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'AWS', level: 95, icon: '☁️' },
        { name: 'Azure', level: 10, icon: '🔷' },
        { name: 'Google Cloud', level: 10, icon: '🌤️' }
      ]
    },
    {
      id: 'containers',
      title: 'Containers & Orchestration',
      icon: Server,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Docker', level: 95, icon: '🐳' },
        { name: 'Kubernetes', level: 90, icon: '⎈' },
        { name: 'Helm', level: 80, icon: '⚓' },
      ]
    },
    {
      id: 'cicd',
      title: 'CI/CD & Automation',
      icon: GitBranch,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Jenkins', level: 92, icon: '🔧' },
        { name: 'GitLab CI', level: 88, icon: '🦊' },
        { name: 'GitHub Actions', level: 90, icon: '🐙' },
        { name: 'Ansible', level: 85, icon: '🔴' },
      ]
    },
    {
      id: 'iac',
      title: 'Infrastructure as Code',
      icon: Settings,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Terraform', level: 93, icon: '🟦' },
        { name: 'CloudFormation', level: 80, icon: '📜' },
        { name: 'CDK', level: 70, icon: '⚡' },
      ]
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Observability',
      icon: Shield,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Prometheus', level: 88, icon: '🔥' },
        { name: 'Grafana', level: 90, icon: '📊' },
        { name: 'Amazon CloudWatch', level: 95, icon: '☁️' },
      ]
    },
    {
      id: 'databases',
      title: 'Databases & Storage',
      icon: Database,
      color: 'from-teal-500 to-blue-500',
      skills: [
        { name: 'PostgreSQL', level: 88, icon: '🐘' },
        { name: 'MySQL', level: 85, icon: '🐬' },
        { name: 'Redis', level: 82, icon: '🔴' },
        { name: 'S3', level: 90, icon: '🪣' },
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState('cloud');

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
            DevOps <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I master to build robust, scalable, and automated infrastructure solutions
          </p>
        </div>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-12 bg-white/80 backdrop-blur-sm">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
              >
                <category.icon size={20} />
                <span className="text-xs font-medium hidden sm:inline">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card className="card-hover bg-white/80 backdrop-blur-sm border-2 border-white/50">
                <CardHeader className={`bg-gradient-to-r ${category.color} text-white rounded-t-lg`}>
                  <CardTitle className="flex items-center gap-3 text-3xl">
                    <category.icon size={32} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="group">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <span className="font-semibold text-lg">{skill.name}</span>
                          </div>
                          <span className="text-sm font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="skill-progress bg-gray-200 h-3 rounded-full overflow-hidden">
                          <div
                            className={`skill-progress-bar h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Tech Stack Overview */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">Complete Tech Ecosystem</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {[
              { name: 'Docker', icon: '🐳', color: 'bg-blue-100' },
              { name: 'Kubernetes', icon: '⎈', color: 'bg-purple-100' },
              { name: 'AWS', icon: '☁️', color: 'bg-orange-100' },
              { name: 'Jenkins', icon: '🔧', color: 'bg-blue-100' },
              { name: 'Terraform', icon: '🟦', color: 'bg-purple-100' },
              { name: 'Ansible', icon: '🔴', color: 'bg-red-100' },
              { name: 'Prometheus', icon: '🔥', color: 'bg-orange-100' },
              { name: 'Grafana', icon: '📊', color: 'bg-green-100' },
            ].map((tech, index) => (
              <Card key={index} className={`text-center p-6 card-hover cursor-pointer group ${tech.color} border-2 border-white/50 hover:scale-110 transition-all duration-300`}>
                <div className="text-4xl mb-3 group-hover:animate-bounce">{tech.icon}</div>
                <p className="font-semibold text-sm text-gray-700">{tech.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
