"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  Bell, 
  User, 
  Calendar, 
  MapPin, 
  Stethoscope, 
  TrendingUp, 
  Pill, 
  ClipboardList, 
  Activity, 
  FileText, 
  StickyNote,
  LogOut,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const dashboardCards = [
  {
    id: "results",
    title: "Moje výsledky",
    subtitle: "PSA 4,2 ng/ml",
    icon: TrendingUp,
    href: "/dashboard/vysledky",
    color: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
  },
  {
    id: "medication",
    title: "Moje léky",
    subtitle: "6 aktivních",
    icon: Pill,
    href: "/dashboard/leky",
    color: "bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400",
  },
  {
    id: "diagnosis",
    title: "Moje diagnóza",
    subtitle: "Karcinom prostaty",
    icon: ClipboardList,
    href: "/dashboard/diagnoza",
    color: "bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400",
  },
  {
    id: "treatment",
    title: "Moje léčba",
    subtitle: "Cyklus 3 / 6",
    icon: Activity,
    href: "/dashboard/lecba",
    color: "bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400",
  },
  {
    id: "articles",
    title: "Články",
    subtitle: "12 nových",
    icon: FileText,
    href: "/dashboard/clanky",
    color: "bg-cyan-50 text-cyan-600 dark:bg-cyan-950 dark:text-cyan-400",
  },
  {
    id: "notes",
    title: "Moje poznámky",
    subtitle: "8 záznamů",
    icon: StickyNote,
    href: "/dashboard/poznamky",
    color: "bg-rose-50 text-rose-600 dark:bg-rose-950 dark:text-rose-400",
  },
]

export default function DashboardPage() {
  const [hasNotifications] = useState(true)

  return (
    <div className="min-h-screen bg-[#F0F4F8]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-card/95 backdrop-blur-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-xl font-bold text-foreground">
            Průvodce
          </Link>
          
          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <button
              className="relative rounded-full p-3 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Oznámení"
            >
              <Bell className="h-6 w-6" />
              {hasNotifications && (
                <span className="absolute right-2 top-2 h-3 w-3 rounded-full bg-accent" />
              )}
            </button>

            {/* User Avatar */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                JN
              </div>
              <span className="hidden font-medium text-foreground sm:inline">Josef N.</span>
            </div>

            {/* Logout */}
            <Link
              href="/"
              className="rounded-full p-3 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Odhlásit se"
            >
              <LogOut className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Greeting */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Dobré ráno, <span className="text-accent">Josefe</span>
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Zde je váš přehled na dnešní den.
          </p>
        </div>

        {/* Next Appointment - Full Width Featured Card */}
        <Card className="mb-8 border-2 border-accent/30 bg-card shadow-lg sm:mb-12">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-foreground sm:text-2xl">
                  Další kontrola
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Vaše nadcházející návštěva
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-accent" />
                <span className="text-lg font-semibold text-foreground sm:text-xl">
                  Pátek 10. června v 10:30
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-base text-muted-foreground sm:text-lg">
                  FN Ostrava, budova O
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-secondary/50 p-4">
              <Stethoscope className="h-6 w-6 text-accent" />
              <span className="text-lg font-medium text-foreground">
                MUDr. Novák - onkolog
              </span>
            </div>
            <Button 
              className="mt-2 h-14 w-full rounded-xl bg-accent text-lg font-semibold text-accent-foreground shadow-md hover:bg-accent/90 sm:w-auto sm:px-8"
            >
              Zobrazit detail
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>

        {/* Bento Grid Dashboard Cards */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {dashboardCards.map((card) => (
            <Link key={card.id} href={card.href} className="group">
              <Card className="h-full border-2 border-border bg-card shadow-md transition-all duration-300 hover:border-accent/50 hover:shadow-lg group-focus-visible:ring-4 group-focus-visible:ring-accent/50">
                <CardContent className="flex items-center gap-4 p-6 sm:p-8">
                  <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${card.color}`}>
                    <card.icon className="h-8 w-8" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-lg font-bold text-foreground sm:text-xl">
                      {card.title}
                    </h3>
                    <p className="mt-1 truncate text-base text-muted-foreground">
                      {card.subtitle}
                    </p>
                  </div>
                  <ChevronRight className="h-6 w-6 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
