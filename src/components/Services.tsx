import { Smile, Sparkles, Shield, Scissors, Brush, Eye, Baby, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import teethCleaningImg from "@/assets/services/teeth-cleaning.jpg";
import dentalFillingsImg from "@/assets/services/dental-fillings.jpg";
import rootCanalImg from "@/assets/services/root-canal.jpg";
import toothExtractionImg from "@/assets/services/tooth-extraction.jpg";
import orthodonticsImg from "@/assets/services/orthodontics.jpg";
import dentalImplantsImg from "@/assets/services/dental-implants.jpg";
import pediatricDentistryImg from "@/assets/services/pediatric-dentistry.jpg";
import hollywoodSmileImg from "@/assets/services/hollywood-smile.jpg";

const Services = () => {
  const services = [
    {
      icon: Smile,
      title: "تنظيف وتبييض الأسنان",
      description: "خدمات تنظيف احترافية وتبييض آمن للأسنان لابتسامة ناصعة البياض. نستخدم أحدث تقنيات التبييض الآمنة والفعالة.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      image: teethCleaningImg,
    },
    {
      icon: Sparkles,
      title: "حشوات تجميلية",
      description: "حشوات تجميلية بلون الأسنان الطبيعي، دائمة وآمنة. نستخدم مواد عالية الجودة لنتائج طبيعية ومريحة.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      image: dentalFillingsImg,
    },
    {
      icon: Shield,
      title: "علاج الجذور",
      description: "علاج قنوات الجذور بأحدث التقنيات وبدون ألم. نحافظ على أسنانك الطبيعية من خلال علاج دقيق ومريح.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      image: rootCanalImg,
    },
    {
      icon: Scissors,
      title: "قلع الأسنان",
      description: "قلع آمن ومريح للأسنان بتقنيات حديثة. نضمن راحتك التامة أثناء وبعد الإجراء مع رعاية متابعة شاملة.",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      image: toothExtractionImg,
    },
    {
      icon: Brush,
      title: "تقويم الأسنان",
      description: "تقويم شفاف وتقليدي لابتسامة مثالية. نقدم خطط علاجية مخصصة لكل حالة مع متابعة دورية منتظمة.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      image: orthodonticsImg,
    },
    {
      icon: Eye,
      title: "زراعة الأسنان",
      description: "زراعة أسنان بأعلى معايير الجودة والأمان. نستخدم غرسات عالية الجودة لنتائج دائمة وطبيعية المظهر.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      image: dentalImplantsImg,
    },
    {
      icon: Baby,
      title: "طب أسنان الأطفال",
      description: "رعاية متخصصة لأسنان الأطفال في بيئة مريحة وودية. نجعل زيارة طفلك للطبيب تجربة ممتعة وخالية من القلق.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      image: pediatricDentistryImg,
    },
    {
      icon: Heart,
      title: "ابتسامة هوليود",
      description: "تصميم ابتسامة مثالية باستخدام القشور الخزفية والعدسات. احصل على الابتسامة التي تحلم بها مع نتائج طبيعية ودائمة.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      image: hollywoodSmileImg,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
              <Smile className="w-8 h-8 text-primary" />
              <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              خدمات طب الأسنان المتوفرة
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              نقدم مجموعة شاملة من خدمات طب الأسنان المتخصصة بأعلى معايير الجودة والاحترافية.
              فريقنا متخصص في العناية بصحة فمك وأسنانك لابتسامة صحية ومشرقة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="border-border/50 shadow-soft hover:shadow-glow transition-all duration-300 group hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                  <div className={`absolute bottom-4 right-4 inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.bgColor} backdrop-blur-sm`}>
                    <service.icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-hero border-border/50 shadow-glow max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">هل تحتاج إلى استشارة أسنان؟</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  نحن هنا لمساعدتك في أي استفسار عن صحة أسنانك. لا تتردد في التواصل معنا لحجز موعد أو للحصول على استشارة فورية.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#booking"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg hover:shadow-glow transition-all"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    احجز موعدك الآن
                  </a>
                  <a 
                    href="tel:0795790923"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-soft transition-all"
                  >
                    اتصل للاستفسار
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
