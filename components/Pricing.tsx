import Link from "next/link";

const EXTRA = [
  ["各種骨格矯正", "100円〜"],
  ["マッサージジェル塗布", "50円〜"],
  ["湿布", "50円〜"],
  ["包帯・テーピング固定", "100円〜"],
  ["各種コルセット", "300円〜"],
  ["固定器具", "300円〜"],
  ["その他衛生材料費", "20円〜"],
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ backgroundColor: "#FFF4E6", padding: "80px 28px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36, flexWrap: "wrap", gap: 12 }}>
          <div>
            <span className="sec-label">PRICING</span>
            <h2 style={{ fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 900, color: "#1A1A1A" }}>料金表</h2>
          </div>
          <Link href="/pricing/" style={{ fontSize: 13, color: "#E8730A", fontWeight: 700, textDecoration: "none" }}>詳細を見る →</Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 900 }} className="grid-2">
          <div style={{ backgroundColor: "#fff", border: "1px solid #FDDCB5", borderRadius: 8, overflow: "hidden" }}>
            <div style={{ backgroundColor: "#E8730A", padding: "14px 20px" }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>保険内料金表（目安）</div>
            </div>
            <div style={{ padding: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 90px 90px", marginBottom: 4 }}>
                <div style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, padding: "8px 0", borderBottom: "1px solid #FDDCB5" }} />
                <div style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, textAlign: "center", padding: "8px 0", borderBottom: "1px solid #FDDCB5" }}>3割負担</div>
                <div style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, textAlign: "center", padding: "8px 0", borderBottom: "1px solid #FDDCB5" }}>1割負担</div>
              </div>
              {[["初診", "1,500円", "500円"], ["再診", "680円", "200円"]].map(([label, a, b]) => (
                <div key={label} style={{ display: "grid", gridTemplateColumns: "1fr 90px 90px", borderBottom: "1px solid #FFF0DC" }}>
                  <div style={{ fontSize: 13, color: "#1A1A1A", fontWeight: 600, padding: "12px 0" }}>{label}</div>
                  <div style={{ fontSize: 16, color: "#E8730A", fontWeight: 900, textAlign: "center", padding: "12px 0" }}>{a}</div>
                  <div style={{ fontSize: 16, color: "#52B788", fontWeight: 700, textAlign: "center", padding: "12px 0" }}>{b}</div>
                </div>
              ))}
              <p style={{ fontSize: 11, color: "#888", marginTop: 12, lineHeight: 1.8 }}>※ 窓口でいただく金額には、一部実費診療代が含まれる場合がございます。</p>
            </div>
          </div>

          <div style={{ backgroundColor: "#fff", border: "1px solid #FDDCB5", borderRadius: 8, overflow: "hidden" }}>
            <div style={{ backgroundColor: "#52B788", padding: "14px 20px" }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>実費診療一例</div>
            </div>
            <div style={{ padding: "20px" }}>
              {EXTRA.map(([label, price]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #FFF0DC", padding: "10px 0" }}>
                  <span style={{ fontSize: 12, color: "#1A1A1A" }}>{label}</span>
                  <span style={{ fontSize: 12, color: "#E8730A", fontWeight: 700 }}>{price}</span>
                </div>
              ))}
              <p style={{ fontSize: 11, color: "#888", marginTop: 12, lineHeight: 1.8 }}>※ 症状によっては実費がかかる場合がございます。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
