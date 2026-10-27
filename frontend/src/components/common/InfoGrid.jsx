import { Card } from "./ui";
export default function InfoGrid({ items }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(([Icon, title, text]) => (
        <Card key={title}><Icon className="mb-3 text-green-700" size={28} /><h3 className="font-semibold text-green-900 dark:text-green-50">{title}</h3><p className="mt-1 text-sm text-green-800 dark:text-green-200">{text}</p></Card>
      ))}
    </div>
  );
}