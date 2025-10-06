import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">D'Assise Déco</h3>
            <p className="text-muted-foreground text-sm">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.about')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <Button
                  variant="link"
                  className="h-auto p-0 text-sm text-muted-foreground hover:text-primary"
                  onClick={() => window.location.href = 'tel:+2290161206674'}
                >
                  {t('footer.callNow')}
                </Button>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <MessageCircle className="w-4 h-4 text-primary" />
                <Button
                  variant="link"
                  className="h-auto p-0 text-sm text-muted-foreground hover:text-primary"
                  onClick={() => window.open('https://wa.me/22961206674', '_blank')}
                >
                  {t('footer.whatsapp')}
                </Button>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('footer.location')}</h4>
            <div className="flex items-start space-x-2 text-sm">
              <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <p className="text-muted-foreground">
                Location details coming soon
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 D'Assise Déco. {t('footer.rights')}
            </p>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <a href="/sitemap.xml" className="hover:text-primary transition-colors">
                Sitemap
              </a>
              <span>|</span>
              <a href="/rss.xml" className="hover:text-primary transition-colors">
                RSS Feed
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Placeholder */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
            <div className="text-center space-y-2">
              <MapPin className="w-12 h-12 text-primary mx-auto" />
              <p className="text-muted-foreground">Google Maps Integration</p>
              <p className="text-sm text-muted-foreground">Location map will be embedded here</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
