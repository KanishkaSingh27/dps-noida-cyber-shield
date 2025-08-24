import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import { ArrowRight, Shield, Users, Calendar, BookOpen, ExternalLink, Trophy, Target, Eye } from "lucide-react"

const Index = () => {
  const achievements = [
    {
      icon: Users,
      title: "50+",
      description: "Students participated in our first quiz event"
    },
    {
      icon: Shield,
      title: "100%",
      description: "Commitment to student digital safety"
    },
    {
      icon: BookOpen,
      title: "Growing",
      description: "Resource library for cybersecurity education"
    }
  ]

  const features = [
    {
      icon: Calendar,
      title: "Events & Workshops",
      description: "Join our interactive cybersecurity events and competitions",
      link: "/events",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Access tools, guides, and educational materials",
      link: "/resources",
      color: "text-accent"
    },
    {
      icon: Trophy,
      title: "Annual Magazine",
      description: "Contribute your cybersecurity knowledge and creativity",
      link: "/magazine",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Get Help",
      description: "Report issues, get guidance, and find support",
      link: "/help",
      color: "text-accent"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-gradient">Cyber Awareness</span>
                <br />
                <span className="text-foreground">Club</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
                Empowering students at Delhi Public School Noida with digital safety knowledge, 
                cybersecurity awareness, and online protection skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="cyber-gradient text-white text-lg px-8 py-6" asChild>
                  <a href="https://forms.google.com/your-form-link" target="_blank" rel="noopener noreferrer">
                    Join Our Club
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 cyber-glow" asChild>
                  <Link to="/events">
                    View Events
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/93b852b6-2299-4d71-8e1c-db8820fecc60.png" 
                  alt="Cyber Awareness Club Logo" 
                  className="w-80 h-80 lg:w-96 lg:h-96 animate-float cyber-glow-accent"
                />
                <div className="absolute inset-0 cyber-gradient opacity-20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="cyber-card text-center hover:cyber-glow-accent transition-all duration-300">
                <CardContent className="pt-6">
                  <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gradient mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Creating a safer digital environment for students through education, awareness, and community support.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="cyber-card hover:cyber-glow transition-all duration-300">
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Education First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe knowledge is the best defense. Our programs focus on practical cybersecurity education.
                </p>
              </CardContent>
            </Card>
            
            <Card className="cyber-card hover:cyber-glow transition-all duration-300">
              <CardHeader>
                <Eye className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Awareness Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Raising awareness about digital threats, privacy protection, and safe online practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="cyber-card hover:cyber-glow transition-all duration-300">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Support Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Providing a safe space for students to seek help and report cybersecurity concerns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cybersecurity resources and support for every student
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="cyber-card hover:cyber-glow-accent transition-all duration-300 group">
                <CardHeader>
                  <feature.icon className={`h-8 w-8 ${feature.color} mb-2 group-hover:scale-110 transition-transform`} />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-start p-0 h-auto" asChild>
                    <Link to={feature.link} className="text-primary hover:text-primary-foreground">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Be part of a community that prioritizes digital safety and cybersecurity awareness.
            Together, we can create a safer online environment for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="cyber-gradient text-white text-lg px-8 py-6" asChild>
              <a href="https://forms.google.com/your-form-link" target="_blank" rel="noopener noreferrer">
                Join the Club
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 cyber-glow" asChild>
              <Link to="/help">
                Get Help Now
                <Shield className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
