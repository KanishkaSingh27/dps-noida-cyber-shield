import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Upload, Send, PenTool, Image, FileText } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Magazine() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    grade: "",
    contentType: "",
    title: "",
    description: "",
    content: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Submission Received!",
      description: "Thank you for your contribution. We'll review it and get back to you soon.",
    })
    setFormData({
      name: "",
      email: "",
      grade: "",
      contentType: "",
      title: "",
      description: "",
      content: ""
    })
  }

  const contentTypes = [
    { value: "article", label: "Article", icon: FileText },
    { value: "poster", label: "Poster Design", icon: Image },
    { value: "comic", label: "Comic Strip", icon: PenTool },
    { value: "infographic", label: "Infographic", icon: Image },
    { value: "story", label: "Cyber Safety Story", icon: BookOpen }
  ]

  const previousSubmissions = [
    {
      title: "Social Media Safety Tips",
      author: "Aarav S. (Grade 10)",
      type: "Article",
      status: "Under Review"
    },
    {
      title: "Password Security Poster",
      author: "Priya M. (Grade 9)",
      type: "Poster Design",
      status: "Approved"
    },
    {
      title: "Phishing Awareness Comic",
      author: "Rohit K. (Grade 11)",
      type: "Comic Strip",
      status: "Published"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Under Review":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "Approved":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "Published":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  return (
    <div className="min-h-screen hero-gradient py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Annual Magazine
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contribute to our end-of-year cybersecurity magazine. Share your knowledge, creativity, and awareness through articles, posters, and more!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Submission Form */}
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle className="text-gradient flex items-center gap-2">
                <Send className="h-5 w-5" />
                Submit Your Content
              </CardTitle>
              <CardDescription>
                Share your cybersecurity knowledge and creativity with fellow students
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="cyber-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="grade">Grade</Label>
                    <Select value={formData.grade} onValueChange={(value) => setFormData({...formData, grade: value})}>
                      <SelectTrigger className="cyber-border">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        {[6, 7, 8, 9, 10, 11, 12].map((grade) => (
                          <SelectItem key={grade} value={grade.toString()}>
                            Grade {grade}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="cyber-border"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contentType">Content Type</Label>
                  <Select value={formData.contentType} onValueChange={(value) => setFormData({...formData, contentType: value})}>
                    <SelectTrigger className="cyber-border">
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      {contentTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center gap-2">
                            <type.icon className="h-4 w-4" />
                            {type.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Give your content a catchy title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="cyber-border"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Brief Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Briefly describe your content..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="cyber-border resize-none"
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Content/File Upload</Label>
                  <Textarea
                    id="content"
                    placeholder="Paste your content here, or describe the file you'll upload..."
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    className="cyber-border resize-none"
                    rows={6}
                    required
                  />
                </div>

                <div className="flex items-center gap-2 p-3 bg-primary/10 border border-primary/20 rounded-lg">
                  <Upload className="h-4 w-4 text-primary" />
                  <span className="text-sm text-primary">
                    For image files and designs, email them to: magazine@cyberawarenessclub.edu
                  </span>
                </div>

                <Button type="submit" className="w-full cyber-gradient text-white">
                  Submit Content
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Recent Submissions and Info */}
          <div className="space-y-6">
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="text-gradient flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Magazine Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                    Content should be related to cybersecurity, digital safety, or online awareness
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                    Articles should be 300-800 words, written in clear, student-friendly language
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                    Posters and infographics should be high-resolution (300 DPI minimum)
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                    All submissions will be reviewed by club moderators
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                    Selected content will be featured in our annual magazine
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="text-gradient">Recent Submissions</CardTitle>
                <CardDescription>
                  See what your fellow students have contributed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {previousSubmissions.map((submission, index) => (
                    <div key={index} className="p-3 cyber-border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium">{submission.title}</h4>
                        <Badge className={`text-xs ${getStatusColor(submission.status)}`}>
                          {submission.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{submission.author}</p>
                      <p className="text-xs text-muted-foreground">{submission.type}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}