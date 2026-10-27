"use client";
import Link from "next/link";
import { useState } from "react";
import { Leaf, Menu, Moon, Sun, X } from "lucide-react";
import { useApp } from "../common/Providers";
const links = [["Features", "/features"], ["Explainable AI", "/explainability"], ["About", "/about"], ["Dashboard", "/dashboard"], ["Login", "/login"]];
export default function Navbar() {
  const { theme, setTheme } = useApp();
  const [open, setOpen] = useState(false);
  const flip = () => setTheme(theme === "dark" ? "light" : "dark");
  return (
    <header className="sticky top-0 z-40 border-b border-green-100 bg-white/90 backdrop-blur dark:border-green-900 dark:bg-green-950/90">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3" aria-label="Main">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-green-900 dark:text-green-50"><Leaf className="text-green-600" />AgriDetect AI</Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map(([l, h]) => <Link key={h} href={h} className="text-green-800 hover:text-green-600 dark:text-green-100">{l}</Link>)}
          <button onClick={flip} aria-label="Toggle theme" className="text-green-800 dark:text-green-100">{theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}</button>
        </div>
        <button className="text-green-900 md:hidden dark:text-green-50" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <div className="space-y-3 border-t border-green-100 px-4 py-3 md:hidden">
        {links.map(([l, h]) => <Link key={h} href={h} onClick={() => setOpen(false)} className="block text-green-800 dark:text-green-100">{l}</Link>)}
        <button onClick={flip} className="text-green-800 dark:text-green-100">Switch theme</button>
      </div>}
    </header>
  );
}