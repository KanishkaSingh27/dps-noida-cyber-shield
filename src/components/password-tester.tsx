import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, AlertCircle } from "lucide-react"

export function PasswordTester() {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const calculateStrength = (pwd: string) => {
    let score = 0
    const checks = {
      length: pwd.length >= 8,
      uppercase: /[A-Z]/.test(pwd),
      lowercase: /[a-z]/.test(pwd),
      numbers: /\d/.test(pwd),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
      noCommon: !["password", "123456", "qwerty", "admin"].includes(pwd.toLowerCase())
    }

    score = Object.values(checks).filter(Boolean).length
    
    return { score, checks }
  }

  const { score, checks } = calculateStrength(password)
  const strength = score <= 2 ? "Weak" : score <= 4 ? "Medium" : "Strong"
  const strengthColor = strength === "Weak" ? "text-red-500" : strength === "Medium" ? "text-yellow-500" : "text-green-500"
  const progressValue = (score / 6) * 100

  const CheckItem = ({ label, isValid }: { label: string; isValid: boolean }) => (
    <div className="flex items-center space-x-2">
      {isValid ? (
        <CheckCircle className="h-4 w-4 text-green-500" />
      ) : (
        <XCircle className="h-4 w-4 text-red-500" />
      )}
      <span className={`text-sm ${isValid ? "text-green-500" : "text-muted-foreground"}`}>
        {label}
      </span>
    </div>
  )

  return (
    <Card className="cyber-card">
      <CardHeader>
        <CardTitle className="text-gradient">Password Strength Tester</CardTitle>
        <CardDescription>
          Test your password strength and get recommendations for improvement
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password to test..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="cyber-border"
          />
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="show-password"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
              className="rounded"
            />
            <label htmlFor="show-password" className="text-sm text-muted-foreground cursor-pointer">
              Show password
            </label>
          </div>
        </div>

        {password && (
          <>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Strength:</span>
                <span className={`text-sm font-bold ${strengthColor}`}>{strength}</span>
              </div>
              <Progress value={progressValue} className="h-2" />
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Security Checks
              </h4>
              <div className="grid grid-cols-1 gap-2">
                <CheckItem label="At least 8 characters" isValid={checks.length} />
                <CheckItem label="Contains uppercase letters" isValid={checks.uppercase} />
                <CheckItem label="Contains lowercase letters" isValid={checks.lowercase} />
                <CheckItem label="Contains numbers" isValid={checks.numbers} />
                <CheckItem label="Contains special characters" isValid={checks.special} />
                <CheckItem label="Not a common password" isValid={checks.noCommon} />
              </div>
            </div>

            {strength === "Weak" && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-sm text-red-500">
                  <strong>Warning:</strong> This password is easily hackable. Consider using a longer password with mixed characters.
                </p>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}