import { Button } from "@/components/ui/button";
import constructionHero from "@/assets/construction-hero.jpg";
import { Phone, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${constructionHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Building Your
                <span className="text-primary-glow block">Dream Projects</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                Professional construction services with over 20 years of experience. 
                From custom homes to commercial buildings, we bring your vision to life.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="hero" className="group">
                Get Free Quote
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button variant="contact" size="hero">
                View Our Work
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary-glow" />
                <span className="font-medium">9014455140</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary-glow" />
                <span className="font-medium">varshakumar440@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
