import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const menuItems = [
    { label: "الرئيسية", id: "hero" },
    { label: "عن العيادة", id: "about" },
    { label: "الخدمات", id: "services" },
    { label: "احجز موعد", id: "booking" },
    { label: "اتصل بنا", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="GODC - The Genius One Dental Center" 
              className="h-14 w-14 object-contain rounded-lg"
            />
            <div>
              <h1 className="text-xl font-bold">د. منتصر هماش</h1>
              <p className="text-xs text-muted-foreground">عيادة أسنان</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-base"
              >
                {item.label}
              </Button>
            ))}
            <Button 
              variant="hero"
              onClick={() => scrollToSection("booking")}
              className="mr-2"
            >
              احجز الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="justify-start text-base"
                >
                  {item.label}
                </Button>
              ))}
              <Button 
                variant="hero"
                onClick={() => scrollToSection("booking")}
                className="mt-2"
              >
                احجز الآن
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
