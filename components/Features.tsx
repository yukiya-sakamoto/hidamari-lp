const FEATURES = [
  { num: "01", title: "交通事故専属サポート", desc: "自賠責保険の手続き・保険会社への連絡報告はすべて当院が代行。安心して治療に専念いただけます。" },
  { num: "02", title: "各種保険・労災対応", desc: "健康保険・各種保険・交通事故・労災保険に対応。初診3割負担で1,500円から受診可能です。" },
  { num: "03", title: "骨盤・背骨矯正", desc: "産後の骨盤矯正から慢性腰痛まで。ゆがみを根本から整え、再発を防ぐプログラムをご提供します。" },
  { num: "04", title: "予約不要・当日来院OK", desc: "お茶・コーヒーをご用意してお待ちしています。ちょっとした時間にもお気軽にご来院ください。" },
];

export default function Features() {
  return (
    <section style={{ backgroundColor: "#EBF7F1", padding: "72px 28px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="sec-label" style={{ display: "block", color: "#52B788" }}>WHY CHOOSE US</span>
          <h2 style={{ fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 900, color: "#1A1A1A" }}>選ばれる4つの理由</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="grid-4">
          {FEATURES.map((f) => (
            <div key={f.num} style={{ backgroundColor: "#fff", borderRadius: 8, padding: "28px 22px", borderTop: "4px solid #E8730A" }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#FDDCB5", marginBottom: 12 }}>{f.num}</div>
              <div style={{ fontSize: 15, fontWeight: 900, color: "#1A1A1A", marginBottom: 10, lineHeight: 1.5 }}>{f.title}</div>
              <p style={{ fontSize: 12, color: "#555", lineHeight: 1.95 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
