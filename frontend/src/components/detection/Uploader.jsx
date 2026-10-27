"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, RefreshCw, Trash2, UploadCloud } from "lucide-react";
import { Card, LeafArt, btn, btn2 } from "../common/ui";
import { useApp } from "../common/Providers";
import { validateImage } from "../../lib/utils";
import { mockPredictions } from "../../data/mockPredictions";
export default function Uploader() {
  const [img, setImg] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [drag, setDrag] = useState(false);
  const ref = useRef(null);
  const router = useRouter();
  const { toast } = useApp();
  const take = (f) => {
    if (!f) return;
    const err = validateImage(f);
    setError(err || "");
    if (err) return;
    const r = new FileReader();
    r.onload = () => setImg(r.result);
    r.readAsDataURL(f);
  };
  const analyze = () => {
    setLoading(true);
    setTimeout(() => {
      const id = "u-" + Date.now();
      try { sessionStorage.setItem(id, img); } catch {}
      toast("Demo analysis complete (sample result, not a real prediction)");
      router.push(`/results/${id}`);
    }, 1200);
  };
  return (
    <div className="space-y-6">
      <Card>
        {img ? (
          <div className="space-y-4">
            <img src={img} alt="Selected leaf preview" className="mx-auto max-h-80 rounded-xl" />
            <div className="flex flex-wrap justify-center gap-3">
              <button className={btn} disabled={loading} onClick={analyze}>{loading && <Loader2 className="animate-spin" size={18} />}Analyze image</button>
              <button className={btn2} onClick={() => ref.current.click()}><RefreshCw size={16} />Replace image</button>
              <button className={btn2} onClick={() => setImg(null)}><Trash2 size={16} />Remove image</button>
            </div>
          </div>
        ) : (
          <div role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && ref.current.click()} onClick={() => ref.current.click()}
            onDragOver={(e) => { e.preventDefault(); setDrag(true); }} onDragLeave={() => setDrag(false)}
            onDrop={(e) => { e.preventDefault(); setDrag(false); take(e.dataTransfer.files[0]); }}
            className={`cursor-pointer rounded-xl border-2 border-dashed p-10 text-center ${drag ? "border-green-600 bg-green-50 dark:bg-green-900" : "border-green-300"}`}>
            <UploadCloud className="mx-auto text-green-700" size={44} />
            <p className="mt-2 font-semibold text-green-900 dark:text-green-50">Drag a leaf image here, or click to browse</p>
            <p className="text-sm text-green-700 dark:text-green-300">JPG, JPEG or PNG, up to 5 MB. Use one well-lit leaf on a plain background.</p>
          </div>
        )}
        <input ref={ref} type="file" accept=".jpg,.jpeg,.png,image/jpeg,image/png" className="hidden" onChange={(e) => { take(e.target.files[0]); e.target.value = ""; }} />
        {error && <p role="alert" className="mt-3 text-sm font-medium text-red-600">{error}</p>}
      </Card>
      <Card>
        <h2 className="mb-3 font-semibold text-green-900 dark:text-green-50">Try a sample leaf</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {mockPredictions.slice(0, 4).map((p) => (
            <button key={p.id} onClick={() => router.push(`/results/${p.id}`)} className="overflow-hidden rounded-xl border border-green-100 text-left hover:shadow">
              <LeafArt className="h-24 w-full" /><p className="p-2 text-sm text-green-900 dark:text-green-50">{p.crop}</p>
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}