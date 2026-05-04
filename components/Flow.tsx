import Link from "next/link";

const IMG = "https://www.hidamari-syoujyaku.com/image/about-item";

const STEPS = [
  { n: "01", img: `${IMG}/flow1.png`, title: "受付", desc: "元気なあいさつと笑顔でお迎えします。" },
  { n: "02", img: `${IMG}/flow2.png`, title: "お待ちの間に", desc: "お茶・コーヒーをご用意しています。" },
  { n: "03", img: `${IMG}/flow3.png`, title: "問診・診察", desc: "プロのスタッフが痛みの原因を丁寧に追究します。" },
  { n: "04", img: `${IMG}/flow4.png`, title: "施術", desc: "手技治療と電気治療を組み合わせて施術します。" },
  { n: "05", img: `${IMG}/flow5.png`, title: "施術終了", desc: "今後の治療プランをご説明して終了です。" },
];

export default function Flow() {
  return (
    <section id="flow" style={{ backgroundColor: "#FDFAF6", padding: "88px 28px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 12 }}>
          <div>
            <span className="sec-label">施術の流れ</span>
            <h2 style={{ fontSize: "clamp(20px, 2.6vw, 28px)", fontWeight: 700, color: "#2D2D2D" }}>はじめての方も安心の流れ</h2>
          </div>
          <Link href="/flow/" style={{ fontSize: 14, color: "#D96B0B", fontWeight: 700, textDecoration: "none" }}>詳しく見る →</Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }} className="grid-5">
          {STEPS.map((s, i) => (
            <div key={i} style={{ backgroundColor: "#fff", border: "1px solid #EDE0CC", borderRadius: 10, overflow: "hidden" }}>
              <div style={{ position: "relative" }}>
                <img src={s.img} alt={s.title} style={{ width: "100%", height: "auto", display: "block" }} />
                <div style={{ position: "absolute", top: 0, left: 0, backgroundColor: "#D96B0B", padding: "6px 12px", fontSize: 11, fontWeight: 700, color: "#fff", borderBottomRightRadius: 8 }}>STEP {s.n}</div>
              </div>
              <div style={{ padding: "16px 14px" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#2D2D2D", marginBottom: 6 }}>{s.title}</div>
                <p style={{ fontSize: 13, color: "#666259", lineHeight: 1.85 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
