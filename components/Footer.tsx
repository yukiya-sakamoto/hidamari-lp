"use client";

const NAV_LINKS = [
  ["院長ご挨拶", "#about"], ["症状・施術", "#symptoms"], ["施術の流れ", "#flow"],
  ["患者様の声", "#voice"], ["スタッフ", "#staff"], ["料金", "#pricing"], ["アクセス", "#access"],
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0F0500", borderTop: "1px solid rgba(232,115,10,0.3)", padding: "56px 28px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 32, marginBottom: 48 }} className="footer-grid">
          <div>
            <div style={{ fontSize: 18, fontWeight: 900, color: "#fff", marginBottom: 2 }}>ひだまり整骨院 <span style={{ color: "#E8730A" }}>正雀院</span></div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: "0.12em", marginBottom: 20 }}>HIDAMARI SEIKOTSU-IN SHOJAKU</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginBottom: 16, lineHeight: 2.0 }}>
              大阪府摂津市正雀本町１丁目20-30<br />
              阪急正雀駅より徒歩4分 / JR岸辺駅より徒歩10分
            </div>
            <a href="tel:0663193339" style={{ display: "block", fontSize: 24, fontWeight: 900, color: "#E8730A", textDecoration: "none", marginBottom: 4 }}>06-6319-3339</a>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>各種保険・交通事故・労災保険取扱</div>
          </div>
          <div>
            <div style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, letterSpacing: "0.16em", marginBottom: 16, paddingBottom: 10, borderBottom: "1px solid rgba(232,115,10,0.2)" }}>MENU</div>
            {NAV_LINKS.map(([label, href]) => (
              <a key={label} href={href} style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none", marginBottom: 12, letterSpacing: "0.02em" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#E8730A"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"}>
                {label}
              </a>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, letterSpacing: "0.16em", marginBottom: 16, paddingBottom: 10, borderBottom: "1px solid rgba(232,115,10,0.2)" }}>HOURS</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 2.4 }}>
              月〜金　9:00〜12:00 / 15:00〜20:00<br />
              土曜　　9:00〜12:00（午後休）<br />
              日・祝　休診
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 20, textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
          &copy; 2025 ひだまり整骨院 正雀院. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
