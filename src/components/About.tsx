import { Award, Users, Heart, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import expertiseImg from "@/assets/features/expertise.jpg";
import personalCareImg from "@/assets/features/personal-care.jpg";
import comprehensiveServicesImg from "@/assets/features/comprehensive-services.jpg";
import modernTechImg from "@/assets/features/modern-tech.jpg";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "خبرة واحترافية",
      description: "سنوات من الخبرة في تقديم أفضل خدمات طب الأسنان",
      image: expertiseImg,
    },
    {
      icon: Users,
      title: "رعاية شخصية",
      description: "نهتم بكل مريض ونقدم رعاية متخصصة لصحة أسنانك",
      image: personalCareImg,
    },
    {
      icon: Heart,
      title: "خدمات أسنان شاملة",
      description: "مجموعة واسعة من خدمات طب الأسنان عالية الجودة",
      image: comprehensiveServicesImg,
    },
    {
      icon: TrendingUp,
      title: "تقنيات حديثة",
      description: "نستخدم أحدث التقنيات والأجهزة في طب الأسنان",
      image: modernTechImg,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              لماذا تختار عيادة أسنان د. منتصر هماش؟
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نحن ملتزمون بتقديم أعلى مستويات العناية بصحة الفم والأسنان مع الحفاظ على راحة وثقة مرضانا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="border-border/50 shadow-soft hover:shadow-glow transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                  <div className="absolute bottom-6 right-6 bg-gradient-primary p-3 rounded-lg">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-hero border-border/50 shadow-glow">
            <CardContent className="p-10 text-center">
              <h3 className="text-3xl font-bold mb-4">مرحباً بكم في عيادة أسنان د. منتصر هماش</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
                نسعى دائماً لتقديم أفضل خدمات طب الأسنان لمرضانا الكرام. نؤمن بأن كل مريض يستحق ابتسامة صحية وجميلة 
                واهتماماً شخصياً. فريقنا المتخصص في طب الأسنان جاهز دائماً لخدمتكم وتقديم الاستشارات اللازمة.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="font-semibold">موقع ممتاز في عمان</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="font-semibold">مواعيد مرنة</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="font-semibold">أسعار منافسة</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
