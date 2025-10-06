import { Shield, Truck, Award, HeadphonesIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const TrustBadges = () => {
  const { t } = useTranslation();
  
  const badges = [
    {
      icon: Shield,
      title: t('trust.securePayment'),
      description: t('trust.secureDesc')
    },
    {
      icon: Truck,
      title: t('trust.freeDelivery'),
      description: t('trust.freeDesc')
    },
    {
      icon: Award,
      title: t('trust.quality'),
      description: t('trust.qualityDesc')
    },
    {
      icon: HeadphonesIcon,
      title: t('trust.support'),
      description: t('trust.supportDesc')
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <badge.icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
