import { BarChart3, Brain, Gauge, History, ScanLine, Sprout } from "lucide-react";
import InfoGrid from "../../components/common/InfoGrid";
import { H1 } from "../../components/common/ui";
export default function Features() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10"><H1>Features</H1>
      <InfoGrid items={[[ScanLine, "AI-powered disease classification", "Predicts crop and disease from a leaf image."], [Brain, "Grad-CAM explainability", "Heatmaps show what influenced each result."], [Gauge, "Confidence analysis", "Confidence scores help you judge each result."], [History, "Prediction history", "Search and filter every past analysis."], [BarChart3, "Crop analytics", "Charts for diseases, crops and activity."], [Sprout, "Responsive dashboard", "Layouts adapt to any screen size."]]} /></div>
  );
}