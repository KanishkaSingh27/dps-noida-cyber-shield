import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PasswordTester } from "@/components/password-tester"
import { SecurityChecker } from "@/components/security-checker"
import { PhishingSimulator } from "@/components/phishing-simulator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, BookOpen, AlertTriangle, Lock, Eye, Globe, Download, ExternalLink } from "lucide-react"

export default function Resources() {
  const learningResources = [
    {
      title: "Password Security Guide",
      description: "Learn how to create and manage strong passwords",
      icon: Lock,
      type: "Guide",
      difficulty: "Beginner",
      url: "https://docs.google.com/document/d/1iO6qu72c1Myw5OaVC1Y3ALDSc9wWbME3l5zBJQUxvBs/edit?usp=sharing"
    },
    {
      title: "Social Engineering Awareness",
      description: "Recognize and prevent social engineering attacks",
      icon: Eye,
      type: "Course",
      difficulty: "Intermediate",
      url: "https://docs.google.com/document/d/1ytrXn4gaZ5ak6vir64umE-HfcAS-FJoaPAiwLxwtfmo/edit?usp=sharing"
    },
    {
      title: "Safe Internet Browsing",
      description: "Best practices for secure web browsing",
      icon: Globe,
      type: "Tutorial",
      difficulty: "Beginner",
      url: "https://example.com/safe-browsing"
    },
    {
      title: "Mobile Device Security",
      description: "Secure your smartphone and tablet",
      icon: Shield,
      type: "Guide",
      difficulty: "Beginner",
      url: "https://example.com/mobile-security"
    }
  ]

  const downloadableResources = [
    {
      title: "Cybersecurity Checklist",
      description: "A comprehensive checklist for personal cybersecurity",
      type: "PDF",
     
      url: "https://example.com/downloads/cybersecurity-checklist.pdf"
    },
    {
      title: "Incident Response Guide",
      description: "What to do when you suspect a security breach",
      type: "PDF",
      
      url: "https://example.com/downloads/incident-response.pdf"
    },
    {
      title: "Privacy Settings Guide",
      description: "Configure privacy settings for popular social media platforms",
      type: "PDF",
      
      url: "https://example.com/downloads/privacy-settings.pdf"
    },
    {
      title: "Social Engineering Guide",
      description: "Understand why password security matters and how you can create and manage safe passwords.",
      type: "PDF",
      url:"https://docs.google.com/document/d/1h-RXE0wwEzevpfMqrBzufW0qZxhbs9aBwpRp51o1DeY/edit?usp=sharing"
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "Intermediate":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "Advanced":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      default:
        return "bg-primary/10 text-primary border-primary/20"
    }
  }

  return (
    <div className="min-h-screen hero-gradient py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Cyber Awareness Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Essential tools and knowledge to stay safe in the digital world
          </p>
        </div>

        <Tabs defaultValue="tools" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="tools" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Security Tools
            </TabsTrigger>
            <TabsTrigger value="learning" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Learning Materials
            </TabsTrigger>
            <TabsTrigger value="downloads" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Downloads
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tools" className="space-y-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <PasswordTester />
              <SecurityChecker />
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <PhishingSimulator />
              
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-gradient flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Safe Browsing Checker
                  </CardTitle>
                  <CardDescription>
                    Check if websites are safe before visiting them
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <h4 className="font-medium mb-2">Quick Safety Tips:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Look for HTTPS (padlock icon) in the address bar</li>
                      <li>• Check the URL carefully for misspellings</li>
                      <li>• Avoid clicking suspicious links in emails</li>
                      <li>• Use reputable antivirus software</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <Button className="w-full" variant="outline" asChild>
                      <a href="https://transparencyreport.google.com/safe-browsing/search" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Google Safe Browsing Check
                      </a>
                    </Button>
                    <Button className="w-full" variant="outline" asChild>
                      <a href="https://www.virustotal.com/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        VirusTotal URL Scanner
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="text-gradient flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Threat Alert Center
                </CardTitle>
                <CardDescription>
                  Latest cybersecurity threats and warnings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span className="font-medium text-red-500">High Priority</span>
                    </div>
                    <p className="text-sm">New phishing campaign targeting students - verify all email links carefully</p>
                  </div>
                  <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      <span className="font-medium text-yellow-500">Medium Priority</span>
                    </div>
                    <p className="text-sm">Social media privacy settings update recommended</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="learning" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {learningResources.map((resource, index) => (
                <Card key={index} className="cyber-card hover:cyber-glow-accent transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <resource.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs border ${getDifficultyColor(resource.difficulty)}`}>
                        {resource.difficulty}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{resource.type}</span>
                      <Button size="sm" className="cyber-gradient text-white" asChild>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          Start Learning
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="downloads" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {downloadableResources.map((resource, index) => (
                <Card key={index} className="cyber-card hover:cyber-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <Download className="h-5 w-5 text-accent" />
                      </div>
                      <div className="px-2 py-1 rounded-full text-xs bg-secondary text-secondary-foreground">
                        {resource.type}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{resource.size}</span>
                      <Button size="sm" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          Download
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
