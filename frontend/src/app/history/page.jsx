"use client";
import Link from "next/link";
import { useState } from "react";
import AppShell from "../../components/layout/AppShell";
import { Card, DemoBadge, H1, LeafArt, input } from "../../components/common/ui";
import { crops, mockPredictions } from "../../data/mockPredictions";
import { fmtDate } from "../../lib/utils";
export default function History() {
  const [q, setQ] = useState("");
  const [crop, setCrop] = useState("");
  const [dis, setDis] = useState("");
  const diseases = [...new Set(mockPredictions.map((p) => p.disease))];
  const rows = mockPredictions.filter((p) => (!crop || p.crop === crop) && (!dis || p.disease === dis) && `${p.crop} ${p.disease}`.toLowerCase().includes(q.toLowerCase()));
  return (
    <AppShell>
      <H1 badge={<DemoBadge />}>Prediction history</H1>
      <div className="mb-4 grid gap-3 sm:grid-cols-3">
        <input className={input} placeholder="Search crop or disease" aria-label="Search" value={q} onChange={(e) => setQ(e.target.value)} />
        <select className={input} aria-label="Crop filter" value={crop} onChange={(e) => setCrop(e.target.value)}><option value="">All crops</option>{crops.map((c) => <option key={c}>{c}</option>)}</select>
        <select className={input} aria-label="Disease filter" value={dis} onChange={(e) => setDis(e.target.value)}><option value="">All diseases</option>{diseases.map((c) => <option key={c}>{c}</option>)}</select>
      </div>
      <Card className="overflow-x-auto">
        {rows.length === 0 ? <p className="py-8 text-center">No predictions match. Clear the filters or analyze a new image.</p> : (
          <table className="w-full text-left text-sm"><thead><tr className="text-green-700"><th className="p-2">Image</th><th>Crop</th><th>Disease</th><th>Confidence</th><th>Date</th><th /></tr></thead>
            <tbody>{rows.map((p) => <tr key={p.id} className="border-t border-green-100"><td className="p-2"><LeafArt className="h-10 w-10 rounded-lg" /></td><td>{p.crop}</td><td>{p.disease}</td><td>{p.confidence}%</td><td>{fmtDate(p.date)}</td><td><Link href={`/results/${p.id}`} className="font-medium underline">View details</Link></td></tr>)}</tbody></table>
        )}
      </Card>
    </AppShell>
  );
}