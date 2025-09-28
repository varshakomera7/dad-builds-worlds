import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="mb-2">
            © 2024 <span className="text-primary-glow font-semibold">BuildPro Construction</span>. All rights reserved.
          </p>
          <p className="text-sm opacity-90">
            Licensed • Insured • Professional Construction Services
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
