"use client";
import Link from "next/link";
import { SYMPTOMS } from "../lib/symptoms";

export default function Symptoms() {
  return (
    <section id="symptoms" style={{ backgroundColor: "#fff", padding: "96px 28px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div className="sec-eyebrow">
              <span style={{ fontSize: 10, color: "#2D6A4F", fontWeight: 700, letterSpacing: "0.2em" }}>SYMPTOMS & TREATMENT</span>
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, color: "#0F2018", letterSpacing: "-0.02em" }}>症状・施術メニュー</h2>
          </div>
          <Link href="/symptoms/" style={{ fontSize: 13, color: "#2D6A4F", fontWeight: 700, textDecoration: "none" }}>
            すべての症状を見る →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, backgroundColor: "#C5DBCF" }} className="grid-4">
          {SYMPTOMS.map(s => (
            <Link key={s.slug} href={`/symptoms/${s.slug}/`}
              style={{ backgroundColor: "#FFFDF9", padding: "24px 20px", textDecoration: "none", display: "block" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F0F7F3"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#FFFDF9"; }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#0F2018", marginBottom: 6 }}>{s.name}</div>
              <div style={{ fontSize: 11, color: "#3D6A52", lineHeight: 1.6 }}>{s.desc}</div>
              <div style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, marginTop: 12 }}>詳細 →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
