import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Search, Upload, Users, Sparkles } from "lucide-react";
import { AuthModal } from "./AuthModal";

export const HeroSection = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Search functionality will be implemented
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden paper-texture">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/20 to-secondary/10" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float delay-300" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 animate-vintage-fade-in">
            {/* Hero Title */}
            <div className="space-y-4">
              <div className="flex items-center justify-center mb-6">
                <BookOpen className="h-16 w-16 text-primary animate-glow-pulse mr-4" />
                <Sparkles className="h-12 w-12 text-secondary animate-float" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold font-serif text-primary leading-tight">
                Book<span className="text-secondary">Buddy</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Your vintage-themed digital library where students discover, share, and trade 
                precious academic resources in a beautifully crafted environment
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSearch} className="relative">
                <div className="glass-card p-2 rounded-full border-2 border-vintage-border">
                  <div className="flex items-center">
                    <Search className="h-5 w-5 text-muted-foreground ml-4" />
                    <Input
                      type="text"
                      placeholder="Search for ebooks, notes, mock tests..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 border-0 bg-transparent focus:ring-0 text-lg"
                    />
                    <Button 
                      type="submit"
                      className="btn-vintage text-primary-foreground rounded-full px-8"
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </form>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button 
                onClick={() => setIsAuthOpen(true)}
                size="lg"
                className="btn-vintage text-primary-foreground px-8 py-4 text-lg font-medium min-w-[200px]"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Start Exploring
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-medium border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 min-w-[200px]"
              >
                <Upload className="h-5 w-5 mr-2" />
                Upload Resources
              </Button>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto">
              <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-2 text-primary">
                  Digital Library
                </h3>
                <p className="text-muted-foreground">
                  Access thousands of ebooks, notes, and study materials from fellow students
                </p>
              </div>

              <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-2 text-primary">
                  Study Groups
                </h3>
                <p className="text-muted-foreground">
                  Create and join study groups with like-minded peers for collaborative learning
                </p>
              </div>

              <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                <Sparkles className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-2 text-primary">
                  AI Recommendations
                </h3>
                <p className="text-muted-foreground">
                  Get personalized book recommendations powered by advanced AI algorithms
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        mode="signup"
        onModeChange={() => {}}
      />
    </>
  );
};