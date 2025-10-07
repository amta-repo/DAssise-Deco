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
      titleKey: "qualityTitle",
      descKey: "qualityDesc"
    },
    {
      icon: Users,
      titleKey: "customerTitle",
      descKey: "customerDesc"
    },
    {
      icon: Heart,
      titleKey: "passionTitle",
      descKey: "passionDesc"
    },
    {
      icon: Sparkles,
      titleKey: "eleganceTitle",
      descKey: "eleganceDesc"
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
                {t('about.title')}
              </h2>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                {t('about.story1')}
              </p>

              <p className="text-lg leading-relaxed">
                {t('about.story2')}
              </p>

              <p className="text-lg leading-relaxed">
                {t('about.story3')}
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
              {t('about.valuesTitle')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('about.valuesDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="elegant-card p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{t(`about.${value.titleKey}`)}</h3>
                <p className="text-muted-foreground">{t(`about.${value.descKey}`)}</p>
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
              {t('about.ctaTitle')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('about.ctaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/gallery">
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-lg px-8 py-6">
                  {t('about.viewGallery')}
                </Button>
              </a>
              <a href="https://wa.me/22961206674" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  {t('about.contactWhatsapp')}
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
