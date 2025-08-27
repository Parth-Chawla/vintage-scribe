import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Sparkles, BookOpen, Star, ExternalLink, Zap } from "lucide-react";

const mockRecommendations = [
  {
    id: 1,
    title: "The Art of Problem Solving",
    authors: ["Richard Rusczyk"],
    description: "A comprehensive guide to mathematical problem-solving techniques and strategies.",
    rating: 4.7,
    pageCount: 352,
    category: "Mathematics",
    thumbnail: "📘",
    reason: "Recommended because you enjoyed Advanced Calculus materials"
  },
  {
    id: 2,
    title: "Introduction to Algorithms",
    authors: ["Thomas Cormen", "Charles Leiserson"],
    description: "The definitive guide to algorithms and data structures for computer science students.",
    rating: 4.8,
    pageCount: 1312,
    category: "Computer Science",
    thumbnail: "💻",
    reason: "Based on your interest in programming resources"
  },
  {
    id: 3,
    title: "Organic Chemistry as a Second Language",
    authors: ["David Klein"],
    description: "A student-friendly approach to mastering organic chemistry concepts.",
    rating: 4.6,
    pageCount: 432,
    category: "Chemistry",
    thumbnail: "🧪",
    reason: "Complements your recent chemistry purchases"
  },
  {
    id: 4,
    title: "Physics for Scientists and Engineers",
    authors: ["Raymond Serway", "John Jewett"],
    description: "Comprehensive physics textbook covering mechanics, thermodynamics, and more.",
    rating: 4.5,
    pageCount: 1408,
    category: "Physics",
    thumbnail: "⚡",
    reason: "Popular among students in your study groups"
  },
  {
    id: 5,
    title: "Molecular Biology of the Cell",
    authors: ["Bruce Alberts"],
    description: "The definitive reference for understanding cellular and molecular biology.",
    rating: 4.9,
    pageCount: 1464,
    category: "Biology",
    thumbnail: "🔬",
    reason: "Trending in your academic network"
  },
];

export const AIRecommendationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mockRecommendations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mockRecommendations.length) % mockRecommendations.length);
  };

  // Auto-play carousel
  useState(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  });

  const visibleRecommendations = [
    mockRecommendations[currentIndex],
    mockRecommendations[(currentIndex + 1) % mockRecommendations.length],
    mockRecommendations[(currentIndex + 2) % mockRecommendations.length],
  ];

  return (
    <section id="recommendations" className="py-20 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-vintage-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-12 w-12 text-secondary animate-glow-pulse mr-3" />
            <Zap className="h-8 w-8 text-primary animate-float" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            AI Recommended Reads
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover personalized book recommendations powered by AI and the Google Books API, 
            tailored to your academic interests and reading history
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="glass-card p-8 border-vintage-border overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-serif font-semibold text-primary">
                  Personalized for You
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="text-muted-foreground hover:text-primary"
                >
                  {isAutoPlaying ? "Pause" : "Play"}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevSlide}
                  className="text-muted-foreground hover:text-primary"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextSlide}
                  className="text-muted-foreground hover:text-primary"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Recommendation Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {visibleRecommendations.map((book, index) => (
                <Card 
                  key={`${book.id}-${currentIndex}-${index}`}
                  className={`border-vintage-border transition-all duration-500 hover:scale-105 ${
                    index === 1 ? 'vintage-glow ring-2 ring-secondary/30' : ''
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{book.thumbnail}</div>
                      <div className="flex-1">
                        <CardTitle className="font-serif text-primary text-lg line-clamp-2">
                          {book.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          by {book.authors.join(", ")}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-secondary text-secondary" />
                            <span className="text-xs font-medium">{book.rating}</span>
                          </div>
                          <Badge variant="outline" className="text-xs border-vintage-border">
                            {book.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {book.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{book.pageCount} pages</span>
                        <ExternalLink className="h-3 w-3" />
                      </div>

                      <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                        <div className="flex items-start gap-2">
                          <Sparkles className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-secondary-foreground">
                            {book.reason}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 text-xs border-vintage-border hover:bg-muted/50"
                        >
                          Preview
                        </Button>
                        <Button 
                          size="sm" 
                          className="flex-1 btn-vintage text-primary-foreground text-xs"
                        >
                          <BookOpen className="h-3 w-3 mr-1" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {mockRecommendations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-secondary w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* AI Badge */}
          <div className="absolute -top-3 right-8">
            <Badge className="bg-secondary text-secondary-foreground shadow-lg animate-glow-pulse">
              <Zap className="h-3 w-3 mr-1" />
              AI Powered
            </Badge>
          </div>
        </div>

        {/* Integration Info */}
        <div className="text-center mt-12">
          <div className="glass-card p-6 max-w-2xl mx-auto border-vintage-border">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <Sparkles className="h-5 w-5 text-secondary" />
            </div>
            <h4 className="font-serif text-lg font-semibold text-primary mb-2">
              Powered by Google Books API
            </h4>
            <p className="text-sm text-muted-foreground">
              Our AI analyzes your reading patterns, study materials, and academic preferences 
              to recommend books from Google's vast library that perfectly match your learning journey.
            </p>
            <Button 
              variant="outline" 
              className="mt-4 border-vintage-border hover:bg-muted/50"
            >
              Learn More About Our AI
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};