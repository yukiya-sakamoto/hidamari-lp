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
    <section id="flow" style={{ backgroundColor: "#1C0A00", padding: "96px 28px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 52 }}>
          <div className="sec-eyebrow">
            <span style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, letterSpacing: "0.2em" }}>TREATMENT FLOW</span>
          </div>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>施術の流れ</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 1, backgroundColor: "rgba(232,115,10,0.2)" }} className="grid-5">
          {STEPS.map((s, i) => (
            <div key={i} style={{ backgroundColor: "#2D1400", padding: "0 0 24px" }}>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img src={s.img} alt={s.title} style={{ width: "100%", height: "auto", display: "block", opacity: 0.9 }} />
                <div style={{ position: "absolute", top: 0, left: 0, backgroundColor: "#E8730A", padding: "6px 12px", fontSize: 11, fontWeight: 900, color: "#fff", letterSpacing: "0.08em" }}>{s.n}</div>
              </div>
              <div style={{ padding: "20px 18px 0" }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#fff", marginBottom: 8 }}>{s.title}</div>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", lineHeight: 1.9 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
