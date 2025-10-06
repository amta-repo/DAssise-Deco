import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">D'Assise Déco</h3>
            <p className="text-muted-foreground text-sm">
              Your destination for luxury furniture and elegant home décor solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+2290161206674" className="text-muted-foreground hover:text-primary transition-colors">
                  +229 016 120 6674
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <MessageCircle className="w-4 h-4 text-primary" />
                <a 
                  href="https://wa.me/22961206674" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +229 61 20 66 74
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Visit Us</h4>
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
              © 2025 D'Assise Déco. All rights reserved.
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
