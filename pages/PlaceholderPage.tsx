type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="mx-auto max-w-5xl">
      <header className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-moss">Module</p>
        <h1 className="mt-3 text-3xl font-bold">{title}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/65">{description}</p>
      </header>
      <section className="rounded-lg border border-dashed border-ink/20 bg-white p-8">
        <p className="text-sm text-ink/60">This module is ready for implementation.</p>
      </section>
    </div>
  );
}
