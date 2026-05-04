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
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, backgroundColor: "#E8730A", boxShadow: "0 2px 8px rgba(232,115,10,0.25)" }}>
      {/* Top bar: hours + phone */}
      <div className="hide-sp" style={{ backgroundColor: "#C25F06", padding: "4px 28px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.85)" }}>
            月〜金 9:00〜12:00 / 15:00〜20:00　土 9:00〜12:00　日祝 休診
          </span>
          <a href="tel:0663193339" style={{ fontSize: 13, fontWeight: 900, color: "#fff", textDecoration: "none", letterSpacing: "0.06em" }}>
            06-6319-3339
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px", height: 58, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <div style={{ fontSize: 18, fontWeight: 900, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.01em" }}>ひだまり整骨院</div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.75)", letterSpacing: "0.1em", marginTop: 1 }}>正雀院</div>
        </Link>

        <nav className="hide-sp" style={{ display: "flex", gap: 20, flex: 1, justifyContent: "center" }}>
          {NAV.map(n => (
            <Link key={n.label} href={n.href}
              style={{ fontSize: 12, color: "rgba(255,255,255,0.9)", textDecoration: "none", fontWeight: 600, whiteSpace: "nowrap", padding: "4px 0" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#fff"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)"}>
              {n.label}
            </Link>
          ))}
        </nav>

        <a href="tel:0663193339" className="hide-sp" style={{ display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: "#fff", color: "#E8730A", padding: "9px 20px", borderRadius: 4, textDecoration: "none", fontSize: 15, fontWeight: 900, flexShrink: 0, letterSpacing: "0.04em" }}>
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .98h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.12 6.12l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#E8730A" strokeWidth="1.5" strokeLinecap="round"/></svg>
          06-6319-3339
        </a>

        <button onClick={() => setOpen(!open)} className="show-sp" style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <line x1="0" y1="1" x2="22" y2="1" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            <line x1="0" y1="8" x2="22" y2="8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            <line x1="0" y1="15" x2="22" y2="15" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {open && (
        <div style={{ backgroundColor: "#C25F06", padding: "8px 20px 20px" }}>
          {NAV.map(n => (
            <Link key={n.label} href={n.href} onClick={() => setOpen(false)}
              style={{ display: "block", padding: "13px 0", fontSize: 14, color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.15)", fontWeight: 600 }}>
              {n.label}
            </Link>
          ))}
          <a href="tel:0663193339" style={{ display: "block", marginTop: 16, backgroundColor: "#fff", color: "#E8730A", textAlign: "center", padding: "14px", borderRadius: 4, textDecoration: "none", fontSize: 18, fontWeight: 900 }}>
            06-6319-3339
          </a>
        </div>
      )}
    </header>
  );
}
