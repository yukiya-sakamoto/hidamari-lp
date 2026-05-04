const IMG = "https://www.hidamari-syoujyaku.com/image";

export default function Hero() {
  return (
    <section style={{ backgroundColor: "#1A3D2F", paddingTop: 64, position: "relative", overflow: "hidden", minHeight: "92vh", display: "flex", alignItems: "center" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 65% 50%, rgba(232,115,10,0.1) 0%, transparent 55%)" }} />
      <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", overflow: "hidden" }} className="hide-sp">
        <img src={`${IMG}/top/image.png`} alt="ひだまり整骨院 正雀院" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", opacity: 0.3 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #1A3D2F 0%, transparent 45%)" }} />
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 28px", position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{ maxWidth: 620 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
            <span style={{ width: 32, height: 1, backgroundColor: "#E8730A", display: "inline-block" }} />
            <span style={{ fontSize: 11, color: "#E8730A", fontWeight: 700, letterSpacing: "0.2em" }}>HIDAMARI SEIKOTSU-IN SHOJAKU</span>
          </div>

          <h1 style={{ fontSize: "clamp(36px, 5.5vw, 68px)", fontWeight: 900, lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 24, color: "#fff" }}>
            <span style={{ display: "block" }}>痛みを根本から、</span>
            <span style={{ display: "block", color: "#E8730A" }}>丁寧に治す。</span>
          </h1>

          <p style={{ fontSize: "clamp(13px, 1.4vw, 15px)", color: "rgba(255,255,255,0.65)", lineHeight: 2.1, marginBottom: 40, maxWidth: 480 }}>
            摂津市正雀で地域に根ざした整骨院として、交通事故・肩こり・腰痛・骨盤矯正まで。柔道整復師の資格を持つスタッフが、お一人おひとりに合わせた施術をご提供します。
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 52 }}>
            <a href="tel:0663193339"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#E8730A", color: "#fff", padding: "15px 32px", fontSize: 16, fontWeight: 900, textDecoration: "none", borderRadius: 2, letterSpacing: "0.04em" }}>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .98h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.12 6.12l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
              06-6319-3339
            </a>
            <a href="/access/"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.85)", padding: "15px 28px", fontSize: 14, fontWeight: 700, textDecoration: "none", borderRadius: 2 }}>
              アクセスを見る
            </a>
          </div>

          <div style={{ display: "flex", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            {[
              ["各種保険", "健康保険・交通事故・労災"],
              ["予約不要", "当日来院OK"],
              ["駐車場", "2台完備・無料"],
              ["徒歩4分", "阪急 正雀駅より"],
            ].map(([num, label], i) => (
              <div key={label} style={{ flex: 1, padding: "18px 8px 0", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none", paddingLeft: i === 0 ? 0 : 12 }}>
                <div style={{ fontSize: 13, fontWeight: 900, color: "#E8730A", marginBottom: 4 }}>{num}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
