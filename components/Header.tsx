"use client";
import { useState } from "react";
import Link from "next/link";

const NAV = [
  { label: "院長ご挨拶", href: "/#about" },
  { label: "症状・施術", href: "/symptoms/" },
  { label: "施術の流れ", href: "/flow/" },
  { label: "患者様の声", href: "/#voice" },
  { label: "スタッフ", href: "/staff/" },
  { label: "料金", href: "/pricing/" },
  { label: "アクセス", href: "/access/" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, backgroundColor: "#fff", borderBottom: "1px solid #EDE0CC", boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}>
      {/* Top bar: hours + phone */}
      <div className="hide-sp" style={{ backgroundColor: "#F7F0E6", borderBottom: "1px solid #EDE0CC", padding: "5px 28px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "#666259" }}>
            月〜金 9:00〜12:00 / 15:00〜20:00　土 9:00〜12:00　日祝 休診
          </span>
          <a href="tel:0663193339" style={{ fontSize: 13, fontWeight: 700, color: "#D96B0B", textDecoration: "none", letterSpacing: "0.04em" }}>
            06-6319-3339
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <div style={{ fontSize: 18, fontWeight: 800, color: "#D96B0B", lineHeight: 1.15, letterSpacing: "-0.01em" }}>ひだまり整骨院</div>
          <div style={{ fontSize: 10, color: "#999", letterSpacing: "0.12em", marginTop: 1 }}>正雀院</div>
        </Link>

        <nav className="hide-sp" style={{ display: "flex", gap: 24, flex: 1, justifyContent: "center" }}>
          {NAV.map(n => (
            <Link key={n.label} href={n.href}
              style={{ fontSize: 13, color: "#2D2D2D", textDecoration: "none", fontWeight: 600, whiteSpace: "nowrap", padding: "4px 0", borderBottom: "2px solid transparent" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#D96B0B"; (e.currentTarget as HTMLElement).style.borderBottomColor = "#D96B0B"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#2D2D2D"; (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent"; }}>
              {n.label}
            </Link>
          ))}
        </nav>

        <a href="tel:0663193339" className="hide-sp" style={{ display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: "#D96B0B", color: "#fff", padding: "10px 22px", borderRadius: 6, textDecoration: "none", fontSize: 14, fontWeight: 700, flexShrink: 0, letterSpacing: "0.03em" }}>
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .98h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.12 6.12l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
          お電話でのご相談
        </a>

        <button onClick={() => setOpen(!open)} className="show-sp" style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <line x1="0" y1="1" x2="22" y2="1" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round"/>
            <line x1="0" y1="8" x2="22" y2="8" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round"/>
            <line x1="0" y1="15" x2="22" y2="15" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {open && (
        <div style={{ backgroundColor: "#FDFAF6", borderTop: "1px solid #EDE0CC", padding: "8px 20px 20px" }}>
          {NAV.map(n => (
            <Link key={n.label} href={n.href} onClick={() => setOpen(false)}
              style={{ display: "block", padding: "14px 0", fontSize: 15, color: "#2D2D2D", textDecoration: "none", borderBottom: "1px solid #EDE0CC", fontWeight: 600 }}>
              {n.label}
            </Link>
          ))}
          <a href="tel:0663193339" style={{ display: "block", marginTop: 18, backgroundColor: "#D96B0B", color: "#fff", textAlign: "center", padding: "16px", borderRadius: 6, textDecoration: "none", fontSize: 18, fontWeight: 700 }}>
            06-6319-3339
          </a>
        </div>
      )}
    </header>
  );
}
