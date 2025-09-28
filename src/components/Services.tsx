import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Wrench, Building2, Paintbrush, Hammer, Zap } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Custom Home Building",
    description: "Design and build your dream home from the ground up with our expert team.",
  },
  {
    icon: Wrench,
    title: "Home Renovations",
    description: "Transform your existing space with professional renovation services.",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "Professional commercial building services for businesses of all sizes.",
  },
  {
    icon: Paintbrush,
    title: "Interior Finishing",
    description: "Complete interior finishing services including flooring, painting, and fixtures.",
  },
  {
    icon: Hammer,
    title: "Structural Work",
    description: "Foundation work, framing, and structural improvements with safety first.",
  },
  {
    icon: Zap,
    title: "Emergency Repairs",
    description: "Quick response for emergency repairs and maintenance services.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Construction Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive construction services with a commitment to quality, 
            safety, and customer satisfaction in every project we undertake.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;