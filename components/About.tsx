const IMG = "https://www.hidamari-syoujyaku.com/image/about-item";

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: "#fff", padding: "96px 28px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-2">
          <div>
            <div className="sec-eyebrow">
              <span style={{ fontSize: 10, color: "#2D6A4F", fontWeight: 700, letterSpacing: "0.2em" }}>DIRECTOR'S MESSAGE</span>
            </div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 900, color: "#0F2018", letterSpacing: "-0.02em", marginBottom: 8 }}>正雀院よりご挨拶</h2>
            <div style={{ width: 48, height: 3, backgroundColor: "#2D6A4F", borderRadius: 2, marginBottom: 32 }} />

            <p style={{ fontSize: 14, color: "#3D6A52", lineHeight: 2.2, marginBottom: 20 }}>
              私がこの道に進むキッカケは、大学の柔道の練習で肩関節の脱臼という大怪我をしてしまい、納得のいく成績が残せなかったことが始まりです。その後、地元の北信越柔整専門学校に入学し、その付属医院と専門学校の講師合わせて7年間勤務し、知識と経験を積んできました。
            </p>
            <p style={{ fontSize: 14, color: "#3D6A52", lineHeight: 2.2, marginBottom: 36 }}>
              体の痛みを身をもって経験してきた私は、今度は逆に治す立場に立ち、治療家として一人でも多くの患者さんの痛いところが楽になるよう日々頑張っています。
            </p>

            <div style={{ borderLeft: "3px solid #2D6A4F", paddingLeft: 20 }}>
              <div style={{ fontSize: 14, fontWeight: 900, color: "#0F2018", marginBottom: 2 }}>島村 康夫</div>
              <div style={{ fontSize: 11, color: "#3D6A52" }}>院長 / 柔道整復師</div>
              <div style={{ fontSize: 11, color: "#5A9E7C", marginTop: 6 }}>柔道五段・C級審判員 / 専科教員（柔道整復師・保健体育）</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ overflow: "hidden", border: "1px solid #C5DBCF" }}>
              <img src={`${IMG}/shimamura.jpg`} alt="院長 島村康夫" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                ["各種保険取扱", "健康保険・労災保険・交通事故"],
                ["予約不要", "当日来院・飛び込みOK"],
                ["駐車場完備", "2台・駐車料金当院負担"],
                ["丁寧な説明", "施術後に今後のプランをご説明"],
              ].map(([title, desc]) => (
                <div key={title} style={{ backgroundColor: "#F0F7F3", border: "1px solid #C5DBCF", padding: "14px 16px" }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: "#2D6A4F", marginBottom: 4 }}>{title}</div>
                  <div style={{ fontSize: 11, color: "#3D6A52", lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
