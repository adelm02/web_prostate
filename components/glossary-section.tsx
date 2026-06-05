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
      "PSA (prostatický specifický antigen) je bílkovina, kterou produkuje prostata. Její hladina v krvi se používá ke sledování účinnosti léčby. Po zahájení léčby by měla hladina PSA klesat, což je dobrý znak. Pravidelné kontroly PSA jsou důležitou součástí sledování vašeho zdravotního stavu během i po léčbě.",
  },
  {
    id: "karcinom",
    question: "Základní informace o karcinomu prostaty",
    answer:
      "Karcinom prostaty je nejčastější zhoubný nádor u mužů v České republice. Většina případů je diagnostikována u mužů nad 65 let. Onemocnění se dělí do stadií podle rozsahu – od lokalizovaného (omezeno na prostatu) po pokročilé (rozšířeno do jiných částí těla). Stádium ovlivňuje volbu léčby. Moderní léčba dosahuje velmi dobrých výsledků, zejména při včasném záchytu.",
  },
  {
    id: "gleason",
    question: "Co znamená Gleasonovo skóre?",
    answer:
      "Gleasonovo skóre je systém, který patologové používají k popisu toho, jak agresivní může být rakovina prostaty. Skóre se pohybuje od 6 do 10. Nižší skóre (6) znamená méně agresivní nádor, který roste pomalu. Vyšší skóre (8-10) značí agresivnější formu. Gleasonovo skóre 7 je uprostřed a záleží na konkrétním složení. Toto číslo pomáhá vašemu lékaři naplánovat nejlepší léčbu právě pro vás.",
  },
  {
    id: "stadia",
    question: "Co znamenají stádia onemocnění?",
    answer:
      "Stádia karcinomu prostaty popisují rozsah onemocnění. Stadium I a II znamená, že nádor je lokalizovaný pouze v prostatě. Stadium III značí, že nádor prorůstá přes pouzdro prostaty. Stadium IV znamená, že se nádor rozšířil do lymfatických uzlin nebo jiných orgánů (metastázy). Čím nižší stadium, tím více možností léčby. I pokročilá stadia jsou dnes dobře léčitelná.",
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
          Vzdělávací sekce
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-lg text-muted-foreground">
          Základní pojmy a informace o karcinomu prostaty srozumitelně
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
