"use client";
import Link from "next/link";

interface Props {
  label: string;
  title: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function PageHero({ label, title, breadcrumb }: Props) {
  return (
    <div style={{ backgroundColor: "#E8730A", paddingTop: 84 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "36px 28px 32px" }}>
        {breadcrumb && (
          <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 16 }}>
            {breadcrumb.map((b, i) => (
              <span key={b.href} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {i > 0 && <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>/</span>}
                <Link href={b.href} style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#fff"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"}>
                  {b.label}
                </Link>
              </span>
            ))}
          </div>
        )}
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)", fontWeight: 700, letterSpacing: "0.18em", marginBottom: 8 }}>{label}</div>
        <h1 style={{ fontSize: "clamp(24px, 4vw, 42px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>{title}</h1>
      </div>
    </div>
  );
}
