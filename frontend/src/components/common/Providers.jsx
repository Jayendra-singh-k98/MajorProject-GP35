"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
const Ctx = createContext(null);
export const useApp = () => useContext(Ctx);
export default function Providers({ children }) {
  const [theme, setTheme] = useState("light");
  const [toasts, setToasts] = useState([]);
  useEffect(() => { setTheme(localStorage.getItem("theme") || "light"); }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toast = useCallback((msg) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, msg }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3000);
  }, []);
  return (
    <Ctx.Provider value={{ theme, setTheme, toast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 space-y-2" role="status" aria-live="polite">
        {toasts.map((t) => <div key={t.id} className="rounded-xl bg-green-800 px-4 py-2 text-sm text-white shadow-lg">{t.msg}</div>)}
      </div>
    </Ctx.Provider>
  );
}