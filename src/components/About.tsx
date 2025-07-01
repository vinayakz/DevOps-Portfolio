
import { User, Award, Clock, Coffee } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const stats = [
    // { icon: Clock, label: 'Years Experience', value: '4.4+', color: 'text-portfolio-primary' },
    // { icon: Award, label: 'Projects Completed', value: '20+', color: 'text-portfolio-secondary' },
    // { icon: Coffee, label: 'Cups of Coffee', value: '1000+', color: 'text-portfolio-accent' },
    // { icon: User, label: 'Happy Clients', value: '25+', color: 'text-portfolio-primary' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img
              src="https://avatars.githubusercontent.com/u/33689324?v=4"
              alt="Vinayakz"
              className="rounded-2xl shadow-2xl"
            />
            
          </div>

          <div>
            <h3 className="text-3xl font-bold font-poppins mb-6">
              I'm a passionate AWS DevOps Engineer
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              with 4.4 years of experience driving automation, deployment efficiency, and cloud infrastructure optimization. I specialize in integrating DevOps practices with real-world business needs to improve software delivery speed, reliability, and scalability.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Always exploring ways to simplify processes, reduce costs, and scale infrastructure for performance and reliability.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="font-semibold w-24">Name:</span>
                <span className="text-muted-foreground">Vinayak Zutti</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-24">Location:</span>
                <span className="text-muted-foreground">Pune, Maharashtra, India </span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-24">Email:</span>
                <span className="text-muted-foreground">vinoo160496@gmail.com</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-24">Status:</span>
                <span className="text-portfolio-secondary font-semibold">Available for hire</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center card-hover">
              <CardHeader className="pb-2">
                <div className={`mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <CardTitle className="text-3xl font-bold font-poppins">
                  {stat.value}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
