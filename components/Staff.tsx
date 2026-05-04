import Link from "next/link";

const IMG = "https://www.hidamari-syoujyaku.com/image/about-item";

const STAFF = [
  { name: "樫本 真一", profile: "A型・愛媛県出身・平成医療学園卒業", image: `${IMG}/staff8.jpg` },
  { name: "中尾 浩平", profile: "柔道整復師・大阪出身・AB型", image: `${IMG}/staff2.jpg` },
  { name: "中川", profile: "AB型・趣味：音楽鑑賞・DVD", image: `${IMG}/staff3.jpg` },
  { name: "西田", profile: "大阪出身・O型・趣味：買い物", image: `${IMG}/staff7.jpg` },
  { name: "おおふか", profile: "趣味：ゴルフ", image: `${IMG}/staff9.jpg` },
];

export default function Staff() {
  return (
    <section id="staff" style={{ backgroundColor: "#fff", padding: "96px 28px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div className="sec-eyebrow">
              <span style={{ fontSize: 10, color: "#2D6A4F", fontWeight: 700, letterSpacing: "0.2em" }}>STAFF</span>
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, color: "#0F2018", letterSpacing: "-0.02em" }}>スタッフ紹介</h2>
          </div>
          <Link href="/staff/" style={{ fontSize: 13, color: "#2D6A4F", fontWeight: 700, textDecoration: "none" }}>
            詳細を見る →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 1, backgroundColor: "#C5DBCF" }} className="grid-5">
          {STAFF.map(s => (
            <div key={s.name} style={{ backgroundColor: "#fff" }}>
              <div style={{ aspectRatio: "230 / 275", overflow: "hidden", backgroundColor: "#F0F7F3" }}>
                <img src={s.image} alt={s.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div style={{ padding: "16px 14px" }}>
                <div style={{ fontSize: 14, fontWeight: 900, color: "#0F2018", marginBottom: 4 }}>{s.name}</div>
                <div style={{ fontSize: 10, color: "#5A9E7C", lineHeight: 1.6 }}>{s.profile}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
