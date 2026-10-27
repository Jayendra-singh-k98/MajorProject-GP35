// DEMO DATA ONLY - not real model output.
export const mockPredictions = [
  { id: "demo-1", crop: "Tomato", disease: "Early Blight", confidence: 94.2, date: "2026-10-20" },
  { id: "demo-2", crop: "Potato", disease: "Late Blight", confidence: 88.7, date: "2026-10-19" },
  { id: "demo-3", crop: "Apple", disease: "Healthy", confidence: 97.5, date: "2026-10-18" },
  { id: "demo-4", crop: "Corn", disease: "Common Rust", confidence: 82.1, date: "2026-10-16" },
  { id: "demo-5", crop: "Grape", disease: "Black Rot", confidence: 91.3, date: "2026-10-14" },
  { id: "demo-6", crop: "Tomato", disease: "Healthy", confidence: 96.0, date: "2026-10-12" },
  { id: "demo-7", crop: "Pepper", disease: "Bacterial Spot", confidence: 79.4, date: "2026-10-10" },
];
export const crops = ["Tomato", "Potato", "Apple", "Corn", "Grape", "Pepper"];
export const isHealthy = (p) => p.disease === "Healthy";