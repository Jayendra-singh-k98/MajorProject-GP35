import AppShell from "../../components/layout/AppShell";
import HeatmapTabs from "../../components/results/HeatmapTabs";
import { Card, DemoBadge, H1 } from "../../components/common/ui";
export default function Explainability() {
  return (
    <AppShell>
      <H1 badge={<DemoBadge text="Placeholder examples" />}>Explainable AI</H1>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card><h2 className="font-semibold">What is Grad-CAM?</h2><p className="mt-2 text-sm">Grad-CAM uses the gradients flowing into a model's last convolutional layer to build a heatmap of the image regions that most influenced a prediction.</p>
          <h2 className="mt-4 font-semibold">Reading the colors</h2><p className="mt-2 text-sm">Red and yellow mark regions with the strongest influence. Green and blue mark weak influence. Highlighted spots should line up with lesions or discoloration.</p>
          <h2 className="mt-4 font-semibold">Limitations</h2><ul className="mt-2 list-disc pl-5 text-sm"><li>A heatmap shows correlation, not proof of cause.</li><li>It can highlight background or lighting artifacts.</li><li>Low resolution makes it coarse.</li><li>High attention does not mean the prediction is correct.</li></ul></Card>
        <Card><HeatmapTabs src={null} /></Card>
      </div>
    </AppShell>
  );
}