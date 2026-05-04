import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PageHero from "../../../components/PageHero";
import Link from "next/link";
import { getSymptom } from "../../../lib/symptoms";

export function generateStaticParams() {
  return [];
}

export function generateMetadata() {
  const s = getSymptom("katakori");
  return { title: `${s?.name} | 症状・施術 | ひだまり整骨院 正雀院` };
}

export default function Page() {
  const s = getSymptom("katakori");
  if (!s) return null;
  return (
    <>
      <Header />
      <PageHero
        label={s.nameEn.toUpperCase()}
        title={s.name}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "症状・施術", href: "/symptoms/" },
          { label: s.name, href: `/symptoms/${s.slug}/` },
        ]}
      />

      <main style={{ backgroundColor: "#fff", padding: "80px 28px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* Lead */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start", marginBottom: 80 }} className="grid-2">
            <div>
              <div className="sec-eyebrow" style={{ marginBottom: 12 }}>
                <span style={{ fontSize: 10, color: "#2D6A4F", fontWeight: 700, letterSpacing: "0.2em" }}>OVERVIEW</span>
              </div>
              <h2 style={{ fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 900, color: "#0F2018", marginBottom: 24, letterSpacing: "-0.02em" }}>{s.name}について</h2>
              <p style={{ fontSize: 14, color: "#3D6A52", lineHeight: 2.2, marginBottom: 24 }}>{s.lead}</p>
              <div style={{ backgroundColor: "#F0F7F3", border: "1px solid #C5DBCF", padding: "20px 24px" }}>
                <div style={{ fontSize: 11, color: "#2D6A4F", fontWeight: 700, marginBottom: 10, letterSpacing: "0.08em" }}>当院の施術方針</div>
                <p style={{ fontSize: 13, color: "#0F2018", lineHeight: 2.0 }}>{s.treatment}</p>
              </div>
            </div>
            <div style={{ borderRadius: 4, overflow: "hidden" }}>
              <img src={s.image} alt={s.name} style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>

          {/* Cases */}
          {s.cases.length > 0 && (
            <div style={{ marginBottom: 64 }}>
              <div className="sec-eyebrow" style={{ marginBottom: 12 }}>
                <span style={{ fontSize: 10, color: "#2D6A4F", fontWeight: 700, letterSpacing: "0.2em" }}>PATIENT VOICE</span>
              </div>
              <h2 style={{ fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 900, color: "#0F2018", marginBottom: 32, letterSpacing: "-0.02em" }}>患者様の声</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, backgroundColor: "#C5DBCF" }} className="grid-3">
                {s.cases.map((c, i) => (
                  <div key={i} style={{ backgroundColor: "#fff", padding: "28px 24px" }}>
                    <p style={{ fontSize: 13, color: "#0F2018", lineHeight: 2.1, marginBottom: 16 }}>{c.text}</p>
                    <div style={{ fontSize: 11, color: "#2D6A4F", fontWeight: 700, borderTop: "1px solid #E8F0EC", paddingTop: 12 }}>{c.who}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div style={{ backgroundColor: "#1A3D2F", padding: "40px 36px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
            <div>
              <div style={{ fontSize: 12, color: "#5A9E7C", fontWeight: 700, marginBottom: 8 }}>予約不要・当日来院OK</div>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#fff" }}>お気軽にご来院ください</div>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="tel:0663193339" style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#E8730A", color: "#fff", padding: "14px 28px", borderRadius: 2, textDecoration: "none", fontSize: 16, fontWeight: 900 }}>
                06-6319-3339
              </a>
              <Link href="/access/" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.8)", padding: "14px 24px", borderRadius: 2, textDecoration: "none", fontSize: 13, fontWeight: 700 }}>
                アクセスを見る
              </Link>
            </div>
          </div>

          <div style={{ marginTop: 32 }}>
            <Link href="/symptoms/" style={{ fontSize: 13, color: "#2D6A4F", textDecoration: "none", fontWeight: 600 }}>
              ← 症状・施術一覧に戻る
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
