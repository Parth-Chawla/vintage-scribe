import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Upload, BookOpen, TrendingUp, DollarSign, Eye, Download, Plus, FileText, Users } from "lucide-react";
import { UploadModal } from "./UploadModal";

const mockUploads = [
  { id: 1, title: "Calculus Notes Chapter 1-5", type: "notes", sales: 45, revenue: 382.50, views: 234 },
  { id: 2, title: "Physics Lab Manual", type: "ebook", sales: 23, revenue: 345.00, views: 156 },
  { id: 3, title: "Chemistry Mock Test", type: "mock-test", sales: 67, revenue: 670.00, views: 445 },
];

const mockPurchases = [
  { id: 1, title: "Advanced Statistics Guide", author: "Dr. Smith", price: 25.99, date: "2024-01-15" },
  { id: 2, title: "Programming Fundamentals", author: "Jane Doe", price: 19.99, date: "2024-01-12" },
  { id: 3, title: "Biology Lab Notes", author: "Prof. Johnson", price: 15.50, date: "2024-01-10" },
];

export const DashboardSection = () => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const totalRevenue = mockUploads.reduce((sum, item) => sum + item.revenue, 0);
  const totalSales = mockUploads.reduce((sum, item) => sum + item.sales, 0);
  const totalViews = mockUploads.reduce((sum, item) => sum + item.views, 0);

  return (
    <>
      <section id="dashboard" className="py-20 bg-gradient-to-br from-accent/10 to-muted/20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-vintage-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Your Dashboard
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track your uploads, purchases, and earnings in your personalized vintage workspace
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="glass-card border-vintage-border hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-12 w-12 text-secondary mx-auto mb-4 animate-glow-pulse" />
                <h3 className="text-2xl font-bold text-primary">${totalRevenue.toFixed(2)}</h3>
                <p className="text-muted-foreground">Total Revenue</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-vintage-border hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4 animate-glow-pulse" />
                <h3 className="text-2xl font-bold text-primary">{totalSales}</h3>
                <p className="text-muted-foreground">Total Sales</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-vintage-border hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <Eye className="h-12 w-12 text-secondary mx-auto mb-4 animate-glow-pulse" />
                <h3 className="text-2xl font-bold text-primary">{totalViews}</h3>
                <p className="text-muted-foreground">Profile Views</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-vintage-border hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4 animate-glow-pulse" />
                <h3 className="text-2xl font-bold text-primary">{mockUploads.length}</h3>
                <p className="text-muted-foreground">Resources Uploaded</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Content */}
          <div className="glass-card border-vintage-border p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-serif font-semibold text-primary">
                Manage Your Content
              </h3>
              <Button 
                onClick={() => setIsUploadOpen(true)}
                className="btn-vintage text-primary-foreground"
              >
                <Plus className="h-4 w-4 mr-2" />
                Upload Resource
              </Button>
            </div>

            <Tabs defaultValue="uploads" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-muted/50">
                <TabsTrigger value="uploads" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  My Uploads
                </TabsTrigger>
                <TabsTrigger value="purchases" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Purchases
                </TabsTrigger>
                <TabsTrigger value="analytics" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Analytics
                </TabsTrigger>
              </TabsList>

              <TabsContent value="uploads" className="mt-6">
                <div className="space-y-4">
                  {mockUploads.map((upload) => (
                    <div key={upload.id} className="flex items-center justify-between p-4 bg-card rounded-lg border border-vintage-border">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-primary">{upload.title}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs capitalize">
                              {upload.type.replace('-', ' ')}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              {upload.sales} sales • {upload.views} views
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-secondary">${upload.revenue.toFixed(2)}</p>
                        <p className="text-sm text-muted-foreground">Revenue</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="purchases" className="mt-6">
                <div className="space-y-4">
                  {mockPurchases.map((purchase) => (
                    <div key={purchase.id} className="flex items-center justify-between p-4 bg-card rounded-lg border border-vintage-border">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-secondary/10 rounded-lg">
                          <BookOpen className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-primary">{purchase.title}</h4>
                          <p className="text-sm text-muted-foreground">by {purchase.author}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">${purchase.price}</p>
                        <p className="text-sm text-muted-foreground">{purchase.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-vintage-border">
                    <CardHeader>
                      <CardTitle className="font-serif text-primary">Sales Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">This Month</span>
                          <span className="font-bold text-primary">$127.50</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Last Month</span>
                          <span className="font-bold text-muted-foreground">$89.20</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Growth</span>
                          <span className="font-bold text-secondary">+43%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-vintage-border">
                    <CardHeader>
                      <CardTitle className="font-serif text-primary">Popular Resources</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {mockUploads.sort((a, b) => b.views - a.views).map((upload, index) => (
                          <div key={upload.id} className="flex items-center gap-3">
                            <Badge variant="secondary" className="w-6 h-6 rounded-full p-0 text-xs">
                              {index + 1}
                            </Badge>
                            <span className="text-sm flex-1">{upload.title}</span>
                            <span className="text-sm text-muted-foreground">{upload.views} views</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <UploadModal 
        isOpen={isUploadOpen} 
        onClose={() => setIsUploadOpen(false)} 
      />
    </>
  );
};