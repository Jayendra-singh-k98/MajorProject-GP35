"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { Card, btn, input } from "./ui";
import { useApp } from "./Providers";
export default function AuthForm({ signup }) {
  const [v, setV] = useState({ name: "", email: "", password: "", confirm: "", terms: false, remember: false });
  const [show, setShow] = useState(false);
  const [err, setErr] = useState({});
  const router = useRouter();
  const { toast } = useApp();
  const set = (k) => (e) => setV({ ...v, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const x = {};
    if (signup && !v.name.trim()) x.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) x.email = "Enter a valid email address.";
    if (v.password.length < 8) x.password = "Use at least 8 characters.";
    if (signup && v.confirm !== v.password) x.confirm = "Passwords do not match.";
    if (signup && !v.terms) x.terms = "Accept the terms to continue.";
    setErr(x);
    if (Object.keys(x).length) return;
    toast(signup ? "Demo account created (no real account is stored)" : "Demo login successful (no authentication service)");
    router.push("/dashboard");
  };
  const field = (k, label, type = "text") => (
    <div>
      <label htmlFor={k} className="mb-1 block text-sm font-medium text-green-900 dark:text-green-50">{label}</label>
      <div className="relative">
        <input id={k} type={type.includes("password") && show ? "text" : type} value={v[k]} onChange={set(k)} className={input} aria-invalid={!!err[k]} />
        {type === "password" && k === "password" && <button type="button" onClick={() => setShow(!show)} aria-label={show ? "Hide password" : "Show password"} className="absolute right-3 top-2.5 text-green-700">{show ? <EyeOff size={18} /> : <Eye size={18} />}</button>}
      </div>
      {err[k] && <p className="mt-1 text-sm text-red-600">{err[k]}</p>}
    </div>
  );
  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <Card>
        <h1 className="mb-4 text-2xl font-bold text-green-900 dark:text-green-50">{signup ? "Create your account" : "Welcome back"}</h1>
        <form onSubmit={submit} className="space-y-4" noValidate>
          {signup && field("name", "Full name")}
          {field("email", "Email", "email")}
          {field("password", "Password", "password")}
          {signup && field("confirm", "Confirm password", "password")}
          {signup ? (
            <div><label className="flex gap-2 text-sm text-green-900 dark:text-green-50"><input type="checkbox" checked={v.terms} onChange={set("terms")} />I accept the terms and conditions</label>{err.terms && <p className="text-sm text-red-600">{err.terms}</p>}</div>
          ) : (
            <div className="flex justify-between text-sm text-green-900 dark:text-green-50"><label className="flex gap-2"><input type="checkbox" checked={v.remember} onChange={set("remember")} />Remember me</label><Link href="/login" onClick={() => toast("Password reset is not available in the demo")} className="text-green-700 underline">Forgot password?</Link></div>
          )}
          <button className={`${btn} w-full`}>{signup ? "Create account" : "Log in"}</button>
        </form>
        <p className="mt-4 text-center text-sm text-green-800 dark:text-green-100">{signup ? "Already registered? " : "New here? "}<Link className="font-semibold underline" href={signup ? "/login" : "/signup"}>{signup ? "Log in" : "Sign up"}</Link></p>
      </Card>
    </div>
  );
}