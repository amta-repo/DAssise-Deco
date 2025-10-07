import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Users, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const heroImages = [
    "/images/products/dining-set.jpg",
    "/images/products/modern-kitchen.jpg",
    "/images/products/diamond-wall-shelf.jpg"
  ];
  const [currentHeroImage] = useState(heroImages[Math.floor(Math.random() * heroImages.length)]);
  
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We source only the finest materials and work with skilled craftsmen to ensure every piece meets our exacting standards."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We provide personalized service and support throughout your furniture journey."
    },
    {
      icon: Heart,
      title: "Passion for Design",
      description: "We love what we do and it shows in every carefully curated piece in our collection."
    },
    {
      icon: Sparkles,
      title: "Timeless Elegance",
      description: "Our furniture combines contemporary aesthetics with classic design principles for lasting beauty."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Dynamic Background */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={currentHeroImage}
            alt="About Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
              <span className="gold-gradient-text">D'Assise Déco</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed drop-shadow">
              {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Story
              </h2>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                D'Assise Déco was born from a passion for transforming houses into homes. We believe 
                that furniture is more than just functional pieces – it's an expression of your 
                personality, style, and the life you want to live.
              </p>

              <p className="text-lg leading-relaxed">
                Our journey began with a simple mission: to make luxury furniture accessible to those 
                who appreciate quality craftsmanship and timeless design. Today, we're proud to offer 
                a carefully curated collection of bedroom sets, living room furniture, dining pieces, 
                and decorative items that elevate any space.
              </p>

              <p className="text-lg leading-relaxed">
                Every product in our collection is selected with care, ensuring it meets our high 
                standards for quality, aesthetics, and functionality. We work directly with skilled 
                craftsmen and trusted manufacturers to bring you furniture that will last for years 
                to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="elegant-card p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's work together to create the home of your dreams. Browse our collection or 
              get in touch for personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/gallery">
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-lg px-8 py-6">
                  View Our Gallery
                </Button>
              </a>
              <a href="https://wa.me/22961206674" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Contact Us on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
