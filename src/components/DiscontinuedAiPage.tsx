import { discontinuedAiItems, discontinuedAiMeta } from '../data/discontinuedAi';

const statusLabel: Record<string, string> = {
  scheduled_shutdown: 'Scheduled shutdown',
  service_retired: 'Service retired',
  offline: 'Offline',
  product_wound_down: 'Product wound down',
  acquired_and_wound_down: 'Acquired + wound down',
  defunct_company: 'Defunct company',
};

export default function DiscontinuedAiPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      <main className="max-w-[1100px] mx-auto px-4 sm:px-5 py-8 sm:py-10 space-y-6">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">Discontinued AI List</h1>
            <p className="text-sm text-on-surface-variant mt-2">
              Generated: {discontinuedAiMeta.generatedAt} ({discontinuedAiMeta.timezone}) · Scope: {discontinuedAiMeta.scopeWindow.start} to {discontinuedAiMeta.scopeWindow.end}
            </p>
          </div>
          <a
            href="/"
            className="inline-flex items-center rounded-lg bg-primary text-on-primary px-4 py-2 text-sm font-semibold hover:opacity-90"
          >
            Back to main page
          </a>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {discontinuedAiItems.map((item) => (
            <article
              key={item.platformName}
              className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold leading-tight">{item.platformName}</h2>
                <span className="shrink-0 rounded-full bg-primary/10 text-primary px-2 py-1 text-[11px] font-semibold uppercase tracking-wide">
                  {statusLabel[item.status] || item.status}
                </span>
              </div>
              <p className="text-sm text-on-surface-variant mt-2">{item.parentCompany}</p>
              <p className="text-sm mt-3 leading-relaxed">{item.summary}</p>
              <p className="text-xs text-on-surface-variant mt-3 leading-relaxed">
                <strong>Reason:</strong> {item.reasonDiscontinued}
              </p>
              <div className="mt-3 text-xs text-on-surface-variant space-y-1">
                {Object.entries(item.datesActive).map(([label, value]) => (
                  <p key={label}>
                    <strong>{label}:</strong> {value}
                  </p>
                ))}
              </div>
              {item.relevantUrls[0] && (
                <a
                  href={item.relevantUrls[0]}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex mt-4 text-sm font-semibold text-primary hover:underline"
                >
                  Source
                </a>
              )}
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
