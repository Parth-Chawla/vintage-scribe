import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center paper-texture">
      <div className="glass-card p-12 text-center max-w-md border-vintage-border">
        <div className="mb-8">
          <div className="text-8xl mb-4">📚</div>
          <BookOpen className="h-16 w-16 text-primary mx-auto animate-glow-pulse mb-4" />
        </div>
        
        <h1 className="text-6xl font-serif font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          It seems this page has been misplaced in our vintage library. 
          Let's get you back to exploring our collection of academic treasures.
        </p>
        
        <Button 
          asChild
          className="btn-vintage text-primary-foreground px-8 py-3"
        >
          <a href="/">
            <Home className="h-4 w-4 mr-2" />
            Return to Library
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
