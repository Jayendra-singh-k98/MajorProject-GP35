"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import AppShell from "../../../components/layout/AppShell";
import HeatmapTabs from "../../../components/results/HeatmapTabs";
import { Card, DemoBadge, H1, btn } from "../../../components/common/ui";
import { mockPredictions } from "../../../data/mockPredictions";
export default function Results() {
  const { id } = useParams();
  const [src, setSrc] = useState(null);
  useEffect(() => { try { setSrc(sessionStorage.getItem(id)); } catch {} }, [id]);
  const hash = [...id].reduce((a, c) => a + c.charCodeAt(0), 0);
  const p = mockPredictions.find((x) => x.id === id) || mockPredictions[hash % mockPredictions.length];
  return (
    <AppShell>
      <H1 badge={<DemoBadge text="Sample result - not a real AI prediction" />}>Detection result</H1>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card><HeatmapTabs src={src} /></Card>
        <div className="space-y-4">
          <Card>
            <p className="text-sm text-green-700">{p.crop}</p>
            <h2 className="text-2xl font-bold">{p.disease}</h2>
            <p className="mt-3 text-sm">Confidence: {p.confidence}%</p>
            <div className="mt-1 h-3 rounded-full bg-green-100" role="progressbar" aria-valuenow={p.confidence} aria-valuemin={0} aria-valuemax={100}><div className="h-3 rounded-full bg-green-700" style={{ width: `${p.confidence}%` }} /></div>
          </Card>
          <Card><h3 className="font-semibold">Model information</h3><p className="text-sm">Model: not connected yet (placeholder). Version: demo. Input: 224x224 RGB leaf image.</p></Card>
          <Card><h3 className="font-semibold">Explanation</h3><p className="text-sm">Warm regions in the heatmap would show where the model focused. This heatmap is a placeholder until Grad-CAM is integrated.</p></Card>
          <Link href="/detect" className={btn}>Analyze another image</Link>
        </div>
      </div>
    </AppShell>
  );
}