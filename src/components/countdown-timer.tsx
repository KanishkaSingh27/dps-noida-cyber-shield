import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"

interface CountdownTimerProps {
  targetDate: Date
  eventName: string
  description?: string
}

export function CountdownTimer({ targetDate, eventName, description }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance < 0) {
        setIsExpired(true)
        clearInterval(timer)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center">
      <div className="cyber-card p-4 min-w-[80px] cyber-glow-accent animate-pulse-slow">
        <div className="text-2xl md:text-3xl font-bold text-gradient">
          {value.toString().padStart(2, '0')}
        </div>
      </div>
      <div className="text-sm text-muted-foreground mt-2 font-medium">{label}</div>
    </div>
  )

  if (isExpired) {
    return (
      <Card className="cyber-card text-center">
        <CardHeader>
          <CardTitle className="text-gradient">🎉 Event Started!</CardTitle>
          <CardDescription>{eventName} is now live!</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card className="cyber-card">
      <CardHeader className="text-center">
        <CardTitle className="text-gradient flex items-center justify-center gap-2">
          <Calendar className="h-5 w-5" />
          {eventName}
        </CardTitle>
        {description && (
          <CardDescription className="flex items-center justify-center gap-2">
            <Clock className="h-4 w-4" />
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center gap-4 md:gap-6">
          <TimeUnit value={timeLeft.days} label="Days" />
          <div className="text-2xl text-primary animate-pulse">:</div>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <div className="text-2xl text-primary animate-pulse">:</div>
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <div className="text-2xl text-primary animate-pulse">:</div>
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </CardContent>
    </Card>
  )
}