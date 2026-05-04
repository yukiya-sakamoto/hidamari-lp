import Link from "next/link";

const IMG = "https://www.hidamari-syoujyaku.com/image/about-item";

export default function Access() {
  return (
    <section id="access" style={{ backgroundColor: "#fff", padding: "80px 28px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36, flexWrap: "wrap", gap: 12 }}>
          <div>
            <span className="sec-label">ACCESS</span>
            <h2 style={{ fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 900, color: "#1A1A1A" }}>アクセス</h2>
          </div>
          <Link href="/access/" style={{ fontSize: 13, color: "#E8730A", fontWeight: 700, textDecoration: "none" }}>詳しく見る →</Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36 }} className="grid-2">
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ borderRadius: 8, overflow: "hidden", border: "1px solid #FDDCB5" }}>
              <img src={`${IMG}/access_p.png`} alt="外観" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div style={{ borderRadius: 6, overflow: "hidden", border: "1px solid #FDDCB5" }}>
                <img src={`${IMG}/in.jpg`} alt="院内" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              <div style={{ borderRadius: 6, overflow: "hidden", border: "1px solid #FDDCB5" }}>
                <img src={`${IMG}/parking.png`} alt="駐車場" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
          </div>

          <div>
            <div style={{ fontSize: 20, fontWeight: 900, color: "#1A1A1A", marginBottom: 2 }}>ひだまり整骨院 正雀院</div>
            <div style={{ fontSize: 13, color: "#888", marginBottom: 24 }}>大阪府摂津市正雀本町１丁目20-30</div>

            <div style={{ marginBottom: 20 }}>
              {[
                ["最寄り駅", "阪急 正雀駅より徒歩4分 / JR 岸辺駅より徒歩10分"],
                ["駐車場", "2台完備・駐車料金は当院が負担"],
                ["保険", "各種保険・交通事故・労災保険取扱"],
              ].map(([label, val]) => (
                <div key={label} style={{ display: "flex", gap: 14, borderBottom: "1px solid #FFF0DC", padding: "12px 0", alignItems: "flex-start" }}>
                  <span style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, backgroundColor: "#FFF4E6", padding: "3px 8px", borderRadius: 3, flexShrink: 0, marginTop: 1 }}>{label}</span>
                  <span style={{ fontSize: 13, color: "#1A1A1A", lineHeight: 1.7 }}>{val}</span>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: "#E6F9EE", border: "1px solid #8FE5B4", borderRadius: 8, padding: "16px 20px", marginBottom: 18 }}>
              <div style={{ fontSize: 11, color: "#05AF4B", fontWeight: 700, marginBottom: 12, letterSpacing: "0.06em" }}>受付時間</div>
              {[["月〜金", "9:00〜12:00 / 15:00〜20:00"], ["土曜", "9:00〜12:00（午後休）"], ["日・祝", "休診"]].map(([day, time]) => (
                <div key={day} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #8FE5B4", padding: "9px 0" }}>
                  <span style={{ fontSize: 12, color: "#444", fontWeight: 600 }}>{day}</span>
                  <span style={{ fontSize: 12, color: "#1A1A1A", fontWeight: 700 }}>{time}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a href="tel:0663193339" style={{ display: "block", backgroundColor: "#E8730A", color: "#fff", textAlign: "center", padding: "15px", textDecoration: "none", fontSize: 20, fontWeight: 900, borderRadius: 4, letterSpacing: "0.04em" }}>
                06-6319-3339
              </a>
              <a href="https://maps.google.com/maps?q=大阪府摂津市正雀本町１丁目20-30" target="_blank" rel="noopener noreferrer"
                style={{ display: "block", border: "1px solid #FDDCB5", color: "#E8730A", textAlign: "center", padding: "12px", textDecoration: "none", fontSize: 13, fontWeight: 700, borderRadius: 4 }}>
                Google マップで見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
