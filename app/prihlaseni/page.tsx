"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Lock, Shield, ArrowLeft, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const router = useRouter()
  const [code, setCode] = useState("")
  const [showCode, setShowCode] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login - in production this would validate against a backend
    await new Promise(resolve => setTimeout(resolve, 1000))
    router.push("/dashboard")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow digits, max 6 characters
    const digits = e.target.value.replace(/\D/g, "").slice(0, 6)
    setCode(digits)
  }

  return (
    <div className="min-h-screen bg-[#F0F4F8]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-card/95 backdrop-blur-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="flex items-center gap-3 text-lg font-semibold text-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-6 w-6" />
            <span className="hidden sm:inline">Zpět na úvod</span>
          </Link>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium">Zabezpečené připojení</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <Card className="w-full max-w-lg border-2 border-border bg-card shadow-xl">
          <CardHeader className="space-y-4 pb-8 pt-10 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
              <Lock className="h-10 w-10 text-accent" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground sm:text-3xl">
              Vstup do osobní zóny
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground sm:text-xl">
              Pro zobrazení vašeho léčebného plánu se prosím přihlaste.
            </CardDescription>
          </CardHeader>

          <CardContent className="px-6 pb-10 sm:px-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <Label 
                  htmlFor="patient-code" 
                  className="text-lg font-semibold text-foreground"
                >
                  Kód pacienta
                </Label>
                <div className="relative">
                  <Input
                    id="patient-code"
                    type={showCode ? "text" : "password"}
                    placeholder="000000"
                    value={code}
                    onChange={handleInputChange}
                    maxLength={6}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className="h-16 rounded-xl border-2 border-border bg-background px-5 text-center text-2xl font-bold tracking-[0.5em] text-foreground placeholder:text-muted-foreground/60 placeholder:tracking-[0.5em] focus:border-accent focus:ring-4 focus:ring-accent/20 sm:h-20 sm:text-3xl"
                    required
                    aria-describedby="code-hint"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCode(!showCode)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    aria-label={showCode ? "Skrýt kód" : "Zobrazit kód"}
                  >
                    {showCode ? (
                      <EyeOff className="h-6 w-6" />
                    ) : (
                      <Eye className="h-6 w-6" />
                    )}
                  </button>
                </div>
                <p id="code-hint" className="text-base text-muted-foreground">
                  Zadejte 6místný kód, který jste obdrželi od svého lékaře
                </p>
              </div>

              <Button
                type="submit"
                disabled={isLoading || code.length < 6}
                className="h-16 w-full rounded-xl bg-accent text-xl font-semibold text-accent-foreground shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-accent/50 disabled:opacity-50 sm:h-20 sm:text-2xl"
              >
                {isLoading ? "Přihlašování..." : "Přihlásit se"}
              </Button>
            </form>

            {/* Security Note */}
            <div className="mt-8 flex items-start gap-3 rounded-xl bg-secondary/50 p-4">
              <Lock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <p className="text-base leading-relaxed text-muted-foreground">
                Vaše připojení je šifrované a zabezpečené nemocnicí. 
                Vaše osobní údaje jsou chráněny v souladu s GDPR.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
