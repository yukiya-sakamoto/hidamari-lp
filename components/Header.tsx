"use client";
import { useState } from "react";

const NAV = [
  { label: "症状・施術", href: "#symptoms" },
  { label: "施術の流れ", href: "#flow" },
  { label: "患者様の声", href: "#voice" },
  { label: "スタッフ", href: "#staff" },
  { label: "料金", href: "#pricing" },
  { label: "アクセス", href: "#access" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, backgroundColor: "rgba(255,250,245,0.97)", borderBottom: "2px solid #E8730A", backdropFilter: "blur(8px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <a href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <div style={{ fontSize: 15, fontWeight: 900, color: "#E8730A", lineHeight: 1.2 }}>ひだまり整骨院</div>
          <div style={{ fontSize: 11, color: "#7A4010", fontWeight: 600, letterSpacing: "0.06em" }}>正雀院</div>
        </a>

        <nav className="hide-sp" style={{ display: "flex", gap: 20, flex: 1, justifyContent: "center" }}>
          {NAV.map(n => (
            <a key={n.label} href={n.href} style={{ fontSize: 12, color: "#7A4010", textDecoration: "none", fontWeight: 600, whiteSpace: "nowrap" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#E8730A"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#7A4010"}>
              {n.label}
            </a>
          ))}
        </nav>

        <a href="tel:0663193339" className="hide-sp" style={{ display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: "#E8730A", color: "#fff", padding: "8px 16px", borderRadius: 3, textDecoration: "none", fontSize: 13, fontWeight: 800, flexShrink: 0 }}>
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .98h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.12 6.12l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
          06-6319-3339
        </a>

        <button onClick={() => setOpen(!open)} className="show-sp" style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <line x1="0" y1="1" x2="22" y2="1" stroke="#2D1400" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="0" y1="8" x2="22" y2="8" stroke="#2D1400" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="0" y1="15" x2="22" y2="15" stroke="#2D1400" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {open && (
        <div style={{ backgroundColor: "#FFFAF5", borderTop: "1px solid #FDDCB5", padding: "12px 20px 20px" }}>
          {NAV.map(n => (
            <a key={n.label} href={n.href} onClick={() => setOpen(false)}
              style={{ display: "block", padding: "12px 0", fontSize: 14, color: "#2D1400", textDecoration: "none", borderBottom: "1px solid #FFF0DC", fontWeight: 600 }}>
              {n.label}
            </a>
          ))}
          <a href="tel:0663193339" style={{ display: "block", marginTop: 16, backgroundColor: "#E8730A", color: "#fff", textAlign: "center", padding: "13px", borderRadius: 3, textDecoration: "none", fontSize: 16, fontWeight: 800 }}>
            06-6319-3339
          </a>
        </div>
      )}
    </header>
  );
}
