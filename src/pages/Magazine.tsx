import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Send } from "lucide-react"

export default function Magazine() {

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

        <div className="max-w-4xl mx-auto text-center">
          {/* Submit Button */}
          <div className="mb-12">
            <Button 
              asChild 
              size="lg" 
              className="cyber-gradient text-white hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
            >
              <a 
                href="https://forms.gle/ZVUM7d8pXd4UrxTj8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Send className="h-6 w-6" />
                Submit Your Content
              </a>
            </Button>
          </div>

          {/* Guidelines and Info */}
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="text-gradient flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Magazine Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-left">
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
                <CardTitle className="text-gradient flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Magazine Release
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-6 cyber-border rounded-lg bg-primary/5">
                  <div className="text-4xl mb-3">📚</div>
                  <h3 className="text-xl font-semibold mb-2 text-gradient">Coming in December!</h3>
                  <p className="text-muted-foreground">
                    Our annual cybersecurity magazine will be released in December. 
                    Start working on your submissions now to be featured in this year's edition!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}