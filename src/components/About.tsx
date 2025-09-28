import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Calendar } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    number: "20+",
    label: "Years Experience",
  },
  {
    icon: Users,
    number: "500+",
    label: "Projects Completed",
  },
  {
    icon: Award,
    number: "15+",
    label: "Awards Won",
  },
  {
    icon: CheckCircle,
    number: "100%",
    label: "Customer Satisfaction",
  },
];

const About = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why Choose Our
                <span className="text-primary block">Construction Services?</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                With over two decades in the construction industry, we've built our reputation 
                on quality craftsmanship, reliable service, and customer satisfaction. Every 
                project is handled with the same attention to detail and professional standards.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                "Licensed and fully insured contractors",
                "Free detailed estimates and consultations",
                "Quality materials and proven construction methods",
                "Transparent communication throughout the project",
                "Competitive pricing with no hidden costs",
                "On-time completion and clean work sites",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button variant="hero" size="hero">
              Schedule Consultation
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="text-center p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;