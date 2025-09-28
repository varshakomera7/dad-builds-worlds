import { Card, CardContent } from "@/components/ui/card";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

const projects = [
  {
    title: "Modern Family Home",
    description: "Custom 3-bedroom home with contemporary design and energy-efficient features",
    image: project1,
    category: "Residential",
  },
  {
    title: "Kitchen Renovation",
    description: "Complete kitchen remodel with high-end finishes and modern appliances",
    image: project2,
    category: "Renovation",
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Recent Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look at some of our recent construction projects that showcase 
            our commitment to quality craftsmanship and attention to detail.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;