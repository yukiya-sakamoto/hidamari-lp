const IMG = "https://www.hidamari-syoujyaku.com/image/about-item";

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: "#fff", padding: "88px 28px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-2">

          {/* 写真側 */}
          <div>
            <div style={{ borderRadius: 12, overflow: "hidden", marginBottom: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
              <img src={`${IMG}/shimamura.jpg`} alt="院長 島村康夫" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                ["各種保険取扱", "健康保険・労災・交通事故"],
                ["予約不要", "当日来院・飛び込みOK"],
                ["駐車場完備", "2台・料金当院負担"],
                ["丁寧な説明", "施術後にプランをご説明"],
              ].map(([title, desc]) => (
                <div key={title} style={{ backgroundColor: "#FDFAF6", border: "1px solid #EDE0CC", borderRadius: 8, padding: "12px 14px" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#D96B0B", marginBottom: 4 }}>{title}</div>
                  <div style={{ fontSize: 12, color: "#4A4A4A", lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* テキスト側 */}
          <div>
            <span className="sec-label">院長ご挨拶</span>
            <h2 style={{ fontSize: "clamp(20px, 2.6vw, 28px)", fontWeight: 700, color: "#2D2D2D", marginBottom: 8, lineHeight: 1.5 }}>
              体の痛みを知っているから、<br />丁寧に治せる。
            </h2>
            <div style={{ width: 36, height: 3, backgroundColor: "#D96B0B", borderRadius: 2, marginBottom: 28 }} />

            <p style={{ fontSize: 15, color: "#4A4A4A", lineHeight: 2.2, marginBottom: 18 }}>
              私がこの道に進むキッカケは、大学の柔道の練習で肩関節の脱臼という大怪我をしてしまい、納得のいく成績が残せなかったことが始まりです。その後、地元の北信越柔整専門学校に入学し、付属医院と専門学校の講師合わせて7年間勤務し、知識と経験を積んできました。
            </p>
            <p style={{ fontSize: 15, color: "#4A4A4A", lineHeight: 2.2, marginBottom: 32 }}>
              体の痛みを身をもって経験してきた私は、今度は逆に治す立場に立ち、治療家として一人でも多くの患者さんの痛いところが楽になるよう日々頑張っています。
            </p>

            <div style={{ backgroundColor: "#FEF3E8", border: "1px solid #F5DCC2", borderRadius: 10, padding: "20px 24px", display: "flex", alignItems: "flex-start", gap: 16 }}>
              <div style={{ width: 4, minHeight: 44, backgroundColor: "#D96B0B", borderRadius: 2, flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontSize: 17, fontWeight: 700, color: "#2D2D2D", marginBottom: 3 }}>島村 康夫</div>
                <div style={{ fontSize: 12, color: "#D96B0B", marginBottom: 6 }}>院長 / 柔道整復師</div>
                <div style={{ fontSize: 12, color: "#888", lineHeight: 1.7 }}>柔道五段・C級審判員<br />専科教員（柔道整復師・保健体育）</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
