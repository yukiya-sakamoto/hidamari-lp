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
    <section id="symptoms" style={{ backgroundColor: "#fff", padding: "96px 28px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div className="sec-eyebrow">
              <span style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, letterSpacing: "0.2em" }}>SYMPTOMS & TREATMENT</span>
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, color: "#1C0A00", letterSpacing: "-0.02em" }}>症状・施術メニュー</h2>
          </div>
          <p style={{ fontSize: 12, color: "#7A4010", maxWidth: 320, lineHeight: 1.9 }}>
            こんなお悩みはひだまり整骨院にご相談ください。各種症状のページで詳しい治療法をご確認いただけます。
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, backgroundColor: "#F0DCC0" }} className="grid-4">
          {SYMPTOMS.map(s => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{ backgroundColor: "#FFFAF5", padding: "24px 20px", textDecoration: "none", display: "block", position: "relative" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#FFF4E6"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#FFFAF5"; }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#1C0A00", marginBottom: 6 }}>{s.name}</div>
              <div style={{ fontSize: 11, color: "#7A4010", lineHeight: 1.6 }}>{s.desc}</div>
              <div style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, marginTop: 12 }}>詳細 →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
