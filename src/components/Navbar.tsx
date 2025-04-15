
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
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";

const Navbar = () => {
  const isMobile = useIsMobile();

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

          {/* Mobile Menu Button - Using Sheet component */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-purple-dark border-purple-dark w-[85%] sm:w-[385px] py-8 px-4">
                <MobileNavigation />
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

// Separate component for the mobile navigation content
const MobileNavigation = () => {
  return (
    <div className="flex flex-col h-full">
      <SheetHeader className="mb-4">
        <Link to="/" className="flex items-center gap-2 mx-auto">
          <span className="bg-purple-gradient p-2 rounded-md">
            <ShoppingBag size={20} className="text-white" />
          </span>
          <SheetTitle className="font-bold text-xl text-white">Purplify</SheetTitle>
        </Link>
      </SheetHeader>
      
      <div className="flex-1">
        <nav className="mb-8">
          <h3 className="text-white/70 text-sm font-semibold mb-2 pl-1">Navigation</h3>
          <div className="flex flex-col gap-1">
            <NavLink to="/" label="Home" />
            <NavLink to="/shop" label="Shop" />
            <NavLink to="/categories" label="Categories" />
            <NavLink to="/about" label="About" />
            <NavLink to="/contact" label="Contact" />
          </div>
        </nav>

        <div className="space-y-2">
          <h3 className="text-white/70 text-sm font-semibold mb-2 pl-1">Account</h3>
          <Button 
            variant="outline" 
            className="w-full justify-start gap-2.5 border-white/10 text-black hover:bg-white/10 hover:text-white"
          >
            <User size={18} />
            My Account
          </Button>
          <Button 
            variant="outline" 
            className="w-full justify-start gap-2.5 border-white/10 text-black hover:bg-white/10 hover:text-white"
          >
            <Heart size={18} />
            Wishlist (2)
          </Button>
          <Button 
            className="w-full justify-start gap-2.5 btn-gradient mt-2"
          >
            <ShoppingBag size={18} />
            View Cart (3)
          </Button>
        </div>
      </div>
      
      <div className="pt-8 flex justify-center">
        <SheetClose asChild>
          <Button 
            variant="solid"
            className="border-white/20 text-white hover:bg-white/10"
          >
            <X className="mr-2 h-4 w-4" /> Close Menu
          </Button>
        </SheetClose>
      </div>
    </div>
  );
};

// Reusable navigation link component for mobile menu
const NavLink = ({ to, label }: { to: string; label: string }) => (
  <SheetClose asChild>
    <Link 
      to={to}
      className="py-3 px-4 text-lg font-medium text-white hover:bg-white/10 rounded-md transition-colors"
    >
      {label}
    </Link>
  </SheetClose>
);

export default Navbar;
