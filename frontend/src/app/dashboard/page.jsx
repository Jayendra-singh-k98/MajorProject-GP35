import Link from "next/link";
import { Activity, CheckCircle2, ScanLine, Bug } from "lucide-react";
import AppShell from "../../components/layout/AppShell";
import { Card, DemoBadge, H1, Stat, btn } from "../../components/common/ui";
import { DonutChart } from "../../components/charts/Charts";
import { diseaseDist } from "../../data/mockAnalytics";
import { isHealthy, mockPredictions as P } from "../../data/mockPredictions";
import { fmtDate } from "../../lib/utils";
export default function Dashboard() {
  const healthy = P.filter(isHealthy).length;
  return (
    <AppShell>
      <H1 badge={<DemoBadge />}>Welcome back</H1>
      <div className="grid gap-4 sm:grid-cols-3">
        <Stat icon={Activity} label="Total analyses" value={P.length} />
        <Stat icon={CheckCircle2} label="Healthy" value={healthy} />
        <Stat icon={Bug} label="Diseases detected" value={P.length - healthy} />
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Card><h2 className="mb-2 font-semibold">Disease distribution</h2><DonutChart data={diseaseDist} /></Card>
        <Card>
          <h2 className="mb-2 font-semibold">Recent predictions</h2>
          <ul className="divide-y divide-green-100">{P.slice(0, 5).map((p) => <li key={p.id} className="flex justify-between py-2 text-sm"><Link href={`/results/${p.id}`} className="font-medium underline">{p.crop} - {p.disease}</Link><span>{p.confidence}% | {fmtDate(p.date)}</span></li>)}</ul>
          <Link href="/detect" className={`${btn} mt-4`}><ScanLine size={18} />Detect a disease</Link>
        </Card>
      </div>
    </AppShell>
  );
}