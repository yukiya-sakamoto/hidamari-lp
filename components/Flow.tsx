const IMG = "https://www.hidamari-syoujyaku.com/image/about-item";

const STEPS = [
  { n: "01", img: `${IMG}/flow1.png`, title: "受付", desc: "元気なあいさつと笑顔でお迎えします。何にお困りかスタッフがお伺いします。ちょっとしたことでもお気軽にお伝えください。" },
  { n: "02", img: `${IMG}/flow2.png`, title: "お待ちの間に", desc: "お茶・コーヒーをご用意しています。予約不要でご来院いただけますので、少しお待ちいただく場合があります。" },
  { n: "03", img: `${IMG}/flow3.png`, title: "問診・診察", desc: "資格を持つプロのスタッフが問診・触診を行い、痛みの原因を丁寧に追究します。持病がある方もここでご相談ください。" },
  { n: "04", img: `${IMG}/flow4.png`, title: "施術", desc: "症状に合わせた手技治療と電気治療を組み合わせて施術。すべての施術前にバイターで身体をほぐします。" },
  { n: "05", img: `${IMG}/flow5.png`, title: "施術終了", desc: "日常生活での注意点や今後の治療プランをご説明。再発防止のため、一緒に頑張っていきましょう。" },
];

export default function Flow() {
  return (
    <section id="flow" style={{ backgroundColor: "#FFF4E6", padding: "88px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ width: 24, height: 1, backgroundColor: "#E8730A" }} />
            <span style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, letterSpacing: "0.25em" }}>FLOW</span>
            <div style={{ width: 24, height: 1, backgroundColor: "#E8730A" }} />
          </div>
          <h2 style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 900, color: "#2D1400", letterSpacing: "-0.02em" }}>施術の流れ</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }} className="grid-4">
          {STEPS.map((s, i) => (
            <div key={i} style={{ position: "relative" }}>
              {i < 4 && (
                <div className="hide-sp" style={{ position: "absolute", top: 60, right: -12, fontSize: 18, color: "#E8730A", fontWeight: 900, zIndex: 1 }}>›</div>
              )}
              <div style={{ backgroundColor: "#fff", border: "1px solid #FDDCB5", borderRadius: 8, overflow: "hidden", height: "100%" }}>
                <div style={{ position: "relative" }}>
                  <img src={s.img} alt={s.title} style={{ width: "100%", height: "auto", display: "block" }} />
                  <div style={{ position: "absolute", top: 8, left: 8, backgroundColor: "#E8730A", color: "#fff", fontSize: 11, fontWeight: 900, padding: "3px 10px", borderRadius: 2 }}>{s.n}</div>
                </div>
                <div style={{ padding: "16px 14px" }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#2D1400", marginBottom: 6 }}>{s.title}</div>
                  <p style={{ fontSize: 11, color: "#7A4010", lineHeight: 1.8 }}>{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
