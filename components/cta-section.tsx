import { Apple, Play, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section
      id="app"
      className="w-full bg-accent py-16 sm:py-20"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center justify-center gap-2 rounded-full bg-accent-foreground/10 px-4 py-2">
          <Shield className="h-5 w-5 text-accent-foreground" />
          <span className="text-sm font-semibold text-accent-foreground">
            Zabezpečená aplikace
          </span>
        </div>

        <h2
          id="cta-heading"
          className="text-balance text-2xl font-bold text-accent-foreground sm:text-3xl lg:text-4xl"
        >
          Máte už stanovený léčebný plán od lékaře?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-accent-foreground/80 sm:text-xl">
          Stáhněte si naši zabezpečenou aplikaci pro sledování léčby, komunikaci s
          lékaři a správu vašeho zdraví na jednom místě.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Button
            size="lg"
            variant="secondary"
            className="h-16 w-full max-w-xs rounded-2xl bg-card px-6 text-lg font-semibold text-foreground shadow-lg transition-all hover:bg-card/90 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-card sm:h-18 sm:w-auto"
          >
            <Apple className="mr-3 h-7 w-7" />
            <div className="flex flex-col items-start">
              <span className="text-xs font-normal text-muted-foreground">
                Stáhnout na
              </span>
              <span>App Store</span>
            </div>
          </Button>

          <Button
            size="lg"
            variant="secondary"
            className="h-16 w-full max-w-xs rounded-2xl bg-card px-6 text-lg font-semibold text-foreground shadow-lg transition-all hover:bg-card/90 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-card sm:h-18 sm:w-auto"
          >
            <Play className="mr-3 h-7 w-7" />
            <div className="flex flex-col items-start">
              <span className="text-xs font-normal text-muted-foreground">
                Stáhnout na
              </span>
              <span>Google Play</span>
            </div>
          </Button>
        </div>
      </div>
    </section>
  )
}
