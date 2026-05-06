import SymptomDetail from "../../../components/SymptomDetail";
import { getSymptom } from "../../../lib/symptoms";

export function generateStaticParams() {
  return [];
}

export function generateMetadata() {
  const s = getSymptom("hiji");
  return { title: `${s?.name} | 症状・施術 | ひだまり整骨院 正雀院` };
}

export default function Page() {
  const s = getSymptom("hiji");
  if (!s) return null;
  return <SymptomDetail symptom={s} />;
}
