import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";

export const metadata = { title: "スタッフ紹介 | ひだまり整骨院 正雀院" };

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

export default function StaffPage() {
  return (
    <>
      <Header />
      <PageHero
        label="STAFF"
        title="スタッフ紹介"
        breadcrumb={[{ label: "ホーム", href: "/" }, { label: "スタッフ紹介", href: "/staff/" }]}
      />

      <main style={{ backgroundColor: "#FDFAF6", padding: "80px 28px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* 院長 */}
          <div style={{ marginBottom: 72 }}>
            <span className="sec-label">院長</span>
            <h2 style={{ fontSize: "clamp(20px, 2.6vw, 28px)", fontWeight: 700, color: "#2D2D2D", marginBottom: 36 }}>院長ご挨拶</h2>

            <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 52, alignItems: "start" }} className="grid-2">
              <div style={{ borderRadius: 10, overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
                <img src={DIRECTOR.image} alt={DIRECTOR.name} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#D96B0B", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 4 }}>{DIRECTOR.role}</div>
                <div style={{ fontSize: 28, fontWeight: 700, color: "#2D2D2D", marginBottom: 20 }}>{DIRECTOR.name}</div>
                <p style={{ fontSize: 15, color: "#4A4A4A", lineHeight: 2.1, marginBottom: 16 }}>{DIRECTOR.profile}</p>
                <div style={{ backgroundColor: "#FEF3E8", border: "1px solid #F5DCC2", borderRadius: 10, padding: "18px 22px", marginBottom: 22 }}>
                  <p style={{ fontSize: 15, color: "#2D2D2D", lineHeight: 2.0, fontStyle: "italic" }}>「{DIRECTOR.message}」</p>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {DIRECTOR.qualifications.map(q => (
                    <span key={q} style={{ fontSize: 12, color: "#05AF4B", backgroundColor: "#EAF7F1", border: "1px solid #A8E0C4", padding: "5px 14px", borderRadius: 20 }}>{q}</span>
                  ))}
                  {DIRECTOR.hobbies.map(h => (
                    <span key={h} style={{ fontSize: 12, color: "#888", backgroundColor: "#FDFAF6", border: "1px solid #EDE0CC", padding: "5px 14px", borderRadius: 20 }}>趣味：{h}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* スタッフ */}
          <div>
            <span className="sec-label">スタッフ</span>
            <h2 style={{ fontSize: "clamp(20px, 2.6vw, 28px)", fontWeight: 700, color: "#2D2D2D", marginBottom: 36 }}>スタッフ一同</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }} className="grid-5">
              {STAFF.map(s => (
                <div key={s.name} style={{ backgroundColor: "#fff", border: "1px solid #EDE0CC", borderRadius: 10, overflow: "hidden" }}>
                  <div style={{ aspectRatio: "230 / 275", overflow: "hidden", backgroundColor: "#F7F0E6" }}>
                    <img src={s.image} alt={s.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                  </div>
                  <div style={{ padding: "18px 16px" }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#2D2D2D", marginBottom: 4 }}>{s.name}</div>
                    <div style={{ fontSize: 11, color: "#888", marginBottom: 10, lineHeight: 1.6 }}>{s.profile}</div>
                    <p style={{ fontSize: 13, color: "#4A4A4A", lineHeight: 1.9 }}>{s.message}</p>
                  </div>
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
