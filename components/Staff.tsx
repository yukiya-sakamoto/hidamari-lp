const IMG = "https://www.hidamari-syoujyaku.com/image/about-item";

const DIRECTOR = {
  name: "島村 康夫",
  role: "院長",
  image: `${IMG}/shimamura.jpg`,
  profile: "1970年8月12日生。石川県出身。東海大学（柔道部）卒業後、北信越柔整専門学校に進学。付属医院と専門学校の講師を7年間務め、知識と経験を積む。",
  message: "大学の柔道で肩関節の脱臼という大怪我を経験し、この道に進みました。体の痛みを身をもって知っているからこそ、治療家として一人でも多くの患者さんの痛みが楽になるよう日々頑張っています。",
  qualifications: ["柔道五段・C級審判員", "専科教員（柔道整復師・保健体育）"],
  hobbies: ["温泉", "ドライブ", "居酒屋めぐり"],
};

const STAFF = [
  { name: "樫本 真一", profile: "A型・愛媛県出身・平成医療学園卒業", message: "技術においても接客においても地域No.1を目指しております。", image: `${IMG}/staff8.jpg` },
  { name: "中尾 浩平", profile: "柔道整復師・大阪出身・AB型", message: "患者様が来た時よりも必ず楽になって帰れるように頑張ります。", image: `${IMG}/staff2.jpg` },
  { name: "中川", profile: "AB型・趣味：音楽鑑賞・DVD", message: "来られた方に「ここの整骨院に来て良かった」と言われるよう頑張ります。", image: `${IMG}/staff3.jpg` },
  { name: "西田", profile: "大阪出身・O型・おうし座・趣味：買い物", message: "患者様のお役に立てるよう精一杯努力します。", image: `${IMG}/staff7.jpg` },
  { name: "おおふか", profile: "趣味：ゴルフ", message: "一人でも多くの患者さんの笑顔が見たいです。患者さんも笑顔、私も笑顔を目標に頑張ります。", image: `${IMG}/staff9.jpg` },
];

export default function Staff() {
  return (
    <section id="staff" style={{ backgroundColor: "#FFFAF5", padding: "88px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ width: 24, height: 1, backgroundColor: "#E8730A" }} />
            <span style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, letterSpacing: "0.25em" }}>STAFF</span>
            <div style={{ width: 24, height: 1, backgroundColor: "#E8730A" }} />
          </div>
          <h2 style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 900, color: "#2D1400", letterSpacing: "-0.02em" }}>院長・スタッフ紹介</h2>
        </div>

        {/* 院長 */}
        <div style={{ backgroundColor: "#FFF4E6", border: "1px solid #FDDCB5", borderRadius: 10, padding: "36px 32px", marginBottom: 40, display: "grid", gridTemplateColumns: "200px 1fr", gap: 36, alignItems: "start" }} className="grid-2">
          <div style={{ borderRadius: 8, overflow: "hidden", border: "2px solid #FDDCB5" }}>
            <img src={DIRECTOR.image} alt={DIRECTOR.name} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <div>
            <div style={{ fontSize: 11, color: "#E8730A", fontWeight: 700, letterSpacing: "0.12em", marginBottom: 4 }}>{DIRECTOR.role}</div>
            <div style={{ fontSize: 26, fontWeight: 900, color: "#2D1400", marginBottom: 16 }}>{DIRECTOR.name}</div>
            <p style={{ fontSize: 13, color: "#7A4010", lineHeight: 1.95, marginBottom: 14 }}>{DIRECTOR.profile}</p>
            <div style={{ backgroundColor: "#fff", border: "1px solid #FDDCB5", borderRadius: 6, padding: "14px 16px", marginBottom: 14 }}>
              <p style={{ fontSize: 13, color: "#7A4010", lineHeight: 1.9, fontStyle: "italic" }}>「{DIRECTOR.message}」</p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {DIRECTOR.qualifications.map(q => (
                <span key={q} style={{ fontSize: 11, color: "#E8730A", backgroundColor: "#FFF9F0", border: "1px solid #FDDCB5", padding: "3px 10px", borderRadius: 2 }}>{q}</span>
              ))}
              {DIRECTOR.hobbies.map(h => (
                <span key={h} style={{ fontSize: 11, color: "#7A4010", backgroundColor: "#fff", border: "1px solid #FDDCB5", padding: "3px 10px", borderRadius: 2 }}>趣味：{h}</span>
              ))}
            </div>
          </div>
        </div>

        {/* スタッフ */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }} className="grid-4">
          {STAFF.map(s => (
            <div key={s.name} style={{ backgroundColor: "#fff", border: "1px solid #FDDCB5", borderRadius: 8, overflow: "hidden" }}>
              <div style={{ aspectRatio: "230 / 275", overflow: "hidden", backgroundColor: "#FFF4E6" }}>
                <img src={s.image} alt={s.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div style={{ padding: "16px 14px" }}>
                <div style={{ fontSize: 14, fontWeight: 900, color: "#2D1400", marginBottom: 6 }}>{s.name}</div>
                <div style={{ fontSize: 10, color: "#B45309", marginBottom: 8 }}>{s.profile}</div>
                <p style={{ fontSize: 11, color: "#7A4010", lineHeight: 1.75 }}>{s.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
