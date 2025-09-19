import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CountdownTimer } from "@/components/countdown-timer"
import { Calendar, Users, Trophy, Clock } from "lucide-react"

export default function Events() {
  // Countdown to December 15th
  const upcomingEvent = new Date("2025-11-01T09:00:00")

  const pastEvents = [
    {
      id: 1,
      title: "Cyber Security Quiz Championship",
      date: "November 2024",
      participants: "50+",
      description: "Our first major quiz event focused on cybersecurity awareness, password safety, and digital hygiene.",
      type: "Quiz",
      status: "completed"
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Cyber Crime Awareness Talk",
      date: "November 1st, 2025  (Exact date TBD)",
      time:"9 am",
      description: "Interactive session on latest cyber threats and protection strategies from cyber crime experts.",
      type: "Talk"
    }
  ]

  return (
    <div className="min-h-screen hero-gradient py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Club Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our cybersecurity events, workshops, and competitions to enhance your digital safety knowledge
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
            <Clock className="h-8 w-8 text-primary" />
            Upcoming Events
          </h2>
          
          <div className="mb-8">
            <CountdownTimer 
              targetDate={upcomingEvent}
              eventName="Cyber Crime Awareness talk"
              description="November 1st, 2025 at 9:00 AM"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="cyber-card hover:cyber-glow-accent transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-gradient">{event.title}</CardTitle>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {event.type}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {event.date} at {event.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
            <Trophy className="h-8 w-8 text-accent" />
            Past Events
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <Card key={event.id} className="cyber-card hover:cyber-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <Badge variant="outline" className="border-accent text-accent">
                      {event.type}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="font-medium text-primary">{event.participants} participants</span>
                  </div>
                  <Badge className="w-fit cyber-gradient text-white border-0">
                    Completed Successfully
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
