import { Leaf } from "lucide-react";
export const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl border border-green-100 bg-white p-5 shadow-sm dark:border-green-900 dark:bg-green-950 ${className}`}>{children}</div>
);
export const DemoBadge = ({ text = "Demo data" }) => (
  <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">{text}</span>
);
export const Stat = ({ icon: Icon, label, value }) => (
  <Card className="flex items-center gap-4">
    <div className="rounded-xl bg-green-100 p-3 text-green-800"><Icon size={22} /></div>
    <div><p className="text-sm text-green-700 dark:text-green-300">{label}</p><p className="text-2xl font-bold text-green-900 dark:text-green-50">{value}</p></div>
  </Card>
);
export const LeafArt = ({ src, className = "" }) =>
  src ? <img src={src} alt="Uploaded leaf" className={`object-cover ${className}`} />
  : <div className={`flex items-center justify-center bg-linear-to-br from-green-300 to-green-700 text-white ${className}`} role="img" aria-label="Sample leaf placeholder"><Leaf size={40} /></div>;
export const btn = "inline-flex items-center justify-center gap-2 rounded-xl bg-green-800 px-5 py-2.5 font-medium text-white transition hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:opacity-50";
export const btn2 = "inline-flex items-center justify-center gap-2 rounded-xl border border-green-800 px-5 py-2.5 font-medium text-green-800 transition hover:bg-green-50 dark:text-green-100 dark:hover:bg-green-900";
export const input = "w-full rounded-xl border border-green-200 bg-white px-3 py-2 text-green-900 focus:outline-2 focus:outline-green-600 dark:bg-green-950 dark:text-green-50";
export const H1 = ({ children, badge }) => (
  <div className="mb-6 flex flex-wrap items-center gap-3"><h1 className="text-2xl font-bold text-green-900 dark:text-green-50 sm:text-3xl">{children}</h1>{badge}</div>
);