import { Calendar, Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero z-0" />
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src={heroImage} 
          alt="عيادة أسنان حديثة"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            الدكتور منتصر هماش
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            عيادة طب أسنان متخصصة - ابتسامتك هي أولويتنا
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToBooking}
              className="text-lg"
            >
              <Calendar className="ml-2" />
              احجز موعدك الآن
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg border-2 hover:bg-card"
              asChild
            >
              <a href="tel:0795790923">
                <Phone className="ml-2" />
                اتصل بنا
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-soft">
              <MapPin className="text-primary w-5 h-5" />
              <div>
                <p className="text-sm text-muted-foreground">الموقع</p>
                <p className="font-semibold">عمان، الأردن</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-soft">
              <Phone className="text-accent w-5 h-5" />
              <div>
                <p className="text-sm text-muted-foreground">الهاتف</p>
                <p className="font-semibold" dir="ltr">0795790923</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-soft">
              <Clock className="text-primary w-5 h-5" />
              <div>
                <p className="text-sm text-muted-foreground">ساعات العمل</p>
                <p className="font-semibold">السبت - الخميس</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
