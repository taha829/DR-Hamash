import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <BookingForm />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
