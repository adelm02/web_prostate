import Link from "next/link"
import { LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="hero" className="w-full bg-gradient-to-b from-card to-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Průvodce karcinomu prostaty.
          <br />
          <span className="text-accent">Co mě nyní čeká? Jsme v  tom s Vámi.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
          Jste v péči onkologie. Jsme tu, abychom vás provedli dalšími kroky a možnostmi léčby.
        </p>

        <div className="mt-12 flex items-center justify-center">
          <Button
            asChild
            size="lg"
            className="h-16 w-full max-w-xs rounded-2xl bg-primary px-6 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-ring sm:h-18 sm:text-lg"
          >
            <Link href="/prihlaseni">
              <LogIn className="mr-2 h-5 w-5 shrink-0" />
              <span className="text-balance">Vstoupit do mé léčby</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
