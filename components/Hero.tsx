const IMG = "https://www.hidamari-syoujyaku.com/image";

export default function Hero() {
  const headerH = 84; // top-bar(26) + nav(58)
  return (
    <section style={{ paddingTop: headerH, backgroundColor: "#FFF4E6" }}>
      {/* メインビジュアル */}
      <div style={{ backgroundColor: "#E8730A", padding: "40px 28px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -40, right: -40, width: 280, height: 280, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.06)" }} className="hide-sp" />
        <div style={{ position: "absolute", bottom: -60, right: 120, width: 180, height: 180, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.06)" }} className="hide-sp" />

        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "flex-end" }} className="grid-2">
          <div style={{ paddingBottom: 40 }}>
            <div style={{ display: "inline-block", backgroundColor: "rgba(255,255,255,0.2)", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, marginBottom: 20, letterSpacing: "0.08em" }}>
              摂津市正雀の地域密着型整骨院
            </div>
            <h1 style={{ fontSize: "clamp(30px, 4.5vw, 56px)", fontWeight: 900, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 20 }}>
              痛みを根本から、<br />
              <span style={{ fontSize: "0.85em" }}>丁寧に治す。</span>
            </h1>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.88)", lineHeight: 1.9, marginBottom: 28, maxWidth: 420 }}>
              交通事故・肩こり・腰痛・骨盤矯正まで。<br />
              柔道整復師の資格を持つスタッフが、<br />
              お一人おひとりに合わせた施術をご提供します。
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href="tel:0663193339"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#fff", color: "#E8730A", padding: "13px 28px", borderRadius: 4, textDecoration: "none", fontSize: 16, fontWeight: 900, letterSpacing: "0.04em" }}>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .98h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.12 6.12l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#E8730A" strokeWidth="1.5" strokeLinecap="round"/></svg>
                06-6319-3339
              </a>
              <a href="/access/"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "2px solid rgba(255,255,255,0.6)", color: "#fff", padding: "13px 22px", borderRadius: 4, textDecoration: "none", fontSize: 13, fontWeight: 700 }}>
                アクセスを見る
              </a>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end" }}>
            <img src={`${IMG}/top/image.png`} alt="ひだまり整骨院 正雀院" style={{ maxWidth: "100%", height: "auto", display: "block", maxHeight: 320, objectFit: "contain", objectPosition: "bottom" }} />
          </div>
        </div>
      </div>

      {/* インフォバー */}
      <div style={{ backgroundColor: "#fff", borderBottom: "2px solid #FDDCB5" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }} className="grid-4">
          {[
            { label: "各種保険取扱", sub: "健康保険・交通事故・労災" },
            { label: "予約不要", sub: "当日来院・飛び込みOK" },
            { label: "駐車場完備", sub: "2台・駐車料金当院負担" },
            { label: "徒歩4分", sub: "阪急 正雀駅より" },
          ].map((item, i) => (
            <div key={item.label} style={{ padding: "16px 20px", borderRight: i < 3 ? "1px solid #FDDCB5" : "none", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 4, height: 36, backgroundColor: "#E8730A", borderRadius: 2, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#1A1A1A" }}>{item.label}</div>
                <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
