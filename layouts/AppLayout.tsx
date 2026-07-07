import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { navigationItems } from "@/lib/navigation";

export function AppLayout() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-20 border-b border-ink/10 bg-white/90 px-4 py-3 backdrop-blur lg:hidden">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-moss">Scratch Course</p>
                <h1 className="text-lg font-bold">神乎其技</h1>
              </div>
            </div>
            <nav className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    [
                      "shrink-0 rounded-md px-3 py-2 text-sm font-semibold transition",
                      isActive ? "bg-ink text-white" : "bg-paper text-ink/70"
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </header>
          <main className="px-4 py-5 sm:px-6 lg:px-10">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
