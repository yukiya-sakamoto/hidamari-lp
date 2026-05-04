const FEATURES = [
  {
    icon: "🚗",
    title: "交通事故専属スタッフ在籍",
    desc: "自賠責保険の手続き・保険会社への連絡報告はすべて当院が代行。安心して治療に専念できます。",
  },
  {
    icon: "🏥",
    title: "各種保険・労災対応",
    desc: "健康保険・各種保険・交通事故・労災保険に対応。初診3割負担で1,500円から。",
  },
  {
    icon: "🦴",
    title: "骨盤矯正・背骨矯正",
    desc: "産後の骨盤矯正から慢性腰痛まで。ゆがみを根本から整え、再発を防ぐプログラムをご提供。",
  },
  {
    icon: "😊",
    title: "予約不要・当日来院OK",
    desc: "お茶・コーヒーをご用意してお待ちしています。ちょっとした時間にもお気軽にご来院ください。",
  },
];

export default function Features() {
  return (
    <section style={{ backgroundColor: "#FFFAF5", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ width: 24, height: 1, backgroundColor: "#E8730A" }} />
            <span style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, letterSpacing: "0.25em" }}>FEATURES</span>
            <div style={{ width: 24, height: 1, backgroundColor: "#E8730A" }} />
          </div>
          <h2 style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 900, color: "#2D1400", letterSpacing: "-0.02em" }}>ひだまり整骨院が選ばれる理由</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="grid-4">
          {FEATURES.map((f, i) => (
            <div key={i} style={{ backgroundColor: "#fff", border: "1px solid #FDDCB5", borderRadius: 8, padding: "28px 20px", textAlign: "center" }}>
              <div style={{ fontSize: 36, marginBottom: 14 }}>{f.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 900, color: "#2D1400", marginBottom: 10, lineHeight: 1.5 }}>{f.title}</div>
              <p style={{ fontSize: 12, color: "#7A4010", lineHeight: 1.9 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
