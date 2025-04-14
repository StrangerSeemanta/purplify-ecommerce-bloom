
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 to-purple-100 overflow-hidden">
      <div className="container-custom grid md:grid-cols-2 gap-8 py-12 md:py-20">
        {/* Text Content */}
        <div className="flex flex-col justify-center space-y-6 animate-fade-in">
          <div>
            <span className="px-4 py-1.5 bg-purple-default/10 text-purple-default rounded-full text-sm font-medium">
              New Collection 2025
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Discover Amazing <span className="text-transparent bg-clip-text bg-purple-gradient">Gadgets</span> for Your Lifestyle
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            Elevate your everyday experiences with our premium selection of tech products designed for modern living.
          </p>
          <div className="flex flex-wrap gap-4 pt-3">
            <Button className="btn-gradient text-base px-6 py-6">
              Shop Now
            </Button>
            <Button variant="outline" className="text-base px-6 py-6 flex items-center gap-2">
              View Collections
              <ChevronRight size={16} />
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-3">
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-purple-dark">15K+</span>
              <span className="text-sm text-gray-500">Happy Customers</span>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-purple-dark">150+</span>
              <span className="text-sm text-gray-500">Global Brands</span>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-purple-dark">90%</span>
              <span className="text-sm text-gray-500">Positive Reviews</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex items-center justify-center">
          <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-purple-gradient rounded-full opacity-20 blur-3xl absolute"></div>
          <img 
            src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1170&auto=format" 
            alt="Featured Product" 
            className="object-contain relative z-10 max-w-full w-full h-auto drop-shadow-2xl animate-fade-in"
          />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-purple-light/20 rounded-full blur-3xl"></div>
      <div className="absolute top-20 -right-20 w-72 h-72 bg-purple-vivid/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
