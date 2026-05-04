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

      <main style={{ backgroundColor: "#fff", padding: "80px 28px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontSize: 14, color: "#3D6A52", lineHeight: 2.0, marginBottom: 56, maxWidth: 680 }}>
            ひだまり整骨院 正雀院では、交通事故・肩こり・腰痛から骨盤矯正・スポーツ障害まで幅広い症状に対応しています。各症状のページで詳しい治療内容と患者様の声をご覧いただけます。
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, backgroundColor: "#C5DBCF" }} className="grid-4">
            {SYMPTOMS.map(s => (
              <Link key={s.slug} href={`/symptoms/${s.slug}/`}
                style={{ backgroundColor: "#fff", padding: "32px 24px", textDecoration: "none", display: "block" }}>
                <div style={{ width: 36, height: 3, backgroundColor: "#2D6A4F", marginBottom: 16 }} />
                <div style={{ fontSize: 16, fontWeight: 900, color: "#0F2018", marginBottom: 8 }}>{s.name}</div>
                <div style={{ fontSize: 12, color: "#3D6A52", lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</div>
                <div style={{ fontSize: 11, color: "#E8730A", fontWeight: 700 }}>詳細を見る →</div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 64, backgroundColor: "#F0F7F3", border: "1px solid #C5DBCF", padding: "32px 36px" }}>
            <div style={{ fontSize: 11, color: "#2D6A4F", fontWeight: 700, letterSpacing: "0.12em", marginBottom: 12 }}>お問い合わせ</div>
            <div style={{ fontSize: 16, fontWeight: 900, color: "#0F2018", marginBottom: 8 }}>「こんな症状はみてもらえる？」お気軽にご相談ください</div>
            <div style={{ fontSize: 13, color: "#3D6A52", marginBottom: 20, lineHeight: 1.8 }}>掲載以外の症状でもお気軽にご来院ください。予約不要・当日来院OK です。</div>
            <a href="tel:0663193339" style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#E8730A", color: "#fff", padding: "13px 28px", borderRadius: 2, textDecoration: "none", fontSize: 16, fontWeight: 900 }}>
              06-6319-3339
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
