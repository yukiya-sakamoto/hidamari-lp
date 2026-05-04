import Link from "next/link";

const IMG = "https://www.hidamari-syoujyaku.com/image/about-item";

export default function Access() {
  return (
    <section id="access" style={{ backgroundColor: "#FDFAF6", padding: "88px 28px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 12 }}>
          <div>
            <span className="sec-label">アクセス</span>
            <h2 style={{ fontSize: "clamp(20px, 2.6vw, 28px)", fontWeight: 700, color: "#2D2D2D" }}>ご来院のご案内</h2>
          </div>
          <Link href="/access/" style={{ fontSize: 14, color: "#D96B0B", fontWeight: 700, textDecoration: "none" }}>詳しく見る →</Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="grid-2">
          {/* 写真 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ borderRadius: 10, overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
              <img src={`${IMG}/access_p.png`} alt="外観" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ borderRadius: 8, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
                <img src={`${IMG}/in.jpg`} alt="院内" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              <div style={{ borderRadius: 8, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
                <img src={`${IMG}/parking.png`} alt="駐車場" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
          </div>

          {/* 情報 */}
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#2D2D2D", marginBottom: 2 }}>ひだまり整骨院 正雀院</div>
            <div style={{ fontSize: 14, color: "#888", marginBottom: 28 }}>大阪府摂津市正雀本町１丁目20-30</div>

            <div style={{ marginBottom: 24 }}>
              {[
                ["最寄り駅", "阪急 正雀駅より徒歩4分 / JR 岸辺駅より徒歩10分"],
                ["駐車場", "2台完備・駐車料金は当院が負担"],
                ["保険", "各種保険・交通事故・労災保険取扱"],
              ].map(([label, val]) => (
                <div key={label} style={{ display: "flex", gap: 16, borderBottom: "1px solid #EDE0CC", padding: "14px 0", alignItems: "flex-start" }}>
                  <span style={{ fontSize: 11, color: "#D96B0B", fontWeight: 700, backgroundColor: "#FEF3E8", padding: "3px 10px", borderRadius: 4, flexShrink: 0, marginTop: 2 }}>{label}</span>
                  <span style={{ fontSize: 14, color: "#2D2D2D", lineHeight: 1.75 }}>{val}</span>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: "#EAF7F1", border: "1px solid #A8E0C4", borderRadius: 10, padding: "18px 22px", marginBottom: 20 }}>
              <div style={{ fontSize: 12, color: "#05AF4B", fontWeight: 700, marginBottom: 14, letterSpacing: "0.06em" }}>受付時間</div>
              {[["月〜金", "9:00〜12:00 / 15:00〜20:00"], ["土曜", "9:00〜12:00（午後休）"], ["日・祝", "休診"]].map(([day, time]) => (
                <div key={day} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #A8E0C4", padding: "10px 0" }}>
                  <span style={{ fontSize: 14, color: "#4A4A4A", fontWeight: 600 }}>{day}</span>
                  <span style={{ fontSize: 14, color: "#2D2D2D", fontWeight: 700 }}>{time}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="tel:0663193339" style={{ display: "block", backgroundColor: "#D96B0B", color: "#fff", textAlign: "center", padding: "16px", textDecoration: "none", fontSize: 20, fontWeight: 700, borderRadius: 6, letterSpacing: "0.04em" }}>
                06-6319-3339
              </a>
              <a href="https://maps.google.com/maps?q=大阪府摂津市正雀本町１丁目20-30" target="_blank" rel="noopener noreferrer"
                style={{ display: "block", border: "1.5px solid #EDE0CC", color: "#4A4A4A", textAlign: "center", padding: "13px", textDecoration: "none", fontSize: 14, fontWeight: 600, borderRadius: 6, backgroundColor: "#fff" }}>
                Google マップで見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
