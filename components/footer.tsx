export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-base font-bold text-primary-foreground">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-foreground">ALT-SHIFT-HEAL</span>
              <span className="text-sm text-muted-foreground">Průvodce</span>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground sm:text-right">
            <p>
              Tento web poskytuje pouze vzdělávací informace a nenahrazuje
              odbornou lékařskou péči.
            </p>
            <p className="mt-2">
              © {new Date().getFullYear()} ALT-SHIFT-HEAL. Všechna práva vyhrazena.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
