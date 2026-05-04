"use client";
import Link from "next/link";
import { SYMPTOMS } from "../lib/symptoms";

export default function Symptoms() {
  return (
    <section id="symptoms" style={{ backgroundColor: "#FFF4E6", padding: "80px 28px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36, flexWrap: "wrap", gap: 12 }}>
          <div>
            <span className="sec-label">SYMPTOMS & TREATMENT</span>
            <h2 style={{ fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 900, color: "#1A1A1A" }}>症状・施術メニュー</h2>
          </div>
          <Link href="/symptoms/" style={{ fontSize: 13, color: "#E8730A", fontWeight: 700, textDecoration: "none" }}>すべての症状を見る →</Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }} className="grid-4">
          {SYMPTOMS.map(s => (
            <Link key={s.slug} href={`/symptoms/${s.slug}/`}
              style={{ backgroundColor: "#fff", border: "1px solid #FDDCB5", borderRadius: 8, padding: "20px 16px", textDecoration: "none", display: "block" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#E8730A"; el.style.boxShadow = "0 4px 12px rgba(232,115,10,0.12)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#FDDCB5"; el.style.boxShadow = "none"; }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#1A1A1A", marginBottom: 6 }}>{s.name}</div>
              <div style={{ fontSize: 11, color: "#888", lineHeight: 1.6, marginBottom: 12 }}>{s.desc}</div>
              <div style={{ fontSize: 11, color: "#E8730A", fontWeight: 700 }}>詳細 →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
