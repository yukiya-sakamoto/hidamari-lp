"use client";
import Link from "next/link";

interface Props {
  label: string;
  title: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function PageHero({ label, title, breadcrumb }: Props) {
  return (
    <div style={{ backgroundColor: "#1A3D2F", paddingTop: 64 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "52px 28px 48px" }}>
        {breadcrumb && (
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 20 }}>
            {breadcrumb.map((b, i) => (
              <span key={b.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {i > 0 && <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 11 }}>/</span>}
                <Link href={b.href} style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#E8730A"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"}>
                  {b.label}
                </Link>
              </span>
            ))}
          </div>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <span style={{ width: 32, height: 1, backgroundColor: "#E8730A", display: "inline-block" }} />
          <span style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, letterSpacing: "0.2em" }}>{label}</span>
        </div>
        <h1 style={{ fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.2 }}>{title}</h1>
      </div>
    </div>
  );
}
