"use client";
import { useState } from "react";
import { LeafArt } from "../common/ui";
const blobs = "radial-gradient(circle at 40% 45%, rgba(220,38,38,.9), rgba(250,204,21,.7) 25%, rgba(34,197,94,.4) 45%, transparent 65%)";
export default function HeatmapTabs({ src }) {
  const [tab, setTab] = useState("overlay");
  const view = (t, cls) => (
    <div className={`relative overflow-hidden rounded-xl ${cls}`}>
      {t !== "heatmap" && <LeafArt src={src} className="h-full w-full" />}
      {t !== "original" && <div className="absolute inset-0" style={{ background: t === "heatmap" ? `${blobs}, #1e3a8a` : blobs, opacity: t === "overlay" ? 0.6 : 1 }} />}
    </div>
  );
  return (
    <div>
      <div className="mb-3 flex gap-2" role="tablist">
        {["original", "heatmap", "overlay"].map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)} className={`rounded-lg px-3 py-1.5 text-sm font-medium capitalize ${tab === t ? "bg-green-800 text-white" : "bg-green-100 text-green-900"}`}>{t}</button>
        ))}
      </div>
      {view(tab, "h-72")}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div><p className="mb-1 text-sm text-green-700">Original</p>{view("original", "h-40")}</div>
        <div><p className="mb-1 text-sm text-green-700">Heatmap (placeholder)</p>{view("heatmap", "h-40")}</div>
      </div>
    </div>
  );
}