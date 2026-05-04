"use client";

const NAV_LINKS = [
  ["症状・施術", "#symptoms"], ["施術の流れ", "#flow"], ["患者様の声", "#voice"],
  ["スタッフ", "#staff"], ["料金", "#pricing"], ["アクセス", "#access"],
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2D1400", padding: "56px 24px 32px", borderTop: "3px solid #E8730A" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 32, marginBottom: 40 }} className="footer-grid">
          <div>
            <div style={{ fontSize: 18, fontWeight: 900, color: "#E8730A", marginBottom: 4 }}>ひだまり整骨院 正雀院</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginBottom: 16, lineHeight: 1.9 }}>
              大阪府摂津市正雀本町１丁目20-30<br />
              阪急正雀駅より徒歩4分 / JR岸辺駅より徒歩10分
            </div>
            <a href="tel:0663193339" style={{ display: "block", fontSize: 24, fontWeight: 900, color: "#E8730A", textDecoration: "none", marginBottom: 4 }}>06-6319-3339</a>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>各種保険・交通事故・労災保険取扱</div>
          </div>
          <div>
            <div style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, letterSpacing: "0.16em", marginBottom: 14, paddingBottom: 8, borderBottom: "1px solid rgba(232,115,10,0.3)" }}>MENU</div>
            {NAV_LINKS.map(([label, href]) => (
              <a key={label} href={href} style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,0.6)", textDecoration: "none", marginBottom: 10 }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#E8730A"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"}>
                {label}
              </a>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, letterSpacing: "0.16em", marginBottom: 14, paddingBottom: 8, borderBottom: "1px solid rgba(232,115,10,0.3)" }}>HOURS</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 2.2 }}>
              月〜金　9:00〜12:00<br />
              　　　　15:00〜20:00<br />
              土曜　　9:00〜12:00<br />
              日・祝　休診
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20, textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
          © 2025 ひだまり整骨院 正雀院. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
