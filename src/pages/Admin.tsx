import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lock, Users, MessageCircle, Calendar, Settings, Shield, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Admin() {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication - in real app, this would be server-side
    if (loginForm.username === "admin" && loginForm.password === "cyberclub2024") {
      setIsAuthenticated(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin dashboard!",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Mock data for demonstration
  const helpRequests = [
    {
      id: 1,
      name: "Anonymous",
      email: "student1@example.com",
      category: "cyberbullying",
      urgency: "high",
      description: "Someone is sharing my photos without permission on social media.",
      timestamp: "2024-01-15 14:30",
      status: "pending"
    },
    {
      id: 2,
      name: "Raj P.",
      email: "raj.p@example.com",
      category: "scam",
      urgency: "medium",
      description: "Received suspicious email asking for bank details.",
      timestamp: "2024-01-14 10:15",
      status: "responded"
    }
  ];

  const magazineSubmissions = [
    {
      id: 1,
      title: "Password Security Best Practices",
      author: "Sneha K.",
      email: "sneha.k@example.com",
      type: "article",
      status: "under-review",
      timestamp: "2024-01-13 16:45"
    },
    {
      id: 2,
      title: "Cyber Safety Infographic",
      author: "Arjun M.",
      email: "arjun.m@example.com",
      type: "poster",
      status: "approved",
      timestamp: "2024-01-12 11:20"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "responded":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "under-review":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "approved":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      case "medium":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "low":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen hero-gradient flex items-center justify-center py-12">
        <div className="max-w-md w-full mx-auto px-4">
          <Card className="cyber-card">
            <CardHeader className="text-center">
              <CardTitle className="text-gradient flex items-center justify-center gap-2">
                <Lock className="h-6 w-6" />
                Admin Login
              </CardTitle>
              <CardDescription>
                Access the Cyber Awareness Club admin dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Alert className="mb-4 border-primary/20 bg-primary/10">
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  This area is restricted to authorized club administrators only.
                </AlertDescription>
              </Alert>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    placeholder="Enter username"
                    value={loginForm.username}
                    onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                    className="cyber-border"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                    className="cyber-border"
                    required
                  />
                </div>
                <Button type="submit" className="w-full cyber-gradient text-white">
                  Login to Dashboard
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen hero-gradient py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gradient mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage club activities and student requests</p>
          </div>
          <Button 
            variant="outline" 
            onClick={() => setIsAuthenticated(false)}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Logout
          </Button>
        </div>

        <Tabs defaultValue="help-requests" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="help-requests" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Help Requests
            </TabsTrigger>
            <TabsTrigger value="magazine" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Magazine
            </TabsTrigger>
            <TabsTrigger value="members" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Members
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="help-requests" className="space-y-6">
            <div className="grid gap-6">
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-gradient">Student Help Requests</CardTitle>
                  <CardDescription>Review and respond to student concerns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {helpRequests.map((request) => (
                      <div key={request.id} className="p-4 cyber-border rounded-lg">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-medium">{request.name}</h4>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <Mail className="h-3 w-3" />
                              {request.email}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Badge className={getUrgencyColor(request.urgency)}>
                              {request.urgency}
                            </Badge>
                            <Badge className={getStatusColor(request.status)}>
                              {request.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="mb-3">
                          <Badge variant="outline" className="mb-2">
                            {request.category}
                          </Badge>
                          <p className="text-sm">{request.description}</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">
                            {request.timestamp}
                          </span>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              Reply
                            </Button>
                            <Button size="sm" className="cyber-gradient text-white">
                              Mark Resolved
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="magazine" className="space-y-6">
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="text-gradient">Magazine Submissions</CardTitle>
                <CardDescription>Review student contributions for the annual magazine</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {magazineSubmissions.map((submission) => (
                    <div key={submission.id} className="p-4 cyber-border rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium">{submission.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            by {submission.author} ({submission.email})
                          </p>
                        </div>
                        <Badge className={getStatusColor(submission.status)}>
                          {submission.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          <Badge variant="outline">{submission.type}</Badge>
                          <span className="text-xs text-muted-foreground">
                            {submission.timestamp}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Review
                          </Button>
                          <Button size="sm" className="cyber-gradient text-white">
                            Approve
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="members" className="space-y-6">
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="text-gradient">Club Membership</CardTitle>
                <CardDescription>Manage club members and registration requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center p-8">
                  <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Member management features coming soon. 
                    Check Google Forms responses for new member applications.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="text-gradient">System Settings</CardTitle>
                <CardDescription>Configure club website and notification settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center p-8">
                  <Settings className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Settings panel under development. 
                    Contact system administrator for configuration changes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}