import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, BookOpen, FileText, TestTube, Star, TrendingUp, Heart } from "lucide-react";

const mockResources = [
  {
    id: 1,
    title: "Advanced Calculus Study Guide",
    author: "John Smith",
    category: "Mathematics",
    type: "ebook",
    price: 15.99,
    rating: 4.8,
    downloads: 1234,
    image: "📚",
    description: "Comprehensive guide covering all advanced calculus topics with solved examples."
  },
  {
    id: 2,
    title: "Physics Lab Notes - Semester 1",
    author: "Maria Garcia",
    category: "Physics",
    type: "notes",
    price: 8.50,
    rating: 4.6,
    downloads: 856,
    image: "📝",
    description: "Detailed lab notes with diagrams and experimental procedures."
  },
  {
    id: 3,
    title: "Computer Science Mock Test Series",
    author: "Alex Johnson",
    category: "Computer Science",
    type: "mock-test",
    price: 25.00,
    rating: 4.9,
    downloads: 2145,
    image: "💻",
    description: "Complete mock test series with solutions and explanations."
  },
];

const trendingResources = [
  { title: "Data Structures & Algorithms", downloads: 3421, trend: "+23%" },
  { title: "Organic Chemistry Notes", downloads: 2987, trend: "+18%" },
  { title: "Linear Algebra Solutions", downloads: 2654, trend: "+15%" },
  { title: "Python Programming Guide", downloads: 2341, trend: "+12%" },
  { title: "Statistics Mock Tests", downloads: 2156, trend: "+9%" },
];

export const MarketplaceSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [isTrendingOpen, setIsTrendingOpen] = useState(false);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "ebook": return <BookOpen className="h-4 w-4" />;
      case "notes": return <FileText className="h-4 w-4" />;
      case "mock-test": return <TestTube className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  return (
    <section id="marketplace" className="py-20 paper-texture">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-vintage-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Marketplace
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover and acquire premium academic resources from your peers
          </p>
        </div>

        {/* Search and Filters */}
        <div className="glass-card p-6 mb-8 border-vintage-border">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-card border-vintage-border"
                />
              </div>
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-card border-vintage-border">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="mathematics">Mathematics</SelectItem>
                <SelectItem value="physics">Physics</SelectItem>
                <SelectItem value="computer-science">Computer Science</SelectItem>
                <SelectItem value="chemistry">Chemistry</SelectItem>
                <SelectItem value="biology">Biology</SelectItem>
              </SelectContent>
            </Select>

            {/* Type Filter */}
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="bg-card border-vintage-border">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="ebook">E-books</SelectItem>
                <SelectItem value="notes">Notes</SelectItem>
                <SelectItem value="mock-test">Mock Tests</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-2">
              <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                Featured Resources
              </Badge>
              <Badge variant="outline" className="border-vintage-border">
                New Arrivals
              </Badge>
            </div>

            <Dialog open={isTrendingOpen} onOpenChange={setIsTrendingOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-vintage-border hover:bg-muted/50">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Trending Resources
                </Button>
              </DialogTrigger>
              <DialogContent className="glass-card border-vintage-border">
                <DialogHeader>
                  <DialogTitle className="font-serif text-primary">📈 Trending Resources</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  {trendingResources.map((resource, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                      <div>
                        <p className="font-medium">{resource.title}</p>
                        <p className="text-sm text-muted-foreground">{resource.downloads} downloads</p>
                      </div>
                      <Badge variant="secondary" className="bg-secondary/20">
                        {resource.trend}
                      </Badge>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Resource Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockResources.map((resource) => (
            <Card key={resource.id} className="glass-card border-vintage-border hover:scale-105 transition-transform duration-300 vintage-glow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="text-4xl mb-2">{resource.image}</div>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle className="font-serif text-primary line-clamp-2">
                  {resource.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">by {resource.author}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-vintage-border">
                      {getTypeIcon(resource.type)}
                      <span className="ml-1 capitalize">{resource.type.replace('-', ' ')}</span>
                    </Badge>
                    <Badge className="bg-accent/50 text-accent-foreground">
                      {resource.category}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-secondary text-secondary" />
                      <span className="text-sm font-medium">{resource.rating}</span>
                      <span className="text-xs text-muted-foreground">
                        ({resource.downloads} downloads)
                      </span>
                    </div>
                    <div className="text-xl font-bold text-primary">
                      ${resource.price}
                    </div>
                  </div>

                  <Button className="w-full btn-vintage text-primary-foreground">
                    Purchase Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
            Load More Resources
          </Button>
        </div>
      </div>
    </section>
  );
};