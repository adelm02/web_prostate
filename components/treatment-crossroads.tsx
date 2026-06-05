"use client"

import { useState } from "react"
import { Pill, Zap, FlaskConical, ChevronDown, Lightbulb, Calendar, AlertTriangle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const treatments = [
  {
    id: "hormonal",
    title: "Hormonální léčba",
    icon: Pill,
    description: "Léčba, která snižuje hladinu mužských hormonů (androgenů) v těle",
    howItWorks: {
      title: "Jak to funguje",
      content: "Hormonální léčba blokuje nebo snižuje hladinu testosteronu a dalších mužských hormonů, které podporují růst nádorových buněk prostaty. Může být podávána formou injekcí, tablet nebo implantátů. Někdy se kombinuje s jinými způsoby léčby."
    },
    whatToExpect: {
      title: "Co mohu očekávat",
      content: "Léčba je obvykle dlouhodobá a může trvat měsíce až roky. Pravidelně budete docházet na kontroly a aplikaci léků. Účinnost léčby se sleduje pomocí hladin PSA v krvi. Většina mužů může během léčby vést běžný život."
    },
    sideEffects: {
      title: "Nežádoucí účinky",
      content: "Mohou se objevit návaly horka, snížení libida, únava, nárůst hmotnosti nebo změny nálady. Dlouhodobě může léčba ovlivnit pevnost kostí. Váš lékař vám pomůže tyto účinky zvládat a minimalizovat."
    }
  },
  {
    id: "radiation",
    title: "Ozařování",
    icon: Zap,
    description: "Radioterapie využívající záření k ničení nádorových buněk",
    howItWorks: {
      title: "Jak to funguje",
      content: "Radioterapie využívá cílené vysokoenergetické záření k poškození DNA nádorových buněk, čímž zabraňuje jejich dalšímu dělení. Moderní techniky umožňují přesné zaměření na prostatu s minimálním dopadem na okolní zdravou tkáň."
    },
    whatToExpect: {
      title: "Co mohu očekávat",
      content: "Ozařování probíhá ambulantně, obvykle 5 dní v týdnu po dobu několika týdnů. Každá návštěva trvá asi 15–30 minut, samotné ozáření jen několik minut. Před zahájením proběhne pečlivé plánování a simulace."
    },
    sideEffects: {
      title: "Nežádoucí účinky",
      content: "Během léčby se může objevit únava, častější močení nebo podráždění střev. Většina účinků je dočasná a po ukončení léčby odezní. Dlouhodobě může ovlivnit sexuální funkce, ale moderní techniky riziko minimalizují."
    }
  },
  {
    id: "systemic",
    title: "Systémová léčba",
    icon: FlaskConical,
    subtitle: "chemoterapie, NHA, radionuklidy",
    description: "Léčba působící na celé tělo k potlačení nádorových buněk",
    howItWorks: {
      title: "Jak to funguje",
      content: "Systémová léčba zahrnuje několik přístupů: chemoterapii (léky ničící rychle se dělící buňky), nové hormonální látky - NHA (účinnější blokátory androgenů) a radionuklidovou léčbu (radioaktivní látky cílící na nádorové buňky). Volba závisí na typu a rozsahu onemocnění."
    },
    whatToExpect: {
      title: "Co mohu očekávat",
      content: "Chemoterapie se podává v cyklech s přestávkami na zotavení. NHA jsou obvykle tablety užívané denně. Radionuklidová léčba vyžaduje hospitalizaci. Váš onkolog vytvoří individuální plán a bude vás průběžně sledovat."
    },
    sideEffects: {
      title: "Nežádoucí účinky",
      content: "Závisí na typu léčby. Chemoterapie může způsobit únavu, nevolnost nebo zvýšenou náchylnost k infekcím. NHA mají podobné účinky jako hormonální léčba. Radionuklidy mohou dočasně snížit krevní obraz. O všech možnostech zvládání účinků vás bude informovat váš lékař."
    }
  }
]

export function TreatmentCrossroads() {
  const [expandedTreatment, setExpandedTreatment] = useState<string | null>(null)

  const toggleTreatment = (treatmentId: string) => {
    setExpandedTreatment(expandedTreatment === treatmentId ? null : treatmentId)
  }

  return (
    <section id="treatment" className="w-full bg-background py-12 sm:py-20" aria-labelledby="treatment-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="treatment-heading"
          className="mb-4 text-center text-2xl font-bold text-foreground sm:text-3xl"
        >
          Možnosti onkologické léčby
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground">
          Vyberte si jednu z možností léčby a zjistěte více informací
        </p>

        {/* Treatment Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {treatments.map((treatment) => {
            const isExpanded = expandedTreatment === treatment.id
            return (
              <div key={treatment.id} className="flex flex-col">
                <button
                  onClick={() => toggleTreatment(treatment.id)}
                  className={`group relative flex flex-col items-center rounded-2xl border-2 p-6 text-center transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/50 sm:p-8 ${isExpanded
                      ? "border-accent bg-accent/10 shadow-lg"
                      : "border-border bg-card hover:border-primary hover:shadow-md"
                    }`}
                  aria-expanded={isExpanded}
                  aria-controls={`treatment-content-${treatment.id}`}
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl transition-colors sm:h-20 sm:w-20 ${isExpanded
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-muted-foreground group-hover:bg-primary/15 group-hover:text-foreground"
                      }`}
                  >
                    <treatment.icon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">
                    {treatment.title}
                  </h3>

                  {treatment.subtitle && (
                    <span className="mt-1 text-sm text-muted-foreground">
                      ({treatment.subtitle})
                    </span>
                  )}

                  <p className="mt-3 text-base text-muted-foreground">
                    {treatment.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent">
                    <span>{isExpanded ? "Skrýt detaily" : "Zobrazit detaily"}</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                        }`}
                      aria-hidden="true"
                    />
                  </div>
                </button>
              </div>
            )
          })}
        </div>

        {/* Expanded Content */}
        {expandedTreatment !== null && (
          <div className="mt-8">
            <Card
              id={`treatment-content-${expandedTreatment}`}
              className="animate-in fade-in slide-in-from-top-4 duration-300 border-2 border-border bg-card shadow-md"
            >
              <CardContent className="p-6 sm:p-8">
                {(() => {
                  const treatment = treatments.find(t => t.id === expandedTreatment)
                  if (!treatment) return null

                  return (
                    <div className="grid gap-6 lg:grid-cols-3">
                      {/* How it works */}
                      <div className="rounded-xl bg-secondary/50 p-5">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
                            <Lightbulb className="h-5 w-5 text-accent" strokeWidth={1.5} />
                          </div>
                          <h4 className="text-lg font-bold text-foreground">
                            {treatment.howItWorks.title}
                          </h4>
                        </div>
                        <p className="text-base leading-relaxed text-muted-foreground">
                          {treatment.howItWorks.content}
                        </p>
                      </div>

                      {/* What to expect */}
                      <div className="rounded-xl bg-secondary/50 p-5">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
                            <Calendar className="h-5 w-5 text-accent" strokeWidth={1.5} />
                          </div>
                          <h4 className="text-lg font-bold text-foreground">
                            {treatment.whatToExpect.title}
                          </h4>
                        </div>
                        <p className="text-base leading-relaxed text-muted-foreground">
                          {treatment.whatToExpect.content}
                        </p>
                      </div>

                      {/* Side effects */}
                      <div className="rounded-xl bg-secondary/50 p-5">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
                            <AlertTriangle className="h-5 w-5 text-accent" strokeWidth={1.5} />
                          </div>
                          <h4 className="text-lg font-bold text-foreground">
                            {treatment.sideEffects.title}
                          </h4>
                        </div>
                        <p className="text-base leading-relaxed text-muted-foreground">
                          {treatment.sideEffects.content}
                        </p>
                      </div>
                    </div>
                  )
                })()}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
