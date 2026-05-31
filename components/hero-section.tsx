import Link from "next/link"
import { FileText, ClipboardCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="hero" className="w-full bg-gradient-to-b from-card to-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Podezření na karcinom prostaty?
          <br />
          <span className="text-accent">Jsme v tom s vámi.</span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
          Ověřené informace, které vás provedou obdobím nejistoty krok za krokem.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
          <Button
            size="lg"
            className="h-20 w-full max-w-sm rounded-2xl bg-primary px-8 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-ring sm:h-24 sm:text-xl"
          >
            <FileText className="mr-3 h-7 w-7 shrink-0" />
            <span className="text-balance">Čekám na výsledky biopsie</span>
          </Button>

          <Button
            asChild
            size="lg"
            className="h-20 w-full max-w-sm rounded-2xl bg-accent px-8 text-lg font-semibold text-accent-foreground shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-ring sm:h-24 sm:text-xl"
          >
            <Link href="/prihlaseni">
              <ClipboardCheck className="mr-3 h-7 w-7 shrink-0" />
              <span className="text-balance">Mám potvrzenou diagnózu</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
