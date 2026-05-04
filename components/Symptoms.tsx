"use client";

const SYMPTOMS = [
  { name: "交通事故治療", desc: "自賠責保険対応・手続き代行", href: "https://www.hidamari-syoujyaku.com/jiko/" },
  { name: "肩こり", desc: "頭痛・首の痛みも改善", href: "https://www.hidamari-syoujyaku.com/katakori/" },
  { name: "寝違え", desc: "朝起きたら首が動かない", href: "https://www.hidamari-syoujyaku.com/nechigae/" },
  { name: "五十肩", desc: "腕が上がらない・夜の痛み", href: "https://www.hidamari-syoujyaku.com/gojyukata/" },
  { name: "腰痛・ギックリ腰", desc: "慢性腰痛・急性の激痛", href: "https://www.hidamari-syoujyaku.com/youtu/" },
  { name: "ヘルニア・坐骨神経痛", desc: "しびれ・脚の痛み", href: "https://www.hidamari-syoujyaku.com/hernia/" },
  { name: "腱鞘炎", desc: "手首・指の腱の痛み", href: "https://www.hidamari-syoujyaku.com/kensyouen/" },
  { name: "肘の痛み", desc: "テニス肘・野球肘など", href: "https://www.hidamari-syoujyaku.com/hiji/" },
  { name: "成長痛", desc: "オスグッド・子どもの膝痛", href: "https://www.hidamari-syoujyaku.com/osgoot/" },
  { name: "ねんざ", desc: "足首・膝の捻挫", href: "https://www.hidamari-syoujyaku.com/nenza/" },
  { name: "背骨・骨盤矯正", desc: "産後ケア・姿勢改善", href: "https://www.hidamari-syoujyaku.com/kotuban/" },
  { name: "肉離れ", desc: "スポーツ中のケガ", href: "https://www.hidamari-syoujyaku.com/nikubanare/" },
];

export default function Symptoms() {
  return (
    <section id="symptoms" style={{ backgroundColor: "#FFF4E6", padding: "88px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ width: 24, height: 1, backgroundColor: "#E8730A" }} />
            <span style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, letterSpacing: "0.25em" }}>SYMPTOMS & TREATMENT</span>
            <div style={{ width: 24, height: 1, backgroundColor: "#E8730A" }} />
          </div>
          <h2 style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 900, color: "#2D1400", letterSpacing: "-0.02em" }}>症状・施術メニュー</h2>
          <p style={{ fontSize: 13, color: "#7A4010", marginTop: 10 }}>こんなお悩みはひだまり整骨院にご相談ください</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }} className="grid-4">
          {SYMPTOMS.map(s => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{ backgroundColor: "#fff", border: "1px solid #FDDCB5", borderRadius: 6, padding: "20px 16px", textDecoration: "none", display: "block", transition: "border-color 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#E8730A"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#FDDCB5"}>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#2D1400", marginBottom: 6 }}>{s.name}</div>
              <div style={{ fontSize: 11, color: "#7A4010", lineHeight: 1.6 }}>{s.desc}</div>
              <div style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, marginTop: 10 }}>詳しくはこちら →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
