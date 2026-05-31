"use client"

import { Phone, ExternalLink } from "lucide-react"

const helpContacts = [
  {
    id: 1,
    name: "Linka pomoci Ligy proti rakovině",
    detail: "224 920 935",
    href: "tel:224920935",
  },
  {
    id: 2,
    name: "Amelie, z. s.",
    detail: "psychosociální pomoc pro onkologické pacienty",
    href: "https://www.amelie-zs.cz",
    external: true,
  },
  {
    id: 3,
    name: "Váš praktický lékař",
    detail: "může doporučit psychologa ve vašem okolí",
  },
]

export function HelpBanner() {
  return (
    <section 
      id="help"
      className="w-full bg-card py-16 sm:py-20"
      aria-labelledby="help-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent sm:h-16 sm:w-16">
            <Phone className="h-7 w-7 text-accent-foreground sm:h-8 sm:w-8" strokeWidth={1.5} />
          </div>
          <h2 
            id="help-heading"
            className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl"
          >
            Kde hledat další pomoc
          </h2>
        </div>

        <div className="space-y-6">
          {helpContacts.map((contact) => (
            <div 
              key={contact.id}
              className="rounded-2xl bg-primary p-6 sm:p-8"
            >
              {contact.href ? (
                <a
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noopener noreferrer" : undefined}
                  className="flex flex-col gap-2 text-primary-foreground transition-opacity hover:opacity-80 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <span className="text-xl font-bold sm:text-2xl">
                    {contact.name}
                  </span>
                  <span className="flex items-center gap-2 text-lg font-medium sm:text-xl">
                    {contact.detail}
                    {contact.external && (
                      <ExternalLink className="h-5 w-5" strokeWidth={1.5} />
                    )}
                  </span>
                </a>
              ) : (
                <div className="flex flex-col gap-2 text-primary-foreground sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <span className="text-xl font-bold sm:text-2xl">
                    {contact.name}
                  </span>
                  <span className="text-lg font-medium opacity-90 sm:text-xl">
                    {contact.detail}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
