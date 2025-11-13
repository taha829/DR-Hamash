import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, Phone, MessageSquare, Clock } from "lucide-react";
import { toast } from "sonner";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      toast.error("الرجاء ملء جميع الحقول المطلوبة");
      return;
    }

    // Create WhatsApp message
    const message = `مرحباً، أود حجز موعد:
الاسم: ${formData.name}
الهاتف: ${formData.phone}
التاريخ: ${formData.date}
الوقت: ${formData.time}
${formData.notes ? `ملاحظات: ${formData.notes}` : ""}`;

    const whatsappUrl = `https://wa.me/962795790923?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    toast.success("سيتم توجيهك إلى واتساب لإكمال الحجز");
  };

  return (
    <section id="booking" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">احجز موعدك</h2>
            <p className="text-xl text-muted-foreground">
              نحن هنا لخدمتك. احجز موعدك الآن وسنتواصل معك في أقرب وقت
            </p>
          </div>

          <Card className="shadow-glow border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Calendar className="text-primary" />
                معلومات الحجز
              </CardTitle>
              <CardDescription>
                املأ النموذج أدناه وسيتم توجيهك لإتمام الحجز عبر واتساب
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    الاسم الكامل *
                  </Label>
                  <Input
                    id="name"
                    placeholder="أدخل اسمك الكامل"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="text-lg"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    رقم الهاتف *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="07XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="text-lg"
                    dir="ltr"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      التاريخ المفضل *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="text-lg"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      الوقت المفضل *
                    </Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="text-lg"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    ملاحظات إضافية
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="أي ملاحظات أو تفاصيل إضافية ترغب في إضافتها"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="min-h-32 text-lg"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full text-lg">
                  إرسال الحجز عبر واتساب
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
