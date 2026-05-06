import SymptomDetail from "../../../components/SymptomDetail";
import { getSymptom } from "../../../lib/symptoms";

export function generateStaticParams() {
  return [];
}

export function generateMetadata() {
  const s = getSymptom("hernia");
  return { title: `${s?.name} | 症状・施術 | ひだまり整骨院 正雀院` };
}

export default function Page() {
  const s = getSymptom("hernia");
  if (!s) return null;
  return <SymptomDetail symptom={s} />;
}
