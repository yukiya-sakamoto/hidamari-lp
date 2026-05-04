const FEATURES = [
  {
    num: "01",
    title: "交通事故専属サポート",
    desc: "自賠責保険の手続き・保険会社への連絡報告はすべて当院が代行。安心して治療に専念いただけます。",
  },
  {
    num: "02",
    title: "各種保険・労災対応",
    desc: "健康保険・各種保険・交通事故・労災保険に対応。初診3割負担で1,500円から受診可能です。",
  },
  {
    num: "03",
    title: "骨盤・背骨矯正",
    desc: "産後の骨盤矯正から慢性腰痛まで。ゆがみを根本から整え、再発を防ぐプログラムをご提供します。",
  },
  {
    num: "04",
    title: "予約不要・当日来院OK",
    desc: "お茶・コーヒーをご用意してお待ちしています。ちょっとした時間にもお気軽にご来院ください。",
  },
];

export default function Features() {
  return (
    <section style={{ backgroundColor: "#FFFAF5", padding: "88px 28px", borderTop: "1px solid #F0DCC0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <div className="sec-eyebrow">
            <span style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, letterSpacing: "0.2em" }}>WHY CHOOSE US</span>
          </div>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, color: "#1C0A00", letterSpacing: "-0.02em" }}>選ばれる4つの理由</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, backgroundColor: "#F0DCC0" }} className="grid-4">
          {FEATURES.map((f) => (
            <div key={f.num} style={{ backgroundColor: "#fff", padding: "36px 28px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#E8730A", letterSpacing: "0.1em", marginBottom: 14, fontVariantNumeric: "tabular-nums" }}>{f.num}</div>
              <div style={{ width: 28, height: 2, backgroundColor: "#E8730A", marginBottom: 16 }} />
              <div style={{ fontSize: 15, fontWeight: 900, color: "#1C0A00", marginBottom: 12, lineHeight: 1.5 }}>{f.title}</div>
              <p style={{ fontSize: 12, color: "#7A4010", lineHeight: 2.0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
