"use client";
import { useState } from "react";
import { Activity, Gauge, Bug, Sprout } from "lucide-react";
import AppShell from "../../components/layout/AppShell";
import { Card, DemoBadge, H1, Stat, input } from "../../components/common/ui";
import { BarSimple, DonutChart, LineSimple } from "../../components/charts/Charts";
import { activity, confidenceDist, cropDist, diseaseDist } from "../../data/mockAnalytics";
export default function Analytics() {
  const [days, setDays] = useState(30);
  const act = activity.slice(-days);
  return (
    <AppShell>
      <H1 badge={<DemoBadge />}>Analytics</H1>
      <select className={`${input} mb-4 max-w-xs`} aria-label="Date range" value={days} onChange={(e) => setDays(+e.target.value)}><option value={7}>Last 7 days</option><option value={14}>Last 14 days</option><option value={30}>Last 30 days</option></select>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Stat icon={Activity} label="Analyses" value={act.reduce((a, b) => a + b.value, 0)} /><Stat icon={Bug} label="Disease types" value={5} /><Stat icon={Sprout} label="Crops" value={6} /><Stat icon={Gauge} label="Avg confidence" value="89%" />
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Card><h2 className="font-semibold">Disease distribution</h2><DonutChart data={diseaseDist} /></Card>
        <Card><h2 className="font-semibold">Crop distribution</h2><BarSimple data={cropDist} /></Card>
        <Card><h2 className="font-semibold">Prediction activity</h2><LineSimple data={act} /></Card>
        <Card><h2 className="font-semibold">Confidence distribution</h2><BarSimple data={confidenceDist} /></Card>
      </div>
    </AppShell>
  );
}