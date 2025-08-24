import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, AlertCircle, Shield, Globe, Mail, Smartphone } from "lucide-react"

interface SecurityCheck {
  id: string
  name: string
  description: string
  icon: any
  status: 'good' | 'warning' | 'danger' | 'unchecked'
  tips: string[]
}

export const SecurityChecker = () => {
  const [isChecking, setIsChecking] = useState(false)
  const [checkProgress, setCheckProgress] = useState(0)
  const [securityChecks, setSecurityChecks] = useState<SecurityCheck[]>([
    {
      id: 'browser',
      name: 'Browser Security',
      description: 'Check browser settings and extensions',
      icon: Globe,
      status: 'unchecked',
      tips: [
        'Enable automatic updates',
        'Use reputable ad blockers',
        'Check privacy settings',
        'Remove suspicious extensions'
      ]
    },
    {
      id: 'email',
      name: 'Email Security',
      description: 'Verify email protection status',
      icon: Mail,
      status: 'unchecked',
      tips: [
        'Enable 2FA on all accounts',
        'Check for data breaches',
        'Use strong, unique passwords',
        'Be cautious with email links'
      ]
    },
    {
      id: 'device',
      name: 'Device Protection',
      description: 'Check device security settings',
      icon: Smartphone,
      status: 'unchecked',
      tips: [
        'Keep OS updated',
        'Use screen lock',
        'Install apps from official stores',
        'Enable remote wipe capability'
      ]
    }
  ])

  const runSecurityCheck = async () => {
    setIsChecking(true)
    setCheckProgress(0)

    // Simulate security check process
    for (let i = 0; i <= 100; i += 10) {
      setCheckProgress(i)
      await new Promise(resolve => setTimeout(resolve, 200))
    }

    // Simulate random results for demo
    const results: ('good' | 'warning' | 'danger')[] = ['good', 'warning', 'danger']
    const updatedChecks = securityChecks.map(check => ({
      ...check,
      status: results[Math.floor(Math.random() * results.length)]
    }))

    setSecurityChecks(updatedChecks)
    setIsChecking(false)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
      case 'danger':
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return <Shield className="h-5 w-5 text-muted-foreground" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'bg-green-500/10 text-green-500 border-green-500/20'
      case 'warning':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
      case 'danger':
        return 'bg-red-500/10 text-red-500 border-red-500/20'
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20'
    }
  }

  const overallScore = securityChecks.reduce((score, check) => {
    if (check.status === 'good') return score + 33
    if (check.status === 'warning') return score + 16
    return score
  }, 0)

  return (
    <Card className="cyber-card">
      <CardHeader>
        <CardTitle className="text-gradient flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Security Health Check
        </CardTitle>
        <CardDescription>
          Assess your digital security posture with our comprehensive scan
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {isChecking && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Scanning your security...</span>
              <span className="text-sm text-muted-foreground">{checkProgress}%</span>
            </div>
            <Progress value={checkProgress} className="w-full" />
          </div>
        )}

        {!isChecking && securityChecks.some(check => check.status !== 'unchecked') && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Security Score</h4>
              <Badge variant="outline" className={getStatusColor(overallScore > 80 ? 'good' : overallScore > 50 ? 'warning' : 'danger')}>
                {overallScore}/100
              </Badge>
            </div>
            <Progress value={overallScore} className="w-full" />
          </div>
        )}

        <div className="space-y-3">
          {securityChecks.map((check) => (
            <div key={check.id} className="flex items-center justify-between p-3 rounded-lg border bg-card/50">
              <div className="flex items-center gap-3">
                <check.icon className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">{check.name}</p>
                  <p className="text-sm text-muted-foreground">{check.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(check.status)}
                {check.status !== 'unchecked' && check.status !== 'good' && (
                  <Button variant="outline" size="sm">
                    Fix Issues
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <Button 
          onClick={runSecurityCheck} 
          disabled={isChecking}
          className="w-full cyber-gradient text-white"
        >
          {isChecking ? 'Scanning...' : 'Start Security Check'}
        </Button>

        {securityChecks.some(check => check.status !== 'unchecked') && (
          <div className="mt-6 p-4 bg-muted/20 rounded-lg">
            <h4 className="font-medium mb-2">Quick Security Tips:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Keep your passwords strong and unique</li>
              <li>• Enable two-factor authentication everywhere</li>
              <li>• Keep your software and apps updated</li>
              <li>• Be cautious with public Wi-Fi</li>
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}