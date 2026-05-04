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

      <main style={{ backgroundColor: "#FDFAF6", padding: "80px 28px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontSize: 15, color: "#4A4A4A", lineHeight: 2.1, marginBottom: 56, maxWidth: 640 }}>
            ひだまり整骨院 正雀院では、はじめての方も安心してご来院いただけるよう、丁寧な問診・説明を徹底しています。予約不要でいつでもお越しいただけます。
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {STEPS.map((s, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "260px 1fr", backgroundColor: "#fff", border: "1px solid #EDE0CC", borderRadius: 10, overflow: "hidden" }} className="grid-2">
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <div style={{ position: "absolute", top: 0, left: 0, backgroundColor: "#D96B0B", padding: "6px 14px", fontSize: 11, fontWeight: 700, color: "#fff", borderBottomRightRadius: 8 }}>STEP {s.n}</div>
                </div>
                <div style={{ padding: "36px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#05AF4B" }}>{s.n}</span>
                    <div style={{ width: 1, height: 18, backgroundColor: "#EDE0CC" }} />
                    <h2 style={{ fontSize: 20, fontWeight: 700, color: "#2D2D2D" }}>{s.title}</h2>
                  </div>
                  <p style={{ fontSize: 15, color: "#4A4A4A", lineHeight: 2.1, maxWidth: 480 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 56, backgroundColor: "#FEF3E8", border: "1px solid #F5DCC2", borderRadius: 10, padding: "36px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
            <div>
              <div style={{ fontSize: 12, color: "#05AF4B", fontWeight: 700, marginBottom: 6 }}>予約不要・当日来院OK</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#2D2D2D" }}>まずはお気軽にご来院ください</div>
            </div>
            <a href="tel:0663193339" style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#D96B0B", color: "#fff", padding: "15px 28px", borderRadius: 6, textDecoration: "none", fontSize: 16, fontWeight: 700 }}>
              06-6319-3339
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
