"use client"

import { useState, useEffect } from "react"
import { Sun, Moon, Minus, Plus, Menu, X, Home, BookOpen, HelpCircle, Smartphone, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
  { label: "Úvod", href: "#hero", icon: Home },
  { label: "Léčba", href: "#treatment", icon: BookOpen },
  { label: "Slovníček", href: "#glossary", icon: BookOpen },
  { label: "Mýty a fakta", href: "#myths", icon: HelpCircle },
  { label: "Pomoc", href: "#help", icon: Phone },
  { label: "Aplikace", href: "#app", icon: Smartphone },
]

export function Header() {
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const decreaseFont = () => {
    const newSize = Math.max(80, fontSize - 10)
    setFontSize(newSize)
    document.documentElement.style.fontSize = `${newSize}%`
  }

  const increaseFont = () => {
    const newSize = Math.min(150, fontSize + 10)
    setFontSize(newSize)
    document.documentElement.style.fontSize = `${newSize}%`
  }

  const toggleContrast = () => {
    setHighContrast(!highContrast)
    document.documentElement.classList.toggle("dark")
  }

  const handleMenuClick = (href: string) => {
    setMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b-2 border-border bg-card shadow-sm">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
              <span className="text-xl font-bold text-accent-foreground">P</span>
            </div>
            <span className="text-lg font-bold leading-tight tracking-tight text-foreground sm:text-xl">
              Průvodce
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 lg:flex" aria-label="Hlavní navigace">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Font Size Controls */}
            <div className="hidden items-center rounded-xl border-2 border-border bg-secondary p-1 sm:flex">
              <Button
                variant="ghost"
                size="icon"
                onClick={decreaseFont}
                className="h-11 w-11 rounded-lg text-foreground hover:bg-primary/20 focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Zmenšit text"
              >
                <Minus className="h-5 w-5" strokeWidth={3} />
              </Button>
              <span className="px-2 text-lg font-bold text-foreground" aria-live="polite">
                A
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={increaseFont}
                className="h-11 w-11 rounded-lg text-foreground hover:bg-primary/20 focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Zvětšit text"
              >
                <Plus className="h-5 w-5" strokeWidth={3} />
              </Button>
            </div>

            {/* Contrast Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleContrast}
              className="h-12 w-12 rounded-xl border-2 border-border text-foreground hover:bg-primary/20 focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={highContrast ? "Vypnout vysoký kontrast" : "Zapnout vysoký kontrast"}
            >
              {highContrast ? <Sun className="h-6 w-6" strokeWidth={2.5} /> : <Moon className="h-6 w-6" strokeWidth={2.5} />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setMenuOpen(!menuOpen)}
              className="h-12 w-12 rounded-xl border-2 border-border text-foreground hover:bg-primary/20 focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
              aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-6 w-6" strokeWidth={2.5} /> : <Menu className="h-6 w-6" strokeWidth={2.5} />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm lg:hidden">
          <div className="flex h-full flex-col pt-24">
            <nav className="flex flex-col gap-2 px-6" aria-label="Mobilní navigace">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.href}
                    onClick={() => handleMenuClick(item.href)}
                    className="flex items-center gap-4 rounded-xl border-2 border-border bg-card p-5 text-left text-xl font-semibold text-foreground transition-colors hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Icon className="h-7 w-7 text-accent" strokeWidth={2} />
                    {item.label}
                  </button>
                )
              })}
            </nav>

            {/* Mobile Font Controls */}
            <div className="mt-6 px-6">
              <p className="mb-3 text-base font-semibold text-muted-foreground">Velikost textu</p>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  onClick={decreaseFont}
                  className="h-14 flex-1 rounded-xl border-2 border-border text-lg font-bold text-foreground hover:bg-primary/20"
                >
                  <Minus className="mr-2 h-5 w-5" strokeWidth={3} />
                  Menší
                </Button>
                <Button
                  variant="outline"
                  onClick={increaseFont}
                  className="h-14 flex-1 rounded-xl border-2 border-border text-lg font-bold text-foreground hover:bg-primary/20"
                >
                  <Plus className="mr-2 h-5 w-5" strokeWidth={3} />
                  Větší
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
