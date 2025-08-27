import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { MarketplaceSection } from "@/components/MarketplaceSection";
import { DashboardSection } from "@/components/DashboardSection";
import { StudyGroupsSection } from "@/components/StudyGroupsSection";
import { AIRecommendationsSection } from "@/components/AIRecommendationsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <MarketplaceSection />
        <DashboardSection />
        <StudyGroupsSection />
        <AIRecommendationsSection />
        
        {/* Footer */}
        <footer className="paper-texture py-12 border-t border-vintage-border">
          <div className="container mx-auto px-4 text-center">
            <div className="glass-card p-8 border-vintage-border">
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl mr-3">📚</span>
                <h3 className="text-2xl font-serif font-bold text-primary">BookBuddy</h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Your vintage-themed digital library where academic excellence meets timeless design. 
                Connect, share, and discover in a beautifully crafted learning environment.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Support</a>
                <a href="#" className="hover:text-primary transition-colors">About Us</a>
              </div>
              <div className="mt-6 pt-6 border-t border-vintage-border">
                <p className="text-xs text-muted-foreground">
                  © 2024 BookBuddy. Crafted with vintage elegance for modern learners.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
