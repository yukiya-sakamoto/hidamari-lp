import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";

export const metadata = { title: "料金表 | ひだまり整骨院 正雀院" };

const EXTRA = [
  ["各種骨格矯正", "100円〜"],
  ["マッサージジェル塗布", "50円〜"],
  ["湿布", "50円〜"],
  ["包帯・テーピング固定", "100円〜"],
  ["各種コルセット", "300円〜"],
  ["固定器具", "300円〜"],
  ["その他衛生材料費", "20円〜"],
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <PageHero
        label="PRICING"
        title="料金表"
        breadcrumb={[{ label: "ホーム", href: "/" }, { label: "料金", href: "/pricing/" }]}
      />

      <main style={{ backgroundColor: "#FDFAF6", padding: "80px 28px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontSize: 15, color: "#4A4A4A", lineHeight: 2.0, marginBottom: 48, maxWidth: 640 }}>
            健康保険・各種保険・交通事故・労災保険に対応しています。窓口でいただく金額には一部実費診療代が含まれる場合がございます。
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 900, marginBottom: 40 }} className="grid-2">
            {/* 保険内料金 */}
            <div style={{ backgroundColor: "#fff", border: "1px solid #EDE0CC", borderRadius: 10, overflow: "hidden" }}>
              <div style={{ backgroundColor: "#D96B0B", padding: "16px 24px" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>保険内料金表（目安）</div>
              </div>
              <div style={{ padding: "24px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 100px 100px", marginBottom: 4 }}>
                  <div />
                  <div style={{ fontSize: 11, color: "#888", fontWeight: 700, textAlign: "center", padding: "6px 0", borderBottom: "1px solid #EDE0CC" }}>3割負担</div>
                  <div style={{ fontSize: 11, color: "#888", fontWeight: 700, textAlign: "center", padding: "6px 0", borderBottom: "1px solid #EDE0CC" }}>1割負担</div>
                </div>
                {[["初診", "1,500円", "500円"], ["再診", "680円", "200円"]].map(([label, a, b]) => (
                  <div key={label} style={{ display: "grid", gridTemplateColumns: "1fr 100px 100px", borderBottom: "1px solid #F7F0E6" }}>
                    <div style={{ fontSize: 14, color: "#2D2D2D", fontWeight: 600, padding: "16px 0" }}>{label}</div>
                    <div style={{ fontSize: 18, color: "#D96B0B", fontWeight: 700, textAlign: "center", padding: "16px 0" }}>{a}</div>
                    <div style={{ fontSize: 18, color: "#05AF4B", fontWeight: 700, textAlign: "center", padding: "16px 0" }}>{b}</div>
                  </div>
                ))}
                <p style={{ fontSize: 12, color: "#888", marginTop: 16, lineHeight: 1.8 }}>
                  ※ 窓口でいただく金額には、一部実費診療代が含まれる場合がございます。
                </p>
              </div>
            </div>

            {/* 実費診療 */}
            <div style={{ backgroundColor: "#fff", border: "1px solid #EDE0CC", borderRadius: 10, overflow: "hidden" }}>
              <div style={{ backgroundColor: "#05AF4B", padding: "16px 24px" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>実費診療一例</div>
              </div>
              <div style={{ padding: "24px" }}>
                {EXTRA.map(([label, price]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #F7F0E6", padding: "12px 0" }}>
                    <span style={{ fontSize: 14, color: "#2D2D2D" }}>{label}</span>
                    <span style={{ fontSize: 14, color: "#D96B0B", fontWeight: 700 }}>{price}</span>
                  </div>
                ))}
                <p style={{ fontSize: 12, color: "#888", marginTop: 16, lineHeight: 1.8 }}>
                  ※ 症状によっては実費がかかる場合がございます。
                </p>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: "#EAF7F1", border: "1px solid #A8E0C4", borderRadius: 10, padding: "28px 32px", maxWidth: 900 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#05AF4B", marginBottom: 16 }}>対応保険について</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {[
                ["健康保険", "各種健康保険に対応しています"],
                ["交通事故", "自賠責保険・手続き代行あり"],
                ["労災保険", "労働災害による傷害に対応"],
              ].map(([title, desc]) => (
                <div key={title}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#2D2D2D", marginBottom: 6 }}>{title}</div>
                  <div style={{ fontSize: 13, color: "#4A4A4A", lineHeight: 1.75 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
