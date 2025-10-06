import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

const Navigation = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              D'Assise Déco
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/gallery" className="text-foreground hover:text-primary transition-colors">
              {t('nav.gallery')}
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              {t('nav.about')}
            </Link>
            <Button 
              variant="ghost"
              onClick={() => window.location.href = 'tel:+2290161206674'}
              className="text-primary hover:text-primary-dark"
            >
              {t('footer.callNow')}
            </Button>
            <Button
              variant="ghost"
              onClick={() => window.open('https://wa.me/22961206674', '_blank')}
              className="text-primary hover:text-primary-dark"
            >
              {t('footer.whatsapp')}
            </Button>
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <button
              className="text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <Link 
              to="/" 
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/gallery" 
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.gallery')}
            </Link>
            <Link 
              to="/about" 
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Button 
              variant="ghost"
              onClick={() => window.location.href = 'tel:+2290161206674'}
              className="w-full justify-start text-primary"
            >
              {t('footer.callNow')}
            </Button>
            <Button
              variant="ghost"
              onClick={() => window.open('https://wa.me/22961206674', '_blank')}
              className="w-full justify-start text-primary"
            >
              {t('footer.whatsapp')}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
