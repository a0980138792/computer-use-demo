import type { LucideIcon } from "lucide-react";

type DashboardCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function DashboardCard({ title, description, icon: Icon }: DashboardCardProps) {
  return (
    <section className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-gold/15 text-ink">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h2 className="text-base font-semibold">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-ink/65">{description}</p>
    </section>
  );
}
