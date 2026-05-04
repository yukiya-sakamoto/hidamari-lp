const IMG = "https://www.hidamari-syoujyaku.com/image/about-item";

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: "#fff", padding: "80px 28px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="grid-2">
          <div>
            <span className="sec-label">DIRECTOR'S MESSAGE</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 900, color: "#1A1A1A", marginBottom: 6 }}>院長ご挨拶</h2>
            <div style={{ width: 40, height: 4, backgroundColor: "#E8730A", borderRadius: 2, marginBottom: 28 }} />

            <p style={{ fontSize: 14, color: "#444", lineHeight: 2.2, marginBottom: 18 }}>
              私がこの道に進むキッカケは、大学の柔道の練習で肩関節の脱臼という大怪我をしてしまい、納得のいく成績が残せなかったことが始まりです。その後、地元の北信越柔整専門学校に入学し、その付属医院と専門学校の講師合わせて7年間勤務し、知識と経験を積んできました。
            </p>
            <p style={{ fontSize: 14, color: "#444", lineHeight: 2.2, marginBottom: 32 }}>
              体の痛みを身をもって経験してきた私は、今度は逆に治す立場に立ち、治療家として一人でも多くの患者さんの痛いところが楽になるよう日々頑張っています。
            </p>

            <div style={{ backgroundColor: "#FFF4E6", border: "1px solid #FDDCB5", borderRadius: 8, padding: "16px 20px", display: "flex", alignItems: "flex-start", gap: 14 }}>
              <div style={{ width: 4, height: "100%", minHeight: 40, backgroundColor: "#E8730A", borderRadius: 2, flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontSize: 15, fontWeight: 900, color: "#1A1A1A", marginBottom: 2 }}>島村 康夫</div>
                <div style={{ fontSize: 11, color: "#E8730A", marginBottom: 4 }}>院長 / 柔道整復師</div>
                <div style={{ fontSize: 11, color: "#888" }}>柔道五段・C級審判員 / 専科教員（柔道整復師・保健体育）</div>
              </div>
            </div>
          </div>

          <div>
            <div style={{ borderRadius: 10, overflow: "hidden", border: "2px solid #FDDCB5", marginBottom: 16 }}>
              <img src={`${IMG}/shimamura.jpg`} alt="院長 島村康夫" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                ["各種保険取扱", "健康保険・労災・交通事故"],
                ["予約不要", "当日来院・飛び込みOK"],
                ["駐車場完備", "2台・料金当院負担"],
                ["丁寧な説明", "施術後にプランをご説明"],
              ].map(([title, desc]) => (
                <div key={title} style={{ backgroundColor: "#E6F9EE", border: "1px solid #8FE5B4", borderRadius: 6, padding: "12px 14px" }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: "#05AF4B", marginBottom: 3 }}>{title}</div>
                  <div style={{ fontSize: 11, color: "#444", lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
