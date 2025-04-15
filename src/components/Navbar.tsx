
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
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "./ui/dialog";


const Navbar = () => {
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

          {/* Mobile Menu Button - Using Drawer component */}
          {isMobile && (
            <Dialog direction="right" open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu size={20} />
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-purple-dark border-none p-0 rounded-t-xl max-h-[90vh]">
                <DialogTitle><div className="hidden"></div></DialogTitle>
                <MobileNavigation onClose={() => setIsDrawerOpen(false)} />
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </header>
  );
};

const MobileNavigation = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="flex flex-col h-full p-6 text-white overflow-y-auto">
      <div className="flex justify-between items-center mb-8">
        <Link to="/" className="flex items-center gap-2" onClick={onClose}>
          <span className="bg-purple-gradient p-2 rounded-md">
            <ShoppingBag size={20} className="text-white" />
          </span>
          <span className="font-bold text-xl text-white">Purplify</span>
        </Link>
        <DialogClose asChild>
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white border border-white/20 hover:bg-white/10"
          >
            <X size={20} />
          </Button>
        </DialogClose>
      </div>
      
      <div className="flex-1">
        <nav className="mb-8">
          <h3 className="text-white/70 text-sm font-semibold mb-4 pl-1">Navigation</h3>
          <div className="flex flex-col gap-2">
            <NavLink to="/" label="Home" onClick={onClose} />
            <NavLink to="/shop" label="Shop" onClick={onClose} />
            <NavLink to="/categories" label="Categories" onClick={onClose} />
            <NavLink to="/about" label="About" onClick={onClose} />
            <NavLink to="/contact" label="Contact" onClick={onClose} />
          </div>
        </nav>

        <div className="space-y-3 mt-6">
          <h3 className="text-white/70 text-sm font-semibold mb-4 pl-1">Account</h3>
          <Button 
            variant="outline" 
            className="w-full justify-start gap-2.5 border-white/20 text-black hover:bg-white/10"
            onClick={onClose}
          >
            <User size={18} />
            My Account
          </Button>
          <Button 
            variant="outline" 
            className="w-full justify-start gap-2.5 border-white/20 text-black hover:bg-white/10"
            onClick={onClose}
          >
            <Heart size={18} />
            Wishlist (2)
          </Button>
          <Button 
            className="w-full justify-start gap-2.5 bg-purple-gradient hover:opacity-90 transition-all duration-300 mt-2"
            onClick={onClose}
          >
            <ShoppingBag size={18} />
            View Cart (3)
          </Button>
        </div>
      </div>
      
      <DialogFooter className="px-0 pt-6">
        <DialogClose asChild>
          <Button 
            variant="outline"
            className="w-full border-white/20 text-white hover:bg-white/10"
            onClick={onClose}
          >
            Close Menu
          </Button>
        </DialogClose>
      </DialogFooter>
    </div>
  );
};

const NavLink = ({ to, label, onClick }: { to: string; label: string; onClick: () => void }) => (
  <DialogClose asChild>
    <Link 
      to={to}
      className="py-3 px-4 text-lg font-medium text-white hover:bg-white/10 rounded-md transition-colors"
      onClick={onClick}
    >
      {label}
    </Link>
  </DialogClose>
);

export default Navbar;
