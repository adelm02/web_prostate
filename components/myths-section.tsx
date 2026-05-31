import { XCircle, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const mythsFacts = [
  {
    id: 1,
    myth: "Znamená to okamžitý konec?",
    fact: "Karcinom prostaty je jeden z nejlépe léčitelných nádorů. Při včasném záchytu má 5letá míra přežití téměř 100 %.",
  },
  {
    id: 2,
    myth: "Musím podstoupit okamžitou operaci?",
    fact: "Ne vždy. U některých typů karcinomu prostaty je vhodné pouze aktivní sledování. Váš lékař s vámi probere všechny možnosti.",
  },
  {
    id: 3,
    myth: "Léčba vždy způsobí inkontinenci?",
    fact: "Moderní léčebné postupy výrazně snížily riziko vedlejších účinků. Rehabilitace pánevního dna navíc pomáhá většině mužů obnovit plnou kontrolu.",
  },
]

export function MythsSection() {
  return (
    <section id="myths" className="w-full bg-background py-16 sm:py-20" aria-labelledby="myths-heading">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2
          id="myths-heading"
          className="mb-4 text-center text-2xl font-bold text-foreground sm:text-3xl"
        >
          Mýty vs. Fakta
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-lg text-muted-foreground">
          Uklidněme některé z nejčastějších obav
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mythsFacts.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden rounded-2xl border-2 border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <CardHeader className="bg-secondary/50 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted">
                    <XCircle className="h-7 w-7 text-muted-foreground" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      Mýtus
                    </span>
                    <p className="mt-1 text-lg font-semibold leading-snug text-foreground">
                      {item.myth}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                    <CheckCircle className="h-7 w-7 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold uppercase tracking-wide text-accent">
                      Fakt
                    </span>
                    <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                      {item.fact}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
