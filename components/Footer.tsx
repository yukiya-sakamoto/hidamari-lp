"use client";
import Link from "next/link";

const NAV_LINKS: [string, string][] = [
  ["院長ご挨拶", "/#about"],
  ["症状・施術一覧", "/symptoms/"],
  ["施術の流れ", "/flow/"],
  ["患者様の声", "/#voice"],
  ["スタッフ紹介", "/staff/"],
  ["料金", "/pricing/"],
  ["アクセス", "/access/"],
];

const SYMPTOM_LINKS: [string, string][] = [
  ["交通事故治療", "/symptoms/jiko/"],
  ["肩こり", "/symptoms/katakori/"],
  ["腰痛・ギックリ腰", "/symptoms/youtu/"],
  ["ヘルニア・坐骨神経痛", "/symptoms/hernia/"],
  ["骨盤矯正", "/symptoms/kotuban/"],
  ["ねんざ", "/symptoms/nenza/"],
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1A1A1A", padding: "52px 28px 28px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Top: logo + info */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 32, marginBottom: 40, paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.1)" }} className="footer-grid">
          <div>
            <div style={{ fontSize: 17, fontWeight: 900, color: "#fff", marginBottom: 2 }}>ひだまり整骨院<span style={{ color: "#E8730A", marginLeft: 6 }}>正雀院</span></div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginBottom: 18 }}>HIDAMARI SEIKOTSU-IN SHOJAKU</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 14, lineHeight: 2.0 }}>
              大阪府摂津市正雀本町１丁目20-30<br />
              阪急正雀駅 徒歩4分 / JR岸辺駅 徒歩10分
            </div>
            <a href="tel:0663193339" style={{ display: "block", fontSize: 22, fontWeight: 900, color: "#E8730A", textDecoration: "none", marginBottom: 4 }}>06-6319-3339</a>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>各種保険・交通事故・労災保険取扱</div>
          </div>

          <div>
            <div style={{ fontSize: 10, color: "#05AF4B", fontWeight: 700, letterSpacing: "0.14em", marginBottom: 14, paddingBottom: 10, borderBottom: "1px solid rgba(82,183,136,0.25)" }}>MENU</div>
            {NAV_LINKS.map(([label, href]) => (
              <Link key={label} href={href} style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.5)", textDecoration: "none", marginBottom: 10 }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#E8730A"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"}>
                {label}
              </Link>
            ))}
          </div>

          <div>
            <div style={{ fontSize: 10, color: "#05AF4B", fontWeight: 700, letterSpacing: "0.14em", marginBottom: 14, paddingBottom: 10, borderBottom: "1px solid rgba(82,183,136,0.25)" }}>症状別</div>
            {SYMPTOM_LINKS.map(([label, href]) => (
              <Link key={label} href={href} style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.5)", textDecoration: "none", marginBottom: 10 }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#E8730A"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"}>
                {label}
              </Link>
            ))}
          </div>

          <div>
            <div style={{ fontSize: 10, color: "#05AF4B", fontWeight: 700, letterSpacing: "0.14em", marginBottom: 14, paddingBottom: 10, borderBottom: "1px solid rgba(82,183,136,0.25)" }}>HOURS</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 2.3 }}>
              月〜金<br /><span style={{ color: "rgba(255,255,255,0.7)", marginLeft: 8 }}>9:00〜12:00 / 15:00〜20:00</span><br />
              土曜<br /><span style={{ color: "rgba(255,255,255,0.7)", marginLeft: 8 }}>9:00〜12:00（午後休）</span><br />
              日・祝<br /><span style={{ color: "rgba(255,255,255,0.7)", marginLeft: 8 }}>休診</span>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
          &copy; 2025 ひだまり整骨院 正雀院. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
