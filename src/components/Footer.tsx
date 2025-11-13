import { Phone, MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="GODC - The Genius One Dental Center" 
                className="h-16 w-16 object-contain rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold">د. منتصر هماش</h3>
                <p className="text-sm text-muted-foreground">عيادة أسنان</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              نقدم أفضل خدمات طب الأسنان في عمان، الأردن. نحن ملتزمون بتقديم رعاية متميزة لصحة أسنانك وابتسامتك.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">معلومات الاتصال</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:0795790923" className="hover:text-primary transition-colors" dir="ltr">
                  0795790923
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-accent" />
                <span>عمان، الأردن</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">ساعات العمل</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>السبت - الخميس</p>
              <p className="font-semibold">9:00 صباحاً - 8:00 مساءً</p>
              <p className="text-sm mt-4">الجمعة: مغلق</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <span>جميع الحقوق محفوظة © 2024</span>
            <span>•</span>
            <span>د. منتصر هماش</span>
          </p>
        </div>

        {/* Signature balloon for Alkhatib Marketing placed below copyright */}
        <div className="mt-6 flex flex-col items-center">
          <a
            href="https://alkhatib-marketing.great-site.net/"
            target="_blank"
            rel="noopener noreferrer"
            title="الخطيب للبرمجيات - زيارة الموقع"
            aria-label="الخطيب للبرمجيات - فتح الموقع في نافذة جديدة"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FFD54F] to-[#FF4D4F] text-white shadow-soft hover:shadow-glow transition-transform duration-150 transform hover:-translate-y-0.5 active:scale-95"
          >
            <span className="text-sm font-medium">الخطيب للبرمجيات</span>
            <span className="ml-2 transform transition-transform duration-150 group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
