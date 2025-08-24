import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, XCircle, Mail, ExternalLink } from "lucide-react"

interface PhishingEmail {
  id: string
  subject: string
  sender: string
  preview: string
  isPhishing: boolean
  indicators: string[]
}

export const PhishingSimulator = () => {
  const [currentEmail, setCurrentEmail] = useState<PhishingEmail | null>(null)
  const [score, setScore] = useState(0)
  const [totalAttempts, setTotalAttempts] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)

  const phishingEmails: PhishingEmail[] = [
    {
      id: '1',
      subject: 'URGENT: Your account will be suspended!',
      sender: 'security@gmail-support.com',
      preview: 'Your Gmail account shows suspicious activity. Click here immediately to verify your identity or your account will be suspended within 24 hours.',
      isPhishing: true,
      indicators: [
        'Urgent language designed to create panic',
        'Suspicious sender domain (gmail-support.com vs gmail.com)',
        'Asks for immediate action without proper verification',
        'Threats of account suspension'
      ]
    },
    {
      id: '2',
      subject: 'Your DPS Noida Grade Report',
      sender: 'admissions@dpsnoida.edu.in',
      preview: 'Dear student, your quarterly grade report is now available. Please log in to the student portal to view your grades and feedback from teachers.',
      isPhishing: false,
      indicators: [
        'From official school domain',
        'No urgent language or threats',
        'Legitimate educational content',
        'Proper sender identification'
      ]
    },
    {
      id: '3',
      subject: 'Congratulations! You\'ve won ₹50,000!',
      sender: 'winner@lottery-india.net',
      preview: 'You have been selected as a winner in our international lottery! Claim your prize of ₹50,000 by clicking this link and providing your bank details.',
      isPhishing: true,
      indicators: [
        'Too good to be true offer',
        'Requests for personal financial information',
        'Unsolicited lottery win notification',
        'Suspicious domain name'
      ]
    }
  ]

  const startGame = () => {
    setGameStarted(true)
    setScore(0)
    setTotalAttempts(0)
    setShowResult(false)
    getNextEmail()
  }

  const getNextEmail = () => {
    const randomEmail = phishingEmails[Math.floor(Math.random() * phishingEmails.length)]
    setCurrentEmail(randomEmail)
    setShowResult(false)
  }

  const handleAnswer = (userAnswer: boolean) => {
    if (!currentEmail) return

    const isCorrect = userAnswer === currentEmail.isPhishing
    setTotalAttempts(prev => prev + 1)
    
    if (isCorrect) {
      setScore(prev => prev + 1)
    }
    
    setShowResult(true)
  }

  const nextEmail = () => {
    if (totalAttempts < 5) {
      getNextEmail()
    } else {
      // Game finished
      setCurrentEmail(null)
      setGameStarted(false)
    }
  }

  const getScoreColor = () => {
    const percentage = (score / totalAttempts) * 100
    if (percentage >= 80) return "text-green-500"
    if (percentage >= 60) return "text-yellow-500"
    return "text-red-500"
  }

  return (
    <Card className="cyber-card">
      <CardHeader>
        <CardTitle className="text-gradient flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Phishing Detection Training
        </CardTitle>
        <CardDescription>
          Test your ability to identify phishing emails and improve your security awareness
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {!gameStarted ? (
          <div className="text-center space-y-4">
            <div className="p-6 bg-muted/20 rounded-lg">
              <h4 className="font-medium mb-2">How to Play:</h4>
              <ul className="text-sm text-muted-foreground space-y-1 text-left">
                <li>• Review each email carefully</li>
                <li>• Decide if it's legitimate or phishing</li>
                <li>• Learn from the explanation after each answer</li>
                <li>• Try to get all 5 emails correct!</li>
              </ul>
            </div>
            <Button onClick={startGame} className="cyber-gradient text-white w-full">
              Start Phishing Training
            </Button>
          </div>
        ) : currentEmail ? (
          <div className="space-y-4">
            {/* Score Display */}
            <div className="flex justify-between items-center">
              <Badge variant="outline">
                Question {totalAttempts + 1} of 5
              </Badge>
              <div className={`font-medium ${getScoreColor()}`}>
                Score: {score}/{totalAttempts}
              </div>
            </div>

            {/* Email Display */}
            <div className="border rounded-lg p-4 bg-card/50">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">From:</span>
                  <span className="font-medium">{currentEmail.sender}</span>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Subject:</span>
                  <p className="font-medium">{currentEmail.subject}</p>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-sm">{currentEmail.preview}</p>
                </div>
              </div>
            </div>

            {!showResult ? (
              <div className="flex gap-3">
                <Button 
                  onClick={() => handleAnswer(false)}
                  variant="outline"
                  className="flex-1 border-green-500/20 text-green-500 hover:bg-green-500/10"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Legitimate
                </Button>
                <Button 
                  onClick={() => handleAnswer(true)}
                  variant="outline"
                  className="flex-1 border-red-500/20 text-red-500 hover:bg-red-500/10"
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  Phishing
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className={`p-4 rounded-lg border ${
                  (score / totalAttempts) === 1 && totalAttempts === totalAttempts 
                    ? 'bg-green-500/10 border-green-500/20' 
                    : 'bg-blue-500/10 border-blue-500/20'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    {currentEmail.isPhishing ? (
                      <XCircle className="h-5 w-5 text-red-500" />
                    ) : (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                    <span className="font-medium">
                      This email is {currentEmail.isPhishing ? 'PHISHING' : 'LEGITIMATE'}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Key indicators:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {currentEmail.indicators.map((indicator, index) => (
                        <li key={index}>• {indicator}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Button onClick={nextEmail} className="w-full">
                  {totalAttempts < 5 ? 'Next Email' : 'View Final Score'}
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="p-6 bg-muted/20 rounded-lg">
              <h4 className="text-2xl font-bold text-gradient mb-2">Training Complete!</h4>
              <div className={`text-3xl font-bold mb-2 ${getScoreColor()}`}>
                {score}/5
              </div>
              <p className="text-muted-foreground">
                {score === 5 ? "Perfect! You're a phishing detection expert!" :
                 score >= 4 ? "Great job! You have strong security awareness." :
                 score >= 3 ? "Good work! Keep practicing to improve." :
                 "Keep learning! Practice makes perfect."}
              </p>
            </div>
            <Button onClick={startGame} variant="outline" className="w-full">
              Try Again
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}