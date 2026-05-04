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
    <section style={{ backgroundColor: "#FDFAF6", padding: "80px 28px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <span className="sec-label">ひだまり整骨院の特長</span>
          <h2 style={{ fontSize: "clamp(20px, 2.6vw, 28px)", fontWeight: 700, color: "#2D2D2D", lineHeight: 1.5 }}>
            地域の皆さまに<br className="show-sp" />安心してご来院いただくために
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="grid-2">
          {FEATURES.map((f) => (
            <div key={f.num} style={{ backgroundColor: "#fff", borderRadius: 10, padding: "32px 28px", border: "1px solid #EDE0CC", display: "flex", gap: 20, alignItems: "flex-start" }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#F5DCC2", flexShrink: 0, lineHeight: 1, marginTop: 4 }}>{f.num}</div>
              <div>
                <div style={{ width: 28, height: 3, backgroundColor: "#D96B0B", borderRadius: 2, marginBottom: 12 }} />
                <div style={{ fontSize: 16, fontWeight: 700, color: "#2D2D2D", marginBottom: 10, lineHeight: 1.5 }}>{f.title}</div>
                <p style={{ fontSize: 14, color: "#4A4A4A", lineHeight: 2.0 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
