import Link from "next/link";
import { btn } from "../components/common/ui";
export default function NotFound() {
  return <div className="px-4 py-24 text-center"><h1 className="text-5xl font-bold text-green-900 dark:text-green-50">404</h1><p className="my-4">This page could not be found.</p><Link href="/" className={btn}>Return home</Link></div>;
}