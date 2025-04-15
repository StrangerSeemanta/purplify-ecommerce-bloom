
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
  X
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="bg-purple-gradient p-2 rounded-md">
            <ShoppingBag size={20} className="text-white" />
          </span>
          <span className="font-bold text-xl text-purple-dark hidden sm:inline-block">Purplify</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-purple-default transition-colors">Home</Link>
          <Link to="/shop" className="font-medium hover:text-purple-default transition-colors">Shop</Link>
          <Link to="/categories" className="font-medium hover:text-purple-default transition-colors">Categories</Link>
          <Link to="/about" className="font-medium hover:text-purple-default transition-colors">About</Link>
          <Link to="/contact" className="font-medium hover:text-purple-default transition-colors">Contact</Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <User size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex relative">
            <Heart size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-purple-gradient text-[10px] text-white flex items-center justify-center">
              2
            </span>
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-purple-gradient text-[10px] text-white flex items-center justify-center">
              3
            </span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={20} />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`
        fixed inset-0 bg-white z-100 transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="container-custom py-4 bg-white">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center gap-2">
              <span className="bg-purple-gradient p-2 rounded-md">
                <ShoppingBag size={20} className="text-white" />
              </span>
              <span className="font-bold text-xl text-purple-dark">Purplify</span>
            </Link>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={20} />
            </Button>
          </div>

          <nav className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="py-2 px-4 text-lg font-medium hover:bg-purple-light/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="py-2 px-4 text-lg font-medium hover:bg-purple-light/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/categories" 
              className="py-2 px-4 text-lg font-medium hover:bg-purple-light/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link 
              to="/about" 
              className="py-2 px-4 text-lg font-medium hover:bg-purple-light/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="py-2 px-4 text-lg font-medium hover:bg-purple-light/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>

          <div className="mt-8 flex flex-col gap-4">
            <Button variant="outline" className="flex items-center gap-2 justify-center">
              <User size={18} />
              Account
            </Button>
            <Button className="btn-gradient flex items-center gap-2 justify-center">
              <ShoppingBag size={18} />
              View Cart (3)
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
