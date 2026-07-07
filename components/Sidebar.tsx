import { NavLink } from "react-router-dom";
import { navigationItems } from "@/lib/navigation";

export function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-ink/10 bg-white/80 px-4 py-5 shadow-sm lg:block">
      <div className="mb-8 px-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-moss">Scratch Course</p>
        <h1 className="mt-2 text-2xl font-bold">神乎其技</h1>
      </div>
      <nav className="space-y-1">
        {navigationItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              [
                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition",
                isActive ? "bg-ink text-white shadow-sm" : "text-ink/70 hover:bg-ink/5 hover:text-ink"
              ].join(" ")
            }
          >
            <item.icon className="h-4 w-4" aria-hidden="true" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
