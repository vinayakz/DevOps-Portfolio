
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-poppins text-gradient mb-4">
              Vinayak Z
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A passionate DevOps Engineer willing to implement my DevOps skills in a organization
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-portfolio-primary transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Let's Connect</h4>
            <div className="space-y-2">
              <a
                href="mailto:vinoo160496@gmail.com"
                className="block text-muted-foreground hover:text-portfolio-primary transition-colors duration-300"
              >
                vinoo160496@gmail.com
              </a>
              <a
                href="tel:+917848849869"
                className="block text-muted-foreground hover:text-portfolio-primary transition-colors duration-300"
              >
                +91 7848849869
              </a>
              <p className="text-muted-foreground">Pune, India</p>
            </div>

            <div className="flex gap-4 mt-4">
              {[
                  { name: 'GitHub', url: 'https://github.com/vinayakz' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vinayak-zutti/' },
                ].map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-portfolio-primary/10 rounded-lg flex items-center justify-center text-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-all duration-300"
                  >
                    <span className="text-sm font-semibold">
                      {platform.name.charAt(0)}
                    </span>
                  </a>
                ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} Made with <Heart className="text-red-500" size={14} /> by Vinayak Z
          </p>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="mt-4 md:mt-0 group"
          >
            Back to top
            <ArrowUp size={16} className="ml-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
