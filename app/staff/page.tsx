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

      <main style={{ backgroundColor: "#fff", padding: "80px 28px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* 院長 */}
          <div style={{ marginBottom: 72 }}>
            <div className="sec-eyebrow" style={{ marginBottom: 10 }}>
              <span style={{ fontSize: 10, color: "#2D6A4F", fontWeight: 700, letterSpacing: "0.2em" }}>DIRECTOR</span>
            </div>
            <h2 style={{ fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 900, color: "#0F2018", marginBottom: 40, letterSpacing: "-0.02em" }}>院長</h2>

            <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 48, alignItems: "start" }} className="grid-2">
              <div style={{ overflow: "hidden", border: "1px solid #C5DBCF" }}>
                <img src={DIRECTOR.image} alt={DIRECTOR.name} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              <div>
                <div style={{ fontSize: 11, color: "#2D6A4F", fontWeight: 700, letterSpacing: "0.12em", marginBottom: 4 }}>{DIRECTOR.role}</div>
                <div style={{ fontSize: 32, fontWeight: 900, color: "#0F2018", marginBottom: 20 }}>{DIRECTOR.name}</div>
                <p style={{ fontSize: 13, color: "#3D6A52", lineHeight: 2.0, marginBottom: 14 }}>{DIRECTOR.profile}</p>
                <div style={{ backgroundColor: "#F0F7F3", border: "1px solid #C5DBCF", padding: "18px 20px", marginBottom: 20 }}>
                  <p style={{ fontSize: 13, color: "#0F2018", lineHeight: 2.0, fontStyle: "italic" }}>「{DIRECTOR.message}」</p>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {DIRECTOR.qualifications.map(q => (
                    <span key={q} style={{ fontSize: 11, color: "#2D6A4F", backgroundColor: "#F0F7F3", border: "1px solid #C5DBCF", padding: "4px 12px" }}>{q}</span>
                  ))}
                  {DIRECTOR.hobbies.map(h => (
                    <span key={h} style={{ fontSize: 11, color: "#7A9E8A", backgroundColor: "#fff", border: "1px solid #C5DBCF", padding: "4px 12px" }}>趣味：{h}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* スタッフ */}
          <div>
            <div className="sec-eyebrow" style={{ marginBottom: 10 }}>
              <span style={{ fontSize: 10, color: "#2D6A4F", fontWeight: 700, letterSpacing: "0.2em" }}>STAFF MEMBERS</span>
            </div>
            <h2 style={{ fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 900, color: "#0F2018", marginBottom: 40, letterSpacing: "-0.02em" }}>スタッフ</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 1, backgroundColor: "#C5DBCF" }} className="grid-5">
              {STAFF.map(s => (
                <div key={s.name} style={{ backgroundColor: "#fff" }}>
                  <div style={{ aspectRatio: "230 / 275", overflow: "hidden", backgroundColor: "#F0F7F3" }}>
                    <img src={s.image} alt={s.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                  </div>
                  <div style={{ padding: "20px 16px" }}>
                    <div style={{ fontSize: 15, fontWeight: 900, color: "#0F2018", marginBottom: 4 }}>{s.name}</div>
                    <div style={{ fontSize: 10, color: "#5A9E7C", marginBottom: 10, lineHeight: 1.6 }}>{s.profile}</div>
                    <p style={{ fontSize: 12, color: "#3D6A52", lineHeight: 1.9 }}>{s.message}</p>
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
