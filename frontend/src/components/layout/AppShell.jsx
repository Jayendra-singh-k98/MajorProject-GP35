"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Brain, History, LayoutDashboard, ScanLine, Settings } from "lucide-react";
const items = [["Dashboard", "/dashboard", LayoutDashboard], ["Detect", "/detect", ScanLine], ["History", "/history", History], ["Analytics", "/analytics", BarChart3], ["Explainability", "/explainability", Brain], ["Settings", "/settings", Settings]];
export default function AppShell({ children }) {
  const path = usePathname();
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 md:flex-row">
      <aside className="md:w-52 md:shrink-0">
        <nav aria-label="App" className="flex gap-2 overflow-x-auto md:flex-col">
          {items.map(([l, h, Icon]) => (
            <Link key={h} href={h} className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium ${path === h ? "bg-green-800 text-white" : "text-green-800 hover:bg-green-100 dark:text-green-100 dark:hover:bg-green-900"}`}><Icon size={18} />{l}</Link>
          ))}
        </nav>
      </aside>
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}