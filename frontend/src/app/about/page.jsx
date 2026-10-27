import { Card, H1 } from "../../components/common/ui";
const team = [["Jayendra Singh", "Data Engineer & Research Lead"], ["Shaurya Jain", "AI/ML Engineer"], ["Avni Tyagi", "Backend Developer & Deployment Lead"], ["Darshika Tyagi", "Frontend Developer & Deployment Lead"]];
const sections = [["Objective", "Build an explainable, trustworthy web dashboard for real-time agricultural disease detection."], ["Problem statement", "Farmers need quick disease identification, and black-box models are hard to trust without explanations."], ["Methodology", "Train an image classifier on labelled leaf images and explain predictions with Grad-CAM."], ["Technology stack", "Next.js, React, Tailwind CSS, Recharts, Lucide React (frontend); model and backend to follow."], ["Workflow", "Upload image, preprocess, classify, generate Grad-CAM, show result with confidence."]];
export default function About() {
  return (
    <div className="mx-auto max-w-5xl space-y-4 px-4 py-10"><H1>About AgriDetect AI</H1>
      {/* {sections.map(([t, d]) => <Card key={t}><h2 className="font-semibold">{t}</h2><p className="text-sm">{d}</p></Card>)} */}
      {/* <h2 className="pt-4 text-xl font-bold">Team (Group RG35)</h2> */}
      {/* <div className="grid gap-4 sm:grid-cols-2">{team.map(([n, r]) => <Card key={n}><p className="font-semibold">{n}</p><p className="text-sm">{r}</p></Card>)}</div> */}
      {/* <Card><p className="text-sm">Supervisor: Dr. Monika, Assistant Professor (SG)<br />Jaypee University of Information Technology</p></Card> */}
    </div>
  );
}