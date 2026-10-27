import AppShell from "../../components/layout/AppShell";
import Uploader from "../../components/detection/Uploader";
import { H1 } from "../../components/common/ui";
export default function Detect() {
  return <AppShell><H1>Disease detection</H1><Uploader /></AppShell>;
}