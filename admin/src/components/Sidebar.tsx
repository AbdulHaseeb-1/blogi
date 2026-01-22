import { LayoutGrid, FileText, LibraryBig, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "./ui/utils";

const links = [
  { to: "/", label: "Overview", icon: LayoutGrid },
  { to: "/posts", label: "Posts", icon: FileText },
  { to: "/media", label: "Media", icon: LibraryBig },
  { to: "/settings", label: "Settings", icon: Settings }
];

export default function Sidebar() {
  return (
    <aside className="hidden w-64 flex-col gap-6 border-r border-slate-800 bg-panel p-6 lg:flex">
      <div className="text-xl font-semibold">Blogi Studio</div>
      <nav className="space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800",
                  isActive && "bg-slate-800 text-white"
                )
              }
              end={link.to === "/"}
            >
              <Icon size={18} />
              {link.label}
            </NavLink>
          );
        })}
      </nav>
      <div className="mt-auto rounded-2xl bg-slate-900 p-4 text-xs text-slate-400">
        <p className="font-medium text-slate-200">Production ready</p>
        <p>Swap storage + auth providers to deploy.</p>
      </div>
    </aside>
  );
}
