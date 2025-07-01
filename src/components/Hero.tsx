import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown, Server, Cloud, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['DevOps Engineer', 'Cloud Architect', 'Infrastructure Specialist', 'CI/CD Expert'];

  const [currentTech, setCurrentTech] = useState(0);
  const techStack = ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform', 'Ansible'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    const techInterval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(techInterval);
  }, [techStack.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full floating-animation blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500/20 rounded-full floating-animation blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-20 w-20 h-20 bg-green-500/20 rounded-full floating-animation blur-xl" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-yellow-500/20 rounded-full floating-animation blur-xl" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Tech icons floating */}
      <div className="absolute inset-0 pointer-events-none">
        <Server className="absolute top-1/4 left-1/4 text-blue-400/30 floating-animation" size={48} style={{ animationDelay: '0s' }} />
        <Cloud className="absolute top-1/3 right-1/3 text-purple-400/30 floating-animation" size={40} style={{ animationDelay: '3s' }} />
        <Cpu className="absolute bottom-1/3 left-1/3 text-green-400/30 floating-animation" size={36} style={{ animationDelay: '5s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image and Name Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8 mt-16">
            {/* Static Square Profile Image */}
            <div className="w-32 h-32 md:w-40 md:h-40">
              <img
                src="https://avatars.githubusercontent.com/u/33689324?v=4"
                alt="Vinayak Z"
                className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-purple-500/30"
              />
            </div>

            {/* Name and Title */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-4 text-white">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">Vinayak Z</span>
              </h1>
              <div className="text-2xl md:text-3xl text-blue-300 mb-4 h-10 font-semibold">
                <span className="animate-slide-in-right">
                  {roles[currentRole]}
                </span>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            AWS DevOps Engineer  | Automating Infrastructure, CI/CD, and Cost-Effective Cloud Deployments on AWS | AWS Cloud | Jenkins | Terraform | Ansible | Docker | K8s | Python | Shell Scripting | Amazon Q | MCP 
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-10 max-w-2xl mx-auto">
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-blue-400 group-hover:scale-110 transition-transform duration-300">4.4+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-purple-400 group-hover:scale-110 transition-transform duration-300">20+</div>
              <div className="text-sm text-gray-400">Deployments</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-green-400 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-sm text-gray-400">Uptime Focus</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            {/* Resume Download */}
            <a
              href="/Vinayak Zutti CV - DevOps and Cloud Engineer.pdf"
              download="Vinayak Zutti CV - DevOps and Cloud Engineer.pdf"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg rounded inline-flex items-center"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/vinayakz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform"
            >
              <Github size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/vinayak-zutti/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-125 transform"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="mailto:vinoo160496@gmail.com"
              className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-125 transform"
            >
              <Mail size={32} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-purple-400" size={28} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
