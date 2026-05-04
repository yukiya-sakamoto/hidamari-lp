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
    <section id="pricing" style={{ backgroundColor: "#FFF4E6", padding: "88px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ width: 24, height: 1, backgroundColor: "#E8730A" }} />
            <span style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, letterSpacing: "0.25em" }}>PRICING</span>
            <div style={{ width: 24, height: 1, backgroundColor: "#E8730A" }} />
          </div>
          <h2 style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 900, color: "#2D1400", letterSpacing: "-0.02em" }}>料金表</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="grid-2">
          {/* 保険内料金 */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #FDDCB5", borderRadius: 8, overflow: "hidden" }}>
            <div style={{ backgroundColor: "#E8730A", padding: "14px 20px" }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>保険内料金表（目安）</div>
            </div>
            <div style={{ padding: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 100px 100px", gap: 0, marginBottom: 4 }}>
                <div style={{ fontSize: 11, color: "#B45309", fontWeight: 700, padding: "8px 0", borderBottom: "1px solid #FFF0DC" }}></div>
                <div style={{ fontSize: 11, color: "#B45309", fontWeight: 700, textAlign: "center", padding: "8px 0", borderBottom: "1px solid #FFF0DC" }}>3割負担</div>
                <div style={{ fontSize: 11, color: "#B45309", fontWeight: 700, textAlign: "center", padding: "8px 0", borderBottom: "1px solid #FFF0DC" }}>1割負担</div>
              </div>
              {[["初診", "1,500円", "500円"], ["再診", "680円", "200円"]].map(([label, a, b]) => (
                <div key={label} style={{ display: "grid", gridTemplateColumns: "1fr 100px 100px", borderBottom: "1px solid #FFF0DC" }}>
                  <div style={{ fontSize: 13, color: "#2D1400", fontWeight: 600, padding: "12px 0" }}>{label}</div>
                  <div style={{ fontSize: 15, color: "#E8730A", fontWeight: 900, textAlign: "center", padding: "12px 0" }}>{a}</div>
                  <div style={{ fontSize: 15, color: "#7A4010", fontWeight: 700, textAlign: "center", padding: "12px 0" }}>{b}</div>
                </div>
              ))}
              <p style={{ fontSize: 11, color: "#B45309", marginTop: 12, lineHeight: 1.7 }}>
                ※ 窓口でいただく金額には、一部実費診療代が含まれる場合がございます。
              </p>
            </div>
          </div>

          {/* 実費診療 */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #FDDCB5", borderRadius: 8, overflow: "hidden" }}>
            <div style={{ backgroundColor: "#7A4010", padding: "14px 20px" }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>実費診療一例</div>
            </div>
            <div style={{ padding: "20px" }}>
              {EXTRA.map(([label, price]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #FFF0DC", padding: "10px 0" }}>
                  <span style={{ fontSize: 12, color: "#2D1400" }}>{label}</span>
                  <span style={{ fontSize: 12, color: "#E8730A", fontWeight: 700 }}>{price}</span>
                </div>
              ))}
              <p style={{ fontSize: 11, color: "#B45309", marginTop: 12, lineHeight: 1.7 }}>
                ※ 症状によっては実費がかかる場合がございます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
