const IMG = "https://www.hidamari-syoujyaku.com/image/about-item";

export default function Access() {
  return (
    <section id="access" style={{ backgroundColor: "#1C0A00", padding: "96px 28px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 52 }}>
          <div className="sec-eyebrow">
            <span style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, letterSpacing: "0.2em" }}>ACCESS</span>
          </div>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>アクセス</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="grid-2">
          {/* 地図・写真 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ overflow: "hidden" }}>
              <img src={`${IMG}/access_p.png`} alt="ひだまり整骨院正雀院 外観" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ overflow: "hidden" }}>
                <img src={`${IMG}/in.jpg`} alt="院内" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              <div style={{ overflow: "hidden" }}>
                <img src={`${IMG}/parking.png`} alt="駐車場（2台・料金当院負担）" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
          </div>

          {/* 情報 */}
          <div>
            <div style={{ fontSize: 22, fontWeight: 900, color: "#fff", marginBottom: 4 }}>ひだまり整骨院 正雀院</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 32 }}>大阪府摂津市正雀本町１丁目20-30</div>

            <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 32, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              {[
                ["最寄り駅", "阪急 正雀駅より徒歩4分 / JR 岸辺駅より徒歩10分"],
                ["駐車場", "2台完備・駐車料金は当院が負担"],
                ["保険", "各種保険・交通事故・労災保険取扱"],
              ].map(([label, val]) => (
                <div key={label} style={{ display: "flex", gap: 20, borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "16px 0", alignItems: "flex-start" }}>
                  <span style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, width: 60, flexShrink: 0, paddingTop: 2, letterSpacing: "0.04em" }}>{label}</span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>{val}</span>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: "rgba(232,115,10,0.12)", border: "1px solid rgba(232,115,10,0.3)", padding: "20px 24px", marginBottom: 24 }}>
              <div style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, marginBottom: 14, letterSpacing: "0.12em" }}>受付時間</div>
              {[
                ["月〜金", "9:00〜12:00 / 15:00〜20:00"],
                ["土曜", "9:00〜12:00（午後休）"],
                ["日・祝", "休診"],
              ].map(([day, time]) => (
                <div key={day} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "10px 0" }}>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>{day}</span>
                  <span style={{ fontSize: 12, color: "#fff", fontWeight: 700 }}>{time}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="tel:0663193339"
                style={{ display: "block", backgroundColor: "#E8730A", color: "#fff", textAlign: "center", padding: "16px", textDecoration: "none", fontSize: 20, fontWeight: 900, letterSpacing: "0.06em" }}>
                06-6319-3339
              </a>
              <a href="https://maps.google.com/maps?q=大阪府摂津市正雀本町１丁目20-30" target="_blank" rel="noopener noreferrer"
                style={{ display: "block", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", textAlign: "center", padding: "13px", textDecoration: "none", fontSize: 13, fontWeight: 700 }}>
                Google マップで見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
