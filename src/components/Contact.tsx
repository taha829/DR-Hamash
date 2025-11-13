import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف",
      value: "0795790923",
      link: "tel:0795790923",
      color: "text-primary",
    },
    {
      icon: MapPin,
      title: "العنوان",
      value: "عمان، الأردن",
      color: "text-accent",
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      value: "السبت - الخميس: 9:00 ص - 8:00 م",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">تواصل معنا</h2>
            <p className="text-xl text-muted-foreground">
              نحن هنا للإجابة على جميع استفساراتك ومساعدتك في حجز موعدك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="shadow-soft hover:shadow-glow transition-all duration-300 border-border/50"
              >
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4`}>
                    <info.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors font-semibold"
                      dir="ltr"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground font-semibold">{info.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-glow border-border/50">
            <CardContent className="p-10">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">هل لديك استفسار؟</h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  يمكنك التواصل معنا مباشرة عبر الهاتف أو واتساب للحصول على استشارة سريعة
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="hero" 
                    size="lg"
                    asChild
                    className="text-lg"
                  >
                    <a href="tel:0795790923">
                      <Phone className="ml-2" />
                      اتصل الآن
                    </a>
                  </Button>
                  <Button 
                    variant="accent" 
                    size="lg"
                    asChild
                    className="text-lg"
                  >
                    <a href="https://wa.me/962795790923" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="ml-2" />
                      واتساب
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const MessageSquare = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export default Contact;
