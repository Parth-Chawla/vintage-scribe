import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Plus, Crown, Calendar, BookOpen, MessageCircle, Video, Star } from "lucide-react";

const mockStudyGroups = [
  {
    id: 1,
    name: "Advanced Calculus Study Circle",
    subject: "Mathematics",
    members: 15,
    maxMembers: 20,
    leader: "Sarah Johnson",
    description: "Weekly study sessions for advanced calculus topics",
    meetingTime: "Sundays 7:00 PM",
    isJoined: true,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Computer Science Collaborative",
    subject: "Computer Science",
    members: 8,
    maxMembers: 12,
    leader: "Alex Chen",
    description: "Programming challenges and algorithm discussions",
    meetingTime: "Wednesdays 6:00 PM",
    isJoined: false,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Organic Chemistry Lab Partners",
    subject: "Chemistry",
    members: 12,
    maxMembers: 15,
    leader: "Dr. Martinez",
    description: "Lab preparation and concept review sessions",
    meetingTime: "Fridays 5:30 PM",
    isJoined: true,
    rating: 4.6,
  },
];

const topAuthors = [
  { rank: 1, name: "Dr. Emily Watson", subject: "Physics", publications: 47, rating: 4.9 },
  { rank: 2, name: "Prof. Michael Chen", subject: "Mathematics", publications: 42, rating: 4.8 },
  { rank: 3, name: "Sarah Johnson", subject: "Chemistry", publications: 39, rating: 4.8 },
  { rank: 4, name: "Alex Rodriguez", subject: "Computer Science", publications: 35, rating: 4.7 },
  { rank: 5, name: "Dr. Lisa Park", subject: "Biology", publications: 33, rating: 4.7 },
  { rank: 6, name: "James Wilson", subject: "Engineering", publications: 31, rating: 4.6 },
  { rank: 7, name: "Maria Garcia", subject: "Literature", publications: 28, rating: 4.6 },
  { rank: 8, name: "David Kim", subject: "Business", publications: 26, rating: 4.5 },
  { rank: 9, name: "Anna Thompson", subject: "Psychology", publications: 24, rating: 4.5 },
  { rank: 10, name: "Robert Brown", subject: "History", publications: 22, rating: 4.4 },
];

