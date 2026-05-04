const IMG = "https://www.hidamari-syoujyaku.com/image/about-item";

export default function Access() {
  return (
    <section id="access" style={{ backgroundColor: "#FFFAF5", padding: "88px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ width: 24, height: 1, backgroundColor: "#E8730A" }} />
            <span style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, letterSpacing: "0.25em" }}>ACCESS</span>
            <div style={{ width: 24, height: 1, backgroundColor: "#E8730A" }} />
          </div>
          <h2 style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 900, color: "#2D1400", letterSpacing: "-0.02em" }}>アクセス</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="grid-2">
          {/* 地図・写真 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ borderRadius: 8, overflow: "hidden", border: "1px solid #FDDCB5" }}>
              <img src={`${IMG}/access_p.png`} alt="ひだまり整骨院正雀院 外観" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div style={{ borderRadius: 6, overflow: "hidden", border: "1px solid #FDDCB5" }}>
                <img src={`${IMG}/in.jpg`} alt="院内" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              <div style={{ borderRadius: 6, overflow: "hidden", border: "1px solid #FDDCB5" }}>
                <img src={`${IMG}/parking.png`} alt="駐車場（2台・料金当院負担）" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
          </div>

          {/* 情報 */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #FDDCB5", borderRadius: 8, padding: "32px 28px" }}>
            <div style={{ fontSize: 20, fontWeight: 900, color: "#2D1400", marginBottom: 4 }}>ひだまり整骨院 正雀院</div>
            <div style={{ fontSize: 13, color: "#7A4010", marginBottom: 24 }}>大阪府摂津市正雀本町１丁目20-30</div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
              {[
                ["最寄り駅①", "阪急 正雀駅より徒歩4分"],
                ["最寄り駅②", "JR 岸辺駅より徒歩10分"],
                ["駐車場", "2台完備・駐車料金は当院が負担"],
                ["保険", "各種保険・交通事故・労災保険取扱"],
              ].map(([label, val]) => (
                <div key={label} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 10, color: "#fff", backgroundColor: "#E8730A", padding: "3px 8px", borderRadius: 2, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{label}</span>
                  <span style={{ fontSize: 13, color: "#2D1400", lineHeight: 1.6 }}>{val}</span>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: "#FFF4E6", border: "1px solid #FDDCB5", borderRadius: 6, padding: "16px", marginBottom: 20 }}>
              <div style={{ fontSize: 11, color: "#E8730A", fontWeight: 700, marginBottom: 10 }}>受付時間</div>
              {[
                ["月〜金", "9:00〜12:00 / 15:00〜20:00"],
                ["土曜", "9:00〜12:00（午後休）"],
                ["日・祝", "休診"],
              ].map(([day, time]) => (
                <div key={day} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #FDDCB5", padding: "8px 0" }}>
                  <span style={{ fontSize: 12, color: "#7A4010", fontWeight: 600 }}>{day}</span>
                  <span style={{ fontSize: 12, color: "#2D1400", fontWeight: 700 }}>{time}</span>
                </div>
              ))}
            </div>

            <a href="tel:0663193339"
              style={{ display: "block", backgroundColor: "#E8730A", color: "#fff", textAlign: "center", padding: "16px", borderRadius: 4, textDecoration: "none", fontSize: 20, fontWeight: 900, letterSpacing: "0.06em", marginBottom: 10 }}>
              06-6319-3339
            </a>
            <a href="https://maps.google.com/maps?q=大阪府摂津市正雀本町１丁目20-30" target="_blank" rel="noopener noreferrer"
              style={{ display: "block", backgroundColor: "#fff", color: "#7A4010", textAlign: "center", padding: "12px", borderRadius: 4, textDecoration: "none", fontSize: 13, fontWeight: 700, border: "1px solid #FDDCB5" }}>
              Google マップで見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
