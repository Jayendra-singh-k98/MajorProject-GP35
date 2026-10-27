// DEMO DATA ONLY.
export const diseaseDist = [
  { name: "Early Blight", value: 24 }, { name: "Late Blight", value: 18 }, { name: "Common Rust", value: 12 },
  { name: "Black Rot", value: 9 }, { name: "Bacterial Spot", value: 7 }, { name: "Healthy", value: 40 },
];
export const cropDist = [
  { name: "Tomato", value: 38 }, { name: "Potato", value: 22 }, { name: "Apple", value: 16 },
  { name: "Corn", value: 14 }, { name: "Grape", value: 10 }, { name: "Pepper", value: 8 },
];
export const confidenceDist = [
  { name: "<70%", value: 4 }, { name: "70-80", value: 11 }, { name: "80-90", value: 29 }, { name: "90-100", value: 66 },
];
export const activity = Array.from({ length: 30 }, (_, i) => ({ name: `D${i + 1}`, value: 2 + ((i * 7) % 9) }));