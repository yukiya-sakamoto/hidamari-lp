const IMG = "https://www.hidamari-syoujyaku.com/image";

export default function Hero() {
  const headerH = 88; // top-bar(28) + nav(60)
  return (
    <section style={{ paddingTop: headerH, backgroundColor: "#FDFAF6" }}>
      {/* メインビジュアル */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "stretch", minHeight: 480 }} className="grid-2">

          {/* テキスト側 */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "56px 40px 56px 0" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: "#EAF7F1", border: "1px solid #A8E0C4", borderRadius: 20, padding: "4px 14px", marginBottom: 24, width: "fit-content" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#05AF4B", flexShrink: 0 }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: "#05AF4B", letterSpacing: "0.06em" }}>摂津市正雀の地域密着型整骨院</span>
            </div>
            <h1 style={{ fontSize: "clamp(26px, 3.8vw, 46px)", fontWeight: 800, color: "#2D2D2D", lineHeight: 1.45, letterSpacing: "-0.01em", marginBottom: 20 }}>
              痛みに、丁寧に<br />向き合います。
            </h1>
            <p style={{ fontSize: 15, color: "#4A4A4A", lineHeight: 2.0, marginBottom: 32, maxWidth: 380 }}>
              交通事故・肩こり・腰痛・骨盤矯正まで。<br />
              柔道整復師の資格を持つスタッフが、<br />
              お一人おひとりに合わせた施術をご提供します。
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="tel:0663193339"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#D96B0B", color: "#fff", padding: "15px 28px", borderRadius: 6, textDecoration: "none", fontSize: 17, fontWeight: 700, letterSpacing: "0.04em" }}>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .98h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.12 6.12l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
                06-6319-3339
              </a>
              <a href="/access/"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1.5px solid #D96B0B", color: "#D96B0B", padding: "14px 22px", borderRadius: 6, textDecoration: "none", fontSize: 14, fontWeight: 700, backgroundColor: "transparent" }}>
                アクセスを見る
              </a>
            </div>
          </div>

          {/* 写真側 */}
          <div style={{ position: "relative", overflow: "hidden", borderRadius: "0 0 0 20px" }}>
            <img
              src={`${IMG}/top/image.png`}
              alt="ひだまり整骨院 正雀院"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block", minHeight: 360 }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(253,250,246,0.15) 0%, transparent 30%)" }} />
          </div>
        </div>
      </div>

      {/* インフォバー */}
      <div style={{ backgroundColor: "#fff", borderTop: "1px solid #EDE0CC", borderBottom: "1px solid #EDE0CC", marginTop: 0 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} className="grid-4">
          {[
            { icon: "🏥", label: "各種保険取扱", sub: "健康保険・交通事故・労災" },
            { icon: "🚶", label: "予約不要", sub: "当日来院・飛び込みOK" },
            { icon: "🚗", label: "駐車場完備", sub: "2台・駐車料金当院負担" },
            { icon: "🚉", label: "駅から徒歩4分", sub: "阪急 正雀駅より" },
          ].map((item, i) => (
            <div key={item.label} style={{ padding: "18px 24px", borderRight: i < 3 ? "1px solid #EDE0CC" : "none", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#2D2D2D" }}>{item.label}</div>
                <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
