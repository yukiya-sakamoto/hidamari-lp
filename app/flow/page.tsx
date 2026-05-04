import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";

export const metadata = { title: "施術の流れ | ひだまり整骨院 正雀院" };

const IMG = "https://www.hidamari-syoujyaku.com/image/about-item";

const STEPS = [
  { n: "01", img: `${IMG}/flow1.png`, title: "受付", desc: "元気なあいさつと笑顔でお迎えします。何にお困りかスタッフがお伺いします。ちょっとしたことでもお気軽にお伝えください。" },
  { n: "02", img: `${IMG}/flow2.png`, title: "お待ちの間に", desc: "お茶・コーヒーをご用意しています。予約不要でご来院いただけますので、少しお待ちいただく場合があります。" },
  { n: "03", img: `${IMG}/flow3.png`, title: "問診・診察", desc: "資格を持つプロのスタッフが問診・触診を行い、痛みの原因を丁寧に追究します。持病がある方もここでご相談ください。" },
  { n: "04", img: `${IMG}/flow4.png`, title: "施術", desc: "症状に合わせた手技治療と電気治療を組み合わせて施術。すべての施術前にバイターで身体をほぐします。" },
  { n: "05", img: `${IMG}/flow5.png`, title: "施術終了・説明", desc: "日常生活での注意点や今後の治療プランをご説明。再発防止のため、一緒に頑張っていきましょう。" },
];

export default function FlowPage() {
  return (
    <>
      <Header />
      <PageHero
        label="TREATMENT FLOW"
        title="施術の流れ"
        breadcrumb={[{ label: "ホーム", href: "/" }, { label: "施術の流れ", href: "/flow/" }]}
      />

      <main style={{ backgroundColor: "#fff", padding: "80px 28px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontSize: 14, color: "#3D6A52", lineHeight: 2.0, marginBottom: 64, maxWidth: 680 }}>
            ひだまり整骨院 正雀院では、はじめての方も安心してご来院いただけるよう、丁寧な問診・説明を徹底しています。予約不要でいつでもお越しいただけます。
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 1, backgroundColor: "#C5DBCF" }}>
            {STEPS.map((s, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "280px 1fr", backgroundColor: "#fff", gap: 0 }} className="grid-2">
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <div style={{ position: "absolute", top: 0, left: 0, backgroundColor: "#E8730A", padding: "8px 16px", fontSize: 12, fontWeight: 900, color: "#fff", letterSpacing: "0.08em" }}>STEP {s.n}</div>
                </div>
                <div style={{ padding: "40px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#2D6A4F", letterSpacing: "0.1em" }}>{s.n}</span>
                    <div style={{ width: 1, height: 20, backgroundColor: "#C5DBCF" }} />
                    <h2 style={{ fontSize: 22, fontWeight: 900, color: "#0F2018" }}>{s.title}</h2>
                  </div>
                  <p style={{ fontSize: 14, color: "#3D6A52", lineHeight: 2.1, maxWidth: 500 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 64, backgroundColor: "#1A3D2F", padding: "40px 36px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
            <div>
              <div style={{ fontSize: 12, color: "#5A9E7C", fontWeight: 700, marginBottom: 8 }}>予約不要・当日来院OK</div>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#fff" }}>まずはお気軽にご来院ください</div>
            </div>
            <a href="tel:0663193339" style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#E8730A", color: "#fff", padding: "14px 28px", borderRadius: 2, textDecoration: "none", fontSize: 16, fontWeight: 900 }}>
              06-6319-3339
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
