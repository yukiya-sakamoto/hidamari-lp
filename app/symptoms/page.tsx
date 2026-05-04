import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { SYMPTOMS } from "../../lib/symptoms";

export const metadata = { title: "症状・施術メニュー | ひだまり整骨院 正雀院" };

export default function SymptomsPage() {
  return (
    <>
      <Header />
      <PageHero
        label="SYMPTOMS & TREATMENT"
        title="症状・施術メニュー"
        breadcrumb={[{ label: "ホーム", href: "/" }, { label: "症状・施術", href: "/symptoms/" }]}
      />

      <main style={{ backgroundColor: "#FDFAF6", padding: "80px 28px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontSize: 15, color: "#4A4A4A", lineHeight: 2.0, marginBottom: 48, maxWidth: 640 }}>
            ひだまり整骨院 正雀院では、交通事故・肩こり・腰痛から骨盤矯正・スポーツ障害まで幅広い症状に対応しています。各症状のページで詳しい治療内容と患者様の声をご覧いただけます。
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="grid-3">
            {SYMPTOMS.map(s => (
              <Link key={s.slug} href={`/symptoms/${s.slug}/`}
                style={{ backgroundColor: "#fff", border: "1px solid #EDE0CC", borderRadius: 10, padding: "28px 22px", textDecoration: "none", display: "block" }}>
                <div style={{ width: 24, height: 3, backgroundColor: "#05AF4B", borderRadius: 2, marginBottom: 14 }} />
                <div style={{ fontSize: 16, fontWeight: 700, color: "#2D2D2D", marginBottom: 8 }}>{s.name}</div>
                <div style={{ fontSize: 14, color: "#4A4A4A", lineHeight: 1.8, marginBottom: 16 }}>{s.desc}</div>
                <div style={{ fontSize: 13, color: "#D96B0B", fontWeight: 700 }}>詳しく見る →</div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 56, backgroundColor: "#EAF7F1", border: "1px solid #A8E0C4", borderRadius: 10, padding: "32px 36px" }}>
            <div style={{ fontSize: 13, color: "#05AF4B", fontWeight: 700, letterSpacing: "0.12em", marginBottom: 12 }}>お問い合わせ</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#2D2D2D", marginBottom: 8 }}>「こんな症状はみてもらえる？」お気軽にご相談ください</div>
            <div style={{ fontSize: 13, color: "#4A4A4A", marginBottom: 20, lineHeight: 1.8 }}>掲載以外の症状でもお気軽にご来院ください。予約不要・当日来院OK です。</div>
            <a href="tel:0663193339" style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#D96B0B", color: "#fff", padding: "13px 28px", borderRadius: 8, textDecoration: "none", fontSize: 16, fontWeight: 700 }}>
              06-6319-3339
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
