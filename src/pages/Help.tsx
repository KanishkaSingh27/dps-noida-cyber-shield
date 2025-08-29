import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, AlertTriangle, Shield, MessageCircle, Clock, ExternalLink } from "lucide-react"

export default function Help() {

  const emergencyContacts = [
    {
      title: "National Cyber Crime Helpline",
      number: "1930",
      description: "24/7 helpline for reporting cyber crimes",
      type: "emergency"
    },
    {
      title: "Child Helpline",
      number: "1098",
      description: "24/7 helpline for children in distress",
      type: "emergency"
    },
    {
      title: "Women Helpline",
      number: "181",
      description: "24/7 helpline for women in distress",
      type: "emergency"
    }
  ]

  const supportCategories = [
    {
      title: "Cyberbullying",
      description: "Someone is harassing or threatening you online",
      icon: Shield,
      urgency: "High"
    },
    {
      title: "Scam/Fraud",
      description: "You've encountered or fallen victim to an online scam",
      icon: AlertTriangle,
      urgency: "High"
    },
    {
      title: "Privacy Concerns",
      description: "Your personal information may have been compromised",
      icon: Shield,
      urgency: "Medium"
    },
    {
      title: "General Guidance",
      description: "Questions about online safety and security",
      icon: MessageCircle,
      urgency: "Low"
    }
  ]

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "High":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      case "Medium":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "Low":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      default:
        return "bg-primary/10 text-primary border-primary/20"
    }
  }

  return (
    <div className="min-h-screen hero-gradient py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Get Help & Support
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help you stay safe online. Report incidents, get guidance, or reach out for immediate assistance.
          </p>
        </div>

        {/* Emergency Alert */}
        <Alert className="mb-8 border-red-500/20 bg-red-500/10">
          <AlertTriangle className="h-4 w-4 text-red-500" />
          <AlertDescription className="text-red-500">
            <strong>In case of immediate danger or emergency:</strong> Call 100 (Police) or use the emergency numbers below. 
            For urgent cyber incidents, contact 1930 (National Cyber Crime Helpline) immediately.
          </AlertDescription>
        </Alert>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Help Request Form */}
          <Card className="cyber-card">
            <CardContent className="p-2">
              <div className="w-full overflow-hidden rounded-lg cyber-border">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfa_zbTZiriIUe8IybNAWAHjP83DuNZcafKLiIHKlf0UlWJZA/viewform?embedded=true" 
                  className="w-full h-[1400px] border-0"
                  title="Help Request Form"
                >
                  Loading…
                </iframe>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contacts and Support Categories */}
          <div className="space-y-6">
            {/* Emergency Contacts */}
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="text-gradient flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency Helplines
                </CardTitle>
                <CardDescription>
                  24/7 helplines for immediate assistance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="p-4 cyber-border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{contact.title}</h4>
                        <Badge className="bg-red-500/10 text-red-500 border-red-500/20">
                          Emergency
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <Phone className="h-4 w-4 text-primary" />
                        <span className="text-lg font-bold text-primary">{contact.number}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{contact.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Support Categories */}
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="text-gradient">How We Can Help</CardTitle>
                <CardDescription>
                  Common issues we assist students with
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supportCategories.map((category, index) => (
                    <div key={index} className="p-3 cyber-border rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                          <category.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium">{category.title}</h4>
                            <Badge className={`text-xs ${getUrgencyColor(category.urgency)}`}>
                              {category.urgency}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{category.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Resources */}
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="text-gradient flex items-center gap-2">
                  <ExternalLink className="h-5 w-5" />
                  Additional Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Report Cyber Crime Online
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="mailto:cyberhelp@school.edu">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Us Directly
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}