import Link from "next/link";
import { Brain, Gauge, History, ScanLine, Upload, Sprout, BarChart3 } from "lucide-react";
import { LeafArt, btn, btn2 } from "../components/common/ui";
import InfoGrid from "../components/common/InfoGrid";
export default function Home() {
  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-10">
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-green-900 dark:text-green-50 sm:text-5xl">Smarter Plant Disease Detection with Explainable AI</h1>
          <p className="my-4 text-lg text-green-800 dark:text-green-200">Upload a leaf photo and see the prediction, the confidence, and the regions that influenced it.</p>
          <div className="flex flex-wrap gap-3"><Link href="/detect" className={btn}>Get started</Link><Link href="#features" className={btn2}>Explore features</Link></div>
        </div>
        <LeafArt className="h-72 w-full rounded-3xl shadow-lg md:h-96" />
      </section>
      <section id="features"><h2 className="mb-4 text-2xl font-bold">Features</h2>
        <InfoGrid items={[[ScanLine, "Disease classification", "Identify crop diseases from a single leaf image."], [Brain, "Grad-CAM explainability", "See which leaf regions drove the result."], [Gauge, "Confidence analysis", "Every result shows how sure the model is."], [History, "Prediction history", "Search and filter past analyses."], [BarChart3, "Crop analytics", "Track diseases and crops over time."], [Sprout, "Responsive dashboard", "Works on desktop, tablet and phone."]]} /></section>
      <section><h2 className="mb-4 text-2xl font-bold">How it works</h2>
        <InfoGrid items={[[Upload, "1. Upload", "Add a JPG or PNG leaf image."], [Brain, "2. Analyze", "The model predicts crop and disease."], [Gauge, "3. Review", "Check confidence and the Grad-CAM heatmap."]]} /></section>
      <section><h2 className="mb-4 text-2xl font-bold">Supported crops</h2>
        <div className="flex flex-wrap gap-3">{["Tomato", "Potato", "Apple", "Corn", "Grape", "Pepper"].map((c) => <span key={c} className="rounded-full bg-green-100 px-4 py-2 font-medium text-green-900">{c}</span>)}</div></section>
    </div>
  );
}   