export const StudyGroupsSection = () => {
  const [isCreateGroupOpen, setIsCreateGroupOpen] = useState(false);
  const [isAuthorsOpen, setIsAuthorsOpen] = useState(false);
  const [groupForm, setGroupForm] = useState({
    name: "",
    subject: "",
    description: "",
    maxMembers: "10",
    meetingTime: "",
    inviteEmails: "",
  });

  const handleCreateGroup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating study group:", groupForm);
    setIsCreateGroupOpen(false);
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return "text-yellow-500";
    if (rank === 2) return "text-gray-400";
    if (rank === 3) return "text-amber-600";
    return "text-muted-foreground";
  };

  const getRankIcon = (rank: number) => {
    if (rank <= 3) return <Crown className={`h-5 w-5 ${getRankColor(rank)}`} />;
    return <span className={`font-bold text-lg ${getRankColor(rank)}`}>#{rank}</span>;
  };

  return (
    <section id="study-groups" className="py-20 paper-texture">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-vintage-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Study Groups & Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join collaborative study groups and discover top authors in the academic community
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Study Groups */}
          <div className="lg:col-span-2">
            <div className="glass-card p-6 border-vintage-border">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-primary animate-glow-pulse" />
                  <h3 className="text-2xl font-serif font-semibold text-primary">
                    Active Study Groups
                  </h3>
                </div>
                <Dialog open={isCreateGroupOpen} onOpenChange={setIsCreateGroupOpen}>
                  <DialogTrigger asChild>
                    <Button className="btn-vintage text-primary-foreground">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Study Group
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="glass-card max-w-2xl border-vintage-border">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-serif text-primary">
                        👥 Create Study Group
                      </DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleCreateGroup} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="groupName">Group Name</Label>
                          <Input
                            id="groupName"
                            placeholder="Enter group name"
                            value={groupForm.name}
                            onChange={(e) => setGroupForm(prev => ({ ...prev, name: e.target.value }))}
                            className="bg-card border-vintage-border"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Subject</Label>
                          <Select value={groupForm.subject} onValueChange={(value) => setGroupForm(prev => ({ ...prev, subject: value }))}>
                            <SelectTrigger className="bg-card border-vintage-border">
                              <SelectValue placeholder="Select subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mathematics">Mathematics</SelectItem>
                              <SelectItem value="physics">Physics</SelectItem>
                              <SelectItem value="chemistry">Chemistry</SelectItem>
                              <SelectItem value="biology">Biology</SelectItem>
                              <SelectItem value="computer-science">Computer Science</SelectItem>
                              <SelectItem value="engineering">Engineering</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Describe the purpose and goals of your study group"
                          value={groupForm.description}
                          onChange={(e) => setGroupForm(prev => ({ ...prev, description: e.target.value }))}
                          className="bg-card border-vintage-border"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="maxMembers">Max Members</Label>
                          <Select value={groupForm.maxMembers} onValueChange={(value) => setGroupForm(prev => ({ ...prev, maxMembers: value }))}>
                            <SelectTrigger className="bg-card border-vintage-border">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="5">5 members</SelectItem>
                              <SelectItem value="10">10 members</SelectItem>
                              <SelectItem value="15">15 members</SelectItem>
                              <SelectItem value="20">20 members</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="meetingTime">Meeting Time</Label>
                          <Input
                            id="meetingTime"
                            placeholder="e.g., Sundays 7:00 PM"
                            value={groupForm.meetingTime}
                            onChange={(e) => setGroupForm(prev => ({ ...prev, meetingTime: e.target.value }))}
                            className="bg-card border-vintage-border"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="inviteEmails">Invite Peers (Optional)</Label>
                        <Textarea
                          id="inviteEmails"
                          placeholder="Enter email addresses separated by commas"
                          value={groupForm.inviteEmails}
                          onChange={(e) => setGroupForm(prev => ({ ...prev, inviteEmails: e.target.value }))}
                          className="bg-card border-vintage-border"
                        />
                      </div>

                      <div className="flex gap-4">
                        <Button type="button" variant="outline" onClick={() => setIsCreateGroupOpen(false)} className="flex-1">
                          Cancel
                        </Button>
                        <Button type="submit" className="flex-1 btn-vintage text-primary-foreground">
                          Create Group
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="space-y-4">
                {mockStudyGroups.map((group) => (
                  <Card key={group.id} className="border-vintage-border hover:scale-[1.02] transition-transform duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="font-serif text-primary flex items-center gap-2">
                            {group.name}
                            {group.isJoined && <Badge className="bg-secondary/20 text-secondary">Joined</Badge>}
                          </CardTitle>
                          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Crown className="h-4 w-4" />
                              {group.leader}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {group.meetingTime}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            <Star className="h-4 w-4 fill-secondary text-secondary" />
                            <span className="text-sm font-medium">{group.rating}</span>
                          </div>
                          <Badge variant="outline" className="border-vintage-border">
                            {group.subject}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{group.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1 text-sm">
                            <Users className="h-4 w-4" />
                            {group.members}/{group.maxMembers} members
                          </span>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <MessageCircle className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Video className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <Button 
                          variant={group.isJoined ? "outline" : "default"}
                          className={group.isJoined ? "border-vintage-border" : "btn-vintage text-primary-foreground"}
                        >
                          {group.isJoined ? "View Group" : "Join Group"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Top Authors */}
          <div className="lg:col-span-1">
            <Card className="glass-card border-vintage-border">
              <CardHeader>
                <CardTitle className="font-serif text-primary flex items-center justify-between">
                  🏆 Top 10 Authors
                  <Dialog open={isAuthorsOpen} onOpenChange={setIsAuthorsOpen}>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm" className="text-secondary hover:text-secondary">
                        View All
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="glass-card max-w-2xl border-vintage-border">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-serif text-primary">
                          🏆 Top Authors Ranking
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-3 max-h-[60vh] overflow-y-auto">
                        {topAuthors.map((author) => (
                          <div key={author.rank} className="flex items-center gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                            <div className="flex items-center justify-center w-10 h-10">
                              {getRankIcon(author.rank)}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-primary">{author.name}</h4>
                              <p className="text-sm text-muted-foreground">{author.subject}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium">{author.publications} resources</p>
                              <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 fill-secondary text-secondary" />
                                <span className="text-xs">{author.rating}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topAuthors.slice(0, 5).map((author) => (
                    <div key={author.rank} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="flex items-center justify-center w-8 h-8">
                        {getRankIcon(author.rank)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm text-primary truncate">{author.name}</p>
                        <p className="text-xs text-muted-foreground">{author.subject}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-medium">{author.publications}</p>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-secondary text-secondary" />
                          <span className="text-xs">{author.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};