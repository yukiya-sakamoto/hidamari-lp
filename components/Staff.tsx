const IMG = "https://www.hidamari-syoujyaku.com/image/about-item";

const STAFF = [
  { name: "樫本 真一", profile: "A型・愛媛県出身・平成医療学園卒業", message: "技術においても接客においても地域No.1を目指しております。", image: `${IMG}/staff8.jpg` },
  { name: "中尾 浩平", profile: "柔道整復師・大阪出身・AB型", message: "患者様が来た時よりも必ず楽になって帰れるように頑張ります。", image: `${IMG}/staff2.jpg` },
  { name: "中川", profile: "AB型・趣味：音楽鑑賞・DVD", message: "来られた方に「ここの整骨院に来て良かった」と言われるよう頑張ります。", image: `${IMG}/staff3.jpg` },
  { name: "西田", profile: "大阪出身・O型・おうし座・趣味：買い物", message: "患者様のお役に立てるよう精一杯努力します。", image: `${IMG}/staff7.jpg` },
  { name: "おおふか", profile: "趣味：ゴルフ", message: "一人でも多くの患者さんの笑顔が見たいです。患者さんも笑顔、私も笑顔を目標に頑張ります。", image: `${IMG}/staff9.jpg` },
];

export default function Staff() {
  return (
    <section id="staff" style={{ backgroundColor: "#fff", padding: "96px 28px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 52 }}>
          <div className="sec-eyebrow">
            <span style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, letterSpacing: "0.2em" }}>STAFF</span>
          </div>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, color: "#1C0A00", letterSpacing: "-0.02em" }}>スタッフ紹介</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 1, backgroundColor: "#F0DCC0" }} className="grid-5">
          {STAFF.map(s => (
            <div key={s.name} style={{ backgroundColor: "#fff" }}>
              <div style={{ aspectRatio: "230 / 275", overflow: "hidden", backgroundColor: "#FFFAF5" }}>
                <img src={s.image} alt={s.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div style={{ padding: "18px 16px" }}>
                <div style={{ fontSize: 14, fontWeight: 900, color: "#1C0A00", marginBottom: 4 }}>{s.name}</div>
                <div style={{ fontSize: 10, color: "#B45309", marginBottom: 10, lineHeight: 1.6 }}>{s.profile}</div>
                <p style={{ fontSize: 11, color: "#7A4010", lineHeight: 1.85 }}>{s.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
