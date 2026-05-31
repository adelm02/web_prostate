"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const glossaryItems = [
  {
    id: "psa",
    question: "Co je to PSA?",
    answer:
      "PSA (prostatický specifický antigen) je bílkovina, kterou produkuje prostata. Zvýšená hladina v krvi může naznačovat různé problémy prostaty – nejen rakovinu, ale také nezhoubné zvětšení prostaty nebo zánět. Jeden zvýšený výsledek tedy neznamená automaticky rakovinu. Váš lékař bude sledovat změny hladiny PSA v čase a rozhodne o dalších vyšetřeních.",
  },
  {
    id: "biopsie",
    question: "Jak probíhá biopsie?",
    answer:
      "Biopsie prostaty je krátký ambulantní výkon, který trvá přibližně 15-20 minut. Lékař pomocí tenké jehly a ultrazvuku odebere několik malých vzorků tkáně prostaty. Výkon se provádí v lokální anestezii, takže bolest je minimální – většina mužů popisuje pouze mírný tlak. Po výkonu můžete několik dní pozorovat krev v moči nebo spermatu, což je normální. Výsledky jsou obvykle k dispozici do 7-14 dnů.",
  },
  {
    id: "gleason",
    question: "Co znamená Gleasonovo skóre?",
    answer:
      "Gleasonovo skóre je systém, který patologové používají k popisu toho, jak agresivní může být rakovina prostaty. Skóre se pohybuje od 6 do 10. Nižší skóre (6) znamená méně agresivní nádor, který roste pomalu. Vyšší skóre (8-10) značí agresivnější formu. Gleasonovo skóre 7 je uprostřed a záleží na konkrétním složení. Toto číslo pomáhá vašemu lékaři naplánovat nejlepší léčbu právě pro vás.",
  },
]

export function GlossarySection() {
  return (
    <section id="glossary" className="w-full bg-card py-16 sm:py-20" aria-labelledby="glossary-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2
          id="glossary-heading"
          className="mb-4 text-center text-2xl font-bold text-foreground sm:text-3xl"
        >
          Lékařský slovníček lidskou řečí
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-lg text-muted-foreground">
          Vysvětlení základních pojmů, které uslyšíte od lékaře
        </p>

        <Accordion type="single" collapsible className="space-y-4 pb-4">
          {glossaryItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="rounded-2xl border-2 border-border bg-background px-6 transition-colors data-[state=open]:border-primary data-[state=open]:bg-primary/5"
            >
              <AccordionTrigger className="py-6 text-left text-xl font-semibold text-foreground hover:no-underline focus-visible:ring-2 focus-visible:ring-ring sm:text-2xl [&[data-state=open]>svg]:text-primary [&>svg]:h-7 [&>svg]:w-7 [&>svg]:text-muted-foreground">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-lg leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
