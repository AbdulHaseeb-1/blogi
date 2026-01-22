import { Bell, Search, Sparkles } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Topbar() {
  return (
    <header className="flex flex-col gap-4 border-b border-slate-800 bg-panel px-4 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
      <div>
        <p className="text-xs uppercase tracking-wide text-slate-400">Creative ops</p>
        <h1 className="text-xl font-semibold text-white">Editorial Control Center</h1>
      </div>
      <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-2.5 text-slate-500" size={16} />
          <Input className="pl-9" placeholder="Search posts, authors, tags" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Sparkles size={16} />
            Quick create
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full">
            <Bell size={16} />
          </Button>
        </div>
      </div>
    </header>
  );
}
