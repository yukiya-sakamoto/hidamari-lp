const IMG = "https://www.hidamari-syoujyaku.com/image";

export default function Hero() {
  return (
    <section style={{ backgroundColor: "#FFF4E6", paddingTop: 60, position: "relative", overflow: "hidden" }}>
      <div className="hide-sp" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "48%", height: "100%", backgroundColor: "#FFF9F3" }} />
        <div style={{ position: "absolute", top: -60, right: 80, width: 240, height: 240, borderRadius: "50%", backgroundColor: "rgba(232,115,10,0.08)" }} />
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 64px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="grid-2">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#fff", border: "1px solid #FDDCB5", padding: "5px 14px", borderRadius: 20, marginBottom: 20 }}>
              <span style={{ width: 6, height: 6, backgroundColor: "#E8730A", borderRadius: "50%", display: "inline-block" }} />
              <span style={{ fontSize: 11, color: "#E8730A", fontWeight: 700, letterSpacing: "0.08em" }}>摂津市正雀で地域に根ざした整骨院</span>
            </div>

            <h1 style={{ fontSize: "clamp(28px, 4.5vw, 54px)", fontWeight: 900, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16, color: "#2D1400" }}>
              <span style={{ display: "block" }}>痛みを根本から、</span>
              <span style={{ display: "block", color: "#E8730A" }}>丁寧に治す。</span>
            </h1>

            <p style={{ fontSize: 14, color: "#7A4010", lineHeight: 2.0, marginBottom: 24, maxWidth: 420 }}>
              交通事故・肩こり・腰痛・骨盤矯正まで。<br />
              柔道整復師の資格を持つスタッフが、<br />
              お一人おひとりに合わせた施術をご提供します。
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
              {[
                "各種保険・交通事故・労災保険取扱",
                "予約不要・当日来院OK",
                "駐車場完備（2台・料金当院負担）",
                "阪急正雀駅より徒歩4分",
              ].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <span style={{ width: 18, height: 18, backgroundColor: "#E8730A", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><polyline points="1.5,4.5 3.5,6.5 7.5,2.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span style={{ fontSize: 13, color: "#2D1400", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
              <a href="tel:0663193339"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#E8730A", color: "#fff", padding: "14px 28px", fontSize: 16, fontWeight: 900, textDecoration: "none", borderRadius: 4, boxShadow: "0 4px 16px rgba(232,115,10,0.35)", letterSpacing: "0.04em" }}>
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .98h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.12 6.12l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
                06-6319-3339
              </a>
              <a href="#access"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#fff", color: "#E8730A", padding: "14px 24px", fontSize: 14, fontWeight: 700, textDecoration: "none", borderRadius: 4, border: "2px solid #E8730A" }}>
                アクセスを見る
              </a>
            </div>

            <div style={{ display: "flex", borderTop: "1px solid #FDDCB5", paddingTop: 20 }}>
              {[["保険対応","各種保険・交通事故"],["予約不要","当日来院OK"],["駐車場","2台・無料"]].map(([num, label], i) => (
                <div key={label} style={{ flex: 1, textAlign: "center", borderRight: i < 2 ? "1px solid #FDDCB5" : "none", padding: "0 10px" }}>
                  <div style={{ fontSize: "clamp(12px, 2vw, 16px)", fontWeight: 900, color: "#E8730A" }}>{num}</div>
                  <div style={{ fontSize: 10, color: "#B45309", marginTop: 3 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ borderRadius: 10, overflow: "hidden", boxShadow: "0 8px 28px rgba(232,115,10,0.15)", border: "2px solid #FDDCB5" }}>
              <img src={`${IMG}/top/image.png`} alt="ひだまり整骨院正雀院 スタッフ" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div style={{ backgroundColor: "#E8730A", borderRadius: 8, padding: "14px 20px", display: "flex", alignItems: "center", gap: 12 }}>
              <svg width="18" height="22" fill="none" viewBox="0 0 16 20" style={{ flexShrink: 0 }}><path d="M8 1C4.69 1 2 3.69 2 7c0 4.5 6 12 6 12s6-7.5 6-12c0-3.31-2.69-6-6-6z" stroke="#fff" strokeWidth="1.4"/><circle cx="8" cy="7" r="2" stroke="#fff" strokeWidth="1.4"/></svg>
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#fff", marginBottom: 2 }}>大阪府摂津市正雀本町１丁目20-30</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.85)" }}>阪急正雀駅 徒歩4分 / JR岸辺駅 徒歩10分</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
