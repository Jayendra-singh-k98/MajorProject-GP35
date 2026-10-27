"use client";
import { useState } from "react";
import AppShell from "../../components/layout/AppShell";
import { Card, H1, btn, input } from "../../components/common/ui";
import { useApp } from "../../components/common/Providers";
export default function Settings() {
  const { theme, setTheme, toast } = useApp();
  const [compact, setCompact] = useState(false);
  return (
    <AppShell>
      <H1>Settings</H1>
      <div className="space-y-4">
        <Card><h2 className="mb-3 font-semibold">Profile (demo)</h2><div className="grid gap-3 sm:grid-cols-2"><input className={input} placeholder="Full name" aria-label="Full name" /><input className={input} placeholder="Email" aria-label="Email" /></div><button className={`${btn} mt-3`} onClick={() => toast("Profile saved locally (demo)")}>Save changes</button></Card>
        <Card><h2 className="mb-3 font-semibold">Interface</h2>
          <label className="flex items-center gap-2"><input type="checkbox" checked={theme === "dark"} onChange={() => setTheme(theme === "dark" ? "light" : "dark")} />Dark theme</label>
          <label className="mt-2 flex items-center gap-2"><input type="checkbox" checked={compact} onChange={() => setCompact(!compact)} />Compact tables</label></Card>
        <Card><h2 className="font-semibold">Application</h2><p className="text-sm">AgriDetect AI v0.1 (frontend demo). Predictions and analytics are sample data. Group RG35, JUIT.</p></Card>
      </div>
    </AppShell>
  );
}