"use client"

import { useState } from "react"
import { Stethoscope, FlaskConical, Syringe, Clock, Building2, ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const timelineSteps = [
  {
    id: 1,
    label: "Urolog",
    icon: Stethoscope,
    title: "Návštěva urologa",
    description:
      "Váš praktický lékař vás odešle k urologovi, pokud má podezření na problémy s prostatou. Urolog provede základní vyšetření a rozhodne o dalších krocích. Nebojte se ptát na vše, co vás zajímá.",
  },
  {
    id: 2,
    label: "Zvýšené PSA",
    icon: FlaskConical,
    title: "Laboratorní vyšetření PSA",
    description:
      "PSA (prostatický specifický antigen) je krevní test. Zvýšená hodnota nemusí vždy znamenat rakovinu – může být způsobena i zánětem nebo zvětšením prostaty. Lékař vyhodnotí výsledky v kontextu vašeho zdraví.",
  },
  {
    id: 3,
    label: "Biopsie",
    icon: Syringe,
    title: "Biopsie prostaty",
    description:
      "Biopsie je odběr malých vzorků tkáně z prostaty. Zákrok trvá asi 15–20 minut a provádí se ambulantně. Po zákroku můžete pociťovat mírný diskomfort, který obvykle rychle odezní.",
  },
  {
    id: 4,
    label: "Čekání na výsledky",
    icon: Clock,
    title: "Čekání na výsledky biopsie",
    description:
      "Většinou trvá 7 až 14 dní, než budou výsledky k dispozici. Zkuste v tomto období omezit hledání informací na internetu a věnujte se běžným aktivitám. Pokud cítíte úzkost, je to naprosto normální.",
  },
  {
    id: 5,
    label: "Onkologie",
    icon: Building2,
    title: "Konzultace s onkologem",
    description:
      "Pokud biopsie potvrdí nádor, budete konzultovat s onkologem. Společně vytvoříte léčebný plán přizpůsobený vašemu konkrétnímu případu. Moderní léčba karcinomu prostaty má velmi dobré výsledky.",
  },
]

export function TimelineSection() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  const toggleStep = (stepId: number) => {
    setExpandedStep(expandedStep === stepId ? null : stepId)
  }

  return (
    <section id="timeline" className="w-full bg-background py-16 sm:py-20" aria-labelledby="timeline-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="timeline-heading"
          className="mb-4 text-center text-2xl font-bold text-foreground sm:text-3xl"
        >
          Cesta pacienta
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground">
          Klikněte na jednotlivé kroky a zjistěte, co vás v každé fázi čeká
        </p>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline nodes */}
            <div className="relative flex items-start justify-between">
              {/* Connection Line */}
              <div 
                className="absolute left-[10%] right-[10%] top-10 h-0.5 rounded-full bg-border" 
                aria-hidden="true"
              />

              {timelineSteps.map((step) => {
                const isExpanded = expandedStep === step.id
                return (
                  <div
                    key={step.id}
                    className="relative flex flex-col items-center"
                    style={{ flex: 1 }}
                  >
                    <button
                      onClick={() => toggleStep(step.id)}
                      className={`group relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/50 ${
                        isExpanded
                          ? "border-accent bg-accent text-accent-foreground shadow-lg"
                          : "border-border bg-card text-muted-foreground hover:border-primary hover:bg-secondary hover:text-foreground"
                      }`}
                      aria-expanded={isExpanded}
                      aria-controls={`step-content-${step.id}`}
                    >
                      <step.icon className="h-9 w-9" strokeWidth={1.5} />
                    </button>
                    <div className="mt-4 text-center">
                      <p className="text-lg font-semibold text-foreground">
                        {step.label}
                      </p>
                      <ChevronDown 
                        className={`mx-auto mt-1 h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Expanded Content Card */}
            {expandedStep !== null && (
              <div className="mt-8">
                <Card 
                  id={`step-content-${expandedStep}`}
                  className="mx-auto max-w-3xl animate-in fade-in slide-in-from-top-4 duration-300 border-2 border-border bg-card shadow-md"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground">
                        {(() => {
                          const step = timelineSteps.find(s => s.id === expandedStep)
                          if (step) {
                            const IconComponent = step.icon
                            return <IconComponent className="h-8 w-8" strokeWidth={1.5} />
                          }
                          return null
                        })()}
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-bold text-foreground">
                          {timelineSteps.find(s => s.id === expandedStep)?.title}
                        </h3>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                          {timelineSteps.find(s => s.id === expandedStep)?.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>

        {/* Mobile/Tablet Timeline - Accordion style */}
        <div className="lg:hidden">
          <div className="space-y-4">
            {timelineSteps.map((step, index) => {
              const isExpanded = expandedStep === step.id
              return (
                <div key={step.id} className="relative">
                  {/* Connection line */}
                  {index < timelineSteps.length - 1 && (
                    <div 
                      className="absolute left-7 top-16 h-full w-0.5 bg-border" 
                      aria-hidden="true"
                    />
                  )}
                  
                  <button
                    onClick={() => toggleStep(step.id)}
                    className={`flex w-full items-center gap-4 rounded-xl border-2 p-4 text-left transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/50 ${
                      isExpanded
                        ? "border-accent bg-accent/10"
                        : "border-border bg-card hover:border-muted-foreground"
                    }`}
                    aria-expanded={isExpanded}
                    aria-controls={`mobile-step-content-${step.id}`}
                  >
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isExpanded
                          ? "bg-accent text-accent-foreground"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      <step.icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl font-semibold text-foreground">
                        {step.label}
                      </p>
                      <p className="text-base text-muted-foreground">
                        Krok {step.id} z 5
                      </p>
                    </div>
                    <ChevronDown 
                      className={`h-6 w-6 text-muted-foreground transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Expanded content */}
                  {isExpanded && (
                    <div
                      id={`mobile-step-content-${step.id}`}
                      className="mt-2 ml-4 animate-in fade-in slide-in-from-top-2 duration-200"
                    >
                      <Card className="border-2 border-border bg-card">
                        <CardContent className="p-6">
                          <h3 className="mb-3 text-lg font-bold text-foreground">
                            {step.title}
                          </h3>
                          <p className="text-base leading-relaxed text-muted-foreground">
                            {step.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
