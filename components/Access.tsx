import Link from "next/link";

const IMG = "https://www.hidamari-syoujyaku.com/image/about-item";

export default function Access() {
  return (
    <section id="access" style={{ backgroundColor: "#fff", padding: "96px 28px", borderTop: "1px solid #C5DBCF" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div className="sec-eyebrow">
              <span style={{ fontSize: 10, color: "#2D6A4F", fontWeight: 700, letterSpacing: "0.2em" }}>ACCESS</span>
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, color: "#0F2018", letterSpacing: "-0.02em" }}>アクセス</h2>
          </div>
          <Link href="/access/" style={{ fontSize: 13, color: "#2D6A4F", fontWeight: 700, textDecoration: "none" }}>
            詳しく見る →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="grid-2">
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ overflow: "hidden", border: "1px solid #C5DBCF" }}>
              <img src={`${IMG}/access_p.png`} alt="外観" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ overflow: "hidden", border: "1px solid #C5DBCF" }}>
                <img src={`${IMG}/in.jpg`} alt="院内" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              <div style={{ overflow: "hidden", border: "1px solid #C5DBCF" }}>
                <img src={`${IMG}/parking.png`} alt="駐車場" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
          </div>

          <div>
            <div style={{ fontSize: 20, fontWeight: 900, color: "#0F2018", marginBottom: 4 }}>ひだまり整骨院 正雀院</div>
            <div style={{ fontSize: 13, color: "#3D6A52", marginBottom: 28 }}>大阪府摂津市正雀本町１丁目20-30</div>

            <div style={{ borderTop: "1px solid #C5DBCF", marginBottom: 24 }}>
              {[
                ["最寄り駅", "阪急 正雀駅より徒歩4分 / JR 岸辺駅より徒歩10分"],
                ["駐車場", "2台完備・駐車料金は当院が負担"],
                ["保険", "各種保険・交通事故・労災保険取扱"],
              ].map(([label, val]) => (
                <div key={label} style={{ display: "flex", gap: 20, borderBottom: "1px solid #C5DBCF", padding: "14px 0" }}>
                  <span style={{ fontSize: 10, color: "#2D6A4F", fontWeight: 700, width: 56, flexShrink: 0, paddingTop: 2 }}>{label}</span>
                  <span style={{ fontSize: 13, color: "#0F2018", lineHeight: 1.7 }}>{val}</span>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: "#F0F7F3", border: "1px solid #C5DBCF", padding: "18px 22px", marginBottom: 20 }}>
              <div style={{ fontSize: 10, color: "#2D6A4F", fontWeight: 700, marginBottom: 12, letterSpacing: "0.1em" }}>受付時間</div>
              {[["月〜金", "9:00〜12:00 / 15:00〜20:00"], ["土曜", "9:00〜12:00（午後休）"], ["日・祝", "休診"]].map(([day, time]) => (
                <div key={day} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #C5DBCF", padding: "10px 0" }}>
                  <span style={{ fontSize: 12, color: "#3D6A52", fontWeight: 600 }}>{day}</span>
                  <span style={{ fontSize: 12, color: "#0F2018", fontWeight: 700 }}>{time}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="tel:0663193339" style={{ display: "block", backgroundColor: "#E8730A", color: "#fff", textAlign: "center", padding: "15px", textDecoration: "none", fontSize: 19, fontWeight: 900, borderRadius: 2 }}>
                06-6319-3339
              </a>
              <a href="https://maps.google.com/maps?q=大阪府摂津市正雀本町１丁目20-30" target="_blank" rel="noopener noreferrer"
                style={{ display: "block", border: "1px solid #C5DBCF", color: "#2D6A4F", textAlign: "center", padding: "12px", textDecoration: "none", fontSize: 13, fontWeight: 700, borderRadius: 2 }}>
                Google マップで見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
