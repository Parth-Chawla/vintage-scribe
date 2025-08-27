import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Search, Users, User, Menu, X } from "lucide-react";
import { AuthModal } from "./AuthModal";

export const Navigation = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openAuth = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  return (
    <>
      <nav className="glass-card fixed top-0 left-0 right-0 z-50 border-b border-vintage-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary animate-glow-pulse" />
              <h1 className="text-2xl font-bold font-serif text-primary">BookBuddy</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#marketplace" className="text-muted-foreground hover:text-primary transition-colors">
                Marketplace
              </a>
              <a href="#dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                Dashboard
              </a>
              <a href="#study-groups" className="text-muted-foreground hover:text-primary transition-colors">
                Study Groups
              </a>
              <a href="#recommendations" className="text-muted-foreground hover:text-primary transition-colors">
                AI Reads
              </a>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => openAuth("login")}
                className="hover:bg-primary/10"
              >
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
              <Button 
                onClick={() => openAuth("signup")}
                className="btn-vintage text-primary-foreground"
              >
                Sign Up
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-vintage-border">
              <div className="flex flex-col space-y-4">
                <a href="#marketplace" className="text-muted-foreground hover:text-primary transition-colors">
                  Marketplace
                </a>
                <a href="#dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Dashboard
                </a>
                <a href="#study-groups" className="text-muted-foreground hover:text-primary transition-colors">
                  Study Groups
                </a>
                <a href="#recommendations" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Reads
                </a>
                <div className="flex flex-col space-y-2 pt-4 border-t border-vintage-border">
                  <Button 
                    variant="outline" 
                    onClick={() => openAuth("login")}
                    className="justify-start"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                  <Button 
                    onClick={() => openAuth("signup")}
                    className="btn-vintage text-primary-foreground justify-start"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </>
  );
